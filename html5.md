好的，我们继续生成**第5阶段 · 前端框架入门与实战（React/Vue）**，保持同样风格，每课包含目标、生活类比、代码示例、练习题和参考答案。

---

# 第5阶段 · 前端框架入门与实战（10课）

## 第1课：前端框架概述

### 🎯 学习目标

* 理解前端框架的作用
* 了解React和Vue的基本概念

### 🧠 生活类比

* 框架就像搭房子的模板和工具，帮你快速建网页应用

### 💻 代码示例

```javascript
// React简单示例
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return <h1>我的第一个React组件</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### 🧩 练习题

1. 安装React并创建第一个组件
2. 用Vue实现同样的显示标题功能

### 📝 参考答案

```javascript
// Vue 3示例
const { createApp } = Vue;
createApp({
    template: `<h1>我的第一个Vue组件</h1>`
}).mount('#app');
```

---

## 第2课：组件化开发

### 🎯 学习目标

* 理解组件概念
* 学会创建和使用组件

### 🧠 生活类比

* 组件就像积木模块，可以重复使用和组合

### 💻 代码示例

```javascript
// React组件
function Header() {
    return <header><h1>网站头部</h1></header>;
}
function App() {
    return (
        <div>
            <Header />
            <p>欢迎来到我的网站</p>
        </div>
    );
}
```

### 🧩 练习题

1. 创建Header组件和Footer组件
2. 在App中组合使用组件
3. 修改组件内容显示你的名字

### 📝 参考答案

```javascript
function Footer(){ return <footer>页脚信息</footer>; }
function App(){
    return (<div><Header /><p>内容</p><Footer /></div>);
}
```

---

## 第3课：数据绑定与Props

### 🎯 学习目标

* 掌握React props和Vue props
* 组件间传递数据

### 🧠 生活类比

* props像信件，把数据从父组件传给子组件

### 💻 代码示例

```javascript
function Welcome(props){
    return <h2>欢迎，{props.name}！</h2>;
}

function App(){
    return <Welcome name="小明" />;
}
```

### 🧩 练习题

1. 创建一个子组件显示姓名
2. 父组件传入不同姓名
3. 在Vue中实现相同功能

### 📝 参考答案

```javascript
// Vue
const Welcome = { props: ['name'], template: `<h2>欢迎，{{ name }}！</h2>` };
const App = { components: { Welcome }, template: `<Welcome name="小红"/>` };
Vue.createApp(App).mount('#app');
```

---

## 第4课：状态管理（State）

### 🎯 学习目标

* 掌握React useState / Vue reactive
* 理解组件状态变化

### 🧠 生活类比

* 状态就像房间里的温度，变化会影响房间的舒适度

### 💻 代码示例

```javascript
// React
import { useState } from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    return <button onClick={()=>setCount(count+1)}>点击 {count}</button>;
}
```

### 🧩 练习题

1. 创建计数器按钮
2. 增加减按钮，修改状态
3. 用Vue实现同样功能

### 📝 参考答案

```javascript
// Vue
const App = {
    data(){ return { count:0 }; },
    template:`<button @click="count++">点击 {{count}}</button>`
};
Vue.createApp(App).mount('#app');
```

---

## 第5课：条件渲染与列表渲染

### 🎯 学习目标

* 学会条件渲染if/else
* 学会列表渲染

### 🧠 生活类比

* 条件渲染像选择菜单，列表渲染像排队叫号

### 💻 代码示例

```javascript
// React
function App(){
    const items = ['苹果','香蕉','橙子'];
    const show = true;
    return (
        <div>
            {show && <p>显示内容</p>}
            <ul>{items.map((item,i)=><li key={i}>{item}</li>)}</ul>
        </div>
    );
}
```

### 🧩 练习题

1. 条件显示一段文字
2. 渲染一个水果列表
3. 点击列表项显示弹窗

### 📝 参考答案

```javascript
const App = {
    data(){ return { show:true, items:['A','B','C'] }; },
    template:`<div>
        <p v-if="show">显示</p>
        <ul><li v-for="item in items" @click="alert(item)">{{item}}</li></ul>
    </div>`
};
Vue.createApp(App).mount('#app');
```

---

## 第6课：事件处理与表单绑定

### 🎯 学习目标

* React onClick/onChange
* Vue v-model双向绑定

### 🧠 生活类比

* 事件像按钮开关，表单输入像传感器实时反馈

### 💻 代码示例

```javascript
// React
import { useState } from 'react';
function App(){
    const [text,setText] = useState("");
    return (
        <div>
            <input value={text} onChange={e=>setText(e.target.value)} />
            <p>输入内容：{text}</p>
        </div>
    );
}
```

### 🧩 练习题

1. 输入框实时显示内容
2. 点击按钮清空输入框
3. 用Vue实现v-model绑定

### 📝 参考答案

```javascript
// Vue
const App = { data(){ return { text:"" }; }, template:`<div>
    <input v-model="text"/>
    <p>输入内容：{{text}}</p>
</div>` };
Vue.createApp(App).mount('#app');
```

---

## 第7课：组件通信

### 🎯 学习目标

* 父传子：props
* 子传父：事件/emit

### 🧠 生活类比

* 父子通信就像家长和孩子互相传递信息

### 💻 代码示例

```javascript
// Vue
const Child = { props:['msg'], template:`<button @click="$emit('notify', msg)">发送消息</button>` };
const App = {
    components:{Child},
    data(){ return { message:"你好" }; },
    methods:{ handleMsg(msg){ alert(msg); } },
    template:`<Child :msg="message" @notify="handleMsg"/>`
};
Vue.createApp(App).mount('#app');
```

### 🧩 练习题

1. 子组件点击按钮传值给父组件
2. 父组件显示接收到的消息
3. 在React中用回调实现同样功能

### 📝 参考答案

```javascript
function Child({msg,onNotify}){ return <button onClick={()=>onNotify(msg)}>发送消息</button>; }
function App(){
    const handleMsg = (msg)=>alert(msg);
    return <Child msg="你好" onNotify={handleMsg}/>;
}
```

---

## 第8课：生命周期与Hooks

### 🎯 学习目标

* React useEffect / Vue生命周期
* 理解组件挂载、更新和卸载

### 🧠 生活类比

* 生命周期就像人一生：出生、成长、死亡

### 💻 代码示例

```javascript
// React
import { useEffect } from 'react';
useEffect(()=>{
    console.log("组件挂载");
    return ()=>console.log("组件卸载");
},[]);
```

### 🧩 练习题

1. 打印组件挂载和卸载信息
2. 观察state变化触发副作用
3. Vue mounted和beforeUnmount实现同样功能

### 📝 参考答案

```javascript
const App = {
    mounted(){ console.log("挂载"); },
    beforeUnmount(){ console.log("卸载"); }
};
Vue.createApp(App).mount('#app');
```

---

## 第9课：路由基础

### 🎯 学习目标

* 学会React Router / Vue Router基础
* 实现多页面导航

### 🧠 生活类比

* 路由就像街道地图，点击链接去不同页面

### 💻 代码示例

```javascript
// Vue Router 示例
const Home = { template:`<h2>首页</h2>` };
const About = { template:`<h2>关于</h2>` };
const routes = [{path:'/',component:Home},{path:'/about',component:About}];
const router = VueRouter.createRouter({ history: VueRouter.createWebHashHistory(), routes });
Vue.createApp({}).use(router).mount('#app');
```

### 🧩 练习题

1. 创建首页和关于页
2. 点击导航跳转页面
3. 显示当前路由路径

### 📝 参考答案

```javascript
// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App(){
    return <BrowserRouter>
        <nav><Link to="/">首页</Link> | <Link to="/about">关于</Link></nav>
        <Routes>
            <Route path="/" element={<h2>首页</h2>} />
            <Route path="/about" element={<h2>关于</h2>} />
        </Routes>
    </BrowserRouter>;
}
```

---

## 第10课：第5阶段综合项目

### 🎯 学习目标

* 综合框架知识制作小型SPA应用
* 实现组件化、状态管理、路由和交互

### 🧩 练习题

1. 制作一个待办事项SPA
2. 使用组件拆分：Header、TaskList、TaskItem、Footer
3. 添加增删改功能，状态管理同步
4. 支持多页面（首页、关于页）
5. 使用表单和事件处理完成交互

### 📝 参考答案

> 项目可分模块实现：
>
> * 使用父组件管理任务数组
> * TaskList渲染列表
> * TaskItem绑定事件
> * Header/Footer组件显示静态内容
> * Router实现首页和关于页切换

---

