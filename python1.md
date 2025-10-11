# 第1阶段 · Python基础入门（10节课）

## 第1课 变量入门课：给数据“贴标签"  
### 🎯 学习目标
- 理解变量概念
- 掌握变量命名规则
- 学会变量基本使用
- 完成基础变量操作练习

### 🧠 生活类比
想象你有一个盒子，里面装着苹果，你给盒子贴上标签“苹果盒”，以后想拿苹果就直接找这个盒子。

### 💻 代码示例
```python
age = 5
name = "小明"
print(age, name)
```

### 🧩 练习题
1. 创建一个变量记录你的年龄并打印
2. 创建变量 width=10，height=5，计算面积

### 📝 参考答案
```python
my_age = 18
print(my_age)

width = 10
height = 5
area = width * height
print(area)
```

### 📖 小结
变量就是给数据起的名字，用 = 赋值，命名需符合规则

---

## 第2课 数据类型基础课：数字、文字与真假  
### 🎯 学习目标
- 掌握 int, float, str, bool
- 学会类型转换
- 完成基础计算与逻辑判断练习

### 🧠 生活类比
- 数字：苹果数量
- 小数：苹果重量
- 字符串：写在纸上的名字
- 布尔：开关灯

### 💻 代码示例
```python
apple_count = 5
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
print(age_int + 2)
```

### 🧩 练习题
1. 定义身高和体重变量并打印
2. 两数字变量计算和、差、积、商
3. 拼接两个字符串输出完整句子
4. 输入数字判断是否大于10

### 📝 参考答案
```python
height = 1.75
weight = 65
print(height, weight)

a = 10
b = 5
print(a+b, a-b, a*b, a/b)

str1 = "你好，"
str2 = "Python"
print(str1 + str2)

number = 12
print(number > 10)
```

### 📖 小结
掌握四种基础数据类型和类型转换，布尔值用于逻辑判断

---

## 第3课 运算符与表达式  
### 🎯 学习目标
- 理解算术运算符、比较运算符、逻辑运算符
- 能用表达式解决实际问题

### 🧠 生活类比
- 算术运算：算账或计算水果总价
- 比较运算：判断谁更高/重
- 逻辑运算：同时满足多个条件，如“高且瘦”

### 💻 代码示例
```python
a = 10
b = 3
print(a + b, a - b, a * b, a / b, a // b, a % b, a ** b)
print(a > b, a == b, a != b)
print((a > 5) and (b < 5))
```

### 🧩 练习题
1. 计算购物车总价
2. 判断两个数字大小并输出较大者
3. 输入两个数字判断是否都大于10

### 📝 参考答案
```python
price1 = 50
price2 = 30
total = price1 + price2
print(total)

a = 10
b = 20
print(max(a, b))

x = 12
y = 15
print(x > 10 and y > 10)
```

### 📖 小结
运算符用于计算和判断，表达式是操作符和变量的组合

---

## 第4课 条件判断：让程序会思考
### 🎯 学习目标
- 掌握 if/elif/else 使用
- 能写简单分支逻辑

### 🧠 生活类比
- 如果今天下雨就带伞，否则不带
- 年龄>=18就可以买票，否则不行

### 💻 代码示例
```python
age = 20
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
print(grade)
```

### 🧩 练习题
1. 输入成绩并输出等级
2. 输入数字判断奇偶

### 📝 参考答案
```python
score = 75
if score >= 90:
    grade = 'A'
elif score >= 60:
    grade = 'B'
else:
    grade = 'C'
print(grade)

num = 8
if num % 2 == 0:
    print("偶数")
else:
    print("奇数")
```

### 📖 小结
条件判断让程序根据不同情况执行不同代码块

---

## 第5课 循环基础：重复的力量
### 🎯 学习目标
- 掌握 for 循环和 while 循环
- 能用循环处理重复任务

### 🧠 生活类比
- 每天浇花10次 → for循环
- 直到水桶空 → while循环

### 💻 代码示例
```python
for i in range(1, 6):
    print(f"第{i}次问好")

count = 5
while count > 0:
    print("倒计时", count)
    count -= 1
```

### 🧩 练习题
1. 输出1~100的偶数
2. 打印九九乘法表

### 📝 参考答案
```python
for i in range(2, 101, 2):
    print(i)

for i in range(1, 10):
    for j in range(1, i+1):
        print(f"{i}*{j}={i*j}", end=" ")
    print()
```

### 📖 小结
循环用于重复操作，可用 for 或 while

---

## 第6课 列表入门：整理你的数据
### 🎯 学习目标
- 掌握列表创建、访问、修改、遍历
- 理解列表常用操作

### 🧠 生活类比
- 列表就像购物清单，记录多个商品信息

### 💻 代码示例
```python
fruits = ["苹果", "香蕉", "橘子"]
print(fruits[0])
fruits.append("葡萄")
for fruit in fruits:
    print(fruit)
```

### 🧩 练习题
1. 创建数字列表并求和
2. 遍历列表输出每个元素

### 📝 参考答案
```python
numbers = [1, 2, 3, 4, 5]
sum_numbers = sum(numbers)
print(sum_numbers)

for num in numbers:
    print(num)
```

### 📖 小结
列表用于存储多个数据，支持增删改查和遍历

---

## 第7课 元组与集合：不可变与唯一
### 🎯 学习目标
- 掌握元组与集合的特点
- 理解不可变和去重的概念

### 🧠 生活类比
- 元组：身份证号、生日等不可变信息
- 集合：班级同学姓名，自动去重

### 💻 代码示例
```python
coordinates = (10, 20)
names = {"小明", "小红", "小明"}
print(coordinates[0])
print(names)
```

### 🧩 练习题
1. 创建元组并访问元素
2. 创建集合并添加新元素验证去重

### 📝 参考答案
```python
tuple1 = (1, 2, 3)
print(tuple1[1])

students = {"小明", "小红"}
students.add("小刚")
print(students)
```

### 📖 小结
元组不可变，集合元素唯一且无序

---

## 第8课 字典入门：给信息贴标签
### 🎯 学习目标
- 掌握字典的创建、访问、修改
- 能用字典管理键值对数据

### 🧠 生活类比
- 字典就像电话簿：姓名→电话号码

### 💻 代码示例
```python
student = {"name": "小明", "age": 18}
print(student["name"])
student["age"] = 19
student["grade"] = "A"
print(student)
```

### 🧩 练习题
1. 创建一个字典记录3个同学的分数
2. 输出每个同学的分数

### 📝 参考答案
```python
scores = {"小明": 90, "小红": 85, "小刚": 78}
for student, score in scores.items():
    print(student, score)
```

### 📖 小结
字典用键值对存储数据，便于查找和修改

---

## 第9课 函数基础：封装重复操作
### 🎯 学习目标
- 掌握函数定义与调用
- 理解参数和返回值

### 🧠 生活类比
- 每天刷牙：写一个函数封装动作，随时调用

### 💻 代码示例
```python
def greet(name):
    return f"你好，{name}"

print(greet("小明"))
```

### 🧩 练习题
1. 写一个函数计算平方
2. 写一个函数接收两个数字并返回和

### 📝 参考答案
```python
def square(x):
    return x**2
print(square(5))

def add(a, b):
    return a + b
print(add(3, 4))
```

### 📖 小结
函数用于封装重复操作，提高代码复用性

---

## 第10课 综合练习：小项目练习

### 🎯 学习目标

* 巩固变量、数据类型、条件、循环、列表、字典、函数的使用
* 学会将多个知识点结合完成小项目

### 🧠 生活类比

* 项目就像组织一次家庭聚餐，需要准备食材（变量和列表）、统计数量（循环）、判断是否有食材（条件）、记录每个人的偏好（字典）、完成计算或动作（函数）

### 💻 小项目示例：水果购物清单

1. 定义一个列表，存储要购买的水果
2. 定义字典存储每种水果的单价
3. 使用循环计算总价
4. 如果总价超过预算，提示超支，否则提示可购买
5. 封装函数计算单种水果价格

### 💻 代码示例

```python
# 定义水果列表和单价字典
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

print("苹果买3个的价格:", fruit_price("苹果", 3))
```

### 🧩 练习题

1. 修改水果清单，增加新的水果并计算总价
2. 封装函数判断是否在预算内
3. 打印每种水果购买数量及单价的小票

### 📝 参考答案

```python
# 增加水果
fruits.append("葡萄")
prices["葡萄"] = 4

# 重新计算总价
total = sum(prices[fruit] for fruit in fruits)
print("总价:", total)

# 封装预算判断函数
def check_budget(total, budget):
    if total > budget:
        return f"超出预算，总价:{total}"
    else:
        return f"可购买，总价:{total}"

print(check_budget(total, budget))

# 打印小票
quantities = {"苹果":3, "香蕉":2, "橘子":5, "葡萄":4}
for fruit, qty in quantities.items():
    print(f"{fruit} x {qty} = {fruit_price(fruit, qty)} 元")
```

### 📖 小结

* 将变量、列表、字典、循环、条件、函数结合使用
* 能设计小项目解决实际问题，提高综合能力


## 第1阶段综合练习
### 🎯 目标
- 综合复习第1阶段所有知识点（变量、数据类型、运算符、条件、循环、列表、集合、字典、函数）

### 🧩 练习题
1. 定义变量记录姓名、年龄、身高并打印
2. 输入两个数字，输出较大值，并判断是否为偶数
3. 创建列表存储5个水果名称，遍历输出
4. 创建元组记录三个城市名称并访问第二个元素
5. 创建集合存储5个班级同学姓名，添加一个新同学，输出集合
6. 创建字典存储3个同学的分数，输出平均分
7. 写函数接收一个数字并返回平方，调用函数打印结果

### 📝 参考答案
```python
# 1
name = "小明"
age = 18
height = 1.75
print(name, age, height)

# 2
x = int(input("输入第一个数字: "))
y = int(input("输入第二个数字: "))
max_num = max(x, y)
print("较大值:", max_num)
print("是否偶数:", max_num % 2 == 

