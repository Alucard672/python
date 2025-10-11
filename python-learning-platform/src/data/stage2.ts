// 第2阶段 - Python进阶应用
import type { IStage } from '../types/Stage'

export const stage2: IStage = {
  id: 2,
  title: '第2阶段 · Python进阶应用',
  description: '深入学习字符串、文件操作、异常处理等进阶特性',
  lessons: [
    {
      id: 'lesson2-1',
      title: '字符串进阶操作：文本的魔法',
      objective: '掌握字符串索引、切片、格式化，学会字符串方法（split、join、replace、upper、lower等）',
      analogy: '字符串就像一条珠链，每颗珠子是一个字符，可以挑选、替换、组合、分割。',
      codeExample: `text = "Python学习之旅"
print(text[0])       # 第一个字符
print(text[-1])      # 最后一个字符
print(text[0:6])     # 切片

print(text.upper())  # 全大写
print(text.lower())  # 全小写

words = text.split('之')
print(words)

joined = '-'.join(words)
print(joined)`,
      originalExercises: [
        {
          id: 'ex2-1-1',
          title: '字符串切片',
          description: '取出字符串前5个字符',
          template: '# 字符串切片\ns = "数据分析Python"\nprint()',
          solution: 's = "数据分析Python"\nprint(s[:5])',
          type: 'basic'
        },
        {
          id: 'ex2-1-2',
          title: '大小写转换',
          description: '将字符串转为全大写',
          template: '# 大小写转换\ns = "hello python"\nprint()',
          solution: 's = "hello python"\nprint(s.upper())',
          type: 'basic'
        },
        {
          id: 'ex2-1-3',
          title: '字符串分割',
          description: '用空格分割一句话',
          template: '# 字符串分割\nsentence = "我 爱 Python"\nprint()',
          solution: 'sentence = "我 爱 Python"\nprint(sentence.split())',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-1-adv-1',
          title: '字符串清洗与规范化',
          description: '对包含中英文与多余空格的文本进行清洗：去前后空格、统一为小写、用单个空格分隔词。',
          template: `# 清洗文本
s = "  Python 学习  PYTHON  "
s = s.strip().lower()
parts = s.split()
clean = " ".join(parts)
print(clean)`,
          solution: `s = "  Python 学习  PYTHON  "
s = s.strip().lower()
parts = s.split()
clean = " ".join(parts)
print(clean)`,
          type: 'advanced'
        },
        {
          id: 'ex2-1-adv-2',
          title: '模板替换器（不使用f-string）',
          description: '实现一个简单模板替换：将 "你好，{name}，今天是{day}" 中的占位符替换为变量。',
          template: `name = "小明"
day = "周五"
tpl = "你好，{name}，今天是{day}"
result = tpl.replace("{name}", name).replace("{day}", day)
print(result)`,
          solution: `name = "小明"
day = "周五"
tpl = "你好，{name}，今天是{day}"
result = tpl.replace("{name}", name).replace("{day}", day)
print(result)`,
          type: 'advanced'
        }
      ],
      summary: '字符串支持索引、切片、各种方法操作文本'
    },
    {
      id: 'lesson2-2',
      title: '文件读写基础：让数据流动起来',
      objective: '掌握文件打开、读取、写入，理解文件模式 r/w/a',
      analogy: '文件就像笔记本，你可以读取内容，也可以写入或追加内容',
      codeExample: `# 写入文件
with open('example.txt', 'w', encoding='utf-8') as f:
    f.write("Hello Python\\n")

# 读取文件
with open('example.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    print(content)`,
      originalExercises: [
        {
          id: 'ex2-2-1',
          title: '创建文件',
          description: '创建文件并写入自己的名字',
          template: '# 创建文件写入名字\nwith open("myname.txt", "w", encoding="utf-8") as f:\n    f.write()\nprint("文件创建完成")',
          solution: 'with open("myname.txt", "w", encoding="utf-8") as f:\n    f.write("小明\\n")\nprint("文件创建完成")',
          type: 'basic'
        },
        {
          id: 'ex2-2-2',
          title: '读取文件',
          description: '读取文件并打印每一行',
          template: '# 读取文件\nwith open("myname.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        print()',
          solution: 'with open("myname.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        print(line.strip())',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-2-adv-1',
          title: '逐行读取与统计',
          description: '读取一个文本文件，统计非空行数量与总字数（不含空白）。',
          template: `# 行统计
try:
    with open("example.txt", "r", encoding="utf-8") as f:
        line_count = 0
        char_count = 0
        for line in f:
            s = line.strip()
            if s:
                line_count += 1
                char_count += len(s.replace(" ", ""))
        print(line_count, char_count)
except FileNotFoundError:
    print("文件不存在")`,
          solution: `try:
    with open("example.txt", "r", encoding="utf-8") as f:
        line_count = 0
        char_count = 0
        for line in f:
            s = line.strip()
            if s:
                line_count += 1
                char_count += len(s.replace(" ", ""))
        print(line_count, char_count)
except FileNotFoundError:
    print("文件不存在")`,
          type: 'advanced'
        },
        {
          id: 'ex2-2-adv-2',
          title: '安全追加与日志格式',
          description: '以追加模式写入多条日志，每条包含时间戳与级别（INFO/ERROR）。',
          template: `from datetime import datetime
def log(msg, level="INFO"):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {level}: {msg}\\n"
    with open("app.log", "a", encoding="utf-8") as f:
        f.write(line)

log("系统启动")
log("网络错误", "ERROR")
print("日志已写入")`,
          solution: `from datetime import datetime
def log(msg, level="INFO"):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {level}: {msg}\\n"
    with open("app.log", "a", encoding="utf-8") as f:
        f.write(line)

log("系统启动")
log("网络错误", "ERROR")
print("日志已写入")`,
          type: 'advanced'
        }
      ],
      summary: '使用with语句安全地进行文件操作，避免忘记关闭文件'
    },
    {
      id: 'lesson2-3',
      title: '异常处理：让程序更稳健',
      objective: '理解 try/except/finally，能捕获常见错误',
      analogy: '就像生活中遇到意外情况，提前准备方案，不至于乱了阵脚',
      codeExample: `try:
    x = int(input("输入一个数字: "))
    print(10 / x)
except ZeroDivisionError:
    print("不能除以0")
except ValueError:
    print("请输入有效数字")
finally:
    print("程序结束")`,
      originalExercises: [
        {
          id: 'ex2-3-1',
          title: '文件异常处理',
          description: '捕获文件不存在异常',
          template: '# 文件异常处理\ntry:\n    with open("nofile.txt", "r") as f:\n        print(f.read())\nexcept :\n    print("文件不存在")',
          solution: 'try:\n    with open("nofile.txt", "r") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("文件不存在")',
          type: 'basic'
        },
        {
          id: 'ex2-3-2',
          title: '索引异常处理',
          description: '捕获列表索引越界异常',
          template: '# 索引异常处理\nlst = [1, 2, 3]\ntry:\n    print(lst[5])\nexcept :\n    print("索引超出范围")',
          solution: 'lst = [1, 2, 3]\ntry:\n    print(lst[5])\nexcept IndexError:\n    print("索引超出范围")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-3-adv-1',
          title: '多异常分类提示',
          description: '对输入转换与除法操作分别给出详尽错误提示：ValueError、ZeroDivisionError、其他异常。',
          template: `def safe_calc(s):
    try:
        x = int(s)
        return 100 // x
    except ValueError:
        return "输入不是整数"
    except ZeroDivisionError:
        return "除数不能为0"
    except Exception as e:
        return f"其他错误: {e}"

print(safe_calc("10"))
print(safe_calc("0"))
print(safe_calc("abc"))`,
          solution: `def safe_calc(s):
    try:
        x = int(s)
        return 100 // x
    except ValueError:
        return "输入不是整数"
    except ZeroDivisionError:
        return "除数不能为0"
    except Exception as e:
        return f"其他错误: {e}"

print(safe_calc("10"))
print(safe_calc("0"))
print(safe_calc("abc"))`,
          type: 'advanced'
        },
        {
          id: 'ex2-3-adv-2',
          title: '带重试的读取',
          description: '尝试读取文件，若失败重试最多2次，并记录每次失败原因。',
          template: `def read_with_retry(path, retries=2):
    logs = []
    for i in range(retries+1):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return f.read(), logs
        except Exception as e:
            logs.append(f"第{i+1}次失败: {e}")
    return None, logs

content, logs = read_with_retry("nofile.txt")
print(content, logs)`,
          solution: `def read_with_retry(path, retries=2):
    logs = []
    for i in range(retries+1):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return f.read(), logs
        except Exception as e:
            logs.append(f"第{i+1}次失败: {e}")
    return None, logs

content, logs = read_with_retry("nofile.txt")
print(content, logs)`,
          type: 'advanced'
        }
      ],
      summary: '异常处理让程序更健壮，遇到错误不会崩溃'
    },
    {
      id: 'lesson2-4',
      title: '模块与包：复用的力量',
      objective: '掌握 import、from import，理解自定义模块和第三方包使用',
      analogy: '模块就像工具箱，里面有现成工具，随时取用',
      codeExample: `import math
print(math.sqrt(16))

from random import randint
print(randint(1, 10))`,
      originalExercises: [
        {
          id: 'ex2-4-1',
          title: 'math模块',
          description: '使用 math 模块计算圆面积',
          template: '# 计算圆面积\nimport math\nr = 5\narea = \nprint(area)',
          solution: 'import math\nr = 5\narea = math.pi * r**2\nprint(area)',
          type: 'basic'
        },
        {
          id: 'ex2-4-2',
          title: 'random模块',
          description: '使用 random 模块生成5个随机数',
          template: '# 生成随机数\nfrom random import randint\nfor _ in range(5):\n    print()',
          solution: 'from random import randint\nfor _ in range(5):\n    print(randint(1, 100))',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-4-adv-1',
          title: '自定义模块拆分',
          description: '创建一个 tools.py 模块，定义 add(a,b) 与 greet(name)，在主程序中导入并使用。',
          template: `# 假设已有 tools.py
from tools import add, greet
print(add(3,4))
print(greet("小明"))`,
          solution: `# 假设已有 tools.py
from tools import add, greet
print(add(3,4))
print(greet("小明"))`,
          type: 'advanced'
        },
        {
          id: 'ex2-4-adv-2',
          title: '随机抽样统计',
          description: '用 random 生成100个[1,10]随机数，统计每个数字出现次数（dict）。',
          template: `from random import randint
counts = {}
for _ in range(100):
    x = randint(1,10)
    counts[x] = counts.get(x, 0) + 1
print(counts)`,
          solution: `from random import randint
counts = {}
for _ in range(100):
    x = randint(1,10)
    counts[x] = counts.get(x, 0) + 1
print(counts)`,
          type: 'advanced'
        }
      ],
      summary: '模块提供了丰富的功能，避免重复造轮子'
    },
    {
      id: 'lesson2-5',
      title: '列表高级操作与推导式',
      objective: '掌握列表推导式，学会 filter/map/reduce 基础用法',
      analogy: '列表推导式像在工厂流水线快速加工产品',
      codeExample: `numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers if x%2==0]
print(squared)

from functools import reduce
total = reduce(lambda x, y: x+y, numbers)
print(total)`,
      originalExercises: [
        {
          id: 'ex2-5-1',
          title: '列表推导式',
          description: '创建1~10偶数平方列表',
          template: '# 偶数平方列表\neven_squares = []\nprint(even_squares)',
          solution: 'even_squares = [x**2 for x in range(1, 11) if x%2==0]\nprint(even_squares)',
          type: 'basic'
        },
        {
          id: 'ex2-5-2',
          title: 'map函数',
          description: '使用 map 将列表每个元素乘2',
          template: '# map函数\nlst = [1, 2, 3, 4]\ndoubled = list(map())\nprint(doubled)',
          solution: 'lst = [1, 2, 3, 4]\ndoubled = list(map(lambda x: x*2, lst))\nprint(doubled)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-5-adv-1',
          title: '组合过滤映射',
          description: '对1~50中过滤出能被3或5整除的数，映射为其平方后排序输出。',
          template: `nums = [x for x in range(1,51) if (x%3==0 or x%5==0)]
sq = sorted([x*x for x in nums])
print(sq)`,
          solution: `nums = [x for x in range(1,51) if (x%3==0 or x%5==0)]
sq = sorted([x*x for x in nums])
print(sq)`,
          type: 'advanced'
        },
        {
          id: 'ex2-5-adv-2',
          title: 'reduce汇总统计',
          description: '用 reduce 对列表做乘积，随后计算几何平均数。',
          template: `from functools import reduce
data = [2,4,8]
prod = reduce(lambda a,b: a*b, data, 1)
geo = prod ** (1/len(data))
print(prod, round(geo, 4))`,
          solution: `from functools import reduce
data = [2,4,8]
prod = reduce(lambda a,b: a*b, data, 1)
geo = prod ** (1/len(data))
print(prod, round(geo, 4))`,
          type: 'advanced'
        }
      ],
      summary: '列表推导式和高阶函数让数据处理更简洁'
    },
    {
      id: 'lesson2-6',
      title: '字典进阶操作与嵌套',
      objective: '掌握字典嵌套、遍历，学会 get/setdefault 方法',
      analogy: '嵌套字典像家庭住址簿，层层记录详细信息',
      codeExample: `students = {
    '小明': {'math': 90, 'english': 85},
    '小红': {'math': 88, 'english': 92}
}
for name, scores in students.items():
    print(name, scores['math'])

# get方法
print(students.get('小刚', {}))`,
      originalExercises: [
        {
          id: 'ex2-6-1',
          title: '嵌套字典',
          description: '创建嵌套字典记录2个学生3门课成绩',
          template: '# 嵌套字典\nstudents = {\n    "小明": {"math": 90, "eng": 85, "py": 92},\n    "小红": {"math": 88, "eng": 92, "py": 95}\n}\nprint(students)',
          solution: 'students = {\n    "小明": {"math": 90, "eng": 85, "py": 92},\n    "小红": {"math": 88, "eng": 92, "py": 95}\n}\nprint(students)',
          type: 'basic'
        },
        {
          id: 'ex2-6-2',
          title: '计算平均分',
          description: '遍历输出每个学生平均分',
          template: '# 计算平均分\nfor name, scores in students.items():\n    avg = \n    print(name, avg)',
          solution: 'for name, scores in students.items():\n    avg = sum(scores.values()) / len(scores)\n    print(name, avg)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-6-adv-1',
          title: '成绩报表生成',
          description: '对嵌套字典生成报表：每生平均分、班级各科平均、Top-1学生。',
          template: `students = {
  "小明": {"math":90,"eng":85,"py":92},
  "小红": {"math":88,"eng":92,"py":95},
  "小刚": {"math":76,"eng":81,"py":79}
}
# 报表
class_avg = {}
for subject in ["math","eng","py"]:
    scores = [s[subject] for s in students.values()]
    class_avg[subject] = sum(scores)/len(scores)
stats = []
for name, sc in students.items():
    avg = sum(sc.values())/len(sc)
    stats.append((name, avg))
stats.sort(key=lambda x: x[1], reverse=True)
print(class_avg, stats[0])`,
          solution: `students = {
  "小明": {"math":90,"eng":85,"py":92},
  "小红": {"math":88,"eng":92,"py":95},
  "小刚": {"math":76,"eng":81,"py":79}
}
class_avg = {}
for subject in ["math","eng","py"]:
    scores = [s[subject] for s in students.values()]
    class_avg[subject] = sum(scores)/len(scores)
stats = []
for name, sc in students.items():
    avg = sum(sc.values())/len(sc)
    stats.append((name, avg))
stats.sort(key=lambda x: x[1], reverse=True)
print(class_avg, stats[0])`,
          type: 'advanced'
        },
        {
          id: 'ex2-6-adv-2',
          title: '安全访问（get/setdefault）',
          description: '使用 get/setdefault 统计每科成绩分布（分段：<80,80~90,>90）。',
          template: `students = {
  "小明": {"math":90,"eng":85,"py":92},
  "小红": {"math":88,"eng":92,"py":95},
  "小刚": {"math":76,"eng":81,"py":79}
}
dist = {}
for name, sc in students.items():
    for subj, score in sc.items():
        dist.setdefault(subj, {"lt80":0,"80to90":0,"gt90":0})
        if score < 80: dist[subj]["lt80"] += 1
        elif score <= 90: dist[subj]["80to90"] += 1
        else: dist[subj]["gt90"] += 1
print(dist)`,
          solution: `students = {
  "小明": {"math":90,"eng":85,"py":92},
  "小红": {"math":88,"eng":92,"py":95},
  "小刚": {"math":76,"eng":81,"py":79}
}
dist = {}
for name, sc in students.items():
    for subj, score in sc.items():
        dist.setdefault(subj, {"lt80":0,"80to90":0,"gt90":0})
        if score < 80: dist[subj]["lt80"] += 1
        elif score <= 90: dist[subj]["80to90"] += 1
        else: dist[subj]["gt90"] += 1
print(dist)`,
          type: 'advanced'
        }
      ],
      summary: '嵌套字典适合存储复杂的层级数据'
    },
    {
      id: 'lesson2-7',
      title: '集合进阶操作与应用',
      objective: '掌握集合交、并、差集，学会去重与集合推导式',
      analogy: '集合像朋友名单，交集是共同好友，并集是所有好友，差集是独有好友',
      codeExample: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)  # 交集
print(a | b)  # 并集
print(a - b)  # 差集

unique = {x for x in [1, 2, 2, 3, 3, 3]}
print(unique)`,
      originalExercises: [
        {
          id: 'ex2-7-1',
          title: '集合运算',
          description: '找两个班级共同同学',
          template: '# 集合运算\nclass1 = {"小明", "小红", "小刚"}\nclass2 = {"小红", "小刚", "小李"}\nprint()',
          solution: 'class1 = {"小明", "小红", "小刚"}\nclass2 = {"小红", "小刚", "小李"}\nprint(class1 & class2)',
          type: 'basic'
        },
        {
          id: 'ex2-7-2',
          title: '列表去重',
          description: '去掉列表重复元素',
          template: '# 列表去重\nlst = [1, 2, 2, 3, 3, 3]\nprint()',
          solution: 'lst = [1, 2, 2, 3, 3, 3]\nprint(set(lst))',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-7-adv-1',
          title: '选课分析（并/交/差）',
          description: '给定三门课集合，输出只选一门、选两门、全选的学生集合与数量。',
          template: `math = {"张三","李四","王五","赵六"}
phy  = {"李四","王五","孙七"}
chem = {"王五","赵六","孙七"}
all_three = math & phy & chem
two_any = (math & phy) | (phy & chem) | (math & chem)
only_one = (math | phy | chem) - two_any - all_three
print(len(only_one), len(two_any-all_three), len(all_three))`,
          solution: `math = {"张三","李四","王五","赵六"}
phy  = {"李四","王五","孙七"}
chem = {"王五","赵六","孙七"}
all_three = math & phy & chem
two_any = (math & phy) | (phy & chem) | (math & chem)
only_one = (math | phy | chem) - two_any - all_three
print(len(only_one), len(two_any-all_three), len(all_three))`,
          type: 'advanced'
        },
        {
          id: 'ex2-7-adv-2',
          title: '唯一标签集合',
          description: '从列表中提取唯一标签集合并按字母排序输出。',
          template: `tags = ["py","web","py","db","algo","web","async"]
unique = sorted(set(tags))
print(unique)`,
          solution: `tags = ["py","web","py","db","algo","web","async"]
unique = sorted(set(tags))
print(unique)`,
          type: 'advanced'
        }
      ],
      summary: '集合运算提供了强大的数据处理能力'
    },
    {
      id: 'lesson2-8',
      title: '函数进阶：参数与返回值',
      objective: '掌握默认参数、可变参数、关键字参数，学会返回多个值',
      analogy: '做菜函数：可选择加盐或不加盐，返回菜和汤',
      codeExample: `def greet(name, msg="你好"):
    return f"{msg}, {name}!"

print(greet("小明"))
print(greet("小红", "欢迎"))

def add_sub(x, y):
    return x+y, x-y

sum_val, diff_val = add_sub(10, 3)
print(sum_val, diff_val)`,
      originalExercises: [
        {
          id: 'ex2-8-1',
          title: '可变参数',
          description: '写函数计算任意数量数字的平均值',
          template: '# 可变参数\ndef avg(*nums):\n    return \nprint(avg(2, 4, 6, 8))',
          solution: 'def avg(*nums):\n    return sum(nums) / len(nums)\nprint(avg(2, 4, 6, 8))',
          type: 'basic'
        },
        {
          id: 'ex2-8-2',
          title: '多返回值',
          description: '函数返回最大值和最小值',
          template: '# 多返回值\ndef max_min(*nums):\n    return \nprint(max_min(5, 3, 9, 1))',
          solution: 'def max_min(*nums):\n    return max(nums), min(nums)\nprint(max_min(5, 3, 9, 1))',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-8-adv-1',
          title: '关键字参数格式化',
          description: '编写 format_user(**info) 返回 "name=..., age=..., city=..."，缺失键用 "-"。',
          template: `def format_user(**info):
    name = info.get("name","-")
    age  = info.get("age","-")
    city = info.get("city","-")
    return f"name={name}, age={age}, city={city}"

print(format_user(name="小明", age=18))`,
          solution: `def format_user(**info):
    name = info.get("name","-")
    age  = info.get("age","-")
    city = info.get("city","-")
    return f"name={name}, age={age}, city={city}"

print(format_user(name="小明", age=18))`,
          type: 'advanced'
        },
        {
          id: 'ex2-8-adv-2',
          title: '可变参数统计',
          description: '写 stats(*nums) 返回总和、均值、最大、最小四项。',
          template: `def stats(*nums):
    total = sum(nums)
    avg = total/len(nums) if nums else 0
    return total, avg, max(nums), min(nums)

print(stats(1,3,5,7))`,
          solution: `def stats(*nums):
    total = sum(nums)
    avg = total/len(nums) if nums else 0
    return total, avg, max(nums), min(nums)

print(stats(1,3,5,7))`,
          type: 'advanced'
        }
      ],
      summary: '函数参数提供了灵活性，默认参数让函数使用更便利'
    },
    {
      id: 'lesson2-9',
      title: '文件与异常进阶：综合应用',
      objective: '掌握文件操作与异常结合，学会处理多种异常和文件读取策略',
      analogy: '就像你在图书馆借书，如果书不存在或书页损坏，要有应对方法',
      codeExample: `try:
    with open('data.txt', 'r', encoding='utf-8') as f:
        for line in f:
            print(line.strip())
except FileNotFoundError:
    print("文件不存在")
except Exception as e:
    print("其他错误", e)
finally:
    print("读取结束")`,
      originalExercises: [
        {
          id: 'ex2-9-1',
          title: '文件异常综合',
          description: '尝试打开不存在的文件，并用异常处理提示',
          template: '# 文件异常综合\ntry:\n    with open("nofile.txt", "r") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("文件不存在")',
          solution: 'try:\n    with open("nofile.txt", "r") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("文件不存在")',
          type: 'basic'
        },
        {
          id: 'ex2-9-2',
          title: '安全写入',
          description: '写入数据到文件，确保异常时文件安全关闭',
          template: '# 安全写入\ntry:\n    with open("output.txt", "w") as f:\n        f.write("Hello World\\n")\nexcept Exception as e:\n    print(e)',
          solution: 'try:\n    with open("output.txt", "w") as f:\n        f.write("Hello World\\n")\nexcept Exception as e:\n    print(e)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-9-adv-1',
          title: '读取并筛选',
          description: '读取 data.txt，只输出包含关键字 "ERROR" 的行（去除前后空格）。',
          template: `try:
    with open("data.txt", "r", encoding="utf-8") as f:
        for line in f:
            s = line.strip()
            if "ERROR" in s:
                print(s)
except FileNotFoundError:
    print("data.txt 不存在")`,
          solution: `try:
    with open("data.txt", "r", encoding="utf-8") as f:
        for line in f:
            s = line.strip()
            if "ERROR" in s:
                print(s)
except FileNotFoundError:
    print("data.txt 不存在")`,
          type: 'advanced'
        },
        {
          id: 'ex2-9-adv-2',
          title: '异常日志记录',
          description: '包装读取逻辑为 read_or_log(path)，发生异常时将异常信息写入 error.log。',
          template: `def read_or_log(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        with open("error.log", "a", encoding="utf-8") as lf:
            lf.write(str(e) + "\\n")
        return None

print(read_or_log("nofile.txt"))`,
          solution: `def read_or_log(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        with open("error.log", "a", encoding="utf-8") as lf:
            lf.write(str(e) + "\\n")
        return None

print(read_or_log("nofile.txt"))`,
          type: 'advanced'
        }
      ],
      summary: '文件操作结合异常处理，让程序更加健壮'
    },
    {
      id: 'lesson2-10',
      title: '小项目实践：学生成绩管理系统',
      objective: '综合应用变量、列表、字典、循环、条件、函数，练习设计小项目解决实际问题',
      analogy: '模拟学校管理系统：登记学生、成绩统计、排序查询',
      codeExample: `students = []

# 添加学生函数
def add_student(name, math, eng, py):
    students.append({'name': name, 'math': math, 'eng': eng, 'py': py})

# 计算平均分函数
def avg_score(student):
    return (student['math'] + student['eng'] + student['py']) / 3

# 添加数据
add_student('小明', 90, 85, 92)
add_student('小红', 88, 92, 95)

# 打印成绩单
for s in students:
    avg = avg_score(s)
    print(f"{s['name']} 平均分: {avg}")`,
      originalExercises: [
        {
          id: 'ex2-10-1',
          title: '删除学生',
          description: '增加删除学生功能',
          template: '# 删除学生函数\ndef del_student(name):\n    global students\n    students = []\nprint("删除功能已实现")',
          solution: 'def del_student(name):\n    global students\n    students = [s for s in students if s["name"] != name]\nprint("删除功能已实现")',
          type: 'basic'
        },
        {
          id: 'ex2-10-2',
          title: '成绩排序',
          description: '根据平均分排序输出成绩',
          template: '# 成绩排序\nstudents.sort(key=lambda x: )\nfor s in students:\n    avg = avg_score(s)\n    print(f"{s[\'name\']} 平均分: {avg}")',
          solution: 'students.sort(key=lambda x: avg_score(x), reverse=True)\nfor s in students:\n    avg = avg_score(s)\n    print(f"{s[\'name\']} 平均分: {avg}")',
          type: 'basic'
        },
        {
          id: 'ex2-10-3',
          title: '统计最高分',
          description: '统计各科最高分',
          template: '# 统计最高分\nmath_max = max()\neng_max = max()\npy_max = max()\nprint(f"数学最高分: {math_max}, 英语最高分: {eng_max}, Python最高分: {py_max}")',
          solution: 'math_max = max(s["math"] for s in students)\neng_max = max(s["eng"] for s in students)\npy_max = max(s["py"] for s in students)\nprint(f"数学最高分: {math_max}, 英语最高分: {eng_max}, Python最高分: {py_max}")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-10-adv-1',
          title: '查询功能',
          description: '增加按姓名查询学生信息的函数，并格式化输出。',
          template: `def get_student(name):
    for s in students:
        if s["name"] == name:
            return s
    return None

print(get_student("小红"))`,
          solution: `def get_student(name):
    for s in students:
        if s["name"] == name:
            return s
    return None

print(get_student("小红"))`,
          type: 'advanced'
        },
        {
          id: 'ex2-10-adv-2',
          title: '导出报表',
          description: '将成绩单导出为 report.txt，每行 "name,avg"。',
          template: `with open("report.txt","w",encoding="utf-8") as f:
    for s in students:
        avg = avg_score(s)
        f.write(f"{s['name']},{avg:.1f}\\n")
print("已导出")`,
          solution: `with open("report.txt","w",encoding="utf-8") as f:
    for s in students:
        avg = avg_score(s)
        f.write(f"{s['name']},{avg:.1f}\\n")
print("已导出")`,
          type: 'advanced'
        }
      ],
      summary: '综合运用多种知识点，完成实用的管理系统项目'
    },
    {
      id: 'lesson2-summary',
      title: '第2阶段综合练习',
      objective: '综合复习第2阶段所有知识点',
      analogy: '像期中考试，检验进阶知识的掌握情况',
      codeExample: `# 综合练习示例
students = {
    '小明': {'math': 90, 'eng': 85, 'py': 92},
    '小红': {'math': 88, 'eng': 92, 'py': 95}
}

# 计算平均分并处理异常
try:
    for name, scores in students.items():
        avg = sum(scores.values()) / len(scores)
        status = '及格' if avg >= 60 else '不及格'
        print(f"{name} 平均分: {avg:.1f} {status}")
except Exception as e:
    print(f"计算出错: {e}")`,
      originalExercises: [
        {
          id: 'ex2-summary-1',
          title: '嵌套字典创建',
          description: '创建一个包含5个学生的嵌套字典，每个学生包含3门课程成绩',
          template: '# 创建嵌套字典\nstudents = {\n    "小明": {"math": 90, "eng": 85, "py": 92},\n    # 继续添加其他学生\n}\nprint("字典创建完成")',
          solution: 'students = {\n    "小明": {"math": 90, "eng": 85, "py": 92},\n    "小红": {"math": 88, "eng": 92, "py": 95},\n    "小刚": {"math": 76, "eng": 81, "py": 79},\n    "小李": {"math": 95, "eng": 89, "py": 90},\n    "小华": {"math": 82, "eng": 77, "py": 85}\n}\nprint("字典创建完成")',
          type: 'basic'
        },
        {
          id: 'ex2-summary-2',
          title: '平均分计算',
          description: '遍历输出每个学生平均分，并标注及格或不及格',
          template: '# 平均分计算\nfor name, scores in students.items():\n    avg = \n    status = \n    print(f"{name} 平均分: {avg} {status}")',
          solution: 'for name, scores in students.items():\n    avg = sum(scores.values()) / len(scores)\n    status = "及格" if avg >= 60 else "不及格"\n    print(f"{name} 平均分: {avg:.1f} {status}")',
          type: 'basic'
        },
        {
          id: 'ex2-summary-3',
          title: '学生排序',
          description: '根据平均分对学生进行排序输出',
          template: '# 学生排序\nsorted_students = sorted(students.items(), key=lambda x: )\nfor s in sorted_students:\n    avg = sum(s[1].values()) / len(s[1])\n    print(s[0], avg)',
          solution: 'sorted_students = sorted(students.items(), key=lambda x: sum(x[1].values())/len(x[1]), reverse=True)\nfor s in sorted_students:\n    avg = sum(s[1].values()) / len(s[1])\n    print(s[0], avg)',
          type: 'basic'
        },
        {
          id: 'ex2-summary-4',
          title: '最高分统计',
          description: '找出每门课程的最高分及对应学生',
          template: '# 最高分统计\nfor subject in ["math", "eng", "py"]:\n    max_score = \n    student_name = \n    print(f"{subject}最高分: {max_score} 学生: {student_name}")',
          solution: 'for subject in ["math", "eng", "py"]:\n    max_score = max(students[s][subject] for s in students)\n    student_name = [s for s in students if students[s][subject] == max_score]\n    print(f"{subject}最高分: {max_score} 学生: {student_name}")',
          type: 'basic'
        },
        {
          id: 'ex2-summary-5',
          title: '文件读取统计',
          description: '读取一个文件 student.txt，文件内容每行包含学生姓名及成绩，统计平均分',
          template: '# 文件读取统计\ntry:\n    with open("student.txt", "r", encoding="utf-8") as f:\n        total_score = 0\n        count = 0\n        for line in f:\n            # 处理每行数据\n            pass\n        print("文件中学生平均分:", total_score/count)\nexcept FileNotFoundError:\n    print("student.txt 文件不存在")',
          solution: 'try:\n    with open("student.txt", "r", encoding="utf-8") as f:\n        total_score = 0\n        count = 0\n        for line in f:\n            parts = line.strip().split(",")\n            scores = list(map(int, parts[1:]))\n            total_score += sum(scores) / len(scores)\n            count += 1\n        print("文件中学生平均分:", total_score/count)\nexcept FileNotFoundError:\n    print("student.txt 文件不存在")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex2-summary-adv-1',
          title: '成绩文件综合统计',
          description: '从 student.txt 读取多行，计算每行学生平均，输出Top-3。',
          template: `try:
    with open("student.txt","r",encoding="utf-8") as f:
        stats = []
        for line in f:
            parts = line.strip().split(",")
            name = parts[0]
            scores = list(map(int, parts[1:]))
            avg = sum(scores)/len(scores)
            stats.append((name, avg))
        stats.sort(key=lambda x: x[1], reverse=True)
        print(stats[:3])
except FileNotFoundError:
    print("student.txt 不存在")`,
          solution: `try:
    with open("student.txt","r",encoding="utf-8") as f:
        stats = []
        for line in f:
            parts = line.strip().split(",")
            name = parts[0]
            scores = list(map(int, parts[1:]))
            avg = sum(scores)/len(scores)
            stats.append((name, avg))
        stats.sort(key=lambda x: x[1], reverse=True)
        print(stats[:3])
except FileNotFoundError:
    print("student.txt 不存在")`,
          type: 'advanced'
        },
        {
          id: 'ex2-summary-adv-2',
          title: '异常与日志综合',
          description: '把读取与统计包进 try/except，失败写 error.log，并继续处理后续行。',
          template: `def process_lines(lines):
    ok = []
    for line in lines:
        try:
            parts = line.strip().split(",")
            name = parts[0]
            scores = list(map(int, parts[1:]))
            avg = sum(scores)/len(scores)
            ok.append((name, avg))
        except Exception as e:
            with open("error.log","a",encoding="utf-8") as lf:
                lf.write(str(e)+"\\n")
    return ok

print(process_lines(["张三,90,85,92","坏行,xx,yy"]))`,
          solution: `def process_lines(lines):
    ok = []
    for line in lines:
        try:
            parts = line.strip().split(",")
            name = parts[0]
            scores = list(map(int, parts[1:]))
            avg = sum(scores)/len(scores)
            ok.append((name, avg))
        except Exception as e:
            with open("error.log","a",encoding="utf-8") as lf:
                lf.write(str(e)+"\\n")
    return ok

print(process_lines(["张三,90,85,92","坏行,xx,yy"]))`,
          type: 'advanced'
        }
      ],
      summary: '第2阶段学习了Python进阶特性，包括字符串操作、文件处理、异常处理、模块使用、高级数据结构操作等，为更复杂的应用打下基础'
    }
  ]
}