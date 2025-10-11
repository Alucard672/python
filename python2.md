# 第2阶段 · Python进阶应用（前5课）

## 第1课 字符串进阶操作：文本的魔法

### 🎯 学习目标

* 掌握字符串索引、切片、格式化
* 学会字符串方法（split、join、replace、upper、lower等）

### 🧠 生活类比

* 字符串就像一条珠链，每颗珠子是一个字符，可以挑选、替换、组合、分割。

### 💻 代码示例

```python
text = "Python学习之旅"
print(text[0])       # 第一个字符
print(text[-1])      # 最后一个字符
print(text[0:6])     # 切片

print(text.upper())  # 全大写
print(text.lower())  # 全小写

words = text.split('之')
print(words)

joined = '-'.join(words)
print(joined)
```

### 🧩 练习题

1. 取出字符串前5个字符
2. 将字符串转为全大写
3. 用空格分割一句话

### 📝 参考答案

```python
s = "数据分析Python"
print(s[:5])
print(s.upper())
print("我 爱 Python".split())
```

---

## 第2课 文件读写基础：让数据流动起来

### 🎯 学习目标

* 掌握文件打开、读取、写入
* 理解文件模式 r/w/a

### 🧠 生活类比

* 文件就像笔记本，你可以读取内容，也可以写入或追加内容

### 💻 代码示例

```python
# 写入文件
with open('example.txt', 'w', encoding='utf-8') as f:
    f.write("Hello Python\n")

# 读取文件
with open('example.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    print(content)
```

### 🧩 练习题

1. 创建文件并写入自己的名字
2. 读取文件并打印每一行

### 📝 参考答案

```python
with open('myname.txt','w',encoding='utf-8') as f:
    f.write("小明\n")

with open('myname.txt','r',encoding='utf-8') as f:
    for line in f:
        print(line.strip())
```

---

## 第3课 异常处理：让程序更稳健

### 🎯 学习目标

* 理解 try/except/finally
* 能捕获常见错误

### 🧠 生活类比

* 就像生活中遇到意外情况，提前准备方案，不至于乱了阵脚

### 💻 代码示例

```python
try:
    x = int(input("输入一个数字: "))
    print(10 / x)
except ZeroDivisionError:
    print("不能除以0")
except ValueError:
    print("请输入有效数字")
finally:
    print("程序结束")
```

### 🧩 练习题

1. 捕获文件不存在异常
2. 捕获列表索引越界异常

### 📝 参考答案

```python
try:
    with open('nofile.txt','r') as f:
        print(f.read())
except FileNotFoundError:
    print("文件不存在")

lst = [1,2,3]
try:
    print(lst[5])
except IndexError:
    print("索引超出范围")
```

---

## 第4课 模块与包：复用的力量

### 🎯 学习目标

* 掌握 import、from import
* 理解自定义模块和第三方包使用

### 🧠 生活类比

* 模块就像工具箱，里面有现成工具，随时取用

### 💻 代码示例

```python
import math
print(math.sqrt(16))

from random import randint
print(randint(1,10))
```

### 🧩 练习题

1. 使用 math 模块计算圆面积
2. 使用 random 模块生成5个随机数

### 📝 参考答案

```python
import math
r = 5
area = math.pi * r**2
print(area)

from random import randint
for _ in range(5):
    print(randint(1,100))
```

---

## 第5课 列表高级操作与推导式

### 🎯 学习目标

* 掌握列表推导式
* 学会 filter/map/reduce 基础用法

### 🧠 生活类比

* 列表推导式像在工厂流水线快速加工产品

### 💻 代码示例

```python
numbers = [1,2,3,4,5]
squared = [x**2 for x in numbers if x%2==0]
print(squared)

from functools import reduce
total = reduce(lambda x,y:x+y, numbers)
print(total)
```

### 🧩 练习题

1. 创建1~10偶数平方列表
2. 使用 map 将列表每个元素乘2

### 📝 参考答案

```python
even_squares = [x**2 for x in range(1,11) if x%2==0]
print(even_squares)

lst = [1,2,3,4]
doubled = list(map(lambda x:x*2,lst))
print(doubled)
```
# 第2阶段 · Python进阶应用（第6~10课 + 阶段综合练习）

## 第6课 字典进阶操作与嵌套

### 🎯 学习目标

* 掌握字典嵌套、遍历
* 学会 get/setdefault 方法

### 🧠 生活类比

* 嵌套字典像家庭住址簿，层层记录详细信息

### 💻 代码示例

```python
students = {
    '小明': {'math':90, 'english':85},
    '小红': {'math':88, 'english':92}
}
for name, scores in students.items():
    print(name, scores['math'])

# get方法
print(students.get('小刚',{}))
```

### 🧩 练习题

1. 创建嵌套字典记录2个学生3门课成绩
2. 遍历输出每个学生平均分

### 📝 参考答案

```python
students = {
    '小明': {'math':90,'eng':85,'py':92},
    '小红': {'math':88,'eng':92,'py':95}
}
for name,scores in students.items():
    avg = sum(scores.values())/len(scores)
    print(name, avg)
```

---

## 第7课 集合进阶操作与应用

### 🎯 学习目标

* 掌握集合交、并、差集
* 学会去重与集合推导式

### 🧠 生活类比

* 集合像朋友名单，交集是共同好友，并集是所有好友，差集是独有好友

### 💻 代码示例

```python
a = {1,2,3,4}
b = {3,4,5,6}
print(a & b)  # 交集
print(a | b)  # 并集
print(a - b)  # 差集

unique = {x for x in [1,2,2,3,3,3]}
print(unique)
```

### 🧩 练习题

1. 找两个班级共同同学
2. 去掉列表重复元素

### 📝 参考答案

```python
class1 = {'小明','小红','小刚'}
class2 = {'小红','小刚','小李'}
print(class1 & class2)

lst = [1,2,2,3,3,3]
print(set(lst))
```

---

## 第8课 函数进阶：参数与返回值

### 🎯 学习目标

* 掌握默认参数、可变参数、关键字参数
* 学会返回多个值

### 🧠 生活类比

* 做菜函数：可选择加盐或不加盐，返回菜和汤

### 💻 代码示例

```python
def greet(name, msg="你好"):
    return f"{msg}, {name}!"
print(greet("小明"))
print(greet("小红","欢迎"))

def add_sub(x,y):
    return x+y, x-y
sum_val,diff_val = add_sub(10,3)
print(sum_val,diff_val)
```

### 🧩 练习题

1. 写函数计算任意数量数字的平均值
2. 函数返回最大值和最小值

### 📝 参考答案

```python
def avg(*nums):
    return sum(nums)/len(nums)
print(avg(2,4,6,8))

def max_min(*nums):
    return max(nums), min(nums)
print(max_min(5,3,9,1))
```

---

## 第9课 文件与异常进阶：综合应用

### 🎯 学习目标

* 掌握文件操作与异常结合
* 学会处理多种异常和文件读取策略

### 🧠 生活类比

* 就像你在图书馆借书，如果书不存在或书页损坏，要有应对方法

### 💻 代码示例

```python
try:
    with open('data.txt','r',encoding='utf-8') as f:
        for line in f:
            print(line.strip())
except FileNotFoundError:
    print("文件不存在")
except Exception as e:
    print("其他错误", e)
finally:
    print("读取结束")
```

### 🧩 练习题

1. 尝试打开不存在的文件，并用异常处理提示
2. 写入数据到文件，确保异常时文件安全关闭

### 📝 参考答案

```python
try:
    with open('nofile.txt','r') as f:
        print(f.read())
except FileNotFoundError:
    print("文件不存在")

try:
    with open('output.txt','w') as f:
        f.write("Hello World\n")
except Exception as e:
    print(e)
```

---

## 第10课 小项目实践：学生成绩管理系统

### 🎯 学习目标

* 综合应用变量、列表、字典、循环、条件、函数
* 练习设计小项目解决实际问题

### 🧠 生活类比

* 模拟学校管理系统：登记学生、成绩统计、排序查询

### 💻 代码示例

```python
students = []

# 添加学生函数
def add_student(name, math, eng, py):
    students.append({'name': name,'math':math,'eng':eng,'py':py})

# 计算平均分函数
def avg_score(student):
    return sum(student.values())/len(student)

# 添加数据
add_student('小明',90,85,92)
add_student('小红',88,92,95)

# 打印成绩单
for s in students:
    avg = avg_score({'math':s['math'],'eng':s['eng'],'py':s['py']})
    print(f"{s['name']} 平均分: {avg}")
```

### 🧩 练习题

1. 增加删除学生功能
2. 根据平均分排序输出成绩
3. 统计各科最高分

### 📝 参考答案

```python
# 删除学生函数
def del_student(name):
    global students
    students = [s for s in students if s['name'] != name]

# 排序输出
students.sort(key=lambda x: avg_score({'math':x['math'],'eng':x['eng'],'py':x['py']}), reverse=True)
for s in students:
    print(f"{s['name']} 平均分: {avg_score({'math':s['math'],'eng':s['eng'],'py':s['py']})}")

# 统计最高分
math_max = max(s['math'] for s in students)
eng_max = max(s['eng'] for s in students)
py_max = max(s['py'] for s in students)
print(f"数学最高分: {math_max}, 英语最高分: {eng_max}, Python最高分: {py_max}")
```

---

## 第2阶段综合练习题

### 🧩 练习题

1. 创建一个包含5个学生的嵌套字典，每个学生包含3门课程成绩
2. 遍历输出每个学生平均分，并标注及格或不及格
3. 根据平均分对学生进行排序输出
4. 找出每门课程的最高分及对应学生
5. 读取一个文件 student.txt，文件内容每行包含学生姓名及成绩，统计平均分

### 📝 参考答案

```python
# 1. 创建嵌套字典
students = {
    '小明':{'math':90,'eng':85,'py':92},
    '小红':{'math':88,'eng':92,'py':95},
    '小刚':{'math':76,'eng':81,'py':79},
    '小李':{'math':95,'eng':89,'py':90},
    '小华':{'math':82,'eng':77,'py':85}
}

# 2. 输出平均分并标注及格
for name,scores in students.items():
    avg = sum(scores.values())/len(scores)
    status = '及格' if avg>=60 else '不及格'
    print(f"{name} 平均分: {avg} {status}")

# 3. 排序输出
sorted_students = sorted(students.items(), key=lambda x: sum(x[1].values())/len(x[1]), reverse=True)
for s in sorted_students:
    print(s[0], sum(s[1].values())/len(s[1]))

# 4. 每门课程最高分
for subject in ['math','eng','py']:
    max_score = max(students[s][subject] for s in students)
    student_name = [s for s in students if students[s][subject]==max_score]
    print(f"{subject}最高分: {max_score} 学生: {student_name}")

# 5. 读取文件统计平均分
try:
    with open('student.txt','r',encoding='utf-8') as f:
        total_score = 0
        count = 0
        for line in f:
            parts = line.strip().split(',')
            scores = list(map(int, parts[1:]))
            total_score += sum(scores)/len(scores)
            count += 1
        print("文件中学生平均分:", total_score/count)
except FileNotFoundError:
    print("student.txt 文件不存在")
```
