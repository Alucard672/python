明白，那我们接下来生成**第3阶段 · JavaScript基础与交互**，保持和前面阶段一样的风格，每个课程包含“🎯 学习目标、🧠 生活类比、💻 代码示例、🧩 练习题、📝 参考答案”。

---

# 第3阶段 · JavaScript基础与交互（10课）

## 第1课：JavaScript是什么？

### 🎯 学习目标

* 理解JavaScript的作用
* 了解前端交互原理

### 🧠 生活类比

* JavaScript就像家里的电器，HTML是房子结构，CSS是装修风格，JS让房子动起来

### 💻 代码示例

```html
<button onclick="alert('Hello!')">点击我</button>
```

### 🧩 练习题

1. 创建一个按钮，点击显示提示
2. 修改提示内容为你的名字

### 📝 参考答案

```html
<button onclick="alert('我是小明')">点击我</button>
```

---

## 第2课：变量与数据类型

### 🎯 学习目标

* 掌握变量声明(var, let, const)
* 理解常见数据类型（字符串、数字、布尔值、数组、对象）

### 🧠 生活类比

* 变量像储物柜，不同类型像不同物品（衣服、书、玩具）

### 💻 代码示例

```javascript
let name = "小明";
const age = 18;
let isStudent = true;
let fruits = ["苹果", "香蕉"];
let person = {name: "小明", age: 18};
console.log(name, age, isStudent, fruits, person);
```

### 🧩 练习题

1. 创建一个变量存储你的名字
2. 创建一个数组存储3个爱好
3. 创建一个对象表示你的个人信息

### 📝 参考答案

```javascript
let myName = "小红";
let hobbies = ["画画", "编程", "游泳"];
let me = {name: "小红", age: 20, city: "北京"};
console.log(myName, hobbies, me);
```

---

## 第3课：运算符与表达式

### 🎯 学习目标

* 学会算术、比较、逻辑运算符
* 理解表达式和运算顺序

### 🧠 生活类比

* 运算符就像工具，帮你处理数字和判断真假

### 💻 代码示例

```javascript
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a > b); // true
console.log(a === b || b > 3); // true
```

### 🧩 练习题

1. 定义两个数字变量，计算加减乘除
2. 判断两个数字是否相等
3. 使用逻辑运算符判断数字是否大于0且小于10

### 📝 参考答案

```javascript
let x = 8, y = 3;
console.log(x + y, x - y, x * y, x / y);
console.log(x === y);
console.log(x > 0 && x < 10);
```

---

## 第4课：条件语句

### 🎯 学习目标

* 掌握if、else if、else语句
* 学会根据条件执行不同代码

### 🧠 生活类比

* 条件语句就像“如果下雨就带伞，否则穿T恤”

### 💻 代码示例

```javascript
let weather = "雨";
if(weather === "雨") {
    console.log("带伞");
} else if(weather === "晴") {
    console.log("戴帽子");
} else {
    console.log("随便");
}
```

### 🧩 练习题

1. 定义一个数字变量，判断它是正数、负数还是零
2. 判断成绩是否及格（>=60分）

### 📝 参考答案

```javascript
let num = -5;
if(num > 0) {
    console.log("正数");
} else if(num < 0) {
    console.log("负数");
} else {
    console.log("零");
}

let score = 75;
if(score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}
```

---

## 第5课：循环语句

### 🎯 学习目标

* 掌握for、while、for...of循环
* 能遍历数组或重复执行任务

### 🧠 生活类比

* 循环就像跑步机，按照设定次数重复动作

### 💻 代码示例

```javascript
let fruits = ["苹果","香蕉","橙子"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

let count = 0;
while(count < 3){
    console.log("次数：" + count);
    count++;
}
```

### 🧩 练习题

1. 使用for循环打印1到10
2. 遍历一个数组，打印每个元素
3. 使用while循环打印1到5

### 📝 参考答案

```javascript
for(let i=1;i<=10;i++){
    console.log(i);
}

let arr = ["a","b","c"];
for(let item of arr){ console.log(item); }

let n = 1;
while(n <= 5){ console.log(n); n++; }
```

---

## 第6课：函数基础

### 🎯 学习目标

* 学会声明函数并调用
* 理解参数和返回值

### 🧠 生活类比

* 函数像厨房电器，输入原料，得到成品

### 💻 代码示例

```javascript
function add(a, b){
    return a + b;
}
console.log(add(3, 5)); // 8
```

### 🧩 练习题

1. 写一个函数计算两个数的和
2. 写一个函数打印问候语，带名字参数

### 📝 参考答案

```javascript
function sum(x, y){ return x + y; }
console.log(sum(10, 20));

function greet(name){ console.log("你好，" + name); }
greet("小明");
```

---

## 第7课：数组与对象操作

### 🎯 学习目标

* 学会数组增删查改
* 理解对象属性访问与修改

### 🧠 生活类比

* 数组像储物箱，添加或取出物品
* 对象像标签盒子，每个标签都有值

### 💻 代码示例

```javascript
let arr = [1,2,3];
arr.push(4); // 添加
arr.pop(); // 删除最后
console.log(arr[0]); // 访问

let person = {name:"小明", age:18};
console.log(person.name);
person.age = 19;
```

### 🧩 练习题

1. 创建一个数组，添加3个元素
2. 删除最后一个元素
3. 创建一个对象，修改属性值

### 📝 参考答案

```javascript
let hobbies = ["画画","游泳"];
hobbies.push("编程");
hobbies.pop();
console.log(hobbies);

let me = {name:"小红",age:20};
me.age = 21;
console.log(me);
```

---

## 第8课：DOM基础

### 🎯 学习目标

* 了解DOM（文档对象模型）
* 使用JS操作页面元素

### 🧠 生活类比

* DOM就像网页的骨架，JS能操控它的“肢体”

### 💻 代码示例

```html
<p id="demo">原始内容</p>
<button onclick="changeText()">点击修改</button>
<script>
function changeText(){
    document.getElementById("demo").innerText = "内容已修改";
}
</script>
```

### 🧩 练习题

1. 修改段落内容
2. 改变段落颜色
3. 隐藏或显示元素

### 📝 参考答案

```javascript
document.getElementById("demo").innerText = "新内容";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.display = "none"; // 隐藏
```

---

## 第9课：事件处理

### 🎯 学习目标

* 学会绑定事件（点击、悬停、输入）
* 理解事件对象和回调函数

### 🧠 生活类比

* 事件就像门铃，触发时执行动作

### 💻 代码示例

```javascript
document.getElementById("btn").addEventListener("click", function(){
    alert("按钮被点击");
});
```

### 🧩 练习题

1. 给按钮绑定点击事件
2. 给输入框绑定输入事件
3. 鼠标悬停改变背景颜色

### 📝 参考答案

```javascript
document.getElementById("btn").addEventListener("click",()=>alert("点击"));
document.getElementById("input").addEventListener("input",(e)=>console.log(e.target.value));
document.getElementById("box").addEventListener("mouseover",()=>document.getElementById("box").style.backgroundColor="yellow");
```

---

## 第10课：第3阶段综合练习

### 🎯 学习目标

* 综合运用JS基础知识与DOM操作
* 能制作简单交互网页

### 🧩 练习题

1. 创建一个计数器按钮，点击增加数字
2. 创建一个输入框，输入内容实时显示在页面上
3. 制作一个切换显示/隐藏的段落

### 📝 参考答案

```html
<p id="count">0</p>
<button id="addBtn">增加</button>

<input type="text" id="input">
<p id="show"></p>

<p id="toggle">可显示隐藏的段落</p>
<button id="toggleBtn">切换</button>

<script>
let count = 0;
document.getElementById("addBtn").addEventListener("click",()=>document.getElementById("count").innerText=++count);

document.getElementById("input").addEventListener("input",(e)=>document.getElementById("show").innerText=e.target.value);

document.getElementById("toggleBtn").addEventListener("click",()=>{
    let p = document.getElementById("toggle");
    p.style.display = p.style.display === "none" ? "block" : "none";
});
</script>
```

---

