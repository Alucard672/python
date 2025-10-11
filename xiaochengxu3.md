明白了，我们继续整理 **第3阶段 · 小程序组件化与页面交互进阶（10课）**，保持同样风格，每课包含目标、生活类比、代码示例、练习题和参考答案。

---

# 第3阶段 · 小程序组件化与页面交互进阶（10课）

## 第1课：自定义组件进阶

### 🎯 学习目标

* 理解组件的 properties、data、methods
* 父组件与子组件的通信

### 🧠 生活类比

* 组件就像可拆卸家具，父组件是房间，子组件是家具，可传入参数并触发事件

### 💻 代码示例

```xml
<!-- components/card/card.wxml -->
<view class="card">
  <text>{{title}}</text>
  <button bindtap="click">点击</button>
</view>
```

```javascript
// components/card/card.js
Component({
  properties: { title:String },
  methods: { click(){ this.triggerEvent('cardClick'); } }
})
```

```xml
<!-- pages/index/index.wxml -->
<card title="我的卡片" bind:cardClick="handleCardClick"/>
```

```javascript
// pages/index/index.js
Page({
  handleCardClick(){ wx.showToast({title:'卡片点击'}); }
})
```

### 🧩 练习题

1. 创建一个自定义组件显示标题
2. 父组件监听子组件点击事件

### 📝 参考答案

```xml
<my-card title="测试" bind:cardClick="onCardClick"/>
```

```javascript
onCardClick(){ wx.showToast({title:'点击触发'}); }
```

---

## 第2课：组件样式与插槽

### 🎯 学习目标

* 学会使用 wxss 设置组件样式
* 掌握 slot 插槽使用

### 🧠 生活类比

* 插槽就像家具抽屉，可以放不同物品，实现灵活布局

### 💻 代码示例

```xml
<!-- components/card/card.wxml -->
<view class="card">
  <slot></slot>
</view>
```

```xml
<!-- 页面使用 -->
<card>
  <text>插入内容</text>
</card>
```

```css
/* card.wxss */
.card { padding:10px; border:1px solid #ccc; border-radius:5px; }
```

### 🧩 练习题

1. 创建带插槽的自定义组件
2. 页面插入不同内容显示

### 📝 参考答案

```xml
<my-card><text>我是插槽内容</text></my-card>
```

---

## 第3课：组件生命周期

### 🎯 学习目标

* 理解组件生命周期函数：created、attached、ready、detached

### 🧠 生活类比

* 组件生命周期像人的一生：出生、入住房间、准备使用、销毁

### 💻 代码示例

```javascript
Component({
  lifetimes:{
    created(){ console.log('组件创建'); },
    attached(){ console.log('组件被添加到页面'); },
    ready(){ console.log('组件渲染完成'); },
    detached(){ console.log('组件被移除'); }
  }
})
```

### 🧩 练习题

1. 在组件生命周期中打印日志
2. 页面加载和卸载观察组件行为

### 📝 参考答案

```javascript
created(){ console.log('created'); }
attached(){ console.log('attached'); }
ready(){ console.log('ready'); }
detached(){ console.log('detached'); }
```

---

## 第4课：页面间数据传递

### 🎯 学习目标

* 页面跳转传参：query / navigateTo
* 接收参数并显示

### 🧠 生活类比

* 页面传参就像寄信：发送数据到另一页面接收

### 💻 代码示例

```javascript
// 跳转
wx.navigateTo({ url:'/pages/detail/detail?name=小明&age=18' });
```

```javascript
// 接收
Page({
  onLoad(options){
    console.log(options.name, options.age);
  }
})
```

### 🧩 练习题

1. 首页跳转到详情页并传姓名、年龄
2. 详情页显示接收到的参数

### 📝 参考答案

```javascript
console.log(options.name, options.age);
```

---

## 第5课：全局状态管理

### 🎯 学习目标

* 使用 App 全局 data 传递数据
* 页面间共享状态

### 🧠 生活类比

* 全局状态像仓库，所有房间都可以取用

### 💻 代码示例

```javascript
// app.js
App({ globalData:{ userName:'小明' } })
```

```javascript
// 页面
const app = getApp();
console.log(app.globalData.userName);
```

### 🧩 练习题

1. 设置全局用户信息
2. 页面读取并显示全局信息

### 📝 参考答案

```javascript
console.log(getApp().globalData.userName);
```

---

## 第6课：自定义事件传递数据

### 🎯 学习目标

* 子组件向父组件传递数据
* 使用 triggerEvent 携带 detail

### 🧠 生活类比

* 子组件像孩子，向父组件汇报事情（携带数据）

### 💻 代码示例

```javascript
this.triggerEvent('update',{ value:123 });
```

```xml
<child bind:update="handleUpdate"/>
```

```javascript
handleUpdate(e){ console.log(e.detail.value); }
```

### 🧩 练习题

1. 子组件点击按钮传值到父组件
2. 父组件显示接收到的值

### 📝 参考答案

```javascript
console.log(e.detail.value);
```

---

## 第7课：表单高级用法

### 🎯 学习目标

* 表单验证
* 数据双向绑定

### 🧠 生活类比

* 表单验证就像收银员核对商品数量和价格

### 💻 代码示例

```xml
<input name="phone" type="number" bindinput="onInput"/>
```

```javascript
onInput(e){
  this.setData({ phone:e.detail.value });
}
```

### 🧩 练习题

1. 创建手机号输入框
2. 实时显示输入值

### 📝 参考答案

```javascript
this.setData({ phone:e.detail.value });
```

---

## 第8课：swiper与滚动容器

### 🎯 学习目标

* 使用 swiper 创建轮播图
* 使用 scroll-view 实现滚动

### 🧠 生活类比

* Swiper像幻灯片，scroll-view像跑步机上滚动内容

### 💻 代码示例

```xml
<swiper>
  <swiper-item><image src="/images/1.jpg"/></swiper-item>
  <swiper-item><image src="/images/2.jpg"/></swiper-item>
</swiper>

<scroll-view scroll-y style="height:200px;">
  <view wx:for="{{items}}" wx:key="id">{{item}}</view>
</scroll-view>
```

### 🧩 练习题

1. 创建三张图片轮播
2. 创建一个可垂直滚动的列表

### 📝 参考答案

```xml
<swiper>
  <swiper-item><image src="/images/1.jpg"/></swiper-item>
  <swiper-item><image src="/images/2.jpg"/></swiper-item>
  <swiper-item><image src="/images/3.jpg"/></swiper-item>
</swiper>
```

---

## 第9课：动画与过渡效果

### 🎯 学习目标

* 使用 wx.createAnimation 创建动画
* 动画触发与控制

### 🧠 生活类比

* 动画就像房间里灯光闪烁或门开门关，增强体验

### 💻 代码示例

```javascript
const animation = wx.createAnimation({ duration:500, timingFunction:'ease' });
animation.rotate(45).step();
this.setData({ animationData:animation.export() });
```

```xml
<view animation="{{animationData}}">旋转方块</view>
```

### 🧩 练习题

1. 点击按钮让方块旋转
2. 创建淡入淡出效果

### 📝 参考答案

```javascript
animation.opacity(0).step();
this.setData({ animationData:animation.export() });
```

---

## 第10课：第3阶段综合练习

### 🎯 学习目标

* 综合组件化、事件传递、滚动容器和动画

### 🧩 练习题

1. 创建一个带自定义卡片组件的页面
2. 卡片点击触发父组件事件
3. 页面包含swiper轮播图
4. 使用scroll-view显示列表
5. 点击按钮触发动画效果

### 📝 参考答案

> 实现思路：
>
> * 卡片组件使用 properties + triggerEvent
> * Swiper放置多张图片
> * scroll-view 渲染数组
> * 动画使用 wx.createAnimation

---

