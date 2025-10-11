好的，我们继续整理 **第5阶段 · 小程序支付与完整项目实战（10课）**，保持同样风格，每课包含目标、生活类比、代码示例、练习题和参考答案。

---

# 第5阶段 · 小程序支付与完整项目实战（10课）

## 第1课：微信支付基础

### 🎯 学习目标

* 理解微信支付流程
* 获取预支付参数

### 🧠 生活类比

* 支付就像去超市结账，先生成账单（预支付），再付款

### 💻 代码示例

```javascript
wx.request({
  url: 'https://yourserver.com/pay', 
  method:'POST',
  data:{ orderId:123, amount:100 },
  success(res){
    wx.requestPayment({
      ...res.data,
      success(){ console.log('支付成功'); },
      fail(){ console.log('支付失败'); }
    })
  }
})
```

### 🧩 练习题

1. 模拟发起支付请求
2. 处理支付成功与失败

### 📝 参考答案

```javascript
wx.requestPayment({ ...mockData, success:()=>{console.log('支付成功');} });
```

---

## 第2课：小程序订单管理

### 🎯 学习目标

* 创建订单记录
* 显示订单列表

### 🧠 生活类比

* 订单管理像餐厅收银系统，生成、查询和更新订单状态

### 💻 代码示例

```javascript
db.collection('orders').add({ data:{ orderId:1, status:'待支付' } });

db.collection('orders').get({
  success(res){ console.log(res.data); }
});
```

### 🧩 练习题

1. 创建订单并保存到数据库
2. 查询订单列表显示在页面

### 📝 参考答案

```javascript
db.collection('orders').get().then(res=>{ this.setData({ orders:res.data }); });
```

---

## 第3课：支付结果回调

### 🎯 学习目标

* 后端通知支付结果
* 页面接收并更新状态

### 🧠 生活类比

* 支付结果像超市刷卡回调，确认支付成功才发货

### 💻 代码示例

```javascript
// 后端返回支付结果
wx.cloud.callFunction({ name:'checkPay', data:{ orderId:1 } }).then(res=>{
  if(res.result.status==='SUCCESS') wx.showToast({title:'支付成功'});
});
```

### 🧩 练习题

1. 页面轮询查询支付状态
2. 支付成功后显示提示

### 📝 参考答案

```javascript
if(res.result.status==='SUCCESS'){ wx.showToast({title:'支付成功'}); }
```

---

## 第4课：购物车功能实现

### 🎯 学习目标

* 添加/删除商品
* 计算总价

### 🧠 生活类比

* 购物车像超市购物篮，添加商品、结算前可修改

### 💻 代码示例

```javascript
addToCart(item){
  let cart = this.data.cart || [];
  cart.push(item);
  this.setData({ cart });
}
```

### 🧩 练习题

1. 实现购物车添加商品
2. 显示商品总价

### 📝 参考答案

```javascript
let total = this.data.cart.reduce((sum,item)=>sum+item.price,0);
```

---

## 第5课：用户中心与权限管理

### 🎯 学习目标

* 用户登录
* 显示个人信息
* 控制页面访问权限

### 🧠 生活类比

* 用户中心像会员系统，只有注册用户才能查看个人信息

### 💻 代码示例

```javascript
wx.getUserProfile({ success: res=>{
  this.setData({ userInfo:res.userInfo, logged:true });
} })
```

### 🧩 练习题

1. 用户点击按钮登录
2. 页面显示用户名与头像

### 📝 参考答案

```javascript
this.setData({ userInfo:res.userInfo, logged:true });
```

---

## 第6课：完整项目页面布局

### 🎯 学习目标

* 首页、商品页、购物车页、订单页布局
* 使用 tabBar 和导航

### 🧠 生活类比

* 页面布局像商场分区：入口大厅、商品区、收银台

### 💻 代码示例

```json
// app.json
"tabBar": {
  "list":[
    {"pagePath":"pages/home/home","text":"首页"},
    {"pagePath":"pages/cart/cart","text":"购物车"},
    {"pagePath":"pages/order/order","text":"订单"}
  ]
}
```

### 🧩 练习题

1. 配置 tabBar
2. 各页面显示对应内容

### 📝 参考答案

> 按 app.json 配置即可显示三个 Tab

---

## 第7课：项目数据整合

### 🎯 学习目标

* 商品数据 + 用户数据 + 订单数据整合
* 云函数处理订单逻辑

### 🧠 生活类比

* 数据整合像商场结账，商品信息、用户信息、优惠信息一起计算

### 💻 代码示例

```javascript
wx.cloud.callFunction({ name:'createOrder', data:{ userId:123, items:[{id:1,qty:2}] }});
```

### 🧩 练习题

1. 调用云函数生成订单
2. 页面显示订单详情

### 📝 参考答案

```javascript
this.setData({ orderDetails:res.result });
```

---

## 第8课：消息与推送整合

### 🎯 学习目标

* 支付成功消息推送
* 系统通知消息

### 🧠 生活类比

* 像超市结账打印小票并通知用户

### 💻 代码示例

```javascript
wx.cloud.callFunction({ name:'sendNotify', data:{ userId:123, msg:'支付成功' } });
```

### 🧩 练习题

1. 支付成功触发消息
2. 页面显示提示信息

### 📝 参考答案

```javascript
wx.showToast({ title:'支付成功', icon:'success' });
```

---

## 第9课：项目调试与错误处理

### 🎯 学习目标

* 调试云函数与前端
* 异常处理与提示

### 🧠 生活类比

* 调试像检查收银机，错误处理像客服提醒用户

### 💻 代码示例

```javascript
try{
  await wx.cloud.callFunction({ name:'createOrder' });
}catch(e){
  wx.showToast({ title:'创建订单失败', icon:'error' });
}
```

### 🧩 练习题

1. 云函数异常捕获
2. 页面提示用户错误

### 📝 参考答案

```javascript
wx.showToast({ title:'操作失败', icon:'error' });
```

---

## 第10课：第5阶段综合练习

### 🎯 学习目标

* 综合支付、购物车、用户中心、订单管理
* 完整实现小型电商小程序

### 🧩 练习题

1. 首页显示商品列表
2. 可加入购物车并结算
3. 发起支付并处理结果
4. 用户中心显示用户信息
5. 订单页显示历史订单
6. 异常处理与提示
7. 云函数处理订单逻辑

### 📝 参考答案

> 思路：
>
> * 首页列表 + addToCart
> * 购物车计算总价
> * requestPayment 支付
> * 云函数生成订单
> * 用户中心 getUserProfile
> * order页 db.collection('orders').get
> * 异常处理 try/catch

---


