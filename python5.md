# 第5阶段 · Python项目实战与优化（前5课）

## 第1课 项目规划与需求分析

### 🎯 学习目标

* 学会分解项目需求
* 能设计模块化项目结构

### 🧠 生活类比

* 项目规划像装修房子，先画设计图，再确定每个房间功能

### 💻 代码示例

```python
# 模块化结构示例
# 文件夹结构
# project/
# ├─ main.py
# ├─ db_handler.py
# ├─ utils.py

# main.py
from db_handler import query_data
from utils import process_data

data = query_data()
result = process_data(data)
print(result)
```

### 🧩 练习题

1. 设计一个图书管理系统的模块结构
2. 分别写出每个模块职责

### 📝 参考答案

```python
# main.py: 启动程序, 调用其他模块
# db_handler.py: 数据库操作
# utils.py: 数据处理函数
# routes.py: Flask路由
```

---

## 第2课 日志与异常处理

### 🎯 学习目标

* 掌握 logging 模块
* 学会异常处理 try/except/finally

### 🧠 生活类比

* 日志就像工作日记，异常处理像遇到问题及时记录并处理

### 💻 代码示例

```python
import logging
logging.basicConfig(level=logging.INFO)

try:
    x = 10 / 0
except ZeroDivisionError as e:
    logging.error(f"出现错误: {e}")
finally:
    logging.info("程序结束")
```

### 🧩 练习题

1. 使用 logging 记录函数调用信息
2. 异常处理除零错误并打印日志

### 📝 参考答案

```python
logging.info("函数开始")
try:
    y = 5/0
except Exception as e:
    logging.error(e)
logging.info("函数结束")
```

---

## 第3课 性能优化基础

### 🎯 学习目标

* 掌握代码性能分析 timeit, cProfile
* 学会优化列表、字典操作

### 🧠 生活类比

* 性能优化像改良工作流程，提高效率

### 💻 代码示例

```python
import timeit
setup = "lst = list(range(1000))"
code = "[x**2 for x in lst]"
print(timeit.timeit(code, setup=setup, number=1000))
```

### 🧩 练习题

1. 比较列表推导和 for 循环的性能
2. 用字典优化查找速度

### 📝 参考答案

```python
# 列表推导快于for循环
# 字典查找 O(1) 比列表查找 O(n) 快
```

---

## 第4课 单元测试与调试

### 🎯 学习目标

* 掌握 unittest 模块
* 学会编写测试用例和调试程序

### 🧠 生活类比

* 单元测试像检查作业，发现问题及时修改

### 💻 代码示例

```python
import unittest

def add(a,b):
    return a+b

class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2,3),5)

if __name__ == '__main__':
    unittest.main()
```

### 🧩 练习题

1. 编写加法和减法的测试用例
2. 使用 assert 测试函数输出是否正确

### 📝 参考答案

```python
class TestMath(unittest.TestCase):
    def test_subtract(self):
        self.assertEqual(5-3,2)
```

---

## 第5课 小项目实战：学生信息管理系统

### 🎯 学习目标

* 综合应用 Flask、数据库、Pandas、日志
* 能完成一个可运行的学生信息管理系统

### 🧠 生活类比

* 学生信息系统像学校档案管理，每个学生信息完整存储并可查询

### 💻 代码示例

```python
from flask import Flask, request, jsonify
import sqlite3
import logging

logging.basicConfig(level=logging.INFO)
app = Flask(__name__)

conn = sqlite3.connect('students.db',check_same_thread=False)
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)')

@app.route('/add', methods=['POST'])
def add_student():
    data = request.get_json()
    c.execute('INSERT INTO student VALUES(?,?)',(data['name'],data['age']))
    conn.commit()
    logging.info(f"添加学生: {data['name']}")
    return jsonify({'status':'success'})

@app.route('/students')
def get_students():
    c.execute('SELECT * FROM student')
    students=c.fetchall()
    return jsonify(students)

if __name__=='__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 添加删除学生功能
2. 根据年龄查询学生
3. 添加日志记录每次操作
# 第5阶段 · Python项目实战与优化（第6~10课 + 阶段综合练习）

## 第6课 API开发基础

### 🎯 学习目标

* 掌握 Flask RESTful API 基础
* 能处理 GET/POST 请求并返回 JSON

### 🧠 生活类比

* API像服务窗口，客户端提交请求，服务端返回数据

### 💻 代码示例

```python
from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/api/student', methods=['GET','POST'])
def student_api():
    if request.method=='POST':
        data=request.get_json()
        return jsonify({'status':'added','data':data})
    return jsonify({'students':[{'name':'小明','age':18}]})

if __name__=='__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 创建 /api/add_student 接口接收 JSON 数据
2. 创建 /api/get_students 接口返回所有学生数据

### 📝 参考答案

```python
# 见上面示例
```

---

## 第7课 高级数据分析项目实战

### 🎯 学习目标

* 综合使用 Pandas、Matplotlib、Seaborn
* 完成数据分析报告自动生成

### 🧠 生活类比

* 数据分析就像市场调研，收集、分析、展示结果

### 💻 代码示例

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df=pd.read_csv('sales.csv')
df['total']=df['price']*df['quantity']
sns.barplot(x='product',y='total',data=df)
plt.show()
df.to_excel('sales_report.xlsx',index=False)
```

### 🧩 练习题

1. 读取销售数据，计算总额并生成报表
2. 绘制产品销售柱状图

### 📝 参考答案

```python
# 参考上面示例
```

---

## 第8课 自动化运维脚本实战

### 🎯 学习目标

* 使用 Python 自动化文件处理、备份、日志分析
* 学会定时任务与批量操作

### 🧠 生活类比

* 自动化运维就像家务机器人，按计划完成重复任务

### 💻 代码示例

```python
import os, shutil, datetime

source='logs/'
dest='backup/'
os.makedirs(dest,exist_ok=True)
for file in os.listdir(source):
    shutil.copy(os.path.join(source,file),os.path.join(dest,file))
print(f"备份完成: {datetime.datetime.now()}")
```

### 🧩 练习题

1. 自动备份指定文件夹
2. 统计日志文件中的错误条数

### 📝 参考答案

```python
# 文件备份
# 日志统计
count=0
for file in os.listdir('logs'):
    with open(os.path.join('logs',file)) as f:
        for line in f:
            if 'ERROR' in line:
                count+=1
print(count)
```

---

## 第9课 多线程与异步高级应用

### 🎯 学习目标

* 掌握 concurrent.futures 与 asyncio
* 完成多任务并发执行，提高性能

### 🧠 生活类比

* 同时做多件事，像同时煮饭和洗菜，提高效率

### 💻 代码示例

```python
import asyncio

async def task(name):
    print(f"{name}开始")
    await asyncio.sleep(2)
    print(f"{name}结束")

async def main():
    await asyncio.gather(task('A'),task('B'))

asyncio.run(main())
```

### 🧩 练习题

1. 创建3个异步任务同时执行
2. 使用 concurrent.futures 实现多线程下载

### 📝 参考答案

```python
# asyncio见上面示例
from concurrent.futures import ThreadPoolExecutor
import time

def download(file):
    time.sleep(2)
    print(f"下载完成: {file}")

with ThreadPoolExecutor(max_workers=3) as executor:
    executor.map(download,['file1','file2','file3'])
```

---

## 第10课 综合项目：自动化数据分析与报告系统

### 🎯 学习目标

* 综合前5阶段所学内容
* 构建可运行的自动化数据分析系统

### 🧠 生活类比

* 系统像学校报表生成器，自动整理、分析、生成报告并发送

### 💻 代码示例

```python
import pandas as pd
import matplotlib.pyplot as plt
import smtplib
from email.mime.text import MIMEText

# 读取数据
df=pd.read_csv('scores.csv')
summary=df.describe()
summary.to_excel('summary.xlsx')

# 可视化
plt.hist(df['math'])
plt.savefig('math_hist.png')

# 发送邮件
msg=MIMEText('数据分析报告已生成')
server=smtplib.SMTP('smtp.example.com',25)
server.login('user','password')
server.sendmail('user','to@example.com',msg.as_string())
server.quit()
```

### 🧩 练习题

1. 自动读取多份数据文件并合并
2. 生成统计报告和图表
3. 自动发送报告邮件

### 📝 参考答案

```python
# 参考上面示例, 可使用循环合并多份CSV
import glob
all_files=glob.glob('data/*.csv')
df=pd.concat([pd.read_csv(f) for f in all_files])
df.to_excel('merged_report.xlsx',index=False)
```

---

## 第5阶段综合练习题

### 🧩 练习题

1. 使用 Flask 创建 RESTful API 接口
2. 完成数据分析项目生成报表并绘图
3. 编写自动化运维脚本备份日志
4. 使用多线程/异步执行批量任务
5. 综合构建自动化数据分析与报告系统

### 📝 参考答案

```python
# 参考各课示例, 综合应用
```
