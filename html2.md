明白了，你给的第1阶段风格很清晰，我会保持一致，为你生成第2至第6阶段的前端教程，每个阶段10课，包括“🎯 学习目标、🧠 生活类比、💻 代码示例、🧩 练习题、📝 参考答案”。下面是完整生成的示例 MD 文档：

---

# 第2阶段 · CSS进阶与页面美化（10课）

## 第1课：选择器进阶与组合选择器

### 🎯 学习目标

* 掌握类选择器、ID选择器、后代选择器、伪类选择器
* 学会组合使用选择器

### 🧠 生活类比

* 选择器就像找人，你可以按姓名(ID)、穿衣风格(类)、或者关系(后代)来找到目标

### 💻 代码示例

```html
<style>
#header { background-color: lightblue; }
.navbar li:hover { color: red; }
article:first-child { font-weight: bold; }
</style>
```

### 🧩 练习题

1. 给ID为`header`的元素设置背景色
2. 给文章的第一段文字加粗
3. 鼠标悬停列表项变色

### 📝 参考答案

```html
<header id="header">网站头部</header>
<ul class="navbar">
  <li>首页</li>
  <li>关于</li>
</ul>
<article>
  <p>第一段文字</p>
  <p>第二段文字</p>
</article>
<style>
#header { background-color: lightblue; }
.navbar li:hover { color: red; }
article p:first-child { font-weight: bold; }
</style>
```

---

## 第2课：字体与文本样式

### 🎯 学习目标

* 学会设置字体、字号、行高、文本对齐
* 掌握字体引入和Google Fonts使用

### 🧠 生活类比

* 字体就像服装风格，决定网页“穿什么样的衣服”

### 💻 代码示例

```html
<p class="text">这是一个示例文本</p>
<style>
.text {
    font-family: "Arial", sans-serif;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    color: darkblue;
}
</style>
```

### 🧩 练习题

1. 设置段落字体为Arial
2. 文本居中显示
3. 行高设置为1.8

### 📝 参考答案

```html
<p class="intro">欢迎来到我的网页</p>
<style>
.intro {
    font-family: "Arial", sans-serif;
    font-size: 18px;
    line-height: 1.8;
    text-align: center;
    color: green;
}
</style>
```

---

## 第3课：背景与边框设计

### 🎯 学习目标

* 学会背景色、背景图、边框样式与圆角设置

### 🧠 生活类比

* 背景就像房间墙面，边框像家具边框或装饰线

### 💻 代码示例

```html
<div class="box">内容区域</div>
<style>
.box {
    width: 200px;
    height: 100px;
    background-color: lightyellow;
    border: 2px solid red;
    border-radius: 10px;
    background-image: url('bg.jpg');
    background-size: cover;
}
</style>
```

### 🧩 练习题

1. 创建一个带背景图片的盒子
2. 设置边框颜色和圆角

### 📝 参考答案

```html
<div class="card">卡片内容</div>
<style>
.card {
    width: 250px;
    height: 150px;
    background-color: lightblue;
    border: 3px solid gray;
    border-radius: 15px;
    background-image: url('pattern.jpg');
    background-size: cover;
}
</style>
```

---

## 第4课：盒模型与布局进阶

### 🎯 学习目标

* 理解盒模型原理
* 掌握内外边距、边框、内容区域的计算

### 🧠 生活类比

* 盒模型像包装盒，里面放东西，外面加包装、标签

### 💻 代码示例

```html
<div class="box">内容</div>
<style>
.box {
    width: 100px;
    padding: 10px;
    border: 5px solid black;
    margin: 20px;
}
</style>
```

### 🧩 练习题

1. 创建一个盒子，设置padding、border和margin
2. 调整宽度和高度观察变化

### 📝 参考答案

```html
<div class="container">盒子示例</div>
<style>
.container {
    width: 150px;
    height: 80px;
    padding: 10px;
    border: 2px solid green;
    margin: 15px;
}
</style>
```

---

## 第5课：Flex布局深入

### 🎯 学习目标

* 掌握Flex的主轴、交叉轴、对齐方式
* 学会制作响应式布局

### 🧠 生活类比

* Flex像橡皮筋，能自动拉伸和对齐物品

### 💻 代码示例

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<style>
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-container div {
    width: 50px;
    height: 50px;
    background-color: lightgreen;
}
</style>
```

### 🧩 练习题

1. 创建三列水平等间距盒子
2. 设置垂直居中对齐

### 📝 参考答案

```html
<div class="row">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
<style>
.row {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.row div {
    width: 60px;
    height: 60px;
    background-color: pink;
}
</style>
```

---

## 第6课：Grid布局基础

### 🎯 学习目标

* 掌握CSS Grid布局
* 学会定义行列、间距、区域

### 🧠 生活类比

* Grid像棋盘，把内容放入不同格子里

### 💻 代码示例

```html
<div class="grid">
  <div>A</div><div>B</div><div>C</div>
  <div>D</div><div>E</div><div>F</div>
</div>
<style>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
.grid div {
    background-color: lightcoral;
    height: 50px;
}
</style>
```

### 🧩 练习题

1. 创建3x2的网格
2. 设置格子间距10px

### 📝 参考答案

```html
<div class="board">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>
<style>
.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
.board div {
    height: 60px;
    background-color: lightblue;
}
</style>
```

---

## 第7课：过渡与动画

### 🎯 学习目标

* 学会CSS过渡与简单动画

### 🧠 生活类比

* 动画就像给网页物体加动作，像玩具上发条

### 💻 代码示例

```html
<div class="box">悬停我</div>
<style>
.box {
    width: 100px;
    height: 100px;
    background-color: orange;
    transition: all 0.5s;
}
.box:hover {
    transform: scale(1.2);
    background-color: red;
}
</style>
```

### 🧩 练习题

1. 鼠标悬停改变颜色
2. 添加缩放动画

### 📝 参考答案

```html
<div class="hover-box">Hover</div>
<style>
.hover-box {
    width: 120px;
    height: 60px;
    background-color: green;
    transition: all 0.3s;
}
.hover-box:hover {
    transform: rotate(15deg);
    background-color: yellow;
}
</style>
```

---

## 第8课：响应式设计基础

### 🎯 学习目标

* 掌握媒体查询
* 学会简单适配不同屏幕

### 🧠 生活类比

* 响应式像衣服能伸缩，适合不同体型

### 💻 代码示例

```html
<style>
div {
    width: 100%;
    background-color: lightblue;
}
@media (max-width: 600px) {
    div { background-color: lightgreen; }
}
</style>
<div>调整浏览器大小观察变化</div>
```

### 🧩 练习题

1. 创建一个响应式盒子
2. 宽度小于500px时改变背景色

### 📝 参考答案

```html
<div class="responsive">盒子</div>
<style>
.responsive {
    width: 100%;
    height: 100px;
    background-color: lightcoral;
}
@media (max-width: 500px) {
    .responsive { background-color: lightyellow; }
}
</style>
```

---

## 第9课：图标与字体库使用

### 🎯 学习目标

* 学会引入Font Awesome或其他图标库
* 学会使用图标美化页面

### 🧠 生活类比

* 图标就像街道指示牌，直观传达信息

### 💻 代码示例

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<i class="fas fa-home"></i> 首页
<i class="fas fa-user"></i> 用户
```

### 🧩 练习题

1. 页面中添加主页图标和用户图标
2. 修改图标颜色

### 📝 参考答案

```html
<i class="fas fa-envelope" style="color:red;"></i> 邮箱
<i class="fas fa-phone" style="color:green;"></i> 电话
```

---

## 第10课：第2阶段综合练习

### 🎯 学习目标

* 运用CSS进阶知识美化页面
* 熟练使用布局、动画和响应式设计

### 🧩 练习题

1. 创建一个响应式个人简介卡片
2. 卡片包含头像、姓名、技能标签
3. 使用Flex布局排列技能标签
4. 鼠标悬停卡片有缩放动画
5. 页面可适配移动端和桌面端

### 📝 参考答案

```html
<div class="card">
  <img src="avatar.jpg" alt="头像">
  <h2>小明</h2>
  <p>前端开发</p>
  <div class="skills">
    <span>HTML</span><span>CSS</span><span>JavaScript</span>
  </div>
</div>
<style>
.card {
    width: 300px;
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: all 0.3s;
}
.card:hover { transform: scale(1.05); }
.card img { width: 100px; border-radius: 50%; }
.skills { display: flex; gap: 10px; }
.skills span { background-color: lightblue; padding: 5px; border-radius: 5px; }
@media(max-width: 500px) {
    .card { width: 90%; }
    .skills { flex-wrap: wrap; }
}
</style>
```


