好的，我们继续整理 **第2阶段 · 小程序数据交互与网络请求（10课）**，保持同样风格，每课包含目标、生活类比、代码示例、练习题和参考答案。

---

# 第2阶段 · 小程序数据交互与网络请求（10课）

## 第1课：小程序API基础

### 🎯 学习目标

* 了解小程序提供的API
* 掌握常用接口：系统信息、设备信息、导航栏设置

### 🧠 生活类比

* API就像餐厅的菜单，你只需点菜（调用API），厨房（系统/平台）帮你完成

### 💻 代码示例

```javascript
wx.getSystemInfo({
  success(res){
    console.log('系统信息', res.model, res.windowWidth, res.windowHeight);
  }
})
```

### 🧩 练习题

1. 获取并打印屏幕宽高
2. 设置页面导航栏标题

### 📝 参考答案

```javascript
wx.setNavigationBarTitle({ title:"我的小程序" });
```

---

## 第2课：网络请求基础

### 🎯 学习目标

* 使用 `wx.request` 发送 GET / POST 请求
* 获取服务器数据并渲染

### 🧠 生活类比

* 网络请求就像快递：你下单（请求），服务器发货（返回数据）

### 💻 代码示例

```javascript
wx.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  success(res){ console.log(res.data); }
})
```

### 🧩 练习题

1. 请求一个公开API数据
2. 将返回的文字显示在页面上

### 📝 参考答案

```javascript
Page({
  data:{ msg:"" },
  onLoad(){
    wx.request({
      url:'https://api.example.com/hello',
      success: res => { this.setData({ msg: res.data.text }); }
    })
  }
})
```

---

## 第3课：数据绑定与渲染列表

### 🎯 学习目标

* 将接口返回数据渲染到页面
* wx:for循环使用

### 🧠 生活类比

* 数据渲染就像把仓库里的货物摆上货架

### 💻 代码示例

```xml
<view wx:for="{{items}}" wx:key="id">
  <text>{{item.name}} - {{item.price}}</text>
</view>
```

```javascript
Page({
  data:{ items:[] },
  onLoad(){
    wx.request({
      url:'https://api.example.com/products',
      success:res => { this.setData({ items: res.data }); }
    })
  }
})
```

### 🧩 练习题

1. 获取商品列表并展示
2. 显示商品名称和价格

### 📝 参考答案

```xml
<view wx:for="{{products}}" wx:key="id">
  <text>{{item.name}} ￥{{item.price}}</text>
</view>
```

---

## 第4课：表单与数据提交

### 🎯 学习目标

* 表单数据获取和提交
* bindsubmit / bindinput使用

### 🧠 生活类比

* 表单就像超市购物清单，填写后交给收银台

### 💻 代码示例

```xml
<form bindsubmit="submitForm">
  名字: <input name="username"/>
  <button formType="submit">提交</button>
</form>
```

```javascript
Page({
  submitForm(e){
    console.log('提交内容', e.detail.value.username);
  }
})
```

### 🧩 练习题

1. 创建一个注册表单
2. 点击提交打印表单内容

### 📝 参考答案

```javascript
submitForm(e){
  const { username, password } = e.detail.value;
  console.log(username, password);
}
```

---

## 第5课：云开发数据库基础

### 🎯 学习目标

* 了解小程序云开发
* 操作云数据库：增删改查

### 🧠 生活类比

* 云数据库就像远程仓库，随时取货和存货

### 💻 代码示例

```javascript
const db = wx.cloud.database();
db.collection('users').add({
  data: { name:'小明', age:18 },
  success: res => { console.log(res); }
})
```

### 🧩 练习题

1. 新增一条用户数据
2. 查询所有用户数据

### 📝 参考答案

```javascript
db.collection('users').get({ success: res => { console.log(res.data); } })
```

---

## 第6课：云函数基础

### 🎯 学习目标

* 理解云函数作用
* 调用云函数处理业务逻辑

### 🧠 生活类比

* 云函数像厨房厨师，接收订单（参数）完成加工（逻辑），返回结果

### 💻 代码示例

```javascript
// 云函数index.js
exports.main = async (event) => {
  return { message:`Hello ${event.name}` };
}
```

```javascript
// 调用云函数
wx.cloud.callFunction({
  name:'hello',
  data:{ name:'小明' },
  success: res => { console.log(res.result.message); }
})
```

### 🧩 练习题

1. 写一个返回问候信息的云函数
2. 页面调用并显示结果

### 📝 参考答案

```javascript
// 页面调用
this.setData({ msg: res.result.message });
```

---

## 第7课：网络错误处理与加载状态

### 🎯 学习目标

* 请求失败处理
* 显示加载动画（wx.showLoading / wx.hideLoading）

### 🧠 生活类比

* 加载状态就像餐厅上菜时的等待提示，网络异常就像订单出错

### 💻 代码示例

```javascript
wx.showLoading({ title:'加载中...' });
wx.request({
  url:'https://api.example.com/data',
  success: res => { console.log(res.data); wx.hideLoading(); },
  fail: err => { wx.showToast({title:'请求失败', icon:'error'}); wx.hideLoading(); }
})
```

### 🧩 练习题

1. 给接口请求添加加载动画
2. 请求失败提示用户

### 📝 参考答案

```javascript
wx.showToast({ title:'加载失败', icon:'none' });
```

---

## 第8课：分页与下拉刷新

### 🎯 学习目标

* 实现数据分页加载
* 使用下拉刷新（onPullDownRefresh）

### 🧠 生活类比

* 分页就像书翻页，下拉刷新像摇一摇更新数据

### 💻 代码示例

```javascript
Page({
  data:{ page:1, items:[] },
  onPullDownRefresh(){
    this.loadData(1);
    wx.stopPullDownRefresh();
  },
  loadData(page){
    wx.request({ url:`https://api.example.com/data?page=${page}` })
  }
})
```

### 🧩 练习题

1. 实现列表分页
2. 下拉刷新更新列表

### 📝 参考答案

```javascript
loadData(page){
  wx.request({
    url:`https://api.example.com/items?page=${page}`,
    success:res => { this.setData({ items:res.data }); }
  });
}
```

---

## 第9课：上拉加载与滚动到底部事件

### 🎯 学习目标

* 实现上拉加载更多数据（onReachBottom）

### 🧠 生活类比

* 上拉加载像淘宝滚动到底部继续加载商品

### 💻 代码示例

```javascript
Page({
  onReachBottom(){ this.loadMore(); },
  loadMore(){ console.log("加载更多数据"); }
})
```

### 🧩 练习题

1. 模拟上拉加载分页数据
2. 滚动到底部打印提示信息

### 📝 参考答案

```javascript
loadMore(){ 
  this.setData({ page:this.data.page+1 });
  this.loadData(this.data.page);
}
```

---

## 第10课：第2阶段综合练习

### 🎯 学习目标

* 综合小程序网络请求、云开发和数据交互

### 🧩 练习题

1. 创建商品列表页面
2. 数据来源：云数据库或接口
3. 点击商品显示详情页
4. 支持下拉刷新和上拉加载
5. 显示加载状态与错误提示

### 📝 参考答案

> 实现思路：
>
> 1. 页面加载时请求云数据库商品数据
> 2. 列表用wx:for渲染
> 3. 下拉刷新调用onPullDownRefresh，重置列表
> 4. 上拉到底调用onReachBottom加载下一页
> 5. wx.showLoading显示加载动画，wx.showToast处理错误

---
