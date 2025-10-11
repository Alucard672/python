// 第3阶段 - Python进阶实践
import type { IStage } from '../types/Stage'

export const stage3: IStage = {
  id: 3,
  title: '第3阶段 · Python进阶实践',
  description: '学习面向对象编程、装饰器、迭代器等高级特性',
  lessons: [
    {
      id: 'lesson3-1',
      title: '面向对象基础：类与实例',
      objective: '理解类和对象的概念，学会定义类和创建实例',
      analogy: '类像蓝图，房子是实例，每一栋房子都是从同一蓝图建造的',
      codeExample: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"你好，我是{self.name}，今年{self.age}岁")

s1 = Student("小明", 18)
s2 = Student("小红", 19)
s1.greet()
s2.greet()`,
      originalExercises: [
        {
          id: 'ex3-1-1',
          title: '汽车类',
          description: '定义一个Car类，包含品牌和颜色属性，并定义方法打印信息',
          template: '# 汽车类\nclass Car:\n    def __init__(self, brand, color):\n        self.brand = brand\n        self.color = color\n\n    def info(self):\n        print()\n\nc1 = Car("宝马", "黑色")\nc1.info()',
          solution: 'class Car:\n    def __init__(self, brand, color):\n        self.brand = brand\n        self.color = color\n\n    def info(self):\n        print(f"品牌:{self.brand}, 颜色:{self.color}")\n\nc1 = Car("宝马", "黑色")\nc1.info()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-1-adv-1',
          title: '账户类与交易',
          description: '实现 Account 类：deposit/withdraw，余额不得为负，打印对账单。',
          template: `class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.logs = []
    def deposit(self, amt):
        self.balance += amt
        self.logs.append(("DEPOSIT", amt))
    def withdraw(self, amt):
        if amt > self.balance:
            self.logs.append(("DENY", amt))
            return False
        self.balance -= amt
        self.logs.append(("WITHDRAW", amt))
        return True
    def statement(self):
        for k,v in self.logs:
            print(k, v)
        print("BAL", self.balance)

acc = Account("小明", 100)
acc.deposit(50)
acc.withdraw(120)
acc.withdraw(20)
acc.statement()`,
          solution: `class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.logs = []
    def deposit(self, amt):
        self.balance += amt
        self.logs.append(("DEPOSIT", amt))
    def withdraw(self, amt):
        if amt > self.balance:
            self.logs.append(("DENY", amt))
            return False
        self.balance -= amt
        self.logs.append(("WITHDRAW", amt))
        return True
    def statement(self):
        for k,v in self.logs:
            print(k, v)
        print("BAL", self.balance)

acc = Account("小明", 100)
acc.deposit(50)
acc.withdraw(120)
acc.withdraw(20)
acc.statement()`,
          type: 'advanced'
        },
        {
          id: 'ex3-1-adv-2',
          title: '__str__ 与属性',
          description: '为类添加 __str__ 与 @property，只读属性展示账户信息。',
          template: `class User:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    @property
    def name(self): return self._name
    @property
    def age(self): return self._age
    def __str__(self): return f"{self._name}({self._age})"

u = User("小红", 19)
print(u)`,
          solution: `class User:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    @property
    def name(self): return self._name
    @property
    def age(self): return self._age
    def __str__(self): return f"{self._name}({self._age})"

u = User("小红", 19)
print(u)`,
          type: 'advanced'
        }
      ],
      summary: '类定义对象的结构和行为，对象是类的实例'
    },
    {
      id: 'lesson3-2',
      title: '面向对象进阶：继承与多态',
      objective: '掌握继承、子类、方法重写，理解多态的概念',
      analogy: '父类像动物，子类是具体动物（猫、狗），它们继承共性，还可以有特性',
      codeExample: `class Animal:
    def speak(self):
        print("动物叫声")

class Dog(Animal):
    def speak(self):
        print("汪汪")

d = Dog()
d.speak()`,
      originalExercises: [
        {
          id: 'ex3-2-1',
          title: '形状类继承',
          description: '创建父类Shape，子类Circle和Square，实现计算面积的方法',
          template: '# 形状类继承\nclass Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        import math\n        return \n\nc = Circle(5)\nprint(c.area())',
          solution: 'class Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        import math\n        return math.pi * self.r**2\n\nc = Circle(5)\nprint(c.area())',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-2-adv-1',
          title: '抽象基类与多态',
          description: '使用抽象基类定义 Shape 接口，Circle/Square 提供各自 area 实现，遍历统一计算。',
          template: `from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self): pass

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): import math; return math.pi*self.r*self.r

class Square(Shape):
    def __init__(self, a): self.a = a
    def area(self): return self.a*self.a

shapes = [Circle(3), Square(4)]
print([s.area() for s in shapes])`,
          solution: `from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self): pass

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): import math; return math.pi*self.r*self.r

class Square(Shape):
    def __init__(self, a): self.a = a
    def area(self): return self.a*self.a

shapes = [Circle(3), Square(4)]
print([s.area() for s in shapes])`,
          type: 'advanced'
        },
        {
          id: 'ex3-2-adv-2',
          title: '方法重写与调用父类',
          description: '子类覆盖 speak 并调用父类方法打印前缀。',
          template: `class Animal:
    def speak(self): print("动物发声")

class Cat(Animal):
    def speak(self):
        super().speak()
        print("喵喵")

Cat().speak()`,
          solution: `class Animal:
    def speak(self): print("动物发声")

class Cat(Animal):
    def speak(self):
        super().speak()
        print("喵喵")

Cat().speak()`,
          type: 'advanced'
        }
      ],
      summary: '继承让代码复用，多态让同一接口有不同实现'
    },
    {
      id: 'lesson3-3',
      title: '装饰器基础：给函数穿衣服',
      objective: '理解装饰器的概念和基本用法，学会简单的函数包装',
      analogy: '装饰器像给函数穿上外套，增加新功能，不改原函数',
      codeExample: `def decorator(func):
    def wrapper():
        print("开始执行")
        func()
        print("执行结束")
    return wrapper

@decorator
def say_hello():
    print("你好")

say_hello()`,
      originalExercises: [
        {
          id: 'ex3-3-1',
          title: '时间装饰器',
          description: '写一个装饰器打印函数执行时间',
          template: '# 时间装饰器\nimport time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"执行时间: {end-start}秒")\n        return result\n    return wrapper\n\n@timer\ndef test():\n    for i in range(1000000): pass\n\ntest()',
          solution: 'import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"执行时间: {end-start}秒")\n        return result\n    return wrapper\n\n@timer\ndef test():\n    for i in range(1000000): pass\n\ntest()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-3-adv-1',
          title: '参数化装饰器',
          description: '实现 log(level) 装饰器，按不同级别输出前后日志。',
          template: `def log(level):
    def deco(fn):
        def wrap(*a, **kw):
            print(f"[{level}] start")
            r = fn(*a, **kw)
            print(f"[{level}] end")
            return r
        return wrap
    return deco

@log("INFO")
def add(a,b): return a+b

print(add(3,4))`,
          solution: `def log(level):
    def deco(fn):
        def wrap(*a, **kw):
            print(f"[{level}] start")
            r = fn(*a, **kw)
            print(f"[{level}] end")
            return r
        return wrap
    return deco

@log("INFO")
def add(a,b): return a+b

print(add(3,4))`,
          type: 'advanced'
        },
        {
          id: 'ex3-3-adv-2',
          title: '保留原函数元数据',
          description: '用 functools.wraps 保留函数名与文档字符串。',
          template: `from functools import wraps
def deco(fn):
    @wraps(fn)
    def wrap(*a, **kw): return fn(*a, **kw)
    return wrap

@deco
def hello():
    """打招呼"""
    print("你好")

print(hello.__name__, hello.__doc__)`,
          solution: `from functools import wraps
def deco(fn):
    @wraps(fn)
    def wrap(*a, **kw): return fn(*a, **kw)
    return wrap

@deco
def hello():
    """打招呼"""
    print("你好")

print(hello.__name__, hello.__doc__)`,
          type: 'advanced'
        }
      ],
      summary: '装饰器提供了功能增强的优雅方式'
    },
    {
      id: 'lesson3-4',
      title: '迭代器与生成器',
      objective: '理解迭代器和生成器概念，学会 yield 用法',
      analogy: '生成器像自动售货机，需要时取货，不用一次全部放出来',
      codeExample: `def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a+b

for num in fib(10):
    print(num)`,
      originalExercises: [
        {
          id: 'ex3-4-1',
          title: '偶数生成器',
          description: '写生成器生成1~100之间偶数',
          template: '# 偶数生成器\ndef even_gen(n):\n    for i in range(2, n+1, 2):\n        yield i\n\nfor num in even_gen(100):\n    print(num)',
          solution: 'def even_gen(n):\n    for i in range(2, n+1, 2):\n        yield i\n\nfor num in even_gen(100):\n    print(num)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-4-adv-1',
          title: '滑动窗口生成器',
          description: '实现窗口大小为 k 的滑动窗口生成器，输出每个窗口的元组。',
          template: `def window(seq, k):
    for i in range(len(seq)-k+1):
        yield tuple(seq[i:i+k])

print(list(window([1,2,3,4,5], 3)))`,
          solution: `def window(seq, k):
    for i in range(len(seq)-k+1):
        yield tuple(seq[i:i+k])

print(list(window([1,2,3,4,5], 3)))`,
          type: 'advanced'
        },
        {
          id: 'ex3-4-adv-2',
          title: '无限序列与截断',
          description: '实现自然数无限生成器，并截取前 n 个。',
          template: `def naturals():
    i = 1
    while True:
        yield i
        i += 1

gen = naturals()
out = []
for _ in range(5):
    out.append(next(gen))
print(out)`,
          solution: `def naturals():
    i = 1
    while True:
        yield i
        i += 1

gen = naturals()
out = []
for _ in range(5):
    out.append(next(gen))
print(out)`,
          type: 'advanced'
        }
      ],
      summary: '生成器提供了内存高效的数据生成方式'
    },
    {
      id: 'lesson3-5',
      title: '正则表达式基础：文本模式匹配',
      objective: '掌握 re 模块基本用法，能匹配手机号、邮箱等常用模式',
      analogy: '正则表达式像过滤器，快速从海量文本中找到符合规则的信息',
      codeExample: `import re
text = "我的手机号是13812345678"
pattern = r'1[3-9]\\d{9}'
match = re.search(pattern, text)
if match:
    print("找到手机号:", match.group())`,
      originalExercises: [
        {
          id: 'ex3-5-1',
          title: '邮箱匹配',
          description: '匹配邮箱地址',
          template: '# 邮箱匹配\nimport re\ntext = "邮箱: test@example.com"\npattern = r""\nmatch = re.search(pattern, text)\nif match:\n    print(match.group())',
          solution: 'import re\ntext = "邮箱: test@example.com"\npattern = r"[\\w.-]+@[\\w.-]+\\.\\w+"\nmatch = re.search(pattern, text)\nif match:\n    print(match.group())',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-5-adv-1',
          title: '手机号与日期提取',
          description: '用正则从文本中提取所有手机号与 yyyy-mm-dd 日期。',
          template: `import re
text = "电话:13812345678, 备用:15900001111, 日期:2025-10-11"
phones = re.findall(r"1[3-9]\\d{9}", text)
dates = re.findall(r"\\d{4}-\\d{2}-\\d{2}", text)
print(phones, dates)`,
          solution: `import re
text = "电话:13812345678, 备用:15900001111, 日期:2025-10-11"
phones = re.findall(r"1[3-9]\\d{9}", text)
dates = re.findall(r"\\d{4}-\\d{2}-\\d{2}", text)
print(phones, dates)`,
          type: 'advanced'
        },
        {
          id: 'ex3-5-adv-2',
          title: '日志级别解析',
          description: '解析 "[INFO] start", "[ERROR] fail" 等行，统计不同级别数量。',
          template: `import re
logs = ["[INFO] start", "[ERROR] fail", "[WARN] slow", "[INFO] ok"]
level = re.compile(r"\\[(\\w+)\\]")
counts = {}
for line in logs:
    m = level.search(line)
    if m:
      k = m.group(1)
      counts[k] = counts.get(k,0)+1
print(counts)`,
          solution: `import re
logs = ["[INFO] start", "[ERROR] fail", "[WARN] slow", "[INFO] ok"]
level = re.compile(r"\\[(\\w+)\\]")
counts = {}
for line in logs:
    m = level.search(line)
    if m:
      k = m.group(1)
      counts[k] = counts.get(k,0)+1
print(counts)`,
          type: 'advanced'
        }
      ],
      summary: '正则表达式是文本处理的强大工具'
    },
    {
      id: 'lesson3-6',
      title: '多线程与多进程基础',
      objective: '掌握 threading 与 multiprocessing 模块基础，理解并发与并行的概念',
      analogy: '多线程像同时做多件事情，例如边听音乐边写作业；多进程像同时开多台机器处理任务',
      codeExample: `import threading
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
    t.join()`,
      originalExercises: [
        {
          id: 'ex3-6-1',
          title: '双线程打印',
          description: '创建两个线程分别打印数字1~5和字母A~E',
          template: '# 双线程打印\nimport threading\n\ndef print_nums():\n    for i in range(1, 6): \n        print(i)\n\ndef print_letters():\n    for c in "ABCDE": \n        print(c)\n\nt1 = threading.Thread(target=print_nums)\nt2 = threading.Thread(target=print_letters)\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
          solution: 'import threading\n\ndef print_nums():\n    for i in range(1, 6): \n        print(i)\n\ndef print_letters():\n    for c in "ABCDE": \n        print(c)\n\nt1 = threading.Thread(target=print_nums)\nt2 = threading.Thread(target=print_letters)\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-6-adv-1',
          title: '线程池模拟',
          description: '创建固定数量线程处理任务列表（打印任务编号与线程ID）。',
          template: `import threading, queue
q = queue.Queue()
for i in range(10): q.put(i)

def worker():
    while not q.empty():
        task = q.get()
        print("线程", threading.get_ident(), "处理", task)
        q.task_done()

threads = [threading.Thread(target=worker) for _ in range(3)]
[t.start() for t in threads]
[t.join() for t in threads]`,
          solution: `import threading, queue
q = queue.Queue()
for i in range(10): q.put(i)

def worker():
    while not q.empty():
        task = q.get()
        print("线程", threading.get_ident(), "处理", task)
        q.task_done()

threads = [threading.Thread(target=worker) for _ in range(3)]
[t.start() for t in threads]
[t.join() for t in threads]`,
          type: 'advanced'
        },
        {
          id: 'ex3-6-adv-2',
          title: '多进程并行求和（可选）',
          description: '用 multiprocessing 对多个区间并行计算求和，汇总结果。',
          template: `import multiprocessing as mp
def part_sum(a,b):
    return sum(range(a,b+1))
with mp.Pool(2) as pool:
    res = pool.starmap(part_sum, [(1,50),(51,100)])
print(sum(res))`,
          solution: `import multiprocessing as mp
def part_sum(a,b):
    return sum(range(a,b+1))
with mp.Pool(2) as pool:
    res = pool.starmap(part_sum, [(1,50),(51,100)])
print(sum(res))`,
          type: 'advanced'
        }
      ],
      summary: '多线程和多进程提供了并发编程能力'
    },
    {
      id: 'lesson3-7',
      title: '网络编程基础',
      objective: '掌握 socket 模块简单应用，能发送接收简单数据',
      analogy: '网络编程像打电话，需要知道对方地址（IP）和端口',
      codeExample: `import socket
s = socket.socket()
s.connect(('example.com', 80))
s.send(b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n')
print(s.recv(1024))
s.close()`,
      originalExercises: [
        {
          id: 'ex3-7-1',
          title: '简单客户端',
          description: '使用 socket 写一个简单客户端发送消息',
          template: '# 简单客户端\nimport socket\nclient = socket.socket()\nclient.connect(("localhost", 9999))\nclient.send(b"Hello Server")\ndata = client.recv(1024)\nprint(data.decode())\nclient.close()',
          solution: 'import socket\nclient = socket.socket()\nclient.connect(("localhost", 9999))\nclient.send(b"Hello Server")\ndata = client.recv(1024)\nprint(data.decode())\nclient.close()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-7-adv-1',
          title: 'Echo服务器与客户端（本地）',
          description: '实现一个本地回显服务器与客户端，客户端发送消息，服务器返回同样内容。',
          template: `# 此示例需要在本地环境运行，浏览器内可能受限
import socket, threading
def server():
    s = socket.socket()
    s.bind(("localhost", 9999))
    s.listen(1)
    conn, _ = s.accept()
    data = conn.recv(1024)
    conn.send(data)
    conn.close()
    s.close()
threading.Thread(target=server).start()`,
          solution: `# 同上，需本地环境
import socket, threading
def server():
    s = socket.socket()
    s.bind(("localhost", 9999))
    s.listen(1)
    conn, _ = s.accept()
    data = conn.recv(1024)
    conn.send(data)
    conn.close()
    s.close()
threading.Thread(target=server).start()`,
          type: 'advanced'
        },
        {
          id: 'ex3-7-adv-2',
          title: '简单协议设计',
          description: '设计 "PING"/"PONG" 文本协议，客户端发送 PING，服务器返回 PONG。',
          template: `# 需本地运行
# 伪代码展示协议交互`,
          solution: `# 需本地运行
# 伪代码展示协议交互`,
          type: 'advanced'
        }
      ],
      summary: 'Socket编程是网络通信的基础'
    },
    {
      id: 'lesson3-8',
      title: '数据库操作基础',
      objective: '掌握 sqlite3 模块使用，学会增删改查基础操作',
      analogy: '数据库存放信息，就像电子档案柜，可随时增删改查',
      codeExample: `import sqlite3
conn = sqlite3.connect('test.db')
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)')
c.execute('INSERT INTO student VALUES(?,?)', ('小明', 18))
conn.commit()
c.execute('SELECT * FROM student')
print(c.fetchall())
conn.close()`,
      originalExercises: [
        {
          id: 'ex3-8-1',
          title: '创建表插入数据',
          description: '创建表并插入3条数据',
          template: '# 创建表插入数据\nimport sqlite3\nconn = sqlite3.connect("test.db")\nc = conn.cursor()\nc.execute("CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)")\nc.executemany("INSERT INTO student VALUES(?,?)", [("小明", 18), ("小红", 19), ("小刚", 17)])\nconn.commit()\nprint("数据插入完成")\nconn.close()',
          solution: 'import sqlite3\nconn = sqlite3.connect("test.db")\nc = conn.cursor()\nc.execute("CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)")\nc.executemany("INSERT INTO student VALUES(?,?)", [("小明", 18), ("小红", 19), ("小刚", 17)])\nconn.commit()\nprint("数据插入完成")\nconn.close()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-8-adv-1',
          title: '查询与更新',
          description: '查询所有学生后，将年龄<18的学生年龄+1，并打印更新前后差异。',
          template: `import sqlite3
conn = sqlite3.connect("test.db")
c = conn.cursor()
c.execute("SELECT name, age FROM student")
rows = c.fetchall()
before = dict(rows)
for name, age in rows:
    if age < 18:
        c.execute("UPDATE student SET age=? WHERE name=?", (age+1, name))
conn.commit()
c.execute("SELECT name, age FROM student")
after = dict(c.fetchall())
print(before, after)
conn.close()`,
          solution: `import sqlite3
conn = sqlite3.connect("test.db")
c = conn.cursor()
c.execute("SELECT name, age FROM student")
rows = c.fetchall()
before = dict(rows)
for name, age in rows:
    if age < 18:
        c.execute("UPDATE student SET age=? WHERE name=?", (age+1, name))
conn.commit()
c.execute("SELECT name, age FROM student")
after = dict(c.fetchall())
print(before, after)
conn.close()`,
          type: 'advanced'
        },
        {
          id: 'ex3-8-adv-2',
          title: '条件查询与排序',
          description: '查询年龄≥18的学生并按年龄降序输出。',
          template: `import sqlite3
conn = sqlite3.connect("test.db")
c = conn.cursor()
c.execute("SELECT name, age FROM student WHERE age>=18 ORDER BY age DESC")
print(c.fetchall())
conn.close()`,
          solution: `import sqlite3
conn = sqlite3.connect("test.db")
c = conn.cursor()
c.execute("SELECT name, age FROM student WHERE age>=18 ORDER BY age DESC")
print(c.fetchall())
conn.close()`,
          type: 'advanced'
        }
      ],
      summary: 'SQLite提供了轻量级的数据库解决方案'
    },
    {
      id: 'lesson3-9',
      title: 'Web框架基础（Flask）',
      objective: '掌握 Flask 基础路由和视图函数，能构建简单 Web 页面',
      analogy: 'Web框架像搭建房子，路由是房间入口，视图函数是房间功能',
      codeExample: `from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello Flask"

if __name__ == '__main__':
    app.run(debug=True)`,
      originalExercises: [
        {
          id: 'ex3-9-1',
          title: 'Hello路由',
          description: '创建 /hello 路由返回"你好"',
          template: '# Hello路由\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route("/hello")\ndef hello():\n    return "你好"\n\nif __name__ == "__main__":\n    app.run(debug=True)',
          solution: 'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/hello")\ndef hello():\n    return "你好"\n\nif __name__ == "__main__":\n    app.run(debug=True)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-9-adv-1',
          title: 'JSON接口返回',
          description: '创建 /api/info 路由返回 JSON，如 {"app":"demo","version":1}.',
          template: `from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/info")
def info():
    return jsonify({"app":"demo","version":1})`,
          solution: `from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/info")
def info():
    return jsonify({"app":"demo","version":1})`,
          type: 'advanced'
        },
        {
          id: 'ex3-9-adv-2',
          title: 'POST接口处理',
          description: '实现 /api/add 接收 JSON {"a":..,"b":..} 返回 {"sum":..}。',
          template: `from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/api/add", methods=["POST"])
def add_api():
    data = request.get_json(force=True)
    return jsonify({"sum": data.get("a",0) + data.get("b",0)})`,
          solution: `from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/api/add", methods=["POST"])
def add_api():
    data = request.get_json(force=True)
    return jsonify({"sum": data.get("a",0) + data.get("b",0)})`,
          type: 'advanced'
        }
      ],
      summary: 'Flask提供了轻量级的Web开发框架'
    },
    {
      id: 'lesson3-10',
      title: '小项目实践：图书管理系统',
      objective: '综合应用文件、数据库、函数、类、Flask，能搭建一个简单图书管理系统',
      analogy: '模拟图书馆管理：增加、删除、查询书籍',
      codeExample: `from flask import Flask, request, jsonify
app = Flask(__name__)
books = []

@app.route('/add', methods=['POST'])
def add_book():
    data = request.get_json()
    books.append(data)
    return jsonify({'status': 'success'})

@app.route('/books')
def get_books():
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)`,
      originalExercises: [
        {
          id: 'ex3-10-1',
          title: '删除书籍功能',
          description: '增加删除书籍功能',
          template: '# 删除书籍功能\n@app.route("/delete", methods=["POST"])\ndef delete_book():\n    name = request.get_json().get("name")\n    global books\n    books = [b for b in books if b["name"] != name]\n    return jsonify({"status": "deleted"})',
          solution: '@app.route("/delete", methods=["POST"])\ndef delete_book():\n    name = request.get_json().get("name")\n    global books\n    books = [b for b in books if b["name"] != name]\n    return jsonify({"status": "deleted"})',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-10-adv-1',
          title: '分页与搜索',
          description: '实现 /books?page=1&size=5&kw=xx，按关键字过滤并分页返回。',
          template: `# 伪代码：需结合现有 books 列表
# 根据 kw 过滤，再按 page/size 切片`,
          solution: `# 伪代码：依赖 Flask 运行环境与 books 数据`,
          type: 'advanced'
        },
        {
          id: 'ex3-10-adv-2',
          title: '输入校验与错误码',
          description: 'POST /add 校验必填字段，异常时返回 {"error":"msg"} 与 400。',
          template: `# 伪代码：Flask 中使用 abort(400) 或返回自定义状态码`,
          solution: `# 伪代码：Flask 中使用 abort(400) 或返回自定义状态码`,
          type: 'advanced'
        }
      ],
      summary: '综合运用多种技术，完成实用的Web应用项目'
    },
    {
      id: 'lesson3-summary',
      title: '第3阶段综合练习',
      objective: '综合复习第3阶段所有知识点',
      analogy: '综合运用面向对象、多线程、网络编程等高级特性',
      codeExample: `# 综合练习示例
import threading
import sqlite3

class StudentDB:
    def __init__(self):
        self.conn = sqlite3.connect('students.db', check_same_thread=False)
        self.create_table()
    
    def create_table(self):
        c = self.conn.cursor()
        c.execute('CREATE TABLE IF NOT EXISTS student(name TEXT, age INT)')
        self.conn.commit()
    
    def add_student(self, name, age):
        c = self.conn.cursor()
        c.execute('INSERT INTO student VALUES(?,?)', (name, age))
        self.conn.commit()

db = StudentDB()
db.add_student('小明', 18)`,
      originalExercises: [
        {
          id: 'ex3-summary-1',
          title: '多线程程序',
          description: '创建一个多线程程序，同时打印数字1~10和字母A~J',
          template: '# 多线程程序\nimport threading\n\ndef print_nums():\n    for i in range(1, 11): \n        print(i)\n\ndef print_letters():\n    for c in "ABCDEFGHIJ": \n        print(c)\n\nt1 = threading.Thread(target=print_nums)\nt2 = threading.Thread(target=print_letters)\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
          solution: 'import threading\n\ndef print_nums():\n    for i in range(1, 11): \n        print(i)\n\ndef print_letters():\n    for c in "ABCDEFGHIJ": \n        print(c)\n\nt1 = threading.Thread(target=print_nums)\nt2 = threading.Thread(target=print_letters)\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-summary-adv-1',
          title: '对象+数据库综合',
          description: '定义 Student 类与持久化方法，将对象数据写入 sqlite 并读取还原为对象列表。',
          template: `# 伪代码：需 sqlite 环境
# 类定义 + CURD + 映射还原`,
          solution: `# 伪代码：需 sqlite 环境`,
          type: 'advanced'
        },
        {
          id: 'ex3-summary-adv-2',
          title: '并发抓取与统计（可选）',
          description: '用线程并发模拟抓取，将结果统计汇总（成功/失败数）。',
          template: `# 伪代码：在浏览器受限环境下可打印模拟结果`,
          solution: `# 伪代码：在浏览器受限环境下可打印模拟结果`,
          type: 'advanced'
        }
      ],
      summary: '第3阶段学习了Python高级特性，包括面向对象、装饰器、多线程、网络编程、数据库操作等'
    }
  ]
}