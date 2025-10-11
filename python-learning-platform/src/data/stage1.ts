// 第1阶段 - Python基础入门
import type { IStage } from '../types/Stage'

export const stage1: IStage = {
  id: 1,
  title: '第1阶段 · Python基础入门',
  description: '掌握Python基础语法和编程思维',
  lessons: [
    {
      id: 'lesson1-1',
      title: '变量入门课：给数据"贴标签"',
      objective: '理解变量概念，掌握变量命名规则，学会变量基本使用，完成基础变量操作练习',
      analogy: '想象你有一个盒子，里面装着苹果，你给盒子贴上标签"苹果盒"，以后想拿苹果就直接找这个盒子。',
      codeExample: `age = 5
name = "小明"
print(age, name)`,
      originalExercises: [
        {
          id: 'ex1-1-1',
          title: '创建年龄变量',
          description: '创建一个变量记录你的年龄并打印',
          template: '# 创建一个变量记录你的年龄\nmy_age = \nprint(my_age)',
          solution: 'my_age = 18\nprint(my_age)',
          type: 'basic',
          difficulty: 'easy',
          hints: ['直接给变量赋值再打印', '变量名建议使用小写下划线风格'],
          judge: { mode: 'stdout', expected: '18\n' }
        },
        {
          id: 'ex1-1-2',
          title: '计算面积',
          description: '创建变量 width=10，height=5，计算面积',
          template: '# 创建宽度和高度变量，计算面积\nwidth = \nheight = \narea = \nprint(area)',
          solution: 'width = 10\nheight = 5\narea = width * height\nprint(area)',
          type: 'basic',
          difficulty: 'easy',
          hints: ['先定义 width 和 height', '面积=宽×高'],
          judge: { mode: 'stdout', expected: '50\n' }
        },
        {
          id: 'ex1-1-3',
          title: '变量交换（不使用第三变量）',
          description: '将两个变量的值交换，要求不引入新的第三个变量',
          template: `# 变量交换\na = 3\nb = 7\n# 在此处完成交换\na, b = \nprint(a, b)`,
          solution: `a = 3\nb = 7\na, b = b, a\nprint(a, b)`,
          type: 'basic',
          difficulty: 'easy',
          hints: ['使用序列解包 a, b = b, a 完成交换', '无需第三变量'],
          judge: { mode: 'stdout', expected: '7 3\n' }
        },
        {
          id: 'ex1-1-4',
          title: '常量风格与命名约定',
          description: '用全大写变量名模拟常量（如 TAX_RATE），打印并说明其用途',
          template: `# 常量命名约定\nTAX_RATE = \nPRICE = 100\nprint("含税价:", PRICE * (1 + TAX_RATE))`,
          solution: `TAX_RATE = 0.1\nPRICE = 100\nprint("含税价:", PRICE * (1 + TAX_RATE))`,
          type: 'basic',
          difficulty: 'easy',
          hints: ['社区约定常量用全大写', '含税价=PRICE*(1+TAX_RATE)'],
          judge: { mode: 'stdout', expected: '含税价: 110.00000000000001\n' }
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-1-adv-1',
          title: '成本计算器（变量综合运用）',
          description: '给定单价、数量、折扣率与税率，输出总价（含税后）。要求：先计算折扣价，再计算税后价，格式化到小数点后两位。',
          template: `# 成本计算器\nunit_price = 25.5\nquantity = 4\ndiscount = 0.2   # 8折\ntax_rate = 0.06  # 税率\n# TODO: 计算折扣后价与含税总价\ndiscounted = \ntotal = \nprint(f"总价: {total:.2f}")`,
          solution: `unit_price = 25.5\nquantity = 4\ndiscount = 0.2\ntax_rate = 0.06\ndiscounted = unit_price * quantity * (1 - discount)\ntotal = discounted * (1 + tax_rate)\nprint(f"总价: {total:.2f}")`,
          type: 'advanced',
          difficulty: 'medium',
          hints: ['分两步：先算折扣后金额，再乘(1+税率)', 'f-string 控制两位小数'],
          judge: { mode: 'stdout', expected: '总价: 81.60\n' }
        },
        {
          id: 'ex1-1-adv-2',
          title: '模板渲染（占位符替换）',
          description: '将变量渲染到句子模板中，例如 "你好，{name}，你今年{age}岁"。不使用 f-string，练习字符串 + 与 str()。',
          template: `# 模板渲染\nname = "小明"\nage = 18\ntemplate = "你好，{name}，你今年{age}岁"\n# TODO: 生成 result\nresult = \nprint(result)`,
          solution: `name = "小明"\nage = 18\ntemplate = "你好，{name}，你今年{age}岁"\nresult = "你好，" + name + "，你今年" + str(age) + "岁"\nprint(result)`,
          type: 'advanced',
          difficulty: 'medium',
          hints: ['不使用 f-string，使用 + 与 str()', '注意标点与空格位置'],
          judge: { mode: 'stdout', expected: '你好，小明，你今年18岁\n' }
        }
      ],
      selfQuiz: [
        { id: 'q1-1', type: 'single', question: '以下哪个是合法的变量名？', options: ['1name','name_1','name-1','class'], answer: 'name_1', explanation: '变量名不能以数字开头，不能包含连字符；class 是关键字' },
        { id: 'q1-2', type: 'single', question: '表达式 a, b = b, a 的作用是？', options: ['将 a 设为 0','交换 a 与 b','将 b 设为 a+b','无意义的语句'], answer: '交换 a 与 b', explanation: '序列解包可直接交换' },
        { id: 'q1-3', type: 'judge', question: 'Python 约定常量使用全大写命名。', answer: true, explanation: '社区约定（非强制）' },
        { id: 'q1-4', type: 'single', question: 'TAX=0.1; PRICE=100; PRICE*(1+TAX)=？', options: ['100','110','10','100.1'], answer: '110', explanation: '100*(1+0.1)=110' },
        { id: 'q1-5', type: 'judge', question: '打印未定义变量会输出空字符串。', answer: false, explanation: '会抛出 NameError' }
      ],
      summary: '变量就是给数据起的名字，用 = 赋值，命名需符合规则'
    },
    {
      id: 'lesson1-2',
      title: '数据类型基础课：数字、文字与真假',
      objective: '掌握 int, float, str, bool，学会类型转换，完成基础计算与逻辑判断练习',
      analogy: '数字：苹果数量；小数：苹果重量；字符串：写在纸上的名字；布尔：开关灯',
      codeExample: `apple_count = 5
apple_weight = 1.75
total_weight = apple_count * apple_weight
print(total_weight)

name = "小明"
greet = "你好，" + name
print(greet)

is_adult = True
print(is_adult)

age_str = "18"
age_int = int(age_str)
print(age_int + 2)`,
      originalExercises: [
        {
          id: 'ex1-2-1',
          title: '身高体重',
          description: '定义身高和体重变量并打印',
          template: '# 定义身高和体重\nheight = \nweight = \nprint(height, weight)',
          solution: 'height = 1.75\nweight = 65\nprint(height, weight)',
          type: 'basic',
          difficulty: 'easy',
          hints: ['分别给 height 与 weight 赋值', 'print 可以打印多个值'],
          judge: { mode: 'stdout', expected: '1.75 65\n' }
        },
        {
          id: 'ex1-2-2',
          title: '四则运算',
          description: '两数字变量计算和、差、积、商',
          template: '# 四则运算\na = 10\nb = 5\nprint()  # 在括号内填入计算表达式',
          solution: 'a = 10\nb = 5\nprint(a+b, a-b, a*b, a/b)',
          type: 'basic',
          difficulty: 'easy',
          hints: ['和/差/积/商分别是 + - * /', '按顺序打印四个结果'],
          judge: { mode: 'stdout', expected: '15 5 50 2.0\n' }
        },
        {
          id: 'ex1-2-3',
          title: '拼接字符串',
          description: '拼接两个字符串输出完整句子',
          template: '# 字符串拼接\nstr1 = "你好，"\nstr2 = "Python"\nprint()',
          solution: 'str1 = "你好，"\nstr2 = "Python"\nprint(str1 + str2)',
          type: 'basic',
          difficulty: 'easy',
          hints: ['使用 + 进行字符串拼接', '注意不要丢失中文逗号或空格'],
          judge: { mode: 'stdout', expected: '你好，Python\n' }
        },
        {
          id: 'ex1-2-4',
          title: '判断大小',
          description: '输入数字判断是否大于10',
          template: '# 判断数字大小\nnumber = 12\nprint()',
          solution: 'number = 12\nprint(number > 10)',
          type: 'basic',
          difficulty: 'easy',
          hints: ['比较运算符 > 返回布尔值', '直接 print 表达式结果'],
          judge: { mode: 'stdout', expected: 'True\n' }
        },
        {
          id: 'ex1-2-5',
          title: '四舍五入与格式化输出',
          description: '给定一个浮点数，输出保留2位小数的字符串',
          template: '# 浮点格式化\nvalue = 3.14159\n# 输出 3.14\na = \nprint(f"{a:.2f}")',
          solution: 'value = 3.14159\na = value\nprint(f"{a:.2f}")',
          type: 'basic',
          difficulty: 'easy',
          hints: ['f-string 中用 :.2f 保留两位', '也可用 round(value, 2)'],
          judge: { mode: 'stdout', expected: '3.14\n' }
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-2-adv-1',
          title: '加权平均分计算器',
          description: '已知语文/数学/英语分数及对应权重，计算加权平均分，输出到小数点后1位。',
          template: `# 加权平均\nchi, math, eng = 85, 92, 78\nw1, w2, w3 = 0.3, 0.4, 0.3\n# TODO: 计算加权平均\navg = \nprint(f"加权平均分: {avg:.1f}")`,
          solution: `chi, math, eng = 85, 92, 78\nw1, w2, w3 = 0.3, 0.4, 0.3\navg = chi*w1 + math*w2 + eng*w3\nprint(f"加权平均分: {avg:.1f}")`,
          type: 'advanced',
          difficulty: 'medium',
          hints: ['线性组合：sum(分数×权重)', 'f-string :.1f 保留1位小数'],
          judge: { mode: 'stdout', expected: '加权平均分: 85.7\n' }
        },
        {
          id: 'ex1-2-adv-2',
          title: '输入清洗与类型安全',
          description: '给定可能包含空格和非数字字符的字符串，提取其中的数字并转换为 int；若无法转换则输出 0。',
          template: `# 输入清洗\nraw = "  年龄:  18 岁 "\n# 只保留数字\nclean = ""\nfor ch in raw:\n    if ch.isdigit():\n        clean += ch\n# TODO: 转换为数字\nage = \nprint(age)`,
          solution: `raw = "  年龄:  18 岁 "\nclean = ""\nfor ch in raw:\n    if ch.isdigit():\n        clean += ch\nage = int(clean) if clean else 0\nprint(age)`,
          type: 'advanced',
          difficulty: 'medium',
          hints: ['用 isdigit 过滤数字字符', '无数字时返回 0 以避免异常'],
          judge: { mode: 'stdout', expected: '18\n' }
        }
      ],
      selfQuiz: [
        { id: 'q1-2-1', type: 'single', question: '"Python"[:2] 的结果是？', options: ['Py','Pyt','on','thon'], answer: 'Py', explanation: '切片左闭右开，[:2] 取前两个字符' },
        { id: 'q1-2-2', type: 'judge', question: '"abc".upper() == "ABC"', answer: true, explanation: 'upper 将小写转为大写' },
        { id: 'q1-2-3', type: 'single', question: '"a b  c".split() 的结果？', options: ["['a','b','c']", "['a','b','','c']", "['a',' b',' c']"], answer: "['a','b','c']", explanation: 'split() 默认按任意空白分割并折叠' },
        { id: 'q1-2-4', type: 'single', question: '将 "  Hi  " 标准化为 "hi" 的常用链式方法是？', options: ['lower().strip()','strip().upper()','replace().lower()'], answer: 'lower().strip()', explanation: '先去空格再统一小写' },
        { id: 'q1-2-5', type: 'judge', question: '布尔值 True/False 也属于一种数据类型。', answer: true, explanation: 'bool 是内置基本类型之一' }
      ],
      summary: '掌握四种基础数据类型和类型转换，布尔值用于逻辑判断'
    },
    {
      id: 'lesson1-3',
      title: '运算符与表达式',
      objective: '理解算术运算符、比较运算符、逻辑运算符，能用表达式解决实际问题',
      analogy: '算术运算：算账或计算水果总价；比较运算：判断谁更高/重；逻辑运算：同时满足多个条件，如"高且瘦"',
      codeExample: `a = 10
b = 3
print(a + b, a - b, a * b, a / b, a // b, a % b, a ** b)
print(a > b, a == b, a != b)
print((a > 5) and (b < 5))`,
      originalExercises: [
        {
          id: 'ex1-3-1',
          title: '购物车总价',
          description: '计算购物车总价',
          template: '# 计算购物车总价\nprice1 = 50\nprice2 = 30\ntotal = \nprint(total)',
          solution: 'price1 = 50\nprice2 = 30\ntotal = price1 + price2\nprint(total)',
          type: 'basic'
        },
        {
          id: 'ex1-3-2',
          title: '比较大小',
          description: '判断两个数字大小并输出较大者',
          template: '# 比较两个数字大小\na = 10\nb = 20\n# 输出较大的数字\nprint()',
          solution: 'a = 10\nb = 20\nprint(max(a, b))',
          type: 'basic'
        },
        {
          id: 'ex1-3-3',
          title: '判断条件',
          description: '输入两个数字判断是否都大于10',
          template: '# 判断两个数字是否都大于10\nx = 12\ny = 15\nprint()',
          solution: 'x = 12\ny = 15\nprint(x > 10 and y > 10)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-3-adv-1',
          title: '分段计费（表达式与条件综合）',
          description: '根据用电量计算电费：0-100度按0.5元/度，101-300度按0.7元/度，300以上按1.0元/度。输出总价，保留2位小数。',
          template: `# 分段计费\nusage = 265\nprice = 0\n# TODO: 计算 price\nif usage <= 100:\n    price = usage * 0.5\nelif usage <= 300:\n    price = 100 * 0.5 + (usage - 100) * 0.7\nelse:\n    price = 100 * 0.5 + 200 * 0.7 + (usage - 300) * 1.0\nprint(f"电费: {price:.2f} 元")`,
          solution: `usage = 265\nif usage <= 100:\n    price = usage * 0.5\nelif usage <= 300:\n    price = 100 * 0.5 + (usage - 100) * 0.7\nelse:\n    price = 100 * 0.5 + 200 * 0.7 + (usage - 300) * 1.0\nprint(f"电费: {price:.2f} 元")`,
          type: 'advanced'
        },
        {
          id: 'ex1-3-adv-2',
          title: '折扣与满减组合',
          description: '购物车总价应用折扣和满减：总价满100减20，否则不减；再统一9折。输出最终总价。',
          template: `# 折扣与满减\nitems = [25, 35, 15, 40]\nsubtotal = sum(items)\n# 满减\nif subtotal >= 100:\n    subtotal -= 20\n# 统一折扣\ntotal = subtotal * 0.9\nprint(f"最终总价: {total:.2f} 元")`,
          solution: `items = [25, 35, 15, 40]\nsubtotal = sum(items)\nif subtotal >= 100:\n    subtotal -= 20\ntotal = subtotal * 0.9\nprint(f"最终总价: {total:.2f} 元")`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q1-3-1', type: 'single', question: '10 // 3 的结果是？', options: ['3','3.33','余数1'], answer: '3', explanation: '// 是整除，结果为整数部分' },
        { id: 'q1-3-2', type: 'single', question: '2 ** 3 表示？', options: ['2的3倍','2的3次方','3的2次方'], answer: '2的3次方', explanation: '** 为幂运算' },
        { id: 'q1-3-3', type: 'judge', question: '(a > 1) and (b < 5) 同时为真时表达式为 True', answer: true, explanation: 'and 需要两个条件都成立' },
        { id: 'q1-3-4', type: 'single', question: '下列比较为 True 的是？', options: ['3 > 5','3 == 3','3 != 3'], answer: '3 == 3', explanation: '== 判断相等' },
        { id: 'q1-3-5', type: 'judge', question: 'a/b 与 a//b 的结果总是相同', answer: false, explanation: '/ 为浮点除法，// 为向下取整的整除' }
      ],
      summary: '运算符用于计算和判断，表达式是操作符和变量的组合'
    },
    {
      id: 'lesson1-4',
      title: '条件判断：让程序会思考',
      objective: '掌握 if/elif/else 使用，能写简单分支逻辑',
      analogy: '如果今天下雨就带伞，否则不带；年龄>=18就可以买票，否则不行',
      codeExample: `age = 20
if age >= 18:
    print("可以购买电影票")
else:
    print("未满18岁，禁止购买")

score = 85
if score >= 90:
    grade = 'A'
elif score >= 60:
    grade = 'B'
else:
    grade = 'C'
print(grade)`,
      originalExercises: [
        {
          id: 'ex1-4-1',
          title: '成绩等级',
          description: '输入成绩并输出等级',
          template: '# 成绩等级判断\nscore = 75\nif score >= 90:\n    grade = \nelif score >= 60:\n    grade = \nelse:\n    grade = \nprint(grade)',
          solution: 'score = 75\nif score >= 90:\n    grade = "A"\nelif score >= 60:\n    grade = "B"\nelse:\n    grade = "C"\nprint(grade)',
          type: 'basic'
        },
        {
          id: 'ex1-4-2',
          title: '奇偶判断',
          description: '输入数字判断奇偶',
          template: '# 判断奇偶数\nnum = 8\nif :\n    print("偶数")\nelse:\n    print("奇数")',
          solution: 'num = 8\nif num % 2 == 0:\n    print("偶数")\nelse:\n    print("奇数")',
          type: 'basic'
        },
        {
          id: 'ex1-4-3',
          title: '嵌套条件重构',
          description: '将嵌套 if/else 的年龄分级逻辑重构为 if/elif/else',
          template: `# 年龄分级(重构)\nage = 23\n# 目标: 0-12 儿童; 13-17 青少年; 18-59 成人; 60+ 老年\n# 请使用 if/elif/else 输出分级\n`,
          solution: `age = 23\nif age <= 12:\n    print("儿童")\nelif age <= 17:\n    print("青少年")\nelif age <= 59:\n    print("成人")\nelse:\n    print("老年")`,
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-4-adv-1',
          title: '登录校验（用户名/密码）',
          description: '模拟登录：给定 username 与 password，正确则输出 "登录成功"，否则输出 "登录失败"；要求区分空密码与错误密码两种提示。',
          template: `# 登录校验\nusername = "admin"\npassword = "123456"\ninput_user = "admin"\ninput_pass = "123456"\n# TODO: 输出不同提示\n`,
          solution: `username = "admin"\npassword = "123456"\ninput_user = "admin"\ninput_pass = "123456"\nif input_user == username:\n    if not input_pass:\n        print("登录失败：密码为空")\n    elif input_pass == password:\n        print("登录成功")\n    else:\n        print("登录失败：密码错误")\nelse:\n    print("登录失败：用户名不存在")`,
          type: 'advanced'
        },
        {
          id: 'ex1-4-adv-2',
          title: '门票规则（年龄+学生证）',
          description: '门票：未成年人免费；成年人持学生证半价；老年人(≥65)免费；否则全价。输出票价或免费。',
          template: `# 门票规则\nage = 20\nis_student = True\nprice = 100\n# TODO: 输出票价或免费\n`,
          solution: `age = 20\nis_student = True\nprice = 100\nif age < 18:\n    print("免费")\nelif age >= 65:\n    print("免费")\nelif is_student:\n    print(f"半价: {price*0.5} 元")\nelse:\n    print(f"全价: {price} 元")`,
          type: 'advanced'
        }
      ],
      summary: '条件判断让程序根据不同情况执行不同代码块'
    },
    {
      id: 'lesson1-5',
      title: '循环基础：重复的力量',
      objective: '掌握 for 循环和 while 循环，能用循环处理重复任务',
      analogy: '每天浇花10次 → for循环；直到水桶空 → while循环',
      codeExample: `for i in range(1, 6):
    print(f"第{i}次问好")

count = 5
while count > 0:
    print("倒计时", count)
    count -= 1`,
      originalExercises: [
        {
          id: 'ex1-5-1',
          title: '输出偶数',
          description: '输出1~100的偶数',
          template: '# 输出1到100的偶数\nfor i in range():\n    print(i)',
          solution: 'for i in range(2, 101, 2):\n    print(i)',
          type: 'basic'
        },
        {
          id: 'ex1-5-2',
          title: '九九乘法表',
          description: '打印九九乘法表',
          template: '# 九九乘法表\nfor i in range():\n    for j in range():\n        print(f"{i}*{j}={i*j}", end=" ")\n    print()',
          solution: 'for i in range(1, 10):\n    for j in range(1, i+1):\n        print(f"{i}*{j}={i*j}", end=" ")\n    print()',
          type: 'basic'
        },
        {
          id: 'ex1-5-3',
          title: '求 1~n 的和',
          description: '输入 n，输出 1 到 n 的累加和',
          template: '# 累加和\nn = 10\ns = 0\n# TODO: 计算 s\nprint(s)',
          solution: 'n = 10\ns = 0\nfor i in range(1, n+1):\n    s += i\nprint(s)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-5-adv-1',
          title: '范围质数',
          description: '输出 2~N 的所有质数（试除法），并统计数量',
          template: `# 质数\nN = 50\ncount = 0\nfor x in range(2, N+1):\n    is_prime = True\n    for d in range(2, int(x**0.5)+1):\n        if x % d == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(x, end=" ")\n        count += 1\nprint("\\n数量:", count)`,
          solution: `N = 50\ncount = 0\nfor x in range(2, N+1):\n    is_prime = True\n    for d in range(2, int(x**0.5)+1):\n        if x % d == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(x, end=" ")\n        count += 1\nprint("\\n数量:", count)`,
          type: 'advanced'
        },
        {
          id: 'ex1-5-adv-2',
          title: '图案打印（菱形）',
          description: '使用循环打印一个奇数行的菱形图案（例如高度 5）',
          template: `# 菱形\nh = 5\n# TODO: 打印菱形\nfor i in range(1, h+1, 2):\n    print(" " * ((h-i)//2) + "*" * i)\nfor i in range(h-2, 0, -2):\n    print(" " * ((h-i)//2) + "*" * i)`,
          solution: `h = 5\nfor i in range(1, h+1, 2):\n    print(" " * ((h-i)//2) + "*" * i)\nfor i in range(h-2, 0, -2):\n    print(" " * ((h-i)//2) + "*" * i)`,
          type: 'advanced'
        }
      ],
      summary: '循环用于重复操作，可用 for 或 while'
    },
    {
      id: 'lesson1-6',
      title: '列表入门：整理你的数据',
      objective: '掌握列表创建、访问、修改、遍历，理解列表常用操作',
      analogy: '列表就像购物清单，记录多个商品信息',
      codeExample: `fruits = ["苹果", "香蕉", "橘子"]
print(fruits[0])
fruits.append("葡萄")
for fruit in fruits:
    print(fruit)`,
      originalExercises: [
        {
          id: 'ex1-6-1',
          title: '创建数字列表求和',
          description: '创建数字列表并求和',
          template: '# 创建数字列表并求和\nnumbers = [1, 2, 3, 4, 5]\nsum_numbers = \nprint(sum_numbers)',
          solution: 'numbers = [1, 2, 3, 4, 5]\nsum_numbers = sum(numbers)\nprint(sum_numbers)',
          type: 'basic'
        },
        {
          id: 'ex1-6-2',
          title: '遍历列表',
          description: '遍历列表输出每个元素',
          template: '# 遍历列表\nfor num in numbers:\n    print()',
          solution: 'for num in numbers:\n    print(num)',
          type: 'basic'
        },
        {
          id: 'ex1-6-3',
          title: '切片练习',
          description: '对列表进行切片：取前3个元素、最后2个元素、每隔1个取一个元素',
          template: `# 切片\nnums = [0,1,2,3,4,5,6]\nprint(nums[:3])\nprint(nums[-2:])\nprint(nums[::2])`,
          solution: `nums = [0,1,2,3,4,5,6]\nprint(nums[:3])\nprint(nums[-2:])\nprint(nums[::2])`,
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-6-adv-1',
          title: '去重但保持原顺序',
          description: '从包含重复的列表中移除重复元素，并保持出现顺序不变',
          template: `# 去重保持顺序\nitems = [\"a\",\"b\",\"a\",\"c\",\"b\",\"d\"]\nseen = set()\nresult = []\nfor x in items:\n    if x not in seen:\n        seen.add(x)\n        result.append(x)\nprint(result)`,
          solution: `items = [\"a\",\"b\",\"a\",\"c\",\"b\",\"d\"]\nseen = set()\nresult = []\nfor x in items:\n    if x not in seen:\n        seen.add(x)\n        result.append(x)\nprint(result)`,
          type: 'advanced'
        },
        {
          id: 'ex1-6-adv-2',
          title: '条件统计与筛选',
          description: '给定价格列表，筛选 >10 的价格并统计数量与平均值',
          template: `# 条件筛选\nprices = [5,12,9,18,20,7]\nhigh = [p for p in prices if p > 10]\nprint(high, len(high), sum(high)/len(high))`,
          solution: `prices = [5,12,9,18,20,7]\nhigh = [p for p in prices if p > 10]\nprint(high, len(high), sum(high)/len(high))`,
          type: 'advanced'
        }
      ],
      summary: '列表用于存储多个数据，支持增删改查和遍历'
    },
    {
      id: 'lesson1-7',
      title: '元组与集合：不可变与唯一',
      objective: '掌握元组与集合的特点，理解不可变和去重的概念',
      analogy: '元组：身份证号、生日等不可变信息；集合：班级同学姓名，自动去重',
      codeExample: `coordinates = (10, 20)
names = {"小明", "小红", "小明"}
print(coordinates[0])
print(names)`,
      originalExercises: [
        {
          id: 'ex1-7-1',
          title: '创建元组并访问',
          description: '创建元组并访问元素',
          template: '# 创建元组\ntuple1 = (1, 2, 3)\nprint()',
          solution: 'tuple1 = (1, 2, 3)\nprint(tuple1[1])',
          type: 'basic'
        },
        {
          id: 'ex1-7-2',
          title: '集合去重',
          description: '创建集合并添加新元素验证去重',
          template: '# 集合去重\nstudents = {"小明", "小红"}\nstudents.add("小刚")\nprint()',
          solution: 'students = {"小明", "小红"}\nstudents.add("小刚")\nprint(students)',
          type: 'basic'
        },
        {
          id: 'ex1-7-3',
          title: '集合运算练习',
          description: '给定两个集合，输出并集、交集与差集',
          template: `# 集合运算\nA = {1,2,3,4}\nB = {3,4,5}\nprint(A | B)\nprint(A & B)\nprint(A - B)`,
          solution: `A = {1,2,3,4}\nB = {3,4,5}\nprint(A | B)\nprint(A & B)\nprint(A - B)`,
          type: 'basic'
        },
        {
          id: 'ex1-7-4',
          title: '元组不可变性演示',
          description: '创建一个元组并说明为何不能直接修改元素值（用重新赋值替代）',
          template: `# 元组不可变\ncoords = (10, 20)\n# coords[0] = 30  # 这行会报错\ncoords = (30, coords[1])\nprint(coords)`,
          solution: `coords = (10, 20)\ncoords = (30, coords[1])\nprint(coords)`,
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-7-adv-1',
          title: '唯一ID校验器',
          description: '给定一批学生ID（可能存在重复），用集合判断是否有重复并输出重复的ID集合',
          template: `# 唯一ID校验\nids = ["S001","S002","S003","S002","S004","S001"]\nseen = set()\ndups = set()\nfor sid in ids:\n    if sid in seen:\n        dups.add(sid)\n    else:\n        seen.add(sid)\nprint("重复ID:", dups)`,
          solution: `ids = ["S001","S002","S003","S002","S004","S001"]\nseen = set()\ndups = set()\nfor sid in ids:\n    if sid in seen:\n        dups.add(sid)\n    else:\n        seen.add(sid)\nprint("重复ID:", dups)`,
          type: 'advanced'
        },
        {
          id: 'ex1-7-adv-2',
          title: '标签集合分析',
          description: '两篇文章的标签集合，输出共同标签、仅文章A拥有的标签、合并后的全部标签（排序显示）',
          template: `# 标签集合\nA = {"python","数据","基础","练习"}\nB = {"python","进阶","练习","算法"}\nprint("共同标签:", sorted(A & B))\nprint("A独有:", sorted(A - B))\nprint("全部标签:", sorted(A | B))`,
          solution: `A = {"python","数据","基础","练习"}\nB = {"python","进阶","练习","算法"}\nprint("共同标签:", sorted(A & B))\nprint("A独有:", sorted(A - B))\nprint("全部标签:", sorted(A | B))`,
          type: 'advanced'
        }
      ],
      summary: '元组不可变，集合元素唯一且无序'
    },
    {
      id: 'lesson1-8',
      title: '字典入门：给信息贴标签',
      objective: '掌握字典的创建、访问、修改，能用字典管理键值对数据',
      analogy: '字典就像电话簿：姓名→电话号码',
      codeExample: `student = {"name": "小明", "age": 18}
print(student["name"])
student["age"] = 19
student["grade"] = "A"
print(student)`,
      originalExercises: [
        {
          id: 'ex1-8-1',
          title: '学生分数字典',
          description: '创建一个字典记录3个同学的分数',
          template: '# 学生分数字典\nscores = {"小明": 90, "小红": 85, "小刚": 78}\nfor student, score in scores.items():\n    print()',
          solution: 'scores = {"小明": 90, "小红": 85, "小刚": 78}\nfor student, score in scores.items():\n    print(student, score)',
          type: 'basic'
        },
        {
          id: 'ex1-8-2',
          title: '输出学生分数',
          description: '输出每个同学的分数',
          template: '# 输出分数\nfor student, score in scores.items():\n    print()',
          solution: 'for student, score in scores.items():\n    print(student, score)',
          type: 'basic'
        },
        {
          id: 'ex1-8-3',
          title: '键存在判断与更新',
          description: '若不存在某键则新增并赋值；否则更新值',
          template: `# 键存在判断\ninfo = {"name":"小明","age":18}\nkey = "grade"\nif key in info:\n    info[key] = "A"\nelse:\n    info[key] = "B"\nprint(info)`,
          solution: `info = {"name":"小明","age":18}\nkey = "grade"\nif key in info:\n    info[key] = "A"\nelse:\n    info[key] = "B"\nprint(info)`,
          type: 'basic'
        },
        {
          id: 'ex1-8-4',
          title: '合并两个字典',
          description: '将两个字典合并为一个（后者同键覆盖前者）',
          template: `# 字典合并\na = {"x":1,"y":2}\nb = {"y":3,"z":4}\nmerged = {**a, **b}\nprint(merged)`,
          solution: `a = {"x":1,"y":2}\nb = {"y":3,"z":4}\nmerged = {**a, **b}\nprint(merged)`,
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-8-adv-1',
          title: '成绩统计器',
          description: '给定学生成绩字典，输出最高分、最低分与平均分',
          template: `# 成绩统计\nscores = {"小明":85,"小红":92,"小刚":78,"小华":90}\nvals = list(scores.values())\nprint(max(vals), min(vals), sum(vals)/len(vals))`,
          solution: `scores = {"小明":85,"小红":92,"小刚":78,"小华":90}\nvals = list(scores.values())\nprint(max(vals), min(vals), sum(vals)/len(vals))`,
          type: 'advanced'
        },
        {
          id: 'ex1-8-adv-2',
          title: '反转字典（处理冲突）',
          description: '将 {name: score} 反转为 {score: [names]}，处理同分冲突',
          template: `# 反转字典\nscores = {"张三":90,"李四":85,"王五":90}\ninverted = {}\nfor name, sc in scores.items():\n    inverted.setdefault(sc, []).append(name)\nprint(inverted)`,
          solution: `scores = {"张三":90,"李四":85,"王五":90}\ninverted = {}\nfor name, sc in scores.items():\n    inverted.setdefault(sc, []).append(name)\nprint(inverted)`,
          type: 'advanced'
        }
      ],
      summary: '字典用键值对存储数据，便于查找和修改'
    },
    {
      id: 'lesson1-9',
      title: '函数基础：封装重复操作',
      objective: '掌握函数定义与调用，理解参数和返回值',
      analogy: '每天刷牙：写一个函数封装动作，随时调用',
      codeExample: `def greet(name):
    return f"你好，{name}"

print(greet("小明"))`,
      originalExercises: [
        {
          id: 'ex1-9-1',
          title: '平方函数',
          description: '写一个函数计算平方',
          template: '# 平方函数\ndef square(x):\n    return \nprint(square(5))',
          solution: 'def square(x):\n    return x**2\nprint(square(5))',
          type: 'basic'
        },
        {
          id: 'ex1-9-2',
          title: '加法函数',
          description: '写一个函数接收两个数字并返回和',
          template: '# 加法函数\ndef add(a, b):\n    return \nprint(add(3, 4))',
          solution: 'def add(a, b):\n    return a + b\nprint(add(3, 4))',
          type: 'basic'
        },
        {
          id: 'ex1-9-3',
          title: '默认参数练习',
          description: '编写 greet(name, prefix="你好") 返回问候语',
          template: `# 默认参数\ndef greet(name, prefix="你好"):\n    return f"{prefix}，{name}"\nprint(greet("小明"))\nprint(greet("小红","早上好"))`,
          solution: `def greet(name, prefix="你好"):\n    return f"{prefix}，{name}"\nprint(greet("小明"))\nprint(greet("小红","早上好"))`,
          type: 'basic'
        },
        {
          id: 'ex1-9-4',
          title: '文档字符串与帮助',
          description: '为函数添加 docstring 并打印其 __doc__',
          template: `# docstring\ndef square(x):\n    """返回 x 的平方"""\n    return x*x\nprint(square.__doc__)`,
          solution: `def square(x):\n    """返回 x 的平方"""\n    return x*x\nprint(square.__doc__)`,
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-9-adv-1',
          title: '记忆化缓存',
          description: '实现一个 make_cache(fn) 返回带缓存的函数，重复输入不重复计算',
          template: `# 记忆化\ndef make_cache(fn):\n    cache = {}\n    def wrapper(x):\n        if x in cache:\n            return cache[x]\n        res = fn(x)\n        cache[x] = res\n        return res\n    return wrapper\n\n@make_cache\ndef fib(n):\n    return n if n<2 else fib(n-1)+fib(n-2)\n\nprint(fib(10))`,
          solution: `def make_cache(fn):\n    cache = {}\n    def wrapper(x):\n        if x in cache:\n            return cache[x]\n        res = fn(x)\n        cache[x] = res\n        return res\n    return wrapper\n\n@make_cache\ndef fib(n):\n    return n if n<2 else fib(n-1)+fib(n-2)\n\nprint(fib(10))`,
          type: 'advanced'
        },
        {
          id: 'ex1-9-adv-2',
          title: '参数校验与错误信息',
          description: '写函数 safe_div(a,b)；b=0 时返回错误提示字符串，否则返回结果',
          template: `# 参数校验\ndef safe_div(a,b):\n    if b == 0:\n        return "错误：除数不能为0"\n    return a/b\nprint(safe_div(10,2))\nprint(safe_div(5,0))`,
          solution: `def safe_div(a,b):\n    if b == 0:\n        return "错误：除数不能为0"\n    return a/b\nprint(safe_div(10,2))\nprint(safe_div(5,0))`,
          type: 'advanced'
        }
      ],
      summary: '函数用于封装重复操作，提高代码复用性'
    },
    {
      id: 'lesson1-10',
      title: '综合练习：小项目练习',
      objective: '巩固变量、数据类型、条件、循环、列表、字典、函数的使用，学会将多个知识点结合完成小项目',
      analogy: '项目就像组织一次家庭聚餐，需要准备食材（变量和列表）、统计数量（循环）、判断是否有食材（条件）、记录每个人的偏好（字典）、完成计算或动作（函数）',
      codeExample: `# 定义水果列表和单价字典
fruits = ["苹果", "香蕉", "橘子"]
prices = {"苹果": 5, "香蕉": 2, "橘子": 3}
budget = 15

# 计算总价
total = 0
for fruit in fruits:
    total += prices[fruit]

# 判断是否超预算
if total > budget:
    print("超出预算，总价:", total)
else:
    print("可购买，总价:", total)

# 封装函数计算单种水果价格
def fruit_price(fruit, quantity):
    return prices.get(fruit, 0) * quantity

print("苹果买3个的价格:", fruit_price("苹果", 3))`,
      originalExercises: [
        {
          id: 'ex1-10-1',
          title: '修改水果清单',
          description: '修改水果清单，增加新的水果并计算总价',
          template: '# 增加水果\nfruits.append("葡萄")\nprices["葡萄"] = 4\n\n# 重新计算总价\ntotal = \nprint("总价:", total)',
          solution: 'fruits.append("葡萄")\nprices["葡萄"] = 4\n\ntotal = sum(prices[fruit] for fruit in fruits)\nprint("总价:", total)',
          type: 'basic'
        },
        {
          id: 'ex1-10-2',
          title: '预算判断函数',
          description: '封装函数判断是否在预算内',
          template: '# 封装预算判断函数\ndef check_budget(total, budget):\n    if :\n        return \n    else:\n        return \n\nprint(check_budget(total, budget))',
          solution: 'def check_budget(total, budget):\n    if total > budget:\n        return f"超出预算，总价:{total}"\n    else:\n        return f"可购买，总价:{total}"\n\nprint(check_budget(total, budget))',
          type: 'basic'
        },
        {
          id: 'ex1-10-3',
          title: '购物小票',
          description: '打印每种水果购买数量及单价的小票',
          template: '# 打印小票\nquantities = {"苹果":3, "香蕉":2, "橘子":5, "葡萄":4}\nfor fruit, qty in quantities.items():\n    print()',
          solution: 'quantities = {"苹果":3, "香蕉":2, "橘子":5, "葡萄":4}\nfor fruit, qty in quantities.items():\n    print(f"{fruit} x {qty} = {fruit_price(fruit, qty)} 元")',
          type: 'basic'
        },
        {
          id: 'ex1-10-4',
          title: '分类汇总',
          description: '将水果按价格是否大于等于3分成两类，并统计每类数量与总价',
          template: `# 分类汇总\nfruits = ["苹果","香蕉","橘子","葡萄"]\nprices = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nexpensive = [f for f in fruits if prices[f] >= 3]\ncheap = [f for f in fruits if prices[f] < 3]\nprint(expensive, sum(prices[f] for f in expensive))\nprint(cheap, sum(prices[f] for f in cheap))`,
          solution: `fruits = ["苹果","香蕉","橘子","葡萄"]\nprices = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nexpensive = [f for f in fruits if prices[f] >= 3]\ncheap = [f for f in fruits if prices[f] < 3]\nprint(expensive, sum(prices[f] for f in expensive))\nprint(cheap, sum(prices[f] for f in cheap))`,
          type: 'basic'
        },
        {
          id: 'ex1-10-5',
          title: '含折扣的总价',
          description: '对总价应用统一 9 折，输出保留两位小数的金额',
          template: `# 统一折扣\nfruits = ["苹果","香蕉","橘子","葡萄"]\nprices = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nsubtotal = sum(prices[f] for f in fruits)\nprint(f"{subtotal*0.9:.2f}")`,
          solution: `fruits = ["苹果","香蕉","橘子","葡萄"]\nprices = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nsubtotal = sum(prices[f] for f in fruits)\nprint(f"{subtotal*0.9:.2f}")`,
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-10-adv-1',
          title: '预算规划器（多策略）',
          description: '在固定预算下，优先购买高性价比水果（价格<=3）；若预算有剩余，再购买其它水果。输出购买清单与总价。',
          template: `# 预算规划\nfruits = ["苹果","香蕉","橘子","葡萄"]\nprices = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nbudget = 12\nbuy = []\n# 先买性价比高的\nfor f in fruits:\n    if prices[f] <= 3 and budget >= prices[f]:\n        buy.append(f)\n        budget -= prices[f]\n# 再考虑其它\nfor f in fruits:\n    if f not in buy and budget >= prices[f]:\n        buy.append(f)\n        budget -= prices[f]\nprint(buy, sum(prices[f] for f in buy))`,
          solution: `fruits = ["苹果","香蕉","橘子","葡萄"]\nprices = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nbudget = 12\nbuy = []\nfor f in fruits:\n    if prices[f] <= 3 and budget >= prices[f]:\n        buy.append(f)\n        budget -= prices[f]\nfor f in fruits:\n    if f not in buy and budget >= prices[f]:\n        buy.append(f)\n        budget -= prices[f]\nprint(buy, sum(prices[f] for f in buy))`,
          type: 'advanced'
        },
        {
          id: 'ex1-10-adv-2',
          title: '小票对齐与格式化',
          description: '打印整齐对齐的小票，项目名宽度 4，价格宽度 2（右对齐）',
          template: `# 对齐小票\nitems = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nfor name, price in items.items():\n    print(f"{name:4s} | {price:2d}")`,
          solution: `items = {"苹果":5,"香蕉":2,"橘子":3,"葡萄":4}\nfor name, price in items.items():\n    print(f"{name:4s} | {price:2d}")`,
          type: 'advanced'
        }
      ],
      summary: '将变量、列表、字典、循环、条件、函数结合使用，能设计小项目解决实际问题，提高综合能力'
    },
    {
      id: 'lesson1-summary',
      title: '第1阶段综合练习',
      objective: '综合复习第1阶段所有知识点（变量、数据类型、运算符、条件、循环、列表、集合、字典、函数）',
      analogy: '像期末考试，把学过的知识综合起来解决问题',
      codeExample: `# 综合练习示例
name = "小明"
age = 18
height = 1.75
scores = [85, 92, 78, 90, 88]
student_info = {"name": name, "age": age, "scores": scores}

def calculate_average(scores):
    return sum(scores) / len(scores)

avg = calculate_average(scores)
print(f"{name}的平均分是: {avg}")`,
      originalExercises: [
        {
          id: 'ex1-summary-1',
          title: '个人信息',
          description: '定义变量记录姓名、年龄、身高并打印',
          template: '# 1. 个人信息\nname = \nage = \nheight = \nprint(name, age, height)',
          solution: 'name = "小明"\nage = 18\nheight = 1.75\nprint(name, age, height)',
          type: 'basic'
        },
        {
          id: 'ex1-summary-2',
          title: '数字比较',
          description: '输入两个数字，输出较大值，并判断是否为偶数',
          template: '# 2. 数字比较\nx = 12\ny = 15\nmax_num = \nprint("较大值:", max_num)\nprint("是否偶数:", )',
          solution: 'x = 12\ny = 15\nmax_num = max(x, y)\nprint("较大值:", max_num)\nprint("是否偶数:", max_num % 2 == 0)',
          type: 'basic'
        },
        {
          id: 'ex1-summary-3',
          title: '水果列表',
          description: '创建列表存储5个水果名称，遍历输出',
          template: '# 3. 水果列表\nfruits = \nfor fruit in fruits:\n    print()',
          solution: 'fruits = ["苹果", "香蕉", "橘子", "葡萄", "草莓"]\nfor fruit in fruits:\n    print(fruit)',
          type: 'basic'
        },
        {
          id: 'ex1-summary-4',
          title: '城市元组',
          description: '创建元组记录三个城市名称并访问第二个元素',
          template: '# 4. 城市元组\ncities = \nprint("第二个城市:", )',
          solution: 'cities = ("北京", "上海", "广州")\nprint("第二个城市:", cities[1])',
          type: 'basic'
        },
        {
          id: 'ex1-summary-5',
          title: '学生集合',
          description: '创建集合存储5个班级同学姓名，添加一个新同学，输出集合',
          template: '# 5. 学生集合\nstudents = \nstudents.add("小李")\nprint(students)',
          solution: 'students = {"小明", "小红", "小刚", "小华", "小王"}\nstudents.add("小李")\nprint(students)',
          type: 'basic'
        },
        {
          id: 'ex1-summary-6',
          title: '学生分数字典',
          description: '创建字典存储3个同学的分数，输出平均分',
          template: '# 6. 学生分数\nscores = \naverage = \nprint("平均分:", average)',
          solution: 'scores = {"小明": 85, "小红": 92, "小刚": 78}\naverage = sum(scores.values()) / len(scores)\nprint("平均分:", average)',
          type: 'basic'
        },
        {
          id: 'ex1-summary-7',
          title: '平方函数',
          description: '写函数接收一个数字并返回平方，调用函数打印结果',
          template: '# 7. 平方函数\ndef square(x):\n    return \n\nresult = square(6)\nprint("6的平方是:", result)',
          solution: 'def square(x):\n    return x ** 2\n\nresult = square(6)\nprint("6的平方是:", result)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex1-summary-adv-1',
          title: '成绩综合分析',
          description: '综合使用列表/字典/函数：计算全班各科平均、个人总分与排名',
          template: `# 综合成绩分析\nclass_data = {\n  "张三":{"语文":85,"数学":92,"英语":78},\n  "李四":{"语文":78,"数学":88,"英语":85},\n  "王五":{"语文":92,"数学":95,"英语":89}\n}\n# TODO: 计算个人总分与平均，输出排名\nstats = []\nfor name, subjects in class_data.items():\n    scores = list(subjects.values())\n    total = sum(scores)\n    avg = total/len(scores)\n    stats.append((name,total,avg))\nstats.sort(key=lambda x: x[2], reverse=True)\nfor i,(name,total,avg) in enumerate(stats,1):\n    print(i, name, total, f\"{avg:.1f}\")`,
          solution: `class_data = {\n  "张三":{"语文":85,"数学":92,"英语":78},\n  "李四":{"语文":78,"数学":88,"英语":85},\n  "王五":{"语文":92,"数学":95,"英语":89}\n}\nstats = []\nfor name, subjects in class_data.items():\n    scores = list(subjects.values())\n    total = sum(scores)\n    avg = total/len(scores)\n    stats.append((name,total,avg))\nstats.sort(key=lambda x: x[2], reverse=True)\nfor i,(name,total,avg) in enumerate(stats,1):\n    print(i, name, total, f\"{avg:.1f}\")`,
          type: 'advanced'
        },
        {
          id: 'ex1-summary-adv-2',
          title: '日志字数统计',
          description: '给定一段文本，统计每个词出现次数并输出 Top-3（不使用外部库）',
          template: `# 词频统计\ntext = "python 学习 python 练习 数据 学习 数据 python"\nwords = text.split()\nfrom collections import Counter\ncnt = Counter(words)\nprint(cnt.most_common(3))`,
          solution: `text = "python 学习 python 练习 数据 学习 数据 python"\nwords = text.split()\nfrom collections import Counter\ncnt = Counter(words)\nprint(cnt.most_common(3))`,
          type: 'advanced'
        }
      ],
      summary: '第1阶段学习了Python基础语法，包括变量、数据类型、运算符、条件判断、循环、列表、元组、集合、字典和函数，为后续学习打下坚实基础'
    }
  ]
}