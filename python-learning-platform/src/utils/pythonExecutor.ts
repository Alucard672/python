 // Python代码执行器 - 使用模拟器版本
import { loadPyodide } from 'pyodide'
export class PythonExecutor {
  private initialized = false
  // Pyodide实例（可选）
  private pyodide: any = null

  async initialize(): Promise<void> {
    if (this.initialized) return

    // 多源回退加载 Pyodide（优先本地，其次多个 CDN）
    // 根据部署的 BASE_URL 构造本地 Pyodide 目录，并支持环境开关强制本地
    const baseUrl: string = (typeof import !== 'undefined' && (import.meta as any)?.env?.BASE_URL) || '/'
    const localBase = `${baseUrl.replace(/\\/+$/, '')}/pyodide/`
    const forceLocal = (typeof import !== 'undefined' && (import.meta as any)?.env?.VITE_PYODIDE_LOCAL) === 'true'

    // CDN 回退列表（固定到 0.28.3 full/ 路径）
    const cdnCandidates = [
      'https://cdn.jsdelivr.net/pyodide/v0.28.3/full/',
      'https://unpkg.com/pyodide@0.28.3/full/'
    ]

    // 预检本地资源是否存在，避免请求 404 返回 HTML 造成二次错误
    const localAvailable = async (): Promise<boolean> => {
      try {
        const res = await fetch(`${localBase}pyodide.json`, { method: 'HEAD' })
        return res.ok
      } catch {
        return false
      }
    }

    const tryLoad = async (url: string) => {
      try {
        this.pyodide = await loadPyodide({ indexURL: url })
        console.log('Pyodide 已初始化，indexURL =', url)
        return true
      } catch (e) {
        console.warn('Pyodide 加载失败，indexURL =', url, e)
        this.pyodide = null
        return false
      }
    }

    // 加载顺序：若本地可用或被强制，则先本地，否则直接走 CDN 列表
    let loaded = false
    if (forceLocal || await localAvailable()) {
      loaded = await tryLoad(localBase)
    }
    if (!loaded) {
      for (const url of cdnCandidates) {
        loaded = await tryLoad(url)
        if (loaded) break
      }
    }

    if (!this.pyodide) {
      console.warn('所有 Pyodide 源均加载失败，回退到模拟器')
    }

    this.initialized = true
  }

  async runCode(code: string): Promise<{
    output: string
    error?: string
    type: 'success' | 'error'
  }> {
    if (!this.initialized) {
      await this.initialize()
    }

    try {
      // 若 Pyodide 可用，优先使用完整 Python 运行
      if (this.pyodide) {
        return await this.runWithPyodide(code)
      }
      // 否则使用现有模拟器
      return await this.runWithSimulator(code)
    } catch (error) {
      return {
        output: '',
        error: String(error),
        type: 'error'
      }
    }
  }



  // 使用 Pyodide 在浏览器内运行完整 Python
  private async runWithPyodide(code: string): Promise<{
    output: string
    error?: string
    type: 'success' | 'error'
  }> {
    try {
      // 将用户代码注入到 exec 中，并用 StringIO 捕获标准输出与错误
      const py = `
import sys, io, traceback
_buffer = io.StringIO()
sys.stdout = _buffer
sys.stderr = _buffer
_output = ''
_error = ''

try:
    # 将用户代码作为字符串执行
    _code = ${JSON.stringify(code)}
    exec(_code, globals())
except Exception as e:
    traceback.print_exc()
finally:
    _output = _buffer.getvalue()
`
      await this.pyodide.runPythonAsync(py)
      // 直接在 Python 端将 _output 转为字符串，避免 JS 侧处理 PyProxy 或 undefined
      const output = this.pyodide.runPython('str(_output)') as string
      // 若有错误堆栈也会被打印到输出中，这里统一作为成功输出返回
      return { output: (output && typeof output === 'string') ? output : '代码执行完成', type: 'success' as const }
    } catch (e) {
      return { output: '', error: String(e), type: 'error' as const }
    }
  }

  private async runWithSimulator(code: string): Promise<{
    output: string
    error?: string
    type: 'success' | 'error'
  }> {
    // 简单的Python代码模拟器
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const result = this.simulatePythonCode(code)
          resolve(result)
        } catch (error) {
          resolve({
            output: '',
            error: String(error),
            type: 'error'
          })
        }
      }, 500) // 模拟执行时间
    })
  }

  private simulatePythonCode(code: string): { output: string; error?: string; type: 'success' | 'error' } {
    const lines = code.split('\n')
    const outputs: string[] = []
    const variables: { [key: string]: any } = {}

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i] ?? ''
      const trimmedLine = line.trim()
      
      // 跳过注释和空行
      if (!trimmedLine || trimmedLine.startsWith('#')) {
        continue
      }

      try {
        // 处理print语句
        if (trimmedLine.startsWith('print(') && trimmedLine.endsWith(')')) {
          const content = trimmedLine.substring(6, trimmedLine.length - 1).trim()
          
          // Heuristic to check if it's a function call or multiple arguments
          const isSingleFunctionCall = /^\w+\(.*\)$/.test(content) && content.indexOf(',') > content.indexOf('(');

          if (content.includes(',') && !isSingleFunctionCall) {
              // Handles print(a, b, "hello")
              const args = content.split(',').map(arg => arg.trim());
              const results = args.map(arg => {
                try {
                  return String(this.evaluateExpression(arg, variables));
                } catch (e) {
                  return `<Error: ${arg}>`;
                }
              });
              outputs.push(results.join(' '));
          } else {
              // Handles print(a) or print(max(a,b))
              const result = this.evaluateExpression(content, variables);
              outputs.push(String(result));
          }
        }
        // 处理变量赋值
        else if (trimmedLine.includes('=') && !trimmedLine.includes('==') && !trimmedLine.includes('!=') && !trimmedLine.includes('<=') && !trimmedLine.includes('>=')) {
          const equalIndex = trimmedLine.indexOf('=')
          const varName = trimmedLine.substring(0, equalIndex).trim()
          const varValue = trimmedLine.substring(equalIndex + 1).trim()
          
          if (varName && varValue) {
            variables[varName] = this.evaluateExpression(varValue, variables)
          }
        }
        // 处理简单的for循环
        else if (trimmedLine.startsWith('for ') && trimmedLine.includes('range(')) {
          const forMatch = trimmedLine.match(/for\s+(\w+)\s+in\s+range\((\d+)\):/)
          if (forMatch && forMatch[1] && forMatch[2] && i + 1 < lines.length) {
            const varName = forMatch[1]!
            const rangeEnd = parseInt(forMatch[2]!, 10)
            
            // 查找循环体（假设只有一行缩进）
            let j = i + 1
            const loopBody = []
            while (j < lines.length && (((lines[j] ?? '')).startsWith('    ') || ((lines[j] ?? '')).startsWith('\t'))) {
              loopBody.push((lines[j] ?? '').trim())
              j++
            }
            
            // 执行循环
            for (let k = 0; k < rangeEnd; k++) {
              variables[varName] = k
              for (const bodyLine of loopBody) {
                if (bodyLine.includes('print(')) {
                  const printMatch = bodyLine.match(/print\((.*?)\)/)
                  if (printMatch && typeof printMatch[1] === 'string') {
                    const content = (printMatch[1] ?? '').trim()
                    try {
                      const result = this.evaluateExpression(content, variables)
                      outputs.push(String(result))
                    } catch {
                      outputs.push(content)
                    }
                  }
                }
              }
            }
            
            i = j - 1 // 跳过循环体
          }
        }
        // 处理if-elif-else 整链解析：只执行第一个匹配分支，并跳过整条链
        else if (trimmedLine.startsWith('if ')) {
          // 收集分支链
          type Branch = { kind: 'if' | 'elif' | 'else', condition?: string, body: string[] }
          const branches: Branch[] = []
          let cursor = i

          // 解析头部和各自的代码块
          while (cursor < lines.length) {
            const header = (lines[cursor] ?? '').trim()
            let kind: Branch['kind'] | null = null
            let cond = undefined as string | undefined

            if (header.startsWith('if ')) {
              const m = header.match(/if\s+(.+):/)
              if (m) { kind = 'if'; cond = (m[1] ?? '') }
            } else if (header.startsWith('elif ')) {
              const m = header.match(/elif\s+(.+):/)
              if (m) { kind = 'elif'; cond = (m[1] ?? '') }
            } else if (header.startsWith('else:')) {
              kind = 'else'
            } else {
              break
            }

            if (!kind) break

            // 收集缩进体
            let k = cursor + 1
            const body: string[] = []
            while (k < lines.length && (((lines[k] ?? '')).startsWith('    ') || ((lines[k] ?? '')).startsWith('\t'))) {
              body.push((lines[k] ?? '').trim())
              k++
            }

            branches.push({ kind, condition: cond, body })
            cursor = k

            // 如果下一个不是 elif/else，结束解析
            if (cursor >= lines.length) break
            const nextHeader = (lines[cursor] ?? '').trim()
            if (!(nextHeader.startsWith('elif ') || nextHeader.startsWith('else:'))) {
              break
            }
          }

          // 选择并执行第一个匹配分支
          let executed = false
          for (const br of branches) {
            let ok = false
            if (br.kind === 'else') {
              ok = true
            } else if (br.condition) {
              try { ok = this.evaluateCondition(br.condition, variables) } catch { ok = false }
            }
            if (ok) {
              // 执行体
              for (const bodyLine of br.body) {
                const t = bodyLine.trim()
                if (t.startsWith('print(') && t.endsWith(')')) {
                  const content = t.substring(6, t.length - 1).trim()
                  try { outputs.push(String(this.evaluateExpression(content, variables))) } catch (e) { outputs.push(`<Error: ${e}>`) }
                } else if (t.includes('=') && !t.includes('==') && !t.includes('!=') && !t.includes('<=') && !t.includes('>=')) {
                  const idx = t.indexOf('=')
                  const name = t.substring(0, idx).trim()
                  const val = t.substring(idx + 1).trim()
                  try { if (name) { variables[name] = this.evaluateExpression(val, variables) } } catch {}
                }
              }
              executed = true
              break
            }
          }

          // 将 i 跳到整条分支链的末尾（跳过所有头部与体）
          i = cursor - 1
        }
      } catch (error) {
        return {
          output: outputs.join('\n'),
          error: `第${i + 1}行错误: ${error}`,
          type: 'error' as const
        }
      }
    }

    return {
      output: outputs.length > 0 ? outputs.join('\n') : '代码执行完成',
      type: 'success' as const
    }
  }

  private evaluateCondition(condition: string, variables: { [key: string]: any }): boolean {
    // 简单的条件判断
    if (condition.includes('==')) {
      const m = condition.match(/^(.+)==(.+)$/)
      const left = (m?.[1] ?? '').trim()
      const right = (m?.[2] ?? '').trim()
      const leftVal = this.evaluateExpression(left, variables)
      const rightVal = this.evaluateExpression(right, variables)
      return leftVal == rightVal
    }
    
    if (condition.includes('!=')) {
      const m = condition.match(/^(.+)!=(.+)$/)
      const left = (m?.[1] ?? '').trim()
      const right = (m?.[2] ?? '').trim()
      const leftVal = this.evaluateExpression(left, variables)
      const rightVal = this.evaluateExpression(right, variables)
      return leftVal != rightVal
    }
    
    if (condition.includes('>=')) {
      const m = condition.match(/^(.+)>=(.+)$/)
      const left = (m?.[1] ?? '').trim()
      const right = (m?.[2] ?? '').trim()
      const leftVal = Number(String(this.evaluateExpression(left, variables)))
      const rightVal = Number(String(this.evaluateExpression(right, variables)))
      return leftVal >= rightVal
    }
    
    if (condition.includes('<=')) {
      const m = condition.match(/^(.+)<=(.+)$/)
      const left = (m?.[1] ?? '').trim()
      const right = (m?.[2] ?? '').trim()
      const leftVal = Number(String(this.evaluateExpression(left, variables)))
      const rightVal = Number(String(this.evaluateExpression(right, variables)))
      return leftVal <= rightVal
    }
    
    if (condition.includes('>')) {
      const m = condition.match(/^(.+)>(.+)$/)
      const left = (m?.[1] ?? '').trim()
      const right = (m?.[2] ?? '').trim()
      const leftVal = Number(String(this.evaluateExpression(left, variables)))
      const rightVal = Number(String(this.evaluateExpression(right, variables)))
      return leftVal > rightVal
    }
    
    if (condition.includes('<')) {
      const m = condition.match(/^(.+)<(.+)$/)
      const left = (m?.[1] ?? '').trim()
      const right = (m?.[2] ?? '').trim()
      const leftVal = Number(String(this.evaluateExpression(left, variables)))
      const rightVal = Number(String(this.evaluateExpression(right, variables)))
      return leftVal < rightVal
    }
    
    // 处理变量作为条件
    const value = this.evaluateExpression(condition, variables)
    return Boolean(value)
  }

  private evaluateExpression(expr: string, variables: { [key: string]: any }): any {
    expr = expr.trim()

    // Handle function calls like max(), min(), len()
    const funcCallMatch = expr.match(/^(\w+)\((.*)\)$/);
    if (funcCallMatch) {
        const funcName = funcCallMatch[1] ?? '';
        const argString = funcCallMatch[2] ?? '';
        
        const args = argString ? argString.split(',').map(a => a.trim()) : [];
        const evaluatedArgs = args.map(arg => this.evaluateExpression(arg, variables));

        switch (funcName) {
            case 'max':
                return Math.max(...evaluatedArgs.map(Number));
            case 'min':
                return Math.min(...evaluatedArgs.map(Number));
            case 'len':
                if (evaluatedArgs.length === 1 && (typeof evaluatedArgs[0] === 'string' || Array.isArray(evaluatedArgs[0]))) {
                    return evaluatedArgs[0].length;
                }
                throw new Error('len() takes exactly one argument (string or array)');
            default:
                break;
        }
    }

    // Handle logical operators (and, or)
    const logicalMatch = expr.match(/^(.+)\s+(and|or)\s+(.+)$/);
    if (logicalMatch) {
      const left = (logicalMatch[1] ?? '').trim();
      const operator = logicalMatch[2] ?? '';
      const right = (logicalMatch[3] ?? '').trim();
      
      const leftValue = this.evaluateExpression(left, variables);
      const rightValue = this.evaluateExpression(right, variables);
      
      switch (operator) {
        case 'and':
          return leftValue && rightValue;
        case 'or':
          return leftValue || rightValue;
        default:
          break;
      }
    }

    // 布尔字面量
    if (expr === 'True') return true
    if (expr === 'False') return false

    // Handle literals and variables
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1)
    }
    if (/^-?\d+$/.test(expr)) {
      return parseInt(expr, 10)
    }
    if (/^-?\d+\.\d+$/.test(expr)) {
      return parseFloat(expr)
    }
    if (variables[expr] !== undefined) {
      return variables[expr]
    }

    // Handle arithmetic expressions
    try {
      let processedExpr = expr;
      for (const [varName, varValue] of Object.entries(variables)) {
        const regex = new RegExp(`\\b${varName}\\b`, 'g');
        processedExpr = processedExpr.replace(regex, String(varValue));
      }
      if (/^[\d\s\+\-\*\/\(\)\.\eE]+$/.test(processedExpr)) {
        return Function(`"use strict"; return (${processedExpr})`)();
      }
    } catch {
      // Fall through
    }
    
    throw new Error(`Could not evaluate expression: ${expr}`);
  }
}

// 单例模式
export const pythonExecutor = new PythonExecutor()