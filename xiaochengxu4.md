好的，我们继续整理 **第4阶段 · 小程序云开发实战（10课）**，保持同样风格，每课包含目标、生活类比、代码示例、练习题和参考答案。

---

# 第4阶段 · 小程序云开发实战（10课）

## 第1课：云数据库高级操作

### 🎯 学习目标

* 云数据库增删改查进阶
* 条件查询与排序

### 🧠 生活类比

* 云数据库就像仓库，增删改查像入库、出库、修改库存、按条件查找商品

### 💻 代码示例

```javascript
const db = wx.cloud.database();

// 查询年龄大于18的用户
db.collection('users').where({
  age: db.command.gt(18)
}).orderBy('age','desc').get({
  success: res => { console.log(res.data); }
});
```

### 🧩 练习题

1. 查询所有年龄大于20的用户
2. 按名字升序排序

### 📝 参考答案

```javascript
db.collection('users').where({ age: db.command.gt(20) }).orderBy('name','asc').get();
```

---

## 第2课：云函数进阶

### 🎯 学习目标

* 云函数处理复杂逻辑
* 参数校验与返回多种数据

### 🧠 生活类比

* 云函数像远程厨师，接收订单（参数），完成复杂菜品（逻辑）

### 💻 代码示例

```javascript
// 云函数index.js
exports.main = async (event) => {
  if(!event.name) return { error:'缺少参数' };
  return { message:`Hello ${event.name}`, timestamp: Date.now() };
}
```

### 🧩 练习题

1. 写一个云函数，传入数字返回平方值
2. 参数缺失返回错误提示

### 📝 参考答案

```javascript
exports.main = async (event) => {
  if(event.num===undefined) return { error:'缺少参数' };
  return { result: event.num*event.num };
}
```

---

## 第3课：云存储文件上传与下载

### 🎯 学习目标

* 文件上传到云存储
* 下载并在页面显示

### 🧠 生活类比

* 云存储就像公共仓库，上传文件存档，下载文件使用

### 💻 代码示例

```javascript
wx.chooseImage({ success:res=>{
  const filePath = res.tempFilePaths[0];
  wx.cloud.uploadFile({
    cloudPath: 'test.jpg',
    filePath: filePath,
    success: uploadRes => { console.log(uploadRes.fileID); }
  })
}})
```

### 🧩 练习题

1. 上传图片到云存储
2. 下载并显示图片

### 📝 参考答案

```javascript
wx.cloud.downloadFile({ fileID:'cloud://xxx/test.jpg', success:res=>{
  console.log(res.tempFilePath);
} })
```

---

## 第4课：云数据库关联查询

### 🎯 学习目标

* 关联查询（例如订单与用户信息）
* 聚合函数使用

### 🧠 生活类比

* 关联查询像超市收银系统：订单表与商品表关联

### 💻 代码示例

```javascript
const _ = db.command;
db.collection('orders').aggregate()
  .lookup({
    from:'users',
    localField:'userId',
    foreignField:'_id',
    as:'userInfo'
  })
  .end({ success:res=>{ console.log(res.list); }});
```

### 🧩 练习题

1. 订单表关联用户表
2. 查询每个订单对应的用户姓名

### 📝 参考答案

```javascript
.aggregate().lookup({
  from:'users',
  localField:'userId',
  foreignField:'_id',
  as:'user'
}).end();
```

---

## 第5课：小程序消息与订阅通知

### 🎯 学习目标

* 使用订阅消息 API
* 用户授权与发送通知

### 🧠 生活类比

* 订阅消息像快递提醒，用户允许后收到通知

### 💻 代码示例

```javascript
wx.requestSubscribeMessage({
  tmplIds:['模板ID'],
  success(res){
    console.log('授权结果', res);
  }
})
```

### 🧩 练习题

1. 页面请求订阅消息权限
2. 授权后显示提示

### 📝 参考答案

```javascript
if(res['模板ID']==='accept'){ wx.showToast({ title:'订阅成功' }); }
```

---

## 第6课：实时数据监听

### 🎯 学习目标

* 数据库实时监听
* 页面数据自动更新

### 🧠 生活类比

* 实时监听像监控仓库库存变化，库存一变立即显示

### 💻 代码示例

```javascript
const watcher = db.collection('messages').watch({
  onChange: snapshot => { console.log('数据变化', snapshot.docChanges); },
  onError: err => { console.error(err); }
});
```

### 🧩 练习题

1. 监听消息集合
2. 页面显示新增消息

### 📝 参考答案

```javascript
snapshot.docChanges.forEach(change => { console.log(change.doc); });
```

---

## 第7课：云函数定时触发

### 🎯 学习目标

* 云函数定时触发（Cron）
* 执行自动任务

### 🧠 生活类比

* 定时触发像自动浇水系统，定时执行任务

### 💻 代码示例

```javascript
// 云函数 index.js
exports.main = async () => { console.log('定时任务执行', new Date()); }
```

*定时触发在云开发控制台配置 Cron 表达式*

### 🧩 练习题

1. 创建云函数，每天打印一次日志
2. 配置定时任务

### 📝 参考答案

> 在云开发控制台创建定时触发，选择每日执行

---

## 第8课：权限与安全规则

### 🎯 学习目标

* 数据库权限规则
* 控制读写权限

### 🧠 生活类比

* 安全规则像仓库门禁，只有授权人可入

### 💻 代码示例

```json
{
  "rules": {
    "users": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

### 🧩 练习题

1. 仅允许登录用户读取用户信息
2. 未登录禁止写入

### 📝 参考答案

> 数据库规则在控制台配置上述 JSON

---

## 第9课：云开发项目整合

### 🎯 学习目标

* 云数据库 + 云函数 + 云存储整合
* 完整项目结构

### 🧠 生活类比

* 整合就像装修房子：家具、灯光、水电全部组合

### 💻 代码示例

> 示例：上传文件 → 存入云存储 → 写入数据库 → 调用云函数处理

```javascript
// 上传文件并存数据库
wx.cloud.uploadFile({ ...success: res=>{
  db.collection('files').add({ data:{ fileID:res.fileID } });
}});
```

### 🧩 练习题

1. 创建一个文件管理页面
2. 上传文件到云存储并记录数据库
3. 调用云函数处理文件信息

### 📝 参考答案

> 按步骤依次完成上传、写入、调用云函数

---

## 第10课：第4阶段综合练习

### 🎯 学习目标

* 综合云数据库、云函数、云存储、实时数据、订阅消息

### 🧩 练习题

1. 创建一个聊天室
2. 消息存数据库、实时显示
3. 用户可上传头像图片
4. 用户收到新消息订阅提醒
5. 数据库写入和读取权限控制

### 📝 参考答案

> 思路：
>
> * 数据库 messages 存储消息
> * 页面使用 watch 实时显示
> * 上传头像使用 wx.cloud.uploadFile
> * triggerEvent 显示新消息
> * 设置数据库规则控制权限

---

