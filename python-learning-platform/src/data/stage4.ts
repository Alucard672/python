// 第4阶段 - Python数据处理
import type { IStage } from '../types/Stage'

export const stage4: IStage = {
  id: 4,
  title: '第4阶段 · Python数据处理',
  description: '学习数据处理、分析和可视化技术',
  lessons: [
    {
      id: 'lesson4-1',
      title: 'NumPy基础：数值计算的利器',
      objective: '掌握NumPy数组基础操作，学会数组创建、索引、切片、运算',
      analogy: 'NumPy数组像Excel表格，但计算速度更快，功能更强大',
      codeExample: `import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)
print(arr + 10)

matrix = np.array([[1, 2], [3, 4]])
print(matrix.shape)
print(np.sum(matrix))`,
      originalExercises: [
        {
          id: 'ex4-1-1',
          title: '创建数组',
          description: '创建一维数组和二维数组',
          template: '# 创建数组\nimport numpy as np\narr1 = np.array([1, 2, 3, 4, 5])\narr2 = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr1)\nprint(arr2)',
          solution: 'import numpy as np\narr1 = np.array([1, 2, 3, 4, 5])\narr2 = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr1)\nprint(arr2)',
          type: 'basic'
        },
        {
          id: 'ex4-1-2',
          title: '数组运算',
          description: '对数组进行加减乘除运算',
          template: '# 数组运算\narr = np.array([1, 2, 3, 4, 5])\nprint(arr + 5)\nprint(arr * 2)\nprint(arr ** 2)',
          solution: 'arr = np.array([1, 2, 3, 4, 5])\nprint(arr + 5)\nprint(arr * 2)\nprint(arr ** 2)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-1-adv-1',
          title: '广播与布尔索引',
          description: '使用广播对二维数组每列加权，再用布尔索引提取大于阈值的元素',
          template: `# 广播与布尔索引
import numpy as np
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
w = np.array([1, 0.5, 2.0])   # 对列的权重
B = 
mask = 
print(B)
print(A[mask])`,
          solution: `import numpy as np
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
w = np.array([1, 0.5, 2.0])
B = A * w
mask = A > 5
print(B)
print(A[mask])`,
          type: 'advanced'
        },
        {
          id: 'ex4-1-adv-2',
          title: '向量化替代循环',
          description: '对长度为100000的随机数组执行归一化与截断，避免 Python 循环',
          template: `import numpy as np
x = np.random.rand(100000)
# 归一化到均值0方差1，并将值截断到[-2,2]
x_norm = 
x_clip = 
print(round(x_norm.mean(), 6), round(x_norm.std(), 6))
print(x_clip.min(), x_clip.max())`,
          solution: `import numpy as np
x = np.random.rand(100000)
x_norm = (x - x.mean()) / x.std()
x_clip = np.clip(x_norm, -2, 2)
print(round(x_norm.mean(), 6), round(x_norm.std(), 6))
print(x_clip.min(), x_clip.max())`,
          type: 'advanced'
        }
      ],
      summary: 'NumPy提供了高效的数值计算能力'
    },
    {
      id: 'lesson4-2',
      title: 'Pandas基础：数据分析神器',
      objective: '掌握Pandas DataFrame和Series，学会数据读取、筛选、统计',
      analogy: 'Pandas DataFrame像超级Excel，可以处理各种格式数据',
      codeExample: `import pandas as pd
data = {'name': ['小明', '小红', '小刚'], 'age': [18, 19, 17], 'score': [85, 92, 78]}
df = pd.DataFrame(data)
print(df)
print(df[df['age'] > 17])`,
      originalExercises: [
        {
          id: 'ex4-2-1',
          title: '创建DataFrame',
          description: '创建学生信息DataFrame',
          template: '# 创建DataFrame\nimport pandas as pd\ndata = {"name": ["小明", "小红", "小刚"], "age": [18, 19, 17], "score": [85, 92, 78]}\ndf = pd.DataFrame(data)\nprint(df)',
          solution: 'import pandas as pd\ndata = {"name": ["小明", "小红", "小刚"], "age": [18, 19, 17], "score": [85, 92, 78]}\ndf = pd.DataFrame(data)\nprint(df)',
          type: 'basic'
        },
        {
          id: 'ex4-2-2',
          title: '数据筛选',
          description: '筛选年龄大于17的学生',
          template: '# 数据筛选\nfiltered_df = df[df["age"] > 17]\nprint(filtered_df)',
          solution: 'filtered_df = df[df["age"] > 17]\nprint(filtered_df)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-2-adv-1',
          title: '分组聚合与多级索引',
          description: '将学生数据按班级与科目进行分组，计算均值与标准差并输出整洁表',
          template: `import pandas as pd
data = {'class':['A','A','B','B','B'], 'subject':['math','english','math','english','python'], 'score':[85,90,78,92,88]}
df = pd.DataFrame(data)
stats = 
print(stats)`,
          solution: `import pandas as pd
data = {'class':['A','A','B','B','B'], 'subject':['math','english','math','english','python'], 'score':[85,90,78,92,88]}
df = pd.DataFrame(data)
stats = df.groupby(['class','subject'])['score'].agg(['mean','std']).reset_index()
print(stats)`,
          type: 'advanced'
        },
        {
          id: 'ex4-2-adv-2',
          title: '缺失值与类型清洗',
          description: '将字符串数字列转为数值，处理缺失值并计算总体平均',
          template: `import pandas as pd
df = pd.DataFrame({'name':['小明','小红','小刚','小李'], 'score':['85','92',None,'78']})
df['score'] = 
df['score'] = df['score'].fillna(df['score'].mean())
print(df)
print('平均分:', df['score'].mean())`,
          solution: `import pandas as pd
df = pd.DataFrame({'name':['小明','小红','小刚','小李'], 'score':['85','92',None,'78']})
df['score'] = pd.to_numeric(df['score'], errors='coerce')
df['score'] = df['score'].fillna(df['score'].mean())
print(df)
print('平均分:', df['score'].mean())`,
          type: 'advanced'
        }
      ],
      summary: 'Pandas是数据分析的核心工具'
    },
    {
      id: 'lesson4-3',
      title: 'Matplotlib基础：数据可视化',
      objective: '掌握基本图表绘制，学会线图、柱状图、散点图',
      analogy: 'Matplotlib像画笔，把数据变成直观的图表',
      codeExample: `import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y)
plt.title('线性图')
plt.xlabel('X轴')
plt.ylabel('Y轴')
plt.show()`,
      originalExercises: [
        {
          id: 'ex4-3-1',
          title: '绘制线图',
          description: '绘制简单线图',
          template: '# 绘制线图\nimport matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [1, 4, 9, 16, 25]\nplt.plot(x, y)\nplt.title("平方数")\nplt.show()',
          solution: 'import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [1, 4, 9, 16, 25]\nplt.plot(x, y)\nplt.title("平方数")\nplt.show()',
          type: 'basic'
        },
        {
          id: 'ex4-3-2',
          title: '绘制柱状图',
          description: '绘制学生成绩柱状图',
          template: '# 绘制柱状图\nnames = ["小明", "小红", "小刚"]\nscores = [85, 92, 78]\nplt.bar(names, scores)\nplt.title("学生成绩")\nplt.show()',
          solution: 'names = ["小明", "小红", "小刚"]\nscores = [85, 92, 78]\nplt.bar(names, scores)\nplt.title("学生成绩")\nplt.show()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-3-adv-1',
          title: '图形美化与主题',
          description: '设置主题、网格与标签格式，提升图表可读性',
          template: `import matplotlib.pyplot as plt
plt.style.use('seaborn-v0_8')
x = [1,2,3,4,5]; y = [1,4,9,16,25]
plt.plot(x, y, marker='o', linewidth=2)
plt.title('平方函数', fontsize=14)
plt.xlabel('X'); plt.ylabel('Y')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`,
          solution: `import matplotlib.pyplot as plt
plt.style.use('seaborn-v0_8')
x = [1,2,3,4,5]; y = [1,4,9,16,25]
plt.plot(x, y, marker='o', linewidth=2)
plt.title('平方函数', fontsize=14)
plt.xlabel('X'); plt.ylabel('Y')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`,
          type: 'advanced'
        },
        {
          id: 'ex4-3-adv-2',
          title: '保存高分辨率图像',
          description: '将图像保存为300dpi的PNG并确保布局紧凑',
          template: `import matplotlib.pyplot as plt
x = [1,2,3,4,5]; y = [2,3,5,7,11]
plt.figure(figsize=(6,4))
plt.plot(x, y, 'g^-')
plt.title('质数近似增长')
# TODO: 保存文件
`,
          solution: `import matplotlib.pyplot as plt
x = [1,2,3,4,5]; y = [2,3,5,7,11]
plt.figure(figsize=(6,4))
plt.plot(x, y, 'g^-')
plt.title('质数近似增长')
plt.tight_layout()
plt.savefig('prime_growth.png', dpi=300)
`,
          type: 'advanced'
        }
      ],
      summary: 'Matplotlib让数据可视化变得简单'
    },
    {
      id: 'lesson4-4',
      title: 'CSV文件处理',
      objective: '掌握CSV文件读写，学会数据清洗和预处理',
      analogy: 'CSV文件像电子表格，Pandas可以轻松处理',
      codeExample: `import pandas as pd
df = pd.read_csv('data.csv')
print(df.head())
print(df.info())
df.to_csv('output.csv', index=False)`,
      originalExercises: [
        {
          id: 'ex4-4-1',
          title: '读取CSV',
          description: '读取CSV文件并查看基本信息',
          template: '# 读取CSV\nimport pandas as pd\n# df = pd.read_csv("students.csv")\n# print(df.head())\n# print(df.info())\nprint("CSV读取示例")',
          solution: 'import pandas as pd\n# df = pd.read_csv("students.csv")\n# print(df.head())\n# print(df.info())\nprint("CSV读取示例")',
          type: 'basic'
        },
        {
          id: 'ex4-4-2',
          title: '数据清洗',
          description: '处理缺失值和重复数据',
          template: '# 数据清洗\n# df_clean = df.dropna()  # 删除缺失值\n# df_clean = df.drop_duplicates()  # 删除重复值\nprint("数据清洗示例")',
          solution: '# df_clean = df.dropna()  # 删除缺失值\n# df_clean = df.drop_duplicates()  # 删除重复值\nprint("数据清洗示例")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-4-adv-1',
          title: '多CSV合并与去重',
          description: '将多份CSV合并为单个DataFrame，删除重复行并导出',
          template: `import pandas as pd
files = ['a.csv','b.csv']  # 假设存在
dfs = []
# TODO: 读取并合并为 df_all，去重后保存
`,
          solution: `import pandas as pd
files = ['a.csv','b.csv']
dfs = [pd.read_csv(f) for f in files]
df_all = pd.concat(dfs, ignore_index=True)
df_all = df_all.drop_duplicates()
# df_all.to_csv('merged.csv', index=False)
print('合并行数:', len(df_all))`,
          type: 'advanced'
        },
        {
          id: 'ex4-4-adv-2',
          title: '数据校验与异常值过滤',
          description: '对价格列做范围校验并过滤异常记录',
          template: `import pandas as pd
df = pd.DataFrame({'item':['A','B','C','D'], 'price':[99.9, -1, 1000000, 199.0]})
valid = 
print(valid)`,
          solution: `import pandas as pd
df = pd.DataFrame({'item':['A','B','C','D'], 'price':[99.9, -1, 1000000, 199.0]})
valid = df[(df['price'] >= 0) & (df['price'] <= 10000)]
print(valid)`,
          type: 'advanced'
        }
      ],
      summary: 'CSV是最常用的数据交换格式'
    },
    {
      id: 'lesson4-5',
      title: 'JSON数据处理',
      objective: '掌握JSON数据读写和解析，学会处理嵌套数据',
      analogy: 'JSON像字典嵌套结构，适合存储复杂数据',
      codeExample: `import json
data = {'name': '小明', 'scores': {'math': 90, 'english': 85}}
json_str = json.dumps(data, ensure_ascii=False)
print(json_str)

parsed_data = json.loads(json_str)
print(parsed_data['scores']['math'])`,
      originalExercises: [
        {
          id: 'ex4-5-1',
          title: 'JSON序列化',
          description: '将字典转换为JSON字符串',
          template: '# JSON序列化\nimport json\nstudent = {"name": "小明", "age": 18, "courses": ["数学", "英语", "Python"]}\njson_str = json.dumps(student, ensure_ascii=False)\nprint(json_str)',
          solution: 'import json\nstudent = {"name": "小明", "age": 18, "courses": ["数学", "英语", "Python"]}\njson_str = json.dumps(student, ensure_ascii=False)\nprint(json_str)',
          type: 'basic'
        },
        {
          id: 'ex4-5-2',
          title: 'JSON反序列化',
          description: '解析JSON字符串为Python对象',
          template: '# JSON反序列化\ndata = json.loads(json_str)\nprint(data["name"])\nprint(data["courses"])',
          solution: 'data = json.loads(json_str)\nprint(data["name"])\nprint(data["courses"])',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-5-adv-1',
          title: '嵌套JSON展开',
          description: '将嵌套的JSON字段展开为扁平列，便于分析',
          template: `import json, pandas as pd
data = [
  {"id":1,"user":{"name":"小明","age":18},"scores":{"math":90,"py":88}},
  {"id":2,"user":{"name":"小红","age":19},"scores":{"math":95,"py":92}}
]
df = 
print(df[['id','user.name','scores.py']])`,
          solution: `import json, pandas as pd
data = [
  {"id":1,"user":{"name":"小明","age":18},"scores":{"math":90,"py":88}},
  {"id":2,"user":{"name":"小红","age":19},"scores":{"math":95,"py":92}}
]
df = pd.json_normalize(data)
print(df[['id','user.name','scores.py']])`,
          type: 'advanced'
        },
        {
          id: 'ex4-5-adv-2',
          title: 'Schema校验与默认值',
          description: '对缺字段的JSON进行校验与填充默认值，保证后续处理稳定',
          template: `import json
items = [
  {"name":"A","price":99.9},
  {"name":"B"},  # 缺少 price
]
def normalize(item):
    price = item.get('price', 0.0)
    return {'name': item.get('name',''), 'price': float(price)}
normalized = [normalize(i) for i in items]
print(normalized)`,
          solution: `import json
items = [
  {"name":"A","price":99.9},
  {"name":"B"},
]
def normalize(item):
    price = item.get('price', 0.0)
    return {'name': item.get('name',''), 'price': float(price)}
normalized = [normalize(i) for i in items]
print(normalized)`,
          type: 'advanced'
        }
      ],
      summary: 'JSON是Web开发中最重要的数据格式'
    },
    {
      id: 'lesson4-6',
      title: '网络数据获取（requests）',
      objective: '掌握requests库使用，学会获取网络数据和API调用',
      analogy: 'requests像浏览器，可以自动获取网页数据',
      codeExample: `import requests
response = requests.get('https://api.github.com/users/octocat')
if response.status_code == 200:
    data = response.json()
    print(data['name'])`,
      originalExercises: [
        {
          id: 'ex4-6-1',
          title: 'GET请求',
          description: '发送GET请求获取数据',
          template: '# GET请求\nimport requests\n# response = requests.get("https://httpbin.org/get")\n# print(response.status_code)\n# print(response.json())\nprint("GET请求示例")',
          solution: 'import requests\n# response = requests.get("https://httpbin.org/get")\n# print(response.status_code)\n# print(response.json())\nprint("GET请求示例")',
          type: 'basic'
        },
        {
          id: 'ex4-6-2',
          title: 'POST请求',
          description: '发送POST请求提交数据',
          template: '# POST请求\n# data = {"key": "value"}\n# response = requests.post("https://httpbin.org/post", json=data)\n# print(response.json())\nprint("POST请求示例")',
          solution: '# data = {"key": "value"}\n# response = requests.post("https://httpbin.org/post", json=data)\n# print(response.json())\nprint("POST请求示例")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-6-adv-1',
          title: 'API请求与错误处理',
          description: '对API请求添加超时、重试与错误处理逻辑，健壮地解析JSON',
          template: `import requests
from time import sleep

def get_json(url, retries=3, timeout=5):
    for i in range(retries):
        try:
            resp = requests.get(url, timeout=timeout)
            resp.raise_for_status()
            return resp.json()
        except requests.RequestException as e:
            print(f"第{i+1}次失败: {e}")
            sleep(1)
    return None

data = get_json("https://httpbin.org/json")
print(type(data), bool(data))`,
          solution: `import requests
from time import sleep

def get_json(url, retries=3, timeout=5):
    for i in range(retries):
        try:
            resp = requests.get(url, timeout=timeout)
            resp.raise_for_status()
            return resp.json()
        except requests.RequestException as e:
            print(f"第{i+1}次失败: {e}")
            sleep(1)
    return None

data = get_json("https://httpbin.org/json")
print(type(data), bool(data))`,
          type: 'advanced'
        },
        {
          id: 'ex4-6-adv-2',
          title: '分页数据抓取与合并',
          description: '模拟分页API（page=1..3），抓取后合并为列表并统计总条数',
          template: `import requests

def fetch_page(page):
    # 真实场景: requests.get(f"https://api.example.com/items?page={page}")
    # 这里用 httpbin 模拟: 返回结构不完全一致，练习健壮解析
    resp = requests.get("https://httpbin.org/get", params={"page": page})
    return {"page": page, "ok": resp.status_code == 200}

pages = [fetch_page(p) for p in [1,2,3]]
print(pages)
print("总条数:", len(pages))`,
          solution: `import requests

def fetch_page(page):
    resp = requests.get("https://httpbin.org/get", params={"page": page})
    return {"page": page, "ok": resp.status_code == 200}

pages = [fetch_page(p) for p in [1,2,3]]
print(pages)
print("总条数:", len(pages))`,
          type: 'advanced'
        }
      ],
      summary: 'requests是Python网络请求的标准库'
    },
    {
      id: 'lesson4-7',
      title: '数据统计分析',
      objective: '掌握描述性统计，学会计算均值、中位数、标准差等',
      analogy: '统计分析像体检报告，全面了解数据健康状况',
      codeExample: `import pandas as pd
import numpy as np
data = [85, 92, 78, 90, 88, 76, 95, 82]
df = pd.DataFrame({'scores': data})
print(f"平均值: {df['scores'].mean()}")
print(f"中位数: {df['scores'].median()}")
print(f"标准差: {df['scores'].std()}")`,
      originalExercises: [
        {
          id: 'ex4-7-1',
          title: '基础统计',
          description: '计算数据的基础统计量',
          template: '# 基础统计\nimport pandas as pd\nscores = [85, 92, 78, 90, 88, 76, 95, 82, 89, 91]\ndf = pd.DataFrame({"scores": scores})\nprint("平均值:", df["scores"].mean())\nprint("中位数:", df["scores"].median())\nprint("最大值:", df["scores"].max())\nprint("最小值:", df["scores"].min())',
          solution: 'import pandas as pd\nscores = [85, 92, 78, 90, 88, 76, 95, 82, 89, 91]\ndf = pd.DataFrame({"scores": scores})\nprint("平均值:", df["scores"].mean())\nprint("中位数:", df["scores"].median())\nprint("最大值:", df["scores"].max())\nprint("最小值:", df["scores"].min())',
          type: 'basic'
        },
        {
          id: 'ex4-7-2',
          title: '数据分组统计',
          description: '按类别分组计算统计量',
          template: '# 数据分组统计\ndata = {"name": ["小明", "小红", "小刚", "小李"], "subject": ["数学", "英语", "数学", "英语"], "score": [85, 92, 78, 90]}\ndf = pd.DataFrame(data)\nprint(df.groupby("subject")["score"].mean())',
          solution: 'data = {"name": ["小明", "小红", "小刚", "小李"], "subject": ["数学", "英语", "数学", "英语"], "score": [85, 92, 78, 90]}\ndf = pd.DataFrame(data)\nprint(df.groupby("subject")["score"].mean())',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-7-adv-1',
          title: '分位数与异常值检测',
          description: '使用IQR方法检测并过滤异常值，输出清洗后统计',
          template: `import pandas as pd
import numpy as np
scores = pd.Series([85,92,78,90,88,76,95,82,200,3])
q1, q3 = scores.quantile([0.25, 0.75])
iqr = q3 - q1
lower = q1 - 1.5*iqr
upper = q3 + 1.5*iqr
clean = scores[(scores >= lower) & (scores <= upper)]
print("原始均值:", scores.mean())
print("清洗后均值:", clean.mean())`,
          solution: `import pandas as pd
import numpy as np
scores = pd.Series([85,92,78,90,88,76,95,82,200,3])
q1, q3 = scores.quantile([0.25, 0.75])
iqr = q3 - q1
lower = q1 - 1.5*iqr
upper = q3 + 1.5*iqr
clean = scores[(scores >= lower) & (scores <= upper)]
print("原始均值:", scores.mean())
print("清洗后均值:", clean.mean())`,
          type: 'advanced'
        },
        {
          id: 'ex4-7-adv-2',
          title: '标准化与相关性',
          description: '对两列数据进行Z-score标准化并计算皮尔逊相关系数',
          template: `import pandas as pd
import numpy as np
df = pd.DataFrame({'math':[85,92,78,90,88], 'python':[86,95,80,89,87]})
z = (df - df.mean()) / df.std()
corr = z['math'].corr(z['python'])
print("相关系数:", round(corr, 3))`,
          solution: `import pandas as pd
import numpy as np
df = pd.DataFrame({'math':[85,92,78,90,88], 'python':[86,95,80,89,87]})
z = (df - df.mean()) / df.std()
corr = z['math'].corr(z['python'])
print("相关系数:", round(corr, 3))`,
          type: 'advanced'
        }
      ],
      summary: '统计分析帮助我们理解数据特征'
    },
    {
      id: 'lesson4-8',
      title: '数据清洗与预处理',
      objective: '掌握数据清洗技术，学会处理缺失值、异常值、重复数据',
      analogy: '数据清洗像洗菜，去掉坏的部分，留下干净的数据',
      codeExample: `import pandas as pd
import numpy as np
df = pd.DataFrame({'A': [1, 2, np.nan, 4], 'B': [5, 6, 7, 8]})
print("原始数据:")
print(df)
print("\\n删除缺失值:")
print(df.dropna())
print("\\n填充缺失值:")
print(df.fillna(0))`,
      originalExercises: [
        {
          id: 'ex4-8-1',
          title: '处理缺失值',
          description: '处理DataFrame中的缺失值',
          template: '# 处理缺失值\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"name": ["小明", "小红", np.nan, "小李"], "age": [18, np.nan, 17, 19], "score": [85, 92, 78, np.nan]})\nprint("原始数据:")\nprint(df)\nprint("\\n删除含缺失值的行:")\nprint(df.dropna())\nprint("\\n用均值填充数值列缺失值:")\ndf["age"].fillna(df["age"].mean(), inplace=True)\ndf["score"].fillna(df["score"].mean(), inplace=True)\nprint(df)',
          solution: 'import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"name": ["小明", "小红", np.nan, "小李"], "age": [18, np.nan, 17, 19], "score": [85, 92, 78, np.nan]})\nprint("原始数据:")\nprint(df)\nprint("\\n删除含缺失值的行:")\nprint(df.dropna())\nprint("\\n用均值填充数值列缺失值:")\ndf["age"].fillna(df["age"].mean(), inplace=True)\ndf["score"].fillna(df["score"].mean(), inplace=True)\nprint(df)',
          type: 'basic'
        },
        {
          id: 'ex4-8-2',
          title: '处理重复数据',
          description: '识别和删除重复数据',
          template: '# 处理重复数据\ndf = pd.DataFrame({"name": ["小明", "小红", "小明", "小李"], "age": [18, 19, 18, 20]})\nprint("原始数据:")\nprint(df)\nprint("\\n重复数据:")\nprint(df[df.duplicated()])\nprint("\\n删除重复数据:")\nprint(df.drop_duplicates())',
          solution: 'df = pd.DataFrame({"name": ["小明", "小红", "小明", "小李"], "age": [18, 19, 18, 20]})\nprint("原始数据:")\nprint(df)\nprint("\\n重复数据:")\nprint(df[df.duplicated()])\nprint("\\n删除重复数据:")\nprint(df.drop_duplicates())',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-8-adv-1',
          title: '类别编码与缺失策略',
          description: '为类别列做 one-hot 编码，对数值列用中位数填充',
          template: `import pandas as pd
import numpy as np
df = pd.DataFrame({'city':['北京','上海',np.nan,'广州'],'age':[18,np.nan,17,20]})
df['age'] = df['age'].fillna(df['age'].median())
encoded = pd.get_dummies(df['city'], dummy_na=True, prefix='city')
out = pd.concat([df.drop(columns=['city']), encoded], axis=1)
print(out)`,
          solution: `import pandas as pd
import numpy as np
df = pd.DataFrame({'city':['北京','上海',np.nan,'广州'],'age':[18,np.nan,17,20]})
df['age'] = df['age'].fillna(df['age'].median())
encoded = pd.get_dummies(df['city'], dummy_na=True, prefix='city')
out = pd.concat([df.drop(columns=['city']), encoded], axis=1)
print(out)`,
          type: 'advanced'
        },
        {
          id: 'ex4-8-adv-2',
          title: 'Winsorize 截尾与标准化',
          description: '对数值列进行上下分位截尾，再进行Z-score标准化',
          template: `import pandas as pd
import numpy as np
s = pd.Series([1,2,3,4,5,100,200])
low, high = s.quantile([0.05, 0.95])
s_clip = s.clip(lower=low, upper=high)
z = (s_clip - s_clip.mean()) / s_clip.std()
print("截尾后:", s_clip.tolist())
print("标准化均值≈0:", round(float(z.mean()), 6))`,
          solution: `import pandas as pd
import numpy as np
s = pd.Series([1,2,3,4,5,100,200])
low, high = s.quantile([0.05, 0.95])
s_clip = s.clip(lower=low, upper=high)
z = (s_clip - s_clip.mean()) / s_clip.std()
print("截尾后:", s_clip.tolist())
print("标准化均值≈0:", round(float(z.mean()), 6))`,
          type: 'advanced'
        }
      ],
      summary: '数据清洗是数据分析的重要前置步骤'
    },
    {
      id: 'lesson4-9',
      title: '高级可视化技术',
      objective: '掌握多种图表类型，学会子图、样式设置、交互图表',
      analogy: '高级可视化像专业设计师，让图表更美观更有说服力',
      codeExample: `import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(2, 2, figsize=(10, 8))
x = np.linspace(0, 10, 100)

axes[0,0].plot(x, np.sin(x))
axes[0,0].set_title('正弦函数')

axes[0,1].bar(['A', 'B', 'C'], [1, 2, 3])
axes[0,1].set_title('柱状图')

axes[1,0].scatter(x[::10], np.cos(x[::10]))
axes[1,0].set_title('散点图')

axes[1,1].hist(np.random.randn(1000), bins=30)
axes[1,1].set_title('直方图')

plt.tight_layout()
plt.show()`,
      originalExercises: [
        {
          id: 'ex4-9-1',
          title: '子图绘制',
          description: '在一个图中绘制多个子图',
          template: '# 子图绘制\nimport matplotlib.pyplot as plt\nimport numpy as np\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\nx = [1, 2, 3, 4, 5]\ny1 = [1, 4, 9, 16, 25]\ny2 = [1, 2, 3, 4, 5]\naxes[0].plot(x, y1, "r-")\naxes[0].set_title("平方函数")\naxes[1].plot(x, y2, "b--")\naxes[1].set_title("线性函数")\nplt.show()',
          solution: 'import matplotlib.pyplot as plt\nimport numpy as np\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\nx = [1, 2, 3, 4, 5]\ny1 = [1, 4, 9, 16, 25]\ny2 = [1, 2, 3, 4, 5]\naxes[0].plot(x, y1, "r-")\naxes[0].set_title("平方函数")\naxes[1].plot(x, y2, "b--")\naxes[1].set_title("线性函数")\nplt.show()',
          type: 'basic'
        },
        {
          id: 'ex4-9-2',
          title: '散点图和直方图',
          description: '绘制散点图和直方图',
          template: '# 散点图和直方图\nimport matplotlib.pyplot as plt\nimport numpy as np\n# 散点图\nx = np.random.randn(100)\ny = np.random.randn(100)\nplt.figure(figsize=(12, 5))\nplt.subplot(1, 2, 1)\nplt.scatter(x, y, alpha=0.6)\nplt.title("散点图")\n# 直方图\nplt.subplot(1, 2, 2)\nplt.hist(np.random.randn(1000), bins=30, alpha=0.7)\nplt.title("直方图")\nplt.show()',
          solution: 'import matplotlib.pyplot as plt\nimport numpy as np\n# 散点图\nx = np.random.randn(100)\ny = np.random.randn(100)\nplt.figure(figsize=(12, 5))\nplt.subplot(1, 2, 1)\nplt.scatter(x, y, alpha=0.6)\nplt.title("散点图")\n# 直方图\nplt.subplot(1, 2, 2)\nplt.hist(np.random.randn(1000), bins=30, alpha=0.7)\nplt.title("直方图")\nplt.show()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-9-adv-1',
          title: '注释与标注',
          description: '在折线图中标注最大值位置与文本说明',
          template: `import matplotlib.pyplot as plt
y = [1,4,9,16,25,20,18]
x = list(range(len(y)))
plt.plot(x, y)
imax = y.index(max(y))
plt.scatter([x[imax]], [y[imax]], color='red')
plt.annotate('最大值', xy=(x[imax], y[imax]), xytext=(x[imax]+0.2, y[imax]+2),
             arrowprops=dict(arrowstyle='->'))
plt.title('标注示例')
plt.tight_layout()
plt.show()`,
          solution: `import matplotlib.pyplot as plt
y = [1,4,9,16,25,20,18]
x = list(range(len(y)))
plt.plot(x, y)
imax = y.index(max(y))
plt.scatter([x[imax]], [y[imax]], color='red')
plt.annotate('最大值', xy=(x[imax], y[imax]), xytext=(x[imax]+0.2, y[imax]+2),
             arrowprops=dict(arrowstyle='->'))
plt.title('标注示例')
plt.tight_layout()
plt.show()`,
          type: 'advanced'
        },
        {
          id: 'ex4-9-adv-2',
          title: '布局对比与导出',
          description: '创建2×2子图，比较不同风格并导出为PNG',
          template: `import matplotlib.pyplot as plt
import numpy as np
fig, axes = plt.subplots(2,2, figsize=(8,6))
x = np.linspace(0, 2*np.pi, 200)
axes[0,0].plot(x, np.sin(x), 'r-'); axes[0,0].set_title('sin')
axes[0,1].plot(x, np.cos(x), 'b--'); axes[0,1].set_title('cos')
axes[1,0].plot(x, np.tan(x), 'g:'); axes[1,0].set_title('tan (clip)')
axes[1,0].set_ylim(-2,2)
axes[1,1].hist(np.random.randn(1000), bins=30)
axes[1,1].set_title('hist')
plt.tight_layout()
# TODO: 保存
`,
          solution: `import matplotlib.pyplot as plt
import numpy as np
fig, axes = plt.subplots(2,2, figsize=(8,6))
x = np.linspace(0, 2*np.pi, 200)
axes[0,0].plot(x, np.sin(x), 'r-'); axes[0,0].set_title('sin')
axes[0,1].plot(x, np.cos(x), 'b--'); axes[0,1].set_title('cos')
axes[1,0].plot(x, np.tan(x), 'g:'); axes[1,0].set_title('tan (clip)')
axes[1,0].set_ylim(-2,2)
axes[1,1].hist(np.random.randn(1000), bins=30)
axes[1,1].set_title('hist')
plt.tight_layout()
plt.savefig('viz_grid.png', dpi=200)
`,
          type: 'advanced'
        }
      ],
      summary: '掌握多种可视化技术，让数据展示更专业'
    },
    {
      id: 'lesson4-10',
      title: '小项目实践：数据分析报告',
      objective: '综合应用数据处理、分析、可视化技术，完成一个完整的数据分析项目',
      analogy: '数据分析项目像写研究报告，从数据收集到结论展示',
      codeExample: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# 模拟学生成绩数据
np.random.seed(42)
students = []
for i in range(100):
    name = f"学生{i+1}"
    math = np.random.normal(80, 10)
    english = np.random.normal(75, 12)
    python = np.random.normal(85, 8)
    students.append({'name': name, 'math': math, 'english': english, 'python': python})

df = pd.DataFrame(students)
print("数据概览:")
print(df.describe())

# 可视化
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
df['math'].hist(bins=20, ax=axes[0,0])
axes[0,0].set_title('数学成绩分布')

df.boxplot(column=['math', 'english', 'python'], ax=axes[0,1])
axes[0,1].set_title('各科成绩箱线图')

plt.show()`,
      originalExercises: [
        {
          id: 'ex4-10-1',
          title: '数据生成与清洗',
          description: '生成模拟数据并进行清洗',
          template: '# 数据生成与清洗\nimport pandas as pd\nimport numpy as np\nnp.random.seed(42)\n# 生成100个学生的成绩数据\nstudents = []\nfor i in range(100):\n    name = f"学生{i+1}"\n    math = max(0, min(100, np.random.normal(80, 10)))\n    english = max(0, min(100, np.random.normal(75, 12)))\n    python = max(0, min(100, np.random.normal(85, 8)))\n    students.append({"name": name, "math": math, "english": english, "python": python})\ndf = pd.DataFrame(students)\nprint("数据形状:", df.shape)\nprint("数据概览:")\nprint(df.head())\nprint("\\n基础统计:")\nprint(df.describe())',
          solution: 'import pandas as pd\nimport numpy as np\nnp.random.seed(42)\n# 生成100个学生的成绩数据\nstudents = []\nfor i in range(100):\n    name = f"学生{i+1}"\n    math = max(0, min(100, np.random.normal(80, 10)))\n    english = max(0, min(100, np.random.normal(75, 12)))\n    python = max(0, min(100, np.random.normal(85, 8)))\n    students.append({"name": name, "math": math, "english": english, "python": python})\ndf = pd.DataFrame(students)\nprint("数据形状:", df.shape)\nprint("数据概览:")\nprint(df.head())\nprint("\\n基础统计:")\nprint(df.describe())',
          type: 'basic'
        },
        {
          id: 'ex4-10-2',
          title: '数据分析',
          description: '进行各种统计分析',
          template: '# 数据分析\n# 计算总分和平均分\ndf["total"] = df["math"] + df["english"] + df["python"]\ndf["average"] = df["total"] / 3\nprint("平均分统计:")\nprint(f"数学平均分: {df[\'math\'].mean():.2f}")\nprint(f"英语平均分: {df[\'english\'].mean():.2f}")\nprint(f"Python平均分: {df[\'python\'].mean():.2f}")\nprint(f"总平均分: {df[\'average\'].mean():.2f}")\n# 找出各科最高分\nprint("\\n各科最高分:")\nprint(f"数学最高分: {df[\'math\'].max():.2f}")\nprint(f"英语最高分: {df[\'english\'].max():.2f}")\nprint(f"Python最高分: {df[\'python\'].max():.2f}")',
          solution: '# 计算总分和平均分\ndf["total"] = df["math"] + df["english"] + df["python"]\ndf["average"] = df["total"] / 3\nprint("平均分统计:")\nprint(f"数学平均分: {df[\'math\'].mean():.2f}")\nprint(f"英语平均分: {df[\'english\'].mean():.2f}")\nprint(f"Python平均分: {df[\'python\'].mean():.2f}")\nprint(f"总平均分: {df[\'average\'].mean():.2f}")\n# 找出各科最高分\nprint("\\n各科最高分:")\nprint(f"数学最高分: {df[\'math\'].max():.2f}")\nprint(f"英语最高分: {df[\'english\'].max():.2f}")\nprint(f"Python最高分: {df[\'python\'].max():.2f}")',
          type: 'basic'
        },
        {
          id: 'ex4-10-3',
          title: '数据可视化',
          description: '创建多种图表展示数据',
          template: '# 数据可视化\nimport matplotlib.pyplot as plt\nplt.rcParams["font.sans-serif"] = ["Arial Unicode MS"]  # 支持中文\nfig, axes = plt.subplots(2, 2, figsize=(15, 12))\n# 各科成绩分布直方图\ndf["math"].hist(bins=20, ax=axes[0,0], alpha=0.7, color="red")\naxes[0,0].set_title("数学成绩分布")\naxes[0,0].set_xlabel("分数")\naxes[0,0].set_ylabel("人数")\n# 各科成绩箱线图\ndf[["math", "english", "python"]].boxplot(ax=axes[0,1])\naxes[0,1].set_title("各科成绩箱线图")\n# 总分排名前10\ntop10 = df.nlargest(10, "total")\naxes[1,0].bar(range(len(top10)), top10["total"])\naxes[1,0].set_title("总分前10名")\naxes[1,0].set_xlabel("排名")\naxes[1,0].set_ylabel("总分")\n# 各科平均分对比\nsubjects = ["math", "english", "python"]\navg_scores = [df[subject].mean() for subject in subjects]\naxes[1,1].bar(subjects, avg_scores, color=["red", "blue", "green"])\naxes[1,1].set_title("各科平均分对比")\naxes[1,1].set_ylabel("平均分")\nplt.tight_layout()\nplt.show()',
          solution: 'import matplotlib.pyplot as plt\nplt.rcParams["font.sans-serif"] = ["Arial Unicode MS"]  # 支持中文\nfig, axes = plt.subplots(2, 2, figsize=(15, 12))\n# 各科成绩分布直方图\ndf["math"].hist(bins=20, ax=axes[0,0], alpha=0.7, color="red")\naxes[0,0].set_title("数学成绩分布")\naxes[0,0].set_xlabel("分数")\naxes[0,0].set_ylabel("人数")\n# 各科成绩箱线图\ndf[["math", "english", "python"]].boxplot(ax=axes[0,1])\naxes[0,1].set_title("各科成绩箱线图")\n# 总分排名前10\ntop10 = df.nlargest(10, "total")\naxes[1,0].bar(range(len(top10)), top10["total"])\naxes[1,0].set_title("总分前10名")\naxes[1,0].set_xlabel("排名")\naxes[1,0].set_ylabel("总分")\n# 各科平均分对比\nsubjects = ["math", "english", "python"]\navg_scores = [df[subject].mean() for subject in subjects]\naxes[1,1].bar(subjects, avg_scores, color=["red", "blue", "green"])\naxes[1,1].set_title("各科平均分对比")\naxes[1,1].set_ylabel("平均分")\nplt.tight_layout()\nplt.show()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-10-adv-1',
          title: '数据管线封装',
          description: '将数据生成、清洗、统计与可视化封装为函数管线并返回报告字典',
          template: `import pandas as pd
import numpy as np

def generate(n=100, seed=42):
    np.random.seed(seed)
    data = {'math': np.random.normal(80,10,n),
            'english': np.random.normal(75,12,n),
            'python': np.random.normal(85,8,n)}
    return pd.DataFrame(data)

def clean(df):
    return df.clip(lower=0, upper=100)

def analyze(df):
    return df.describe()

def pipeline(n=100):
    df = generate(n)
    df = clean(df)
    summary = analyze(df)
    return {'shape': df.shape, 'summary': summary}

report = pipeline(50)
print(report['shape'])
print(report['summary'].round(2))`,
          solution: `import pandas as pd
import numpy as np

def generate(n=100, seed=42):
    np.random.seed(seed)
    data = {'math': np.random.normal(80,10,n),
            'english': np.random.normal(75,12,n),
            'python': np.random.normal(85,8,n)}
    return pd.DataFrame(data)

def clean(df):
    return df.clip(lower=0, upper=100)

def analyze(df):
    return df.describe()

def pipeline(n=100):
    df = generate(n)
    df = clean(df)
    summary = analyze(df)
    return {'shape': df.shape, 'summary': summary}

report = pipeline(50)
print(report['shape'])
print(report['summary'].round(2))`,
          type: 'advanced'
        },
        {
          id: 'ex4-10-adv-2',
          title: '导出报告与图像',
          description: '将统计结果保存为CSV，图表保存为PNG文件（示例代码保留保存语句注释）',
          template: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({'score':[80,85,90,70,95]})
summary = df.describe()
print(summary)
# 保存CSV
# summary.to_csv('summary.csv')
# 保存图像
plt.plot(df['score']); plt.title('成绩趋势'); plt.tight_layout()
# plt.savefig('trend.png', dpi=200)`,
          solution: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({'score':[80,85,90,70,95]})
summary = df.describe()
print(summary)
# summary.to_csv('summary.csv')
plt.plot(df['score']); plt.title('成绩趋势'); plt.tight_layout()
# plt.savefig('trend.png', dpi=200)`,
          type: 'advanced'
        }
      ],
      summary: '综合运用数据处理技术，完成完整的数据分析项目'
    },
    {
      id: 'lesson4-summary',
      title: '第4阶段综合练习',
      objective: '综合复习第4阶段所有知识点',
      analogy: '数据处理综合应用，从原始数据到洞察结论',
      codeExample: `# 综合练习示例
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 数据处理流程
data = pd.read_csv('sales_data.csv')  # 假设有销售数据
clean_data = data.dropna()  # 清洗数据
summary = clean_data.groupby('product')['sales'].sum()  # 统计分析
summary.plot(kind='bar')  # 可视化
plt.show()`,
      originalExercises: [
        {
          id: 'ex4-summary-1',
          title: 'NumPy数组操作',
          description: '创建数组并进行各种运算',
          template: '# NumPy数组操作\nimport numpy as np\n# 创建二维数组\narr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint("原始数组:")\nprint(arr)\nprint("数组形状:", arr.shape)\nprint("数组转置:")\nprint(arr.T)\nprint("每行求和:")\nprint(np.sum(arr, axis=1))\nprint("每列求和:")\nprint(np.sum(arr, axis=0))',
          solution: 'import numpy as np\n# 创建二维数组\narr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint("原始数组:")\nprint(arr)\nprint("数组形状:", arr.shape)\nprint("数组转置:")\nprint(arr.T)\nprint("每行求和:")\nprint(np.sum(arr, axis=1))\nprint("每列求和:")\nprint(np.sum(arr, axis=0))',
          type: 'basic'
        },
        {
          id: 'ex4-summary-2',
          title: 'Pandas数据分析',
          description: '使用Pandas分析学生成绩数据',
          template: '# Pandas数据分析\nimport pandas as pd\nimport numpy as np\n# 创建学生成绩数据\nnp.random.seed(42)\ndata = {\n    "name": [f"学生{i}" for i in range(1, 21)],\n    "class": np.random.choice(["A班", "B班", "C班"], 20),\n    "math": np.random.randint(60, 100, 20),\n    "english": np.random.randint(50, 95, 20),\n    "python": np.random.randint(70, 100, 20)\n}\ndf = pd.DataFrame(data)\nprint("数据概览:")\nprint(df.head())\nprint("\\n各班平均分:")\nprint(df.groupby("class")[["math", "english", "python"]].mean())\nprint("\\n各科最高分:")\nprint(df[["math", "english", "python"]].max())',
          solution: 'import pandas as pd\nimport numpy as np\n# 创建学生成绩数据\nnp.random.seed(42)\ndata = {\n    "name": [f"学生{i}" for i in range(1, 21)],\n    "class": np.random.choice(["A班", "B班", "C班"], 20),\n    "math": np.random.randint(60, 100, 20),\n    "english": np.random.randint(50, 95, 20),\n    "python": np.random.randint(70, 100, 20)\n}\ndf = pd.DataFrame(data)\nprint("数据概览:")\nprint(df.head())\nprint("\\n各班平均分:")\nprint(df.groupby("class")[["math", "english", "python"]].mean())\nprint("\\n各科最高分:")\nprint(df[["math", "english", "python"]].max())',
          type: 'basic'
        },
        {
          id: 'ex4-summary-3',
          title: '数据可视化综合',
          description: '创建多种图表展示数据分析结果',
          template: '# 数据可视化综合\nimport matplotlib.pyplot as plt\n# 设置中文字体\nplt.rcParams["font.sans-serif"] = ["Arial Unicode MS"]\n# 创建子图\nfig, axes = plt.subplots(2, 2, figsize=(15, 10))\n# 各科成绩分布\ndf["math"].hist(bins=15, ax=axes[0,0], alpha=0.7, color="red")\naxes[0,0].set_title("数学成绩分布")\n# 各班人数\ndf["class"].value_counts().plot(kind="bar", ax=axes[0,1], color=["blue", "green", "orange"])\naxes[0,1].set_title("各班人数分布")\naxes[0,1].tick_params(axis="x", rotation=0)\n# 各科平均分对比\nsubject_avg = df[["math", "english", "python"]].mean()\nsubject_avg.plot(kind="bar", ax=axes[1,0], color=["red", "blue", "green"])\naxes[1,0].set_title("各科平均分对比")\naxes[1,0].tick_params(axis="x", rotation=45)\n# 成绩散点图\naxes[1,1].scatter(df["math"], df["python"], alpha=0.6)\naxes[1,1].set_xlabel("数学成绩")\naxes[1,1].set_ylabel("Python成绩")\naxes[1,1].set_title("数学vs Python成绩散点图")\nplt.tight_layout()\nplt.show()',
          solution: 'import matplotlib.pyplot as plt\n# 设置中文字体\nplt.rcParams["font.sans-serif"] = ["Arial Unicode MS"]\n# 创建子图\nfig, axes = plt.subplots(2, 2, figsize=(15, 10))\n# 各科成绩分布\ndf["math"].hist(bins=15, ax=axes[0,0], alpha=0.7, color="red")\naxes[0,0].set_title("数学成绩分布")\n# 各班人数\ndf["class"].value_counts().plot(kind="bar", ax=axes[0,1], color=["blue", "green", "orange"])\naxes[0,1].set_title("各班人数分布")\naxes[0,1].tick_params(axis="x", rotation=0)\n# 各科平均分对比\nsubject_avg = df[["math", "english", "python"]].mean()\nsubject_avg.plot(kind="bar", ax=axes[1,0], color=["red", "blue", "green"])\naxes[1,0].set_title("各科平均分对比")\naxes[1,0].tick_params(axis="x", rotation=45)\n# 成绩散点图\naxes[1,1].scatter(df["math"], df["python"], alpha=0.6)\naxes[1,1].set_xlabel("数学成绩")\naxes[1,1].set_ylabel("Python成绩")\naxes[1,1].set_title("数学vs Python成绩散点图")\nplt.tight_layout()\nplt.show()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex4-summary-adv-1',
          title: '全流程：读取-清洗-分析-可视化',
          description: '用模拟数据完成从DataFrame创建到清洗、分组统计、图表展示的完整流程',
          template: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(0)
df = pd.DataFrame({
  'class': np.random.choice(['A','B','C'], 60),
  'math': np.random.randint(60, 100, 60),
  'english': np.random.randint(50, 95, 60),
  'python': np.random.randint(70, 100, 60)
})
# 清洗: clip 到 [0,100]
df = df.clip(lower=0, upper=100)
# 分组统计
group_avg = df.groupby('class')[['math','english','python']].mean()
print(group_avg.round(1))
# 可视化
group_avg.plot(kind='bar'); plt.tight_layout(); plt.show()`,
          solution: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(0)
df = pd.DataFrame({
  'class': np.random.choice(['A','B','C'], 60),
  'math': np.random.randint(60, 100, 60),
  'english': np.random.randint(50, 95, 60),
  'python': np.random.randint(70, 100, 60)
})
df = df.clip(lower=0, upper=100)
group_avg = df.groupby('class')[['math','english','python']].mean()
print(group_avg.round(1))
group_avg.plot(kind='bar'); plt.tight_layout(); plt.show()`,
          type: 'advanced'
        },
        {
          id: 'ex4-summary-adv-2',
          title: '性能对比：循环 vs 向量化',
          description: '比较使用 Python 循环与 NumPy 向量化在大数组上的性能差异（打印耗时对比）',
          template: `import numpy as np, time
x = np.random.rand(300000)
# 循环平方
t0 = time.time()
out_loop = [v*v for v in x]
t1 = time.time()
# 向量化平方
t2 = time.time()
out_vec = x * x
t3 = time.time()
print("循环耗时:", round(t1-t0, 4), "s")
print("向量化耗时:", round(t3-t2, 4), "s")`,
          solution: `import numpy as np, time
x = np.random.rand(300000)
t0 = time.time()
out_loop = [v*v for v in x]
t1 = time.time()
t2 = time.time()
out_vec = x * x
t3 = time.time()
print("循环耗时:", round(t1-t0, 4), "s")
print("向量化耗时:", round(t3-t2, 4), "s")`,
          type: 'advanced'
        }
      ],
      summary: '第4阶段学习了Python数据处理核心技术，包括NumPy、Pandas、Matplotlib等工具的使用，为数据科学应用打下基础'
    }
  ]
}