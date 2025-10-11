好的，我们继续生成**第4阶段 · JavaScript进阶与项目实践（10课）**，保持和前面阶段一致的风格，每课包含目标、生活类比、代码示例、练习题和参考答案。

---

# 第4阶段 · JavaScript进阶与项目实践（10课）

## 第1课：函数进阶与作用域

### 🎯 学习目标

* 理解函数作用域和全局变量/局部变量
* 掌握函数表达式与箭头函数

### 🧠 生活类比

* 作用域就像房间，房间里的物品只能在房间里用，出去就不见了

### 💻 代码示例

```javascript
let globalVar = "全局";

function demo(){
    let localVar = "局部";
    console.log(globalVar); // 全局
    console.log(localVar);  // 局部
}

const add = (a,b) => a+b;
console.log(add(3,4));
demo();
```

### 🧩 练习题

1. 写一个函数，内部定义局部变量并打印
2. 在函数外打印全局变量
3. 使用箭头函数计算两个数相加

### 📝 参考答案

```javascript
let g = "全局变量";

function test(){
    let l = "局部变量";
    console.log(g);
    console.log(l);
}
test();

const sum = (x,y) => x + y;
console.log(sum(10,20));
```

---

## 第2课：数组方法进阶

### 🎯 学习目标

* 掌握forEach、map、filter、find、reduce等方法

### 🧠 生活类比

* 数组方法就像工具箱，每个工具完成不同操作

### 💻 代码示例

```javascript
let nums = [1,2,3,4,5];

nums.forEach(n => console.log(n*2));
let squares = nums.map(n => n*n);
let evens = nums.filter(n => n%2===0);
let firstEven = nums.find(n => n%2===0);
let sum = nums.reduce((a,b) => a+b, 0);

console.log(squares, evens, firstEven, sum);
```

### 🧩 练习题

1. 使用map生成数组平方
2. 使用filter筛选奇数
3. 使用reduce求和

### 📝 参考答案

```javascript
let arr = [1,2,3,4];
console.log(arr.map(x=>x*x));
console.log(arr.filter(x=>x%2!==0));
console.log(arr.reduce((a,b)=>a+b,0));
```

---

## 第3课：对象与类

### 🎯 学习目标

* 理解对象字面量
* 学会使用ES6类创建对象

### 🧠 生活类比

* 对象像存放属性的箱子，类像制作相同箱子的模板

### 💻 代码示例

```javascript
let person = {name:"小明", age:18};
console.log(person.name);

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`我是${this.name}，今年${this.age}岁`);
    }
}
let s1 = new Student("小红", 20);
s1.greet();
```

### 🧩 练习题

1. 创建一个对象，包含姓名和年龄
2. 创建一个类，实例化并调用方法打印信息

### 📝 参考答案

```javascript
let obj = {name:"小李", age:22};
console.log(obj.name);

class Person {
    constructor(name, age){ this.name=name; this.age=age; }
    info(){ console.log(this.name + "," + this.age); }
}
let p = new Person("小王",25);
p.info();
```

---

## 第4课：事件委托与冒泡

### 🎯 学习目标

* 理解事件冒泡和捕获
* 学会事件委托提高性能

### 🧠 生活类比

* 冒泡就像水从杯底流到上面，事件从子元素传到父元素

### 💻 代码示例

```html
<ul id="list">
  <li>项目1</li>
  <li>项目2</li>
  <li>项目3</li>
</ul>
<script>
document.getElementById("list").addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        alert("你点击了" + e.target.innerText);
    }
});
</script>
```

### 🧩 练习题

1. 给列表添加事件委托
2. 点击列表项显示内容
3. 阻止冒泡试验效果

### 📝 参考答案

```javascript
document.getElementById("list").addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){ alert(e.target.innerText); }
});
```

---

## 第5课：表单验证与输入处理

### 🎯 学习目标

* 获取表单数据
* 验证输入是否合法

### 🧠 生活类比

* 表单验证就像超市收银前检查商品条码是否正确

### 💻 代码示例

```html
<form id="form">
  用户名: <input type="text" id="username">
  <button type="submit">提交</button>
</form>
<script>
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("username").value;
    if(name.trim() === "") alert("请输入用户名");
    else alert("提交成功：" + name);
});
</script>
```

### 🧩 练习题

1. 验证用户名不为空
2. 验证邮箱格式
3. 阻止默认提交行为

### 📝 参考答案

```javascript
document.getElementById("form").addEventListener("submit",e=>{
    e.preventDefault();
    let email = document.getElementById("email").value;
    if(!email.includes("@")) alert("邮箱不合法");
    else alert("提交成功");
});
```

---

## 第6课：定时器与异步操作

### 🎯 学习目标

* 使用setTimeout、setInterval
* 理解异步操作

### 🧠 生活类比

* 定时器就像闹钟，设定时间后触发事件

### 💻 代码示例

```javascript
setTimeout(()=>console.log("3秒后显示"), 3000);
let count = 0;
let timer = setInterval(()=>{
    console.log(count++);
    if(count>5) clearInterval(timer);
},1000);
```

### 🧩 练习题

1. 使用setTimeout延迟打印信息
2. 使用setInterval每秒打印数字
3. 定时器达到条件后停止

### 📝 参考答案

```javascript
setTimeout(()=>console.log("延迟打印"),2000);

let i=0;
let t=setInterval(()=>{console.log(i++); if(i>3) clearInterval(t);},1000);
```

---

## 第7课：JSON与数据交换

### 🎯 学习目标

* 理解JSON格式
* 学会解析和字符串化JSON

### 🧠 生活类比

* JSON像快递包裹，里面装着信息，前后端都能理解

### 💻 代码示例

```javascript
let obj = {name:"小明", age:18};
let jsonStr = JSON.stringify(obj);
console.log(jsonStr);

let newObj = JSON.parse(jsonStr);
console.log(newObj.name);
```

### 🧩 练习题

1. 将对象转换为JSON
2. 将JSON解析为对象
3. 访问解析后的属性

### 📝 参考答案

```javascript
let person = {name:"小红", age:20};
let str = JSON.stringify(person);
let obj2 = JSON.parse(str);
console.log(obj2.age);
```

---

## 第8课：Fetch与AJAX基础

### 🎯 学习目标

* 使用fetch发送请求获取数据
* 理解异步请求处理

### 🧠 生活类比

* fetch就像快递员去仓库取货，拿到后再处理

### 💻 代码示例

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

### 🧩 练习题

1. 使用fetch获取JSON数据
2. 打印获取到的用户名
3. 处理请求错误

### 📝 参考答案

```javascript
fetch("https://jsonplaceholder.typicode.com/users/2")
.then(res=>res.json())
.then(data=>console.log(data.name))
.catch(err=>console.error("请求失败"));
```

---

## 第9课：小项目练习 — 待办事项列表

### 🎯 学习目标

* 综合运用DOM、事件、数组操作
* 制作简单小项目

### 🧠 生活类比

* 待办列表像你的工作清单，方便管理任务

### 💻 代码示例

```html
<input type="text" id="task">
<button id="add">添加</button>
<ul id="list"></ul>
<script>
let tasks = [];
document.getElementById("add").addEventListener("click",()=>{
    let val = document.getElementById("task").value;
    if(val){ tasks.push(val);
        let li = document.createElement("li");
        li.innerText = val;
        document.getElementById("list").appendChild(li);
    }
});
</script>
```

### 🧩 练习题

1. 输入任务并添加到列表
2. 点击列表项删除任务
3. 使用数组同步数据

### 📝 参考答案

```javascript
let tasks = [];
document.getElementById("add").addEventListener("click",()=>{
    let val = document.getElementById("task").value;
    if(val){
        tasks.push(val);
        let li = document.createElement("li");
        li.innerText = val;
        li.addEventListener("click",()=>{li.remove(); tasks.splice(tasks.indexOf(val),1);});
        document.getElementById("list").appendChild(li);
    }
});
```

---

## 第10课：第4阶段综合项目

### 🎯 学习目标

* 综合JS进阶技能制作小项目
* 熟练DOM操作、事件、数组和AJAX

### 🧩 练习题

1. 制作一个带增删改功能的任务列表
2. 页面加载时从JSON获取初始数据
3. 完成任务标记功能（完成/未完成）
4. 使用本地数组同步任务状态
5. 鼠标悬停或点击有动画效果

### 📝 参考答案

> 参考答案较长，可分模块实现：
>
> 1. 初始化数据fetch
> 2. 渲染列表
> 3. 添加、删除、修改任务
> 4. 同步数组与DOM

（实现逻辑与第9课类似，增加fetch和完成状态处理）

---
