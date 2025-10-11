# 第1阶段 · HTML基础与页面结构（10课）

## 第1课：网页是什么？

### 🎯 学习目标

* 理解网页的概念
* 了解浏览器与服务器的关系

### 🧠 生活类比

* 网页就像一本电子书，浏览器是阅读器，服务器是图书馆，存放书籍。
* 用户打开网页就是从服务器取书来看。

### 💻 代码示例

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>我的第一个网页</title>
</head>
<body>
    <h1>欢迎来到我的网页</h1>
    <p>这是我的第一个HTML页面。</p>
</body>
</html>
```

### 🧩 练习题

1. 创建一个 HTML 文件，显示你的名字和爱好
2. 修改标题为“我的网页实验”

### 📝 参考答案

```html
<!DOCTYPE html>
<html>
<head>
    <title>我的网页实验</title>
</head>
<body>
    <h1>我是小明</h1>
    <p>我喜欢绘画和编程。</p>
</body>
</html>
```

---

## 第2课：HTML标签入门

### 🎯 学习目标

* 学会常用标签：标题、段落、列表、链接

### 🧠 生活类比

* HTML标签就像书中的章节标题、段落、索引，帮助内容有结构。

### 💻 代码示例

```html
<h1>标题1</h1>
<h2>标题2</h2>
<p>这是一个段落。</p>
<ul>
    <li>苹果</li>
    <li>香蕉</li>
</ul>
<a href="https://www.example.com">访问示例网站</a>
```

### 🧩 练习题

1. 创建一个包含标题、段落和有序列表的页面
2. 添加一个指向百度的链接

### 📝 参考答案

```html
<h1>我的水果清单</h1>
<p>这是我最喜欢的水果：</p>
<ol>
    <li>苹果</li>
    <li>香蕉</li>
    <li>橙子</li>
</ol>
<a href="https://www.baidu.com">百度</a>
```

---

## 第3课：HTML图像与多媒体

### 🎯 学习目标

* 学会插入图片和视频

### 🧠 生活类比

* 图片和视频就像书中的插图和视频资料，让内容更丰富。

### 💻 代码示例

```html
<img src="apple.jpg" alt="苹果图片" width="200">
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    您的浏览器不支持视频播放。
</video>
```

### 🧩 练习题

1. 插入一张你喜欢的图片
2. 插入一个视频并设置宽高

### 📝 参考答案

```html
<img src="myphoto.jpg" alt="我的照片" width="250">
<video width="320" height="240" controls>
    <source src="myvideo.mp4" type="video/mp4">
</video>
```

---

## 第4课：HTML表格与表单

### 🎯 学习目标

* 学会创建表格和表单

### 🧠 生活类比

* 表格像超市清单，表单像收银台让用户填写信息。

### 💻 代码示例

```html
<table border="1">
    <tr><th>姓名</th><th>年龄</th></tr>
    <tr><td>小明</td><td>18</td></tr>
</table>

<form>
    名字: <input type="text" name="name"><br>
    密码: <input type="password" name="password"><br>
    <button type="submit">提交</button>
</form>
```

### 🧩 练习题

1. 创建一个包含3行2列的表格
2. 创建一个注册表单，包含用户名、邮箱和密码

### 📝 参考答案

```html
<table border="1">
    <tr><th>产品</th><th>价格</th></tr>
    <tr><td>苹果</td><td>5元</td></tr>
    <tr><td>香蕉</td><td>3元</td></tr>
</table>

<form>
    用户名: <input type="text" name="username"><br>
    邮箱: <input type="email" name="email"><br>
    密码: <input type="password" name="password"><br>
    <button type="submit">注册</button>
</form>
```

---

## 第5课：HTML语义化与结构

### 🎯 学习目标

* 理解语义化标签：header、footer、article、section

### 🧠 生活类比

* 语义化像书的章节划分，便于读者理解内容，也方便搜索引擎索引。

### 💻 代码示例

```html
<header><h1>我的网站</h1></header>
<section>
    <article>
        <h2>文章标题</h2>
        <p>文章内容...</p>
    </article>
</section>
<footer>版权信息 © 2025</footer>
```

### 🧩 练习题

1. 使用header、footer和section组织一个页面
2. 创建两篇文章(article)并展示

### 📝 参考答案

```html
<header><h1>我的博客</h1></header>
<section>
    <article>
        <h2>第一篇文章</h2>
        <p>内容一...</p>
    </article>
    <article>
        <h2>第二篇文章</h2>
        <p>内容二...</p>
    </article>
</section>
<footer>© 2025 博客</footer>
```

---

## 第6课：CSS基础：样式和选择器

### 🎯 学习目标

* 学会使用 CSS 设置颜色、字体和背景
* 掌握基本选择器

### 🧠 生活类比

* CSS就像给衣服穿搭，网页更漂亮有层次。

### 💻 代码示例

```html
<p class="highlight">这是高亮文字</p>
<style>
.highlight {
    color: red;
    font-weight: bold;
    background-color: yellow;
}
</style>
```

### 🧩 练习题

1. 给段落设置字体颜色和背景色
2. 使用ID选择器设置标题颜色

### 📝 参考答案

```html
<h1 id="title">标题</h1>
<style>
#title {
    color: blue;
}
p {
    color: green;
    background-color: lightgray;
}
</style>
```

---

## 第7课：CSS布局基础

### 🎯 学习目标

* 学会使用盒模型、margin、padding和border
* 掌握简单布局方法

### 🧠 生活类比

* 盒模型像房间结构，margin像房间间距，padding像家具间距，border像墙

### 💻 代码示例

```html
<div style="width:200px; height:100px; margin:10px; padding:5px; border:2px solid black;">
  房间内容
</div>
```

### 🧩 练习题

1. 创建一个盒子，设置宽高、边距、内边距和边框
2. 创建两个盒子并调整间距

### 📝 参考答案

```html
<div style="width:150px; height:80px; margin:20px; padding:10px; border:1px solid red;">
  盒子1
</div>
<div style="width:150px; height:80px; margin:20px; padding:10px; border:1px solid blue;">
  盒子2
</div>
```

---

## 第8课：CSS进阶：浮动与Flex布局

### 🎯 学习目标

* 掌握浮动布局
* 学会Flex弹性布局

### 🧠 生活类比

* 浮动像把物品放在水面上漂浮，Flex像弹性橡皮筋自动排列

### 💻 代码示例

```html
<div style="display:flex;">
  <div style="flex:1; background-color:lightblue;">盒子1</div>
  <div style="flex:2; background-color:lightgreen;">盒子2</div>
</div>
```

### 🧩 练习题

1. 创建三列等宽布局
2. 创建一列宽一列宽两倍的布局

### 📝 参考答案

```html
<div style="display:flex;">
  <div style="flex:1; background-color:yellow;">A</div>
  <div style="flex:1; background-color:orange;">B</div>
  <div style="flex:1; background-color:lightblue;">C</div>
</div>
<div style="display:flex;">
  <div style="flex:1; background-color:pink;">A</div>
  <div style="flex:2; background-color:gray;">B</div>
</div>
```

---

## 第9课：HTML与CSS综合练习

### 🎯 学习目标

* 综合HTML和CSS创建简单页面

### 🧠 生活类比

* 就像装饰你的房间，既有结构又有样式

### 💻 代码示例

```html
<header style="background-color:lightblue; padding:10px;">网站头部</header>
<nav style="background-color:lightgray; padding:5px;">导航栏</nav>
<section style="padding:10px;">
  <article style="background-color:lightyellow; margin:5px; padding:5px;">文章内容</article>
</section>
<footer style="background-color:lightgreen; padding:10px;">页脚</footer>
```

### 🧩 练习题

1. 创建一个包含header、nav、section、article、footer的页面
2. 使用CSS设置背景颜色、内边距和边距

### 📝 参考答案

```html
<header style="background-color:blue; color:white; padding:10px;">我的网站</header>
<nav style="background-color:gray; padding:5px;">导航</nav>
<section style="padding:10px;">
  <article style="background-color:yellow; margin:5px; padding:5px;">文章1</article>
  <article style="background-color:orange; margin:5px; padding:5px;">文章2</article>
</section>
<footer style="background-color:green; color:white; padding:10px;">页脚</footer>
```

---

## 第10课：第1阶段综合练习

### 🎯 学习目标

* 综合运用HTML和CSS基础知识
* 能创建一个完整的小型页面

### 🧩 练习题

1. 创建一个个人简历页面，包含：姓名、头像、个人简介、技能列表、联系方式
2. 页面需使用header、section、article、footer
3. 使用CSS设置不同区域的背景颜色、字体颜色和内边距
4. 使用Flex布局展示技能列表
5. 页面中插入至少一张图片和一个外部链接

### 📝 参考答案

```html
<header style="background-color:lightblue; padding:10px;">
  <h1>小明的简历</h1>
</header>
<section style="padding:10px;">
  <article style="background-color:lightyellow; padding:5px; margin:5px;">
    <h2>个人简介</h2>
    <p>我喜欢编程和绘画。</p>
    <img src="myphoto.jpg" alt="我的照片" width="150">
  </article>
 

```
