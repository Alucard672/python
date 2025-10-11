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
      selfQuiz: [
        { id: 'q5-1-1', type: 'single', question: 'requests.get 常用参数不包括？', options: ['timeout','headers','gpu'], answer: 'gpu', explanation: 'requests 针对 HTTP，不涉及 GPU' },
        { id: 'q5-1-2', type: 'single', question: 'BeautifulSoup 查找所有 h1 标签用？', options: ['soup.select("h1")','soup.find_all("h1")','soup.h1s()'], answer: 'soup.find_all("h1")', explanation: 'find_all 返回列表' },
        { id: 'q5-1-3', type: 'judge', question: '解析 HTML 建议使用 html.parser 或 lxml 等解析器', answer: true, explanation: '需指定解析器确保稳定性' },
        { id: 'q5-1-4', type: 'single', question: '应对反爬的常见做法？', options: ['增大并发无限制','设置合理 UA/延时','无视网站规则'], answer: '设置合理 UA/延时', explanation: '遵守对方规则与限速' },
        { id: 'q5-1-5', type: 'judge', question: '抓取后需进行数据清洗与去重', answer: true, explanation: '保证数据质量' }
      ],
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
      selfQuiz: [
        { id: 'q5-2-1', type: 'single', question: '按钮点击的回调通过哪个参数绑定？', options: ['action','command','onclick'], answer: 'command', explanation: 'Button(command=...) 指定回调' },
        { id: 'q5-2-2', type: 'single', question: '布局中最常用的三个管理器是？', options: ['pack/grid/place','row/col/flex','top/left/right'], answer: 'pack/grid/place', explanation: 'Tkinter 提供三种布局管理' },
        { id: 'q5-2-3', type: 'judge', question: '主事件循环由 mainloop 启动', answer: true, explanation: 'GUI 事件驱动' },
        { id: 'q5-2-4', type: 'single', question: '获取 Entry 文本使用？', options: ['entry.text','entry.read()','entry.get()'], answer: 'entry.get()', explanation: 'Entry 提供 get 方法' },
        { id: 'q5-2-5', type: 'judge', question: 'UI 线程中应避免耗时操作以免卡顿', answer: true, explanation: '耗时任务可放到线程/异步中' }
      ],
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
      selfQuiz: [
        { id: 'q5-3-1', type: 'single', question: 'FastAPI 创建应用的入口类？', options: ['Flask','FastAPI','Django'], answer: 'FastAPI', explanation: 'from fastapi import FastAPI' },
        { id: 'q5-3-2', type: 'single', question: '路径参数声明方式？', options: ['/items/<id>','/items/{id}','/items/:id'], answer: '/items/{id}', explanation: 'FastAPI 使用花括号' },
        { id: 'q5-3-3', type: 'judge', question: '可以通过类型注解自动生成文档', answer: true, explanation: 'OpenAPI/Swagger 文档' },
        { id: 'q5-3-4', type: 'single', question: '返回 JSON 的默认方式？', options: ['return dict','jsonify','Response.json(...)'], answer: 'return dict', explanation: 'FastAPI 自动序列化' },
        { id: 'q5-3-5', type: 'judge', question: '应为路由添加方法限定与校验', answer: true, explanation: '保障接口语义与安全' }
      ],
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
      selfQuiz: [
        { id: 'q5-4-1', type: 'single', question: '批量处理文件建议使用？', options: ['手动逐个处理','循环遍历+分类','GUI 操作'], answer: '循环遍历+分类', explanation: '自动化提升效率' },
        { id: 'q5-4-2', type: 'single', question: '拷贝目录常用？', options: ['os.copytree','shutil.copytree','pathlib.copytree'], answer: 'shutil.copytree', explanation: '标准库提供目录拷贝' },
        { id: 'q5-4-3', type: 'judge', question: '谨慎对目录执行写操作并做好备份', answer: true, explanation: '避免数据丢失' },
        { id: 'q5-4-4', type: 'single', question: '自动化脚本常见的调度方式？', options: ['手动执行','定时任务','邮件触发'], answer: '定时任务', explanation: '如 cron/schedule' },
        { id: 'q5-4-5', type: 'judge', question: '路径拼接推荐使用 pathlib 或 os.path', answer: true, explanation: '增强跨平台性' }
      ],
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
      selfQuiz: [
        { id: 'q5-5-1', type: 'single', question: '线性回归拟合方法？', options: ['fit','train','run'], answer: 'fit', explanation: 'sklearn API 统一使用 fit' },
        { id: 'q5-5-2', type: 'single', question: '预测使用？', options: ['model.eval','model.predict','model.go'], answer: 'model.predict', explanation: '预测接口' },
        { id: 'q5-5-3', type: 'judge', question: '特征缩放可提升一些模型的效果与收敛', answer: true, explanation: '如标准化/归一化' },
        { id: 'q5-5-4', type: 'single', question: '常见的回归评估指标不包括？', options: ['MSE','MAE','AUC'], answer: 'AUC', explanation: 'AUC 常用于分类' },
        { id: 'q5-5-5', type: 'judge', question: '训练与测试数据应分开', answer: true, explanation: '避免过拟合' }
      ],
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
      selfQuiz: [
        { id: 'q5-6-1', type: 'single', question: 'PIL 打开图像使用？', options: ['Image.open','Image.read','Image.load'], answer: 'Image.open', explanation: '基础 API' },
        { id: 'q5-6-2', type: 'single', question: '调整大小使用？', options: ['resize','rescale','scale_to'], answer: 'resize', explanation: 'Image.resize((w,h))' },
        { id: 'q5-6-3', type: 'judge', question: '保存图像可指定不同格式后缀', answer: true, explanation: '根据扩展名确定编码' },
        { id: 'q5-6-4', type: 'single', question: '读取像素与写入像素方法？', options: ['getpixel/putpixel','read/write','pixel()',], answer: 'getpixel/putpixel', explanation: 'PIL 提供像素级 API' },
        { id: 'q5-6-5', type: 'judge', question: '大图处理应注意内存占用', answer: true, explanation: '可分块处理' }
      ],
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
      selfQuiz: [
        { id: 'q5-7-1', type: 'single', question: 'MIMEText 用于？', options: ['构造文本邮件体','发送邮件','登录 SMTP'], answer: '构造文本邮件体', explanation: '封装正文' },
        { id: 'q5-7-2', type: 'single', question: '邮件主题与收件人设置字段？', options: ['Title/To','Subject/To','Header/Receiver'], answer: 'Subject/To', explanation: '标准头字段' },
        { id: 'q5-7-3', type: 'judge', question: '发送邮件需配置 SMTP 服务器与凭证', answer: true, explanation: '与服务商交互' },
        { id: 'q5-7-4', type: 'single', question: 'HTML 邮件常用 MIME 类型？', options: ['text/html','text/plain','application/json'], answer: 'text/html', explanation: '展示富文本内容' },
        { id: 'q5-7-5', type: 'judge', question: '敏感信息不应硬编码在代码中', answer: true, explanation: '使用环境变量/配置' }
      ],
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
      selfQuiz: [
        { id: 'q5-8-1', type: 'single', question: 'schedule.every(1).minutes.do(job) 的含义？', options: ['每秒执行','每分钟执行','每小时执行'], answer: '每分钟执行', explanation: '基于分钟的调度' },
        { id: 'q5-8-2', type: 'single', question: '驱动任务实际执行的循环是？', options: ['run_forever','run_pending 循环','mainloop'], answer: 'run_pending 循环', explanation: '持续轮询触发' },
        { id: 'q5-8-3', type: 'judge', question: '在受限环境可仅打印模拟结果', answer: true, explanation: '避免长运行阻塞' },
        { id: 'q5-8-4', type: 'single', question: '定时任务常见的时间表达？', options: ['cron','yaml','gpu'], answer: 'cron', explanation: '类 crontab 表达计划' },
        { id: 'q5-8-5', type: 'judge', question: '任务函数应尽量无副作用以便调度', answer: true, explanation: '易于测试与重试' }
      ],
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
      selfQuiz: [
        { id: 'q5-9-1', type: 'single', question: 'configparser 用于？', options: ['读取/写入 INI 配置','管理 JSON','执行 SQL'], answer: '读取/写入 INI 配置', explanation: '标准配置格式之一' },
        { id: 'q5-9-2', type: 'single', question: '写入配置到文件使用？', options: ['config.dump','config.write','config.save'], answer: 'config.write', explanation: 'write(file) 输出到文件' },
        { id: 'q5-9-3', type: 'judge', question: '读取配置需先 read(filename)', answer: true, explanation: '加载配置内容' },
        { id: 'q5-9-4', type: 'single', question: '布尔/数值配置读取时常需？', options: ['手动强转类型','内置自动识别','无需处理'], answer: '手动强转类型', explanation: 'INI 存储为字符串' },
        { id: 'q5-9-5', type: 'judge', question: '配置分节常用大写节名如 APP/SERVER', answer: true, explanation: '只是风格，便于辨识' }
      ],
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
      selfQuiz: [
        { id: 'q5-10-1', type: 'single', question: '模块化设计的好处不包含？', options: ['提升可维护性','增强复用性','增加不必要耦合'], answer: '增加不必要耦合', explanation: '模块化应降低耦合' },
        { id: 'q5-10-2', type: 'single', question: '类中存放哪类数据合适？', options: ['临时变量','配置常量','与对象状态相关的数据'], answer: '与对象状态相关的数据', explanation: '保持职责单一' },
        { id: 'q5-10-3', type: 'judge', question: '方法命名应体现语义与动作', answer: true, explanation: '可读性第一' },
        { id: 'q5-10-4', type: 'single', question: '提醒功能更适合放在哪里？', options: ['视图层','业务层','数据层'], answer: '业务层', explanation: '由业务规则驱动' },
        { id: 'q5-10-5', type: 'judge', question: '统一入口与日志有助于问题追踪', answer: true, explanation: '便于排错与监控' }
      ],
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
      selfQuiz: [
        { id: 'q5-sum-1', type: 'single', question: '爬虫与 GUI 结合的常见挑战？', options: ['网络与界面阻塞','缺少库支持','无法显示中文'], answer: '网络与界面阻塞', explanation: '需线程/异步避免卡 UI' },
        { id: 'q5-sum-2', type: 'single', question: 'API 设计需要关注？', options: ['路由规划与校验','仅返回字符串','忽略状态码'], answer: '路由规划与校验', explanation: '清晰契约与错误处理' },
        { id: 'q5-sum-3', type: 'judge', question: '自动化与定时任务适合做数据备份与清理', answer: true, explanation: '常见企业实践' },
        { id: 'q5-sum-4', type: 'single', question: 'ML 小样本演示时应注意？', options: ['指标解读与过拟合','随机数禁用','必须使用深度网络'], answer: '指标解读与过拟合', explanation: '小样本需谨慎' },
        { id: 'q5-sum-5', type: 'judge', question: '配置与日志管理是实战项目的基础设施', answer: true, explanation: '支撑可观测与可维护' }
      ],
      summary: '第5阶段学习了Python实战项目开发，包括爬虫、GUI、API、自动化、机器学习等技术的综合应用'
    }
  ]
}