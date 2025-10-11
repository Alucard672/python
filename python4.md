# 第4阶段 · Python高级实战（前5课）

## 第1课 数据分析基础：Pandas入门

### 🎯 学习目标

* 掌握 Pandas DataFrame 和 Series
* 学会基本数据读取、查看和统计

### 🧠 生活类比

* 数据表就像电子表格，每一列是特征，每一行是样本

### 💻 代码示例

```python
import pandas as pd

data = {'姓名':['小明','小红','小刚'],'年龄':[18,19,17]}
df = pd.DataFrame(data)
print(df)
print(df['年龄'].mean())
```

### 🧩 练习题

1. 创建DataFrame，计算平均年龄
2. 按年龄排序输出

### 📝 参考答案

```python
df = pd.DataFrame({'姓名':['张三','李四'],'年龄':[20,22]})
print(df['年龄'].mean())
print(df.sort_values(by='年龄'))
```

---

## 第2课 数据清洗与处理

### 🎯 学习目标

* 掌握缺失值处理、重复值处理、数据类型转换

### 🧠 生活类比

* 数据就像菜市场的蔬菜，坏的要挑掉，才能做成美味菜肴

### 💻 代码示例

```python
df = pd.DataFrame({'姓名':['小明','小红','小明'],'年龄':[18,None,18]})
df = df.drop_duplicates()
df['年龄'] = df['年龄'].fillna(df['年龄'].mean())
print(df)
```

### 🧩 练习题

1. 删除重复行
2. 填充缺失值为平均数

### 📝 参考答案

```python
df = df.drop_duplicates()
df['年龄'] = df['年龄'].fillna(df['年龄'].mean())
```

---

## 第3课 数据可视化基础：Matplotlib

### 🎯 学习目标

* 掌握基本绘图方法：折线图、柱状图、散点图

### 🧠 生活类比

* 图表就像考试成绩单，更直观地展示信息

### 💻 代码示例

```python
import matplotlib.pyplot as plt

x = [1,2,3,4,5]
y = [10,12,8,15,7]
plt.plot(x,y,label='折线')
plt.bar(x,y,label='柱状')
plt.legend()
plt.show()
```

### 🧩 练习题

1. 绘制折线图显示学生成绩变化
2. 绘制柱状图比较班级平均成绩

### 📝 参考答案

```python
plt.plot([1,2,3],[90,85,88])
plt.show()
plt.bar(['班级A','班级B'],[85,88])
plt.show()
```

---

## 第4课 自动化脚本基础

### 🎯 学习目标

* 掌握 os、shutil、subprocess 模块操作文件和执行命令

### 🧠 生活类比

* 自动化脚本就像家务机器人，可以自动整理文件和执行任务

### 💻 代码示例

```python
import os, shutil

os.makedirs('test_folder', exist_ok=True)
with open('test_folder/test.txt','w') as f:
    f.write('Hello World')
shutil.copy('test_folder/test.txt','test_folder/test_copy.txt')
```

### 🧩 练习题

1. 创建文件夹并写入内容
2. 复制文件、删除文件

### 📝 参考答案

```python
import os, shutil
os.makedirs('folder1', exist_ok=True)
with open('folder1/file1.txt','w') as f: f.write('内容')
shutil.copy('folder1/file1.txt','folder1/file2.txt')
os.remove('folder1/file2.txt')
```

---

## 第5课 网络爬虫基础：requests + BeautifulSoup

### 🎯 学习目标

* 掌握 requests 获取网页内容
* 使用 BeautifulSoup 解析 HTML

### 🧠 生活类比

* 爬虫像在图书馆快速查找资料，自动帮你提取需要的信息

### 💻 代码示例

```python
import requests
from bs4 import BeautifulSoup

url = 'https://www.example.com'
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
print(soup.title.text)
```

### 🧩 练习题

1. 获取网页标题
2. 提取所有链接

### 📝 参考答案

```python
links = [a['href'] for a in soup.find_all('a')]
print(links)
```
# 第4阶段 · Python高级实战（第6~10课 + 阶段综合练习）

## 第6课 Excel与CSV数据处理

### 🎯 学习目标

* 掌握 pandas 读取和写入 Excel/CSV 文件
* 能进行数据增删改查

### 🧠 生活类比

* Excel/CSV 就像账本，方便我们整理、统计信息

### 💻 代码示例

```python
import pandas as pd

df = pd.read_csv('data.csv')
df['总分'] = df['语文'] + df['数学'] + df['英语']
df.to_excel('output.xlsx', index=False)
```

### 🧩 练习题

1. 读取CSV文件并添加新列
2. 保存为Excel文件并验证内容

### 📝 参考答案

```python
df = pd.read_csv('scores.csv')
df['平均分'] = df[['语文','数学','英语']].mean(axis=1)
df.to_excel('scores_output.xlsx', index=False)
```

---

## 第7课 高级可视化：Seaborn与Plotly

### 🎯 学习目标

* 使用 Seaborn 画热力图、箱线图等
* 使用 Plotly 创建交互式图表

### 🧠 生活类比

* 可视化让数据更生动，像天气图表更直观

### 💻 代码示例

```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

df = pd.DataFrame({'A':[1,2,3],'B':[4,5,6]})
sns.heatmap(df, annot=True)
plt.show()
```

### 🧩 练习题

1. 绘制箱线图分析成绩分布
2. 用Plotly绘制交互式折线图

### 📝 参考答案

```python
import plotly.express as px
fig = px.line(df, x='A', y='B')
fig.show()
```

---

## 第8课 自动化办公实战：邮件与Excel操作

### 🎯 学习目标

* 使用 openpyxl 操作Excel
* 使用 smtplib 发送邮件

### 🧠 生活类比

* 自动办公就像私人助理，帮你整理报表并发送邮件

### 💻 代码示例

```python
import openpyxl, smtplib

wb = openpyxl.Workbook()
ws = wb.active
ws['A1'] = '姓名'
ws['B1'] = '成绩'
wb.save('report.xlsx')

server = smtplib.SMTP('smtp.example.com',25)
server.login('user@example.com','password')
server.sendmail('user@example.com','to@example.com','Hello')
server.quit()
```

### 🧩 练习题

1. 创建Excel文件写入数据
2. 发送邮件并附加Excel文件

### 📝 参考答案

```python
# Excel
wb = openpyxl.Workbook()
ws = wb.active
ws.append(['小明',90])
wb.save('test.xlsx')
# 邮件
import smtplib
from email.mime.text import MIMEText
msg = MIMEText('内容')
server = smtplib.SMTP('smtp.example.com',25)
server.login('user@example.com','password')
server.sendmail('user@example.com','to@example.com',msg.as_string())
server.quit()
```

---

## 第9课 Web开发实战：Flask高级

### 🎯 学习目标

* 掌握模板渲染、表单处理、路由参数

### 🧠 生活类比

* 模板渲染像厨房食谱，根据不同原料生成不同菜品

### 💻 代码示例

```python
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/form', methods=['GET','POST'])
def form():
    if request.method == 'POST':
        name = request.form['name']
        return f'Hello {name}'
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 创建登录表单并验证输入
2. 根据用户输入显示不同页面

### 📝 参考答案

```python
# Flask 表单
@app.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':
        user=request.form['user']
        return f'欢迎 {user}'
    return render_template('login.html')
```

---

## 第10课 高级爬虫与数据存储

### 🎯 学习目标

* 使用 requests + BeautifulSoup + pandas 存储爬取数据
* 学会处理翻页和批量数据爬取

### 🧠 生活类比

* 高级爬虫像专业图书管理员，可以快速搜集、整理大量信息

### 💻 代码示例

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd

url='https://example.com/page1'
r=requests.get(url)
soup=BeautifulSoup(r.text,'html.parser')
data=[]
for item in soup.select('.item'):
    data.append({'title':item.text})
df=pd.DataFrame(data)
df.to_csv('data.csv',index=False)
```

### 🧩 练习题

1. 爬取多页数据并合并到一个CSV文件
2. 提取指定字段保存到Excel

### 📝 参考答案

```python
all_data=[]
for i in range(1,6):
    r=requests.get(f'https://example.com/page{i}')
    soup=BeautifulSoup(r.text,'html.parser')
    for item in soup.select('.item'):
        all_data.append({'title':item.text})
df=pd.DataFrame(all_data)
df.to_csv('all_data.csv',index=False)
```

---

## 第4阶段综合练习题

### 🧩 练习题

1. 使用 Pandas 读取 CSV 文件并计算平均值
2. 绘制学生成绩分布箱线图
3. 使用 openpyxl 写入 Excel 并发送邮件
4. 使用 Flask 创建表单输入页面并显示结果
5. 爬取网页多页数据，整理并保存为 CSV 文件

### 📝 参考答案

```python
# 1. Pandas
import pandas as pd
df=pd.read_csv('scores.csv')
print(df.mean())

# 2. Matplotlib/Seaborn
import seaborn as sns
sns.boxplot(df['语文'])

# 3. Excel+邮件
import openpyxl, smtplib
wb=openpyxl.Workbook()
wb.active.append(['小明',90])
wb.save('report.xlsx')

# 邮件发送省略

# 4. Flask
@app.route('/form',methods=['GET','POST'])
def form():
    if request.method=='POST':
        return f"输入内容: {request.form['data']}"
    return render_template('form.html')

# 5. 爬虫
import requests, pandas as pd
from bs4 import BeautifulSoup
all_data=[]
for i in range(1,6):
    r=requests.get(f'https://example.com/page{i}')
    soup=BeautifulSoup(r.text,'html.parser')
    for item in soup.select('.item'):
        all_data.append({'title':item.text})
df=pd.DataFrame(all_data)
df.to_csv('all_data.csv',index=False)
```
