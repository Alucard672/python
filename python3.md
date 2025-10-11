# 第3阶段 · Python进阶实践（前5课）

## 第1课 面向对象基础：类与实例

### 🎯 学习目标

* 理解类和对象的概念
* 学会定义类和创建实例

### 🧠 生活类比

* 类像蓝图，房子是实例，每一栋房子都是从同一蓝图建造的

### 💻 代码示例

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"你好，我是{self.name}，今年{self.age}岁")

s1 = Student("小明",18)
s2 = Student("小红",19)
s1.greet()
s2.greet()
```

### 🧩 练习题

1. 定义一个Car类，包含品牌和颜色属性，并定义方法打印信息
2. 创建两个Car实例并调用方法

### 📝 参考答案

```python
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def info(self):
        print(f"品牌:{self.brand}, 颜色:{self.color}")

c1 = Car("宝马", "黑色")
c2 = Car("奥迪", "白色")
c1.info()
c2.info()
```

---

## 第2课 面向对象进阶：继承与多态

### 🎯 学习目标

* 掌握继承、子类、方法重写
* 理解多态的概念

### 🧠 生活类比

* 父类像动物，子类是具体动物（猫、狗），它们继承共性，还可以有特性

### 💻 代码示例

```python
class Animal:
    def speak(self):
        print("动物叫声")

class Dog(Animal):
    def speak(self):
        print("汪汪")

class Cat(Animal):
    def speak(self):
        print("喵喵")

d = Dog()
c = Cat()
d.speak()
c.speak()
```

### 🧩 练习题

1. 创建父类Shape，子类Circle和Square，实现计算面积的方法
2. 调用子类方法验证多态

### 📝 参考答案

```python
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        import math
        return math.pi * self.r**2

class Square(Shape):
    def __init__(self, l):
        self.l = l
    def area(self):
        return self.l**2

shapes = [Circle(5), Square(4)]
for s in shapes:
    print(s.area())
```

---

## 第3课 装饰器基础：给函数穿衣服

### 🎯 学习目标

* 理解装饰器的概念和基本用法
* 学会简单的函数包装

### 🧠 生活类比

* 装饰器像给函数穿上外套，增加新功能，不改原函数

### 💻 代码示例

```python
def decorator(func):
    def wrapper():
        print("开始执行")
        func()
        print("执行结束")
    return wrapper

@decorator
def say_hello():
    print("你好")

say_hello()
```

### 🧩 练习题

1. 写一个装饰器打印函数执行时间
2. 给函数增加日志打印装饰器

### 📝 参考答案

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"执行时间: {end-start}秒")
        return result
    return wrapper

@timer
def test():
    for i in range(1000000): pass

test()
```

---

## 第4课 迭代器与生成器

### 🎯 学习目标

* 理解迭代器和生成器概念
* 学会 yield 用法

### 🧠 生活类比

* 生成器像自动售货机，需要时取货，不用一次全部放出来

### 💻 代码示例

```python
def fib(n):
    a,b = 0,1
    for _ in range(n):
        yield a
        a,b = b,a+b

for num in fib(10):
    print(num)
```

### 🧩 练习题

1. 写生成器生成1~100之间偶数
2. 使用生成器读取大文件逐行处理

### 📝 参考答案

```python
def even_gen(n):
    for i in range(2,n+1,2):
        yield i

for num in even_gen(100):
    print(num)
```

---

## 第5课 正则表达式基础：文本模式匹配

### 🎯 学习目标

* 掌握 re 模块基本用法
* 能匹配手机号、邮箱等常用模式

### 🧠 生活类比

* 正则表达式像过滤器，快速从海量文本中找到符合规则的信息

### 💻 代码示例

```python
import re
text = "我的手机号是13812345678"
pattern = r'1[3-9]\d{9}'
match = re.search(pattern,text)
if match:
    print("找到手机号:", match.group())
```

### 🧩 练习题

1. 匹配邮箱地址
2. 匹配身份证号

### 📝 参考答案

```python
import re
text = "邮箱: test@example.com"
pattern = r'[\w.-]+@[\w.-]+\.\w+'
match = re.search(pattern,text)
if match:
    print(match.group())
```
# 第3阶段 · Python进阶实践（第6~10课 + 阶段综合练习）

## 第6课 多线程与多进程基础

### 🎯 学习目标

* 掌握 threading 与 multiprocessing 模块基础
* 理解并发与并行的概念

### 🧠 生活类比

* 多线程像同时做多件事情，例如边听音乐边写作业
* 多进程像同时开多台机器处理任务

### 💻 代码示例

```python
import threading
import time

def task(name):
    print(f"任务{name}开始")
    time.sleep(2)
    print(f"任务{name}结束")

threads = []
for i in range(3):
    t = threading.Thread(target=task, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
```

### 🧩 练习题

1. 创建两个线程分别打印数字1~5和字母A~E
2. 使用多进程计算1~100的和

### 📝 参考答案

```python
# 线程例子
import threading

def print_nums():
    for i in range(1,6): print(i)

def print_letters():
    for c in 'ABCDE': print(c)

t1 = threading.Thread(target=print_nums)
t2 = threading.Thread(target=print_letters)
t1.start(); t2.start(); t1.join(); t2.join()
```

---

## 第7课 网络编程基础

### 🎯 学习目标

* 掌握 socket 模块简单应用
* 能发送接收简单数据

### 🧠 生活类比

* 网络编程像打电话，需要知道对方地址（IP）和端口

### 💻 代码示例

```python
import socket
s = socket.socket()
s.connect(('example.com',80))
s.send(b'GET / HTTP/1.1\r\nHost: example.com\r\n\r\n')
print(s.recv(1024))
s.close()
```

### 🧩 练习题

1. 使用 socket 写一个简单客户端发送消息
2. 建立服务器端接收客户端消息

### 📝 参考答案

```python
# 服务器端
import socket
server = socket.socket()
server.bind(('localhost',9999))
server.listen(1)
conn, addr = server.accept()
data = conn.recv(1024)
print(data.decode())
conn.send(b'Hello')
conn.close()
server.close()
```

---

## 第8课 数据库操作基础

### 🎯 学习目标

* 掌握 sqlite3 模块使用
* 学会增删改查基础操作

### 🧠 生活类比

* 数据库存放信息，就像电子档案柜，可随时增删改查

### 💻 代码示例

```python
import sqlite3
conn = sqlite3.connect('test.db')
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)')
c.execute('INSERT INTO student VALUES(?,?)', ('小明',18))
conn.commit()
c.execute('SELECT * FROM student')
print(c.fetchall())
conn.close()
```

### 🧩 练习题

1. 创建表并插入3条数据
2. 查询年龄大于18的学生

### 📝 参考答案

```python
import sqlite3
conn = sqlite3.connect('test.db')
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)')
c.executemany('INSERT INTO student VALUES(?,?)', [('小明',18),('小红',19),('小刚',17)])
conn.commit()
c.execute('SELECT * FROM student WHERE age>18')
print(c.fetchall())
conn.close()
```

---

## 第9课 Web框架基础（Flask）

### 🎯 学习目标

* 掌握 Flask 基础路由和视图函数
* 能构建简单 Web 页面

### 🧠 生活类比

* Web框架像搭建房子，路由是房间入口，视图函数是房间功能

### 💻 代码示例

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello Flask"

if __name__ == '__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 创建 /hello 路由返回"你好"
2. 接收 URL 参数并返回结果

### 📝 参考答案

```python
@app.route('/hello/<name>')
def hello(name):
    return f'你好, {name}'
```

---

## 第10课 小项目实践：图书管理系统

### 🎯 学习目标

* 综合应用文件、数据库、函数、类、Flask
* 能搭建一个简单图书管理系统

### 🧠 生活类比

* 模拟图书馆管理：增加、删除、查询书籍

### 💻 代码示例

```python
from flask import Flask, request, jsonify
app = Flask(__name__)
books = []

@app.route('/add', methods=['POST'])
def add_book():
    data = request.get_json()
    books.append(data)
    return jsonify({'status':'success'})

@app.route('/books')
def get_books():
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 增加删除书籍功能
2. 根据书名查询书籍
3. 保存书籍到文件，并能读取显示

### 📝 参考答案

```python
@app.route('/delete', methods=['POST'])
def delete_book():
    name = request.get_json().get('name')
    global books
    books = [b for b in books if b['name'] != name]
    return jsonify({'status':'deleted'})
```

---

## 第3阶段综合练习题

### 🧩 练习题

1. 创建一个多线程程序，同时打印数字1~10和字母A~J
2. 用 socket 写一个简单聊天客户端和服务器
3. 使用 sqlite3 创建表，插入5条学生信息并查询年龄大于18的学生
4. 用 Flask 搭建简单网页，实现增删查功能
5. 综合使用多线程和数据库，实现同时插入10条记录并输出

### 📝 参考答案

```python
# 1. 多线程
import threading

def print_nums():
    for i in range(1,11): print(i)

def print_letters():
    for c in 'ABCDEFGHIJ': print(c)

t1 = threading.Thread(target=print_nums)
t2 = threading.Thread(target=print_letters)
t1.start(); t2.start(); t1.join(); t2.join()

# 3. sqlite3
import sqlite3
conn = sqlite3.connect('test.db')
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)')
c.executemany('INSERT INTO student VALUES(?,?)', [('小明',18),('小红',19),('小刚',17),('小李',20),('小华',16)])
conn.commit()
c.execute('SELECT * FROM student WHERE age>18')
print(c.fetchall())
conn.close()
```
