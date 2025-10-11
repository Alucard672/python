// 第5阶段 - Python实战项目
import type { IStage } from '../types/Stage'

export const stage5: IStage = {
  id: 5,
  title: '第5阶段 · Python实战项目',
  description: '通过实际项目掌握Python综合应用能力',
  lessons: [
    {
      id: 'lesson5-1',
      title: '爬虫基础：获取网络数据',
      objective: '掌握BeautifulSoup和requests，学会解析HTML，获取网页数据',
      analogy: '爬虫像勤劳的蜜蜂，自动从网站采集需要的信息',
      codeExample: `import requests
from bs4 import BeautifulSoup

url = 'https://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
titles = soup.find_all('h1')
for title in titles:
    print(title.text)`,
      originalExercises: [
        {
          id: 'ex5-1-1',
          title: '解析HTML',
          description: '使用BeautifulSoup解析HTML内容',
          template: '# 解析HTML\nfrom bs4 import BeautifulSoup\nhtml = "<html><body><h1>标题1</h1><h1>标题2</h1></body></html>"\nsoup = BeautifulSoup(html, "html.parser")\nh1_tags = soup.find_all("h1")\nfor tag in h1_tags:\n    print(tag.text)',
          solution: 'from bs4 import BeautifulSoup\nhtml = "<html><body><h1>标题1</h1><h1>标题2</h1></body></html>"\nsoup = BeautifulSoup(html, "html.parser")\nh1_tags = soup.find_all("h1")\nfor tag in h1_tags:\n    print(tag.text)',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '网络爬虫是自动化数据收集的重要工具'
    },
    {
      id: 'lesson5-2',
      title: 'GUI程序开发（Tkinter）',
      objective: '掌握Tkinter基础，学会创建窗口、按钮、文本框等控件',
      analogy: 'GUI像房屋装修，让程序有美观的界面供用户操作',
      codeExample: `import tkinter as tk

def on_click():
    print("按钮被点击了!")

root = tk.Tk()
root.title("我的程序")
button = tk.Button(root, text="点击我", command=on_click)
button.pack()
root.mainloop()`,
      originalExercises: [
        {
          id: 'ex5-2-1',
          title: '简单计算器',
          description: '创建一个简单的加法计算器',
          template: '# 简单计算器\nimport tkinter as tk\n\ndef calculate():\n    num1 = float(entry1.get())\n    num2 = float(entry2.get())\n    result = num1 + num2\n    result_label.config(text=f"结果: {result}")\n\nroot = tk.Tk()\nentry1 = tk.Entry(root)\nentry1.pack()\nentry2 = tk.Entry(root)\nentry2.pack()\ntk.Button(root, text="计算", command=calculate).pack()\nresult_label = tk.Label(root, text="结果: ")\nresult_label.pack()\nroot.mainloop()',
          solution: 'import tkinter as tk\n\ndef calculate():\n    num1 = float(entry1.get())\n    num2 = float(entry2.get())\n    result = num1 + num2\n    result_label.config(text=f"结果: {result}")\n\nroot = tk.Tk()\nentry1 = tk.Entry(root)\nentry1.pack()\nentry2 = tk.Entry(root)\nentry2.pack()\ntk.Button(root, text="计算", command=calculate).pack()\nresult_label = tk.Label(root, text="结果: ")\nresult_label.pack()\nroot.mainloop()',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: 'Tkinter让Python程序拥有图形界面'
    },
    {
      id: 'lesson5-3',
      title: 'API开发基础（FastAPI）',
      objective: '掌握FastAPI框架，学会创建REST API接口',
      analogy: 'API像餐厅服务员，接收请求并返回对应的数据',
      codeExample: `from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}`,
      originalExercises: [
        {
          id: 'ex5-3-1',
          title: '学生信息API',
          description: '创建学生信息的增删改查API',
          template: '# 学生信息API\nfrom fastapi import FastAPI\napp = FastAPI()\nstudents = []\n\n@app.post("/students/")\ndef create_student(name: str, age: int):\n    student = {"name": name, "age": age}\n    students.append(student)\n    return student\n\n@app.get("/students/")\ndef get_students():\n    return students',
          solution: 'from fastapi import FastAPI\napp = FastAPI()\nstudents = []\n\n@app.post("/students/")\ndef create_student(name: str, age: int):\n    student = {"name": name, "age": age}\n    students.append(student)\n    return student\n\n@app.get("/students/")\ndef get_students():\n    return students',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: 'FastAPI是现代Python Web API开发的首选框架'
    },
    {
      id: 'lesson5-4',
      title: '自动化脚本开发',
      objective: '掌握文件操作自动化，学会批量处理和定时任务',
      analogy: '自动化脚本像机器人助手，帮你完成重复性工作',
      codeExample: `import os
import shutil

def backup_files(source, destination):
    shutil.copytree(source, destination)
    print(f"备份完成: {destination}")

# 使用示例
# backup_files("/source", "/backup")`,
      originalExercises: [
        {
          id: 'ex5-4-1',
          title: '文件整理脚本',
          description: '按文件类型自动整理文件夹',
          template: '# 文件整理脚本\nimport os\n\ndef organize_files(folder):\n    for filename in os.listdir(folder):\n        if filename.endswith(".txt"):\n            print(f"文本文件: {filename}")\n        elif filename.endswith(".jpg"):\n            print(f"图片文件: {filename}")\n\n# organize_files("/path/to/folder")\nprint("文件整理脚本已定义")',
          solution: 'import os\n\ndef organize_files(folder):\n    for filename in os.listdir(folder):\n        if filename.endswith(".txt"):\n            print(f"文本文件: {filename}")\n        elif filename.endswith(".jpg"):\n            print(f"图片文件: {filename}")\n\n# organize_files("/path/to/folder")\nprint("文件整理脚本已定义")',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '自动化脚本大大提高工作效率'
    },
    {
      id: 'lesson5-5',
      title: '机器学习入门（scikit-learn）',
      objective: '掌握sklearn基础，学会简单的分类和回归模型',
      analogy: '机器学习像教小孩识别图片，通过大量例子让电脑学会规律',
      codeExample: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

model = LinearRegression()
model.fit(X, y)
prediction = model.predict([[5]])
print(f"预测结果: {prediction[0]}")`,
      originalExercises: [
        {
          id: 'ex5-5-1',
          title: '线性回归预测',
          description: '使用线性回归预测房价',
          template: '# 线性回归预测房价\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n\narea = np.array([[50], [100], [150], [200]])\nprice = np.array([200, 400, 600, 800])\n\nmodel = LinearRegression()\nmodel.fit(area, price)\nprediction = model.predict([[120]])\nprint(f"120平米房价预测: {prediction[0]}万")',
          solution: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\narea = np.array([[50], [100], [150], [200]])\nprice = np.array([200, 400, 600, 800])\n\nmodel = LinearRegression()\nmodel.fit(area, price)\nprediction = model.predict([[120]])\nprint(f"120平米房价预测: {prediction[0]}万")',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '机器学习让程序具备预测能力'
    },
    {
      id: 'lesson5-6',
      title: '图像处理基础（PIL）',
      objective: '掌握PIL库基础，学会图像的打开、处理、保存',
      analogy: '图像处理像PS软件，可以调整图片大小、颜色、效果',
      codeExample: `from PIL import Image

# 打开图像
img = Image.open('example.jpg')
print(f"图像尺寸: {img.size}")

# 调整大小
resized = img.resize((200, 200))
resized.save('resized.jpg')`,
      originalExercises: [
        {
          id: 'ex5-6-1',
          title: '图像处理',
          description: '调整图像大小并转换格式',
          template: '# 图像处理\nfrom PIL import Image\n\n# 创建一个简单的图像\nimg = Image.new("RGB", (100, 100), color="red")\nprint(f"原始尺寸: {img.size}")\n\n# 调整大小\nresized = img.resize((50, 50))\nprint(f"调整后尺寸: {resized.size}")\n\n# 保存图像\n# resized.save("output.png")\nprint("图像处理完成")',
          solution: 'from PIL import Image\n\n# 创建一个简单的图像\nimg = Image.new("RGB", (100, 100), color="red")\nprint(f"原始尺寸: {img.size}")\n\n# 调整大小\nresized = img.resize((50, 50))\nprint(f"调整后尺寸: {resized.size}")\n\n# 保存图像\n# resized.save("output.png")\nprint("图像处理完成")',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '图像处理在多媒体应用中非常重要'
    },
    {
      id: 'lesson5-7',
      title: '邮件发送自动化',
      objective: '掌握smtplib使用，学会发送文本和HTML邮件',
      analogy: '邮件自动化像邮递员，可以批量发送通知邮件',
      codeExample: `import smtplib
from email.mime.text import MIMEText

def send_email(subject, body, to_email):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['To'] = to_email
    
    # 这里需要配置SMTP服务器
    print(f"邮件已准备发送给: {to_email}")`,
      originalExercises: [
        {
          id: 'ex5-7-1',
          title: '邮件发送',
          description: '发送简单文本邮件',
          template: '# 邮件发送\nfrom email.mime.text import MIMEText\n\ndef create_email(subject, body, to_email):\n    msg = MIMEText(body)\n    msg["Subject"] = subject\n    msg["To"] = to_email\n    msg["From"] = "sender@example.com"\n    return msg\n\n# 创建邮件\nemail = create_email("测试邮件", "这是测试内容", "recipient@example.com")\nprint("邮件对象已创建")\nprint(f"主题: {email[\'Subject\']}")',
          solution: 'from email.mime.text import MIMEText\n\ndef create_email(subject, body, to_email):\n    msg = MIMEText(body)\n    msg["Subject"] = subject\n    msg["To"] = to_email\n    msg["From"] = "sender@example.com"\n    return msg\n\n# 创建邮件\nemail = create_email("测试邮件", "这是测试内容", "recipient@example.com")\nprint("邮件对象已创建")\nprint(f"主题: {email[\'Subject\']}")',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '邮件自动化提高沟通效率'
    },
    {
      id: 'lesson5-8',
      title: '定时任务（schedule）',
      objective: '掌握schedule库，学会创建定时执行的任务',
      analogy: '定时任务像闹钟，可以在指定时间自动执行操作',
      codeExample: `import schedule
import time

def job():
    print("定时任务执行中...")

schedule.every(10).seconds.do(job)
schedule.every().hour.do(job)
schedule.every().day.at("10:30").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)`,
      originalExercises: [
        {
          id: 'ex5-8-1',
          title: '定时任务',
          description: '创建每分钟执行的任务',
          template: '# 定时任务\nimport schedule\nimport time\nfrom datetime import datetime\n\ndef backup_task():\n    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    print(f"执行备份任务: {current_time}")\n\n# 每分钟执行一次\nschedule.every(1).minutes.do(backup_task)\n\nprint("定时任务已设置，每分钟执行一次")\n# 在实际使用中需要运行循环:\n# while True:\n#     schedule.run_pending()\n#     time.sleep(1)',
          solution: 'import schedule\nimport time\nfrom datetime import datetime\n\ndef backup_task():\n    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    print(f"执行备份任务: {current_time}")\n\n# 每分钟执行一次\nschedule.every(1).minutes.do(backup_task)\n\nprint("定时任务已设置，每分钟执行一次")\n# 在实际使用中需要运行循环:\n# while True:\n#     schedule.run_pending()\n#     time.sleep(1)',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '定时任务实现工作自动化'
    },
    {
      id: 'lesson5-9',
      title: '配置文件处理',
      objective: '掌握configparser使用，学会读写配置文件',
      analogy: '配置文件像设置面板，存储程序的各种参数',
      codeExample: `import configparser

config = configparser.ConfigParser()
config['DATABASE'] = {
    'host': 'localhost',
    'port': '3306',
    'username': 'admin'
}

with open('config.ini', 'w') as f:
    config.write(f)

# 读取配置
config.read('config.ini')
host = config['DATABASE']['host']
print(f"数据库主机: {host}")`,
      originalExercises: [
        {
          id: 'ex5-9-1',
          title: '配置文件管理',
          description: '创建和读取应用配置',
          template: '# 配置文件管理\nimport configparser\n\n# 创建配置\nconfig = configparser.ConfigParser()\nconfig["APP"] = {\n    "name": "我的应用",\n    "version": "1.0.0",\n    "debug": "True"\n}\n\nconfig["SERVER"] = {\n    "host": "localhost",\n    "port": "8000"\n}\n\n# 写入配置文件\nwith open("app_config.ini", "w", encoding="utf-8") as f:\n    config.write(f)\n\nprint("配置文件已创建")\n\n# 读取配置\nconfig.read("app_config.ini", encoding="utf-8")\napp_name = config["APP"]["name"]\nserver_port = config["SERVER"]["port"]\nprint(f"应用名称: {app_name}")\nprint(f"服务器端口: {server_port}")',
          solution: 'import configparser\n\n# 创建配置\nconfig = configparser.ConfigParser()\nconfig["APP"] = {\n    "name": "我的应用",\n    "version": "1.0.0",\n    "debug": "True"\n}\n\nconfig["SERVER"] = {\n    "host": "localhost",\n    "port": "8000"\n}\n\n# 写入配置文件\nwith open("app_config.ini", "w", encoding="utf-8") as f:\n    config.write(f)\n\nprint("配置文件已创建")\n\n# 读取配置\nconfig.read("app_config.ini", encoding="utf-8")\napp_name = config["APP"]["name"]\nserver_port = config["SERVER"]["port"]\nprint(f"应用名称: {app_name}")\nprint(f"服务器端口: {server_port}")',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '配置文件让程序更灵活易维护'
    },
    {
      id: 'lesson5-10',
      title: '综合项目：个人助手系统',
      objective: '综合应用各种技术，开发一个完整的个人助手系统',
      analogy: '个人助手系统像智能管家，集成多种功能服务日常生活',
      codeExample: `# 个人助手系统框架
class PersonalAssistant:
    def __init__(self):
        self.tasks = []
        self.config = {}
    
    def add_task(self, task):
        self.tasks.append(task)
        print(f"任务已添加: {task}")
    
    def list_tasks(self):
        return self.tasks
    
    def send_reminder(self, message):
        print(f"提醒: {message}")

assistant = PersonalAssistant()
assistant.add_task("学习Python")
print(assistant.list_tasks())`,
      originalExercises: [
        {
          id: 'ex5-10-1',
          title: '任务管理模块',
          description: '实现任务的增删改查功能',
          template: '# 任务管理模块\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n    \n    def add_task(self, title, description="", priority="normal"):\n        task = {\n            "id": len(self.tasks) + 1,\n            "title": title,\n            "description": description,\n            "priority": priority,\n            "completed": False\n        }\n        self.tasks.append(task)\n        return task\n    \n    def complete_task(self, task_id):\n        for task in self.tasks:\n            if task["id"] == task_id:\n                task["completed"] = True\n                return True\n        return False\n    \n    def list_tasks(self, completed=None):\n        if completed is None:\n            return self.tasks\n        return [t for t in self.tasks if t["completed"] == completed]\n\n# 使用示例\ntm = TaskManager()\ntm.add_task("学习Python", "完成第5阶段课程", "high")\ntm.add_task("写作业", "完成数学作业")\nprint("所有任务:")\nfor task in tm.list_tasks():\n    status = "✓" if task["completed"] else "○"\n    print(f"{status} {task[\'title\']} ({task[\'priority\']})")',
          solution: 'class TaskManager:\n    def __init__(self):\n        self.tasks = []\n    \n    def add_task(self, title, description="", priority="normal"):\n        task = {\n            "id": len(self.tasks) + 1,\n            "title": title,\n            "description": description,\n            "priority": priority,\n            "completed": False\n        }\n        self.tasks.append(task)\n        return task\n    \n    def complete_task(self, task_id):\n        for task in self.tasks:\n            if task["id"] == task_id:\n                task["completed"] = True\n                return True\n        return False\n    \n    def list_tasks(self, completed=None):\n        if completed is None:\n            return self.tasks\n        return [t for t in self.tasks if t["completed"] == completed]\n\n# 使用示例\ntm = TaskManager()\ntm.add_task("学习Python", "完成第5阶段课程", "high")\ntm.add_task("写作业", "完成数学作业")\nprint("所有任务:")\nfor task in tm.list_tasks():\n    status = "✓" if task["completed"] else "○"\n    print(f"{status} {task[\'title\']} ({task[\'priority\']})")',
          type: 'basic'
        }
      ],
      extendedExercises: [],
      summary: '综合项目展示了Python的强大应用能力'
    },
    {
      id: 'lesson5-summary',
      title: '第5阶段综合练习',
      objective: '综合复习第5阶段所有知识点',
      analogy: '实战项目综合运用，展示Python在各领域的应用',
      codeExample: `# 综合练习示例
import requests
import tkinter as tk
from datetime import datetime

class WeatherApp:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("天气查询")
        self.setup_ui()
    
    def setup_ui(self):
        tk.Label(self.root, text="城市:").pack()
        self.city_entry = tk.Entry(self.root)
        self.city_entry.pack()
        tk.Button(self.root, text="查询", command=self.get_weather).pack()
        self.result_label = tk.Label(self.root, text="")
        self.result_label.pack()
    
    def get_weather(self):
        city = self.city_entry.get()
        # 这里应该调用天气API
        self.result_label.config(text=f"查询{city}的天气...")
    
    def run(self):
        self.root.mainloop()

# app = WeatherApp()
# app.run()
print("天气应用示例已定义")`,
      originalExercises: [
        {
          id: 'ex5-summary-1',
          title: '综合应用开发',
          description: '开发一个包含GUI和网络功能的应用',
          template: '# 综合应用开发\nimport tkinter as tk\nimport requests\nimport json\n\nclass SimpleApp:\n    def __init__(self):\n        self.root = tk.Tk()\n        self.root.title("综合应用")\n        self.root.geometry("400x300")\n        self.setup_ui()\n    \n    def setup_ui(self):\n        # 标题\n        title_label = tk.Label(self.root, text="Python综合应用", font=("Arial", 16))\n        title_label.pack(pady=10)\n        \n        # 输入框\n        tk.Label(self.root, text="输入内容:").pack()\n        self.input_entry = tk.Entry(self.root, width=30)\n        self.input_entry.pack(pady=5)\n        \n        # 按钮\n        tk.Button(self.root, text="处理数据", command=self.process_data).pack(pady=10)\n        \n        # 结果显示\n        self.result_text = tk.Text(self.root, height=10, width=50)\n        self.result_text.pack(pady=10)\n    \n    def process_data(self):\n        input_data = self.input_entry.get()\n        if input_data:\n            result = f"处理结果: {input_data.upper()}\\n"\n            result += f"长度: {len(input_data)}\\n"\n            result += f"字符数: {len(input_data.replace(\' \', \'\'))}\\n"\n            self.result_text.delete(1.0, tk.END)\n            self.result_text.insert(1.0, result)\n        else:\n            self.result_text.delete(1.0, tk.END)\n            self.result_text.insert(1.0, "请输入内容")\n    \n    def run(self):\n        self.root.mainloop()\n\n# 创建并运行应用\napp = SimpleApp()\nprint("综合应用已创建，调用 app.run() 启动应用")\n# app.run()  # 取消注释以运行应用',
          solution: 'import tkinter as tk\nimport requests\nimport json\n\nclass SimpleApp:\n    def __init__(self):\n        self.root = tk.Tk()\n        self.root.title("综合应用")\n        self.root.geometry("400x300")\n        self.setup_ui()\n    \n    def setup_ui(self):\n        # 标题\n        title_label = tk.Label(self.root, text="Python综合应用", font=("Arial", 16))\n        title_label.pack(pady=10)\n        \n        # 输入框\n        tk.Label(self.root, text="输入内容:").pack()\n        self.input_entry = tk.Entry(self.root, width=30)\n        self.input_entry.pack(pady=5)\n        \n        # 按钮\n        tk.Button(self.root, text="处理数据", command=self.process_data).pack(pady=10)\n        \n        # 结果显示\n        self.result_text = tk.Text(self.root, height=10, width=50)\n        self.result_text.pack(pady=10)\n    \n    def process_data(self):\n        input_data = self.input_entry.get()\n        if input_data:\n            result = f"处理结果: {input_data.upper()}\\n"\n            result += f"长度: {len(input_data)}\\n"\n            result += f"字符数: {len(input_data.replace(\' \', \'\'))}\\n"\n            self.result_text.delete(1.0, tk.END)\n            self.result_text.insert(1.0, result)\n        else:\n            self.result_text.delete(1.0, tk.END)\n            self.result_text.insert(1.0, "请输入内容")\n    \n    def run(self):\n        self.root.mainloop()\n\n# 创建并运行应用\napp = SimpleApp()\nprint("综合应用已创建，调用 app.run() 启动应用")\n# app.run()  # 取消注释以运行应用',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex5-summary-adv-1',
          title: 'GUI×API综合：城市信息查询面板（模拟）',
          description: '在 GUI 中输入城市名，构造模拟 JSON 响应并渲染到 Text 组件（不真实请求）',
          template: `import tkinter as tk
import json

class CityInfoApp:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("城市信息查询")
        tk.Label(self.root, text="城市:").pack()
        self.city_entry = tk.Entry(self.root); self.city_entry.pack()
        tk.Button(self.root, text="查询", command=self.query).pack(pady=6)
        self.out = tk.Text(self.root, height=8, width=40); self.out.pack()
    def query(self):
        city = (self.city_entry.get() or "北京").strip()
        data = {"city": city, "population": 21500000, "desc": "模拟数据"}
        self.out.delete(1.0, tk.END)
        self.out.insert(1.0, json.dumps(data, ensure_ascii=False, indent=2))

app = CityInfoApp()
print("GUI 已创建，运行需 app.root.mainloop()")`,
          solution: `import tkinter as tk
import json

class CityInfoApp:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("城市信息查询")
        tk.Label(self.root, text="城市:").pack()
        self.city_entry = tk.Entry(self.root); self.city_entry.pack()
        tk.Button(self.root, text="查询", command=self.query).pack(pady=6)
        self.out = tk.Text(self.root, height=8, width=40); self.out.pack()
    def query(self):
        city = (self.city_entry.get() or "北京").strip()
        data = {"city": city, "population": 21500000, "desc": "模拟数据"}
        self.out.delete(1.0, tk.END)
        self.out.insert(1.0, json.dumps(data, ensure_ascii=False, indent=2))

app = CityInfoApp()
print("GUI 已创建，运行需 app.root.mainloop()")`,
          type: 'advanced'
        },
        {
          id: 'ex5-summary-adv-2',
          title: '日志与配置整合（不写盘）',
          description: '读取配置字典，格式化打印任务执行日志，演示可配置化与模块化',
          template: `config = {"APP":{"name":"综合示例","debug":"True"}, "SERVER":{"host":"localhost","port":"8000"}}
def log(msg): print("[LOG]", msg)
log(f"启动 {config['APP']['name']} @ {config['SERVER']['host']}:{config['SERVER']['port']}")
for i in range(1,4):
    log(f"执行任务 {i} 完成")`,
          solution: `config = {"APP":{"name":"综合示例","debug":"True"}, "SERVER":{"host":"localhost","port":"8000"}}
def log(msg): print("[LOG]", msg)
log(f"启动 {config['APP']['name']} @ {config['SERVER']['host']}:{config['SERVER']['port']}")
for i in range(1,4):
    log(f"执行任务 {i} 完成")`,
          type: 'advanced'
        }
      ],
      summary: '第5阶段学习了Python实战项目开发，包括爬虫、GUI、API、自动化、机器学习等技术的综合应用'
    }
  ]
}