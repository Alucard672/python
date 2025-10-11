明白了，我们可以按和前端教程类似的**分阶段、每阶段10课**的结构，设计一套**微信/支付宝小程序开发教程**，兼顾0基础到实战项目。风格保持和前端教程一致：**生活类比 → 代码示例 → 练习题 → 参考答案**。

我先给你整理**第1阶段**示例，然后你确认风格再往后继续。

---

# 第1阶段 · 小程序基础与页面结构（10课）

## 第1课：小程序概述

### 🎯 学习目标

* 理解小程序概念和特点
* 了解小程序架构：前端页面 + JS逻辑 + 云开发

### 🧠 生活类比

* 小程序就像“微信里的微型应用”，无需安装即可使用
* 前端页面是门面，JS逻辑是服务员，云开发是仓库

### 💻 代码示例

```xml
<!-- index.wxml -->
<view>
  <text>欢迎使用我的小程序</text>
</view>
```

### 🧩 练习题

1. 创建一个小程序项目
2. 显示“Hello 小程序”文字

### 📝 参考答案

```xml
<view>
  <text>Hello 小程序</text>
</view>
```

---

## 第2课：WXML标签基础

### 🎯 学习目标

* 学会常用WXML标签：view、text、image、button

### 🧠 生活类比

* WXML标签像房子的结构：墙、门、窗、家具

### 💻 代码示例

```xml
<view>
  <text>我的名字：小明</text>
  <image src="/images/avatar.png" mode="widthFix"></image>
  <button>点击我</button>
</view>
```

### 🧩 练习题

1. 创建一个页面显示姓名和头像
2. 添加一个按钮，显示提示文字

### 📝 参考答案

```xml
<view>
  <text>姓名：小红</text>
  <image src="/images/avatar.png" mode="widthFix"></image>
  <button>点击</button>
</view>
```

---

## 第3课：WXSS样式基础

### 🎯 学习目标

* 掌握WXSS选择器和基本样式
* 设置颜色、字体、边距

### 🧠 生活类比

* WXSS就像给房子粉刷墙壁、摆放家具

### 💻 代码示例

```xml
<view class="container">
  <text class="title">小程序标题</text>
</view>
```

```css
/* index.wxss */
.container { padding: 20px; background-color: #f0f0f0; }
.title { color: blue; font-size: 24px; font-weight: bold; }
```

### 🧩 练习题

1. 设置页面背景颜色
2. 设置文字颜色和字体大小

### 📝 参考答案

```css
.container { background-color: #fff; padding: 10px; }
.title { color: red; font-size: 20px; }
```

---

## 第4课：JS逻辑基础

### 🎯 学习目标

* 掌握小程序页面JS写法
* 理解Page对象和data

### 🧠 生活类比

* Page对象就像房间管理者，管理房间状态（data）

### 💻 代码示例

```javascript
// index.js
Page({
  data: { message: "Hello 小程序" },
  onLoad() { console.log("页面加载"); }
})
```

### 🧩 练习题

1. 在data中定义一个文字变量
2. 页面加载时打印日志

### 📝 参考答案

```javascript
Page({
  data: { name: "小明" },
  onLoad() { console.log("页面已加载"); }
})
```

---

## 第5课：数据绑定

### 🎯 学习目标

* 学会WXML与JS数据绑定
* 使用`{{}}`插值显示data

### 🧠 生活类比

* 数据绑定像把储物柜里的物品展示到桌面

### 💻 代码示例

```xml
<view>
  <text>{{message}}</text>
</view>
```

```javascript
Page({ data:{ message:"欢迎使用小程序" } })
```

### 🧩 练习题

1. 定义一个变量显示姓名
2. 修改data后页面实时更新

### 📝 参考答案

```xml
<text>{{name}}</text>
```

```javascript
Page({ data:{ name:"小红" } })
```

---

## 第6课：事件处理

### 🎯 学习目标

* 学会bindtap、事件函数
* 页面响应用户点击

### 🧠 生活类比

* 事件处理就像按钮开关，按下触发动作

### 💻 代码示例

```xml
<button bindtap="handleClick">点我</button>
```

```javascript
Page({
  data: { count: 0 },
  handleClick() { this.setData({ count: this.data.count+1 }); }
})
```

### 🧩 练习题

1. 点击按钮计数
2. 显示点击次数

### 📝 参考答案

```xml
<text>{{count}}</text>
```

```javascript
Page({
  data:{ count:0 },
  handleClick(){ this.setData({ count:this.data.count+1 }); }
})
```

---

## 第7课：条件渲染与列表渲染

### 🎯 学习目标

* wx:if / wx:for用法
* 条件显示和循环列表

### 🧠 生活类比

* 条件渲染像按需展示物品，列表渲染像排队叫号

### 💻 代码示例

```xml
<view wx:if="{{show}}">
  <text>显示的文字</text>
</view>
<view wx:for="{{items}}" wx:key="index">
  <text>{{item}}</text>
</view>
```

```javascript
Page({
  data: { show:true, items:["苹果","香蕉"] }
})
```

### 🧩 练习题

1. 条件显示一段文字
2. 渲染一个水果列表

### 📝 参考答案

```javascript
Page({ data:{ show:true, items:["A","B","C"] } })
```

---

## 第8课：页面导航

### 🎯 学习目标

* wx.navigateTo / wx.redirectTo
* 实现页面跳转

### 🧠 生活类比

* 页面导航像街道指引，点击路标到目标页面

### 💻 代码示例

```javascript
wx.navigateTo({ url:'/pages/detail/detail' });
```

### 🧩 练习题

1. 创建首页和详情页
2. 点击按钮跳转到详情页

### 📝 参考答案

```xml
<button bindtap="goDetail">查看详情</button>
```

```javascript
Page({
  goDetail(){ wx.navigateTo({ url:'/pages/detail/detail' }); }
})
```

---

## 第9课：组件基础

### 🎯 学习目标

* 理解自定义组件
* props / data / methods用法

### 🧠 生活类比

* 组件像房间里的家具，可重复使用

### 💻 代码示例

```xml
<!-- components/my-btn/my-btn.wxml -->
<button bindtap="tap">{{text}}</button>
```

```javascript
// components/my-btn/my-btn.js
Component({
  properties:{ text:String },
  methods:{ tap(){ this.triggerEvent('click'); } }
})
```

### 🧩 练习题

1. 创建自定义按钮组件
2. 父组件监听点击事件

### 📝 参考答案

```xml
<my-btn text="点我" bind:click="handleClick"/>
```

```javascript
handleClick(){ wx.showToast({title:"点击了"}); }
```

---

## 第10课：第1阶段综合练习

### 🎯 学习目标

* 综合小程序页面布局、数据绑定、事件处理和导航

### 🧩 练习题

1. 创建一个个人信息页：姓名、头像、简介
2. 添加按钮点击修改姓名
3. 显示兴趣列表（数组渲染）
4. 点击跳转到详情页
5. 使用自定义组件显示按钮

### 📝 参考答案

```xml
<!-- index.wxml -->
<view>
  <text>{{name}}</text>
  <image src="/images/avatar.png"></image>
  <text>{{intro}}</text>
  <button bindtap="changeName">修改姓名</button>
  <view wx:for="{{hobbies}}" wx:key="index">
    <text>{{item}}</text>
  </view>
  <button bindtap="goDetail">详情页</button>
</view>
```

```javascript
Page({
  data:{ name:"小明", intro:"自我介绍", hobbies:["游泳","绘画"] },
  changeName(){ this.setData({ name:"小红" }); },
  goDetail(){ wx.navigateTo({ url:'/pages/detail/detail' }); }
})
```

---

