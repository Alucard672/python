# 第6阶段 · Python全栈项目实战与优化（前5课）

## 第1课 全栈项目需求分析与设计

### 🎯 学习目标

* 学会分析全栈项目需求
* 能设计前后端交互接口和数据库结构

### 🧠 生活类比

* 全栈项目像建一个智能家居系统，前端是控制面板，后端是设备逻辑，数据库存储信息

### 💻 代码示例

```python
# 项目结构示例
# fullstack_project/
# ├─ backend/
# │   ├─ app.py
# │   ├─ models.py
# │   └─ utils.py
# ├─ frontend/
# │   └─ index.html
# └─ database.db
```

### 🧩 练习题

1. 设计一个图书管理系统前后端交互接口
2. 绘制数据库 ER 图

### 📝 参考答案

```python
# 后端接口: /api/add_book, /api/get_books
# 数据库表: book(id, title, author, year)
# 前端: 提交表单数据, 显示书籍列表
```

---

## 第2课 前端基础与交互

### 🎯 学习目标

* 学会 HTML、CSS、JavaScript 基础
* 能与 Flask API 交互

### 🧠 生活类比

* 前端像餐厅菜单，用户选择菜品，后端厨房准备

### 💻 代码示例

```html
<!-- index.html -->
<form id="bookForm">
  书名: <input type="text" id="title">
  作者: <input type="text" id="author">
  <button type="submit">提交</button>
</form>
<script>
document.getElementById('bookForm').onsubmit=function(e){
  e.preventDefault();
  fetch('/api/add_book', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({title: document.getElementById('title').value, author: document.getElementById('author').value})
  }).then(res=>res.json()).then(data=>alert('添加成功'))
}
</script>
```

### 🧩 练习题

1. 创建表单提交书籍信息
2. 使用 JS 获取数据并显示在页面上

### 📝 参考答案

```javascript
// 见上面示例
```

---

## 第3课 后端进阶：Flask+数据库操作

### 🎯 学习目标

* 使用 Flask 完成 CRUD 操作
* 连接 SQLite 或 MySQL 数据库

### 🧠 生活类比

* 后端像图书管理员，接收用户请求并操作数据库

### 💻 代码示例

```python
from flask import Flask, request, jsonify
import sqlite3
app = Flask(__name__)
conn = sqlite3.connect('books.db',check_same_thread=False)
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS book(id INTEGER PRIMARY KEY, title TEXT, author TEXT)')

@app.route('/api/add_book',methods=['POST'])
def add_book():
    data=request.get_json()
    c.execute('INSERT INTO book(title,author) VALUES(?,?)',(data['title'],data['author']))
    conn.commit()
    return jsonify({'status':'success'})

@app.route('/api/get_books')
def get_books():
    c.execute('SELECT * FROM book')
    return jsonify(c.fetchall())

if __name__=='__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 添加删除书籍接口
2. 实现书籍查询接口

### 📝 参考答案

```python
# 参考上面示例
@app.route('/api/delete_book/<int:id>')
def delete_book(id):
    c.execute('DELETE FROM book WHERE id=?',(id,))
    conn.commit()
    return jsonify({'status':'deleted'})
```

---

## 第4课 前后端整合与调试

### 🎯 学习目标

* 学会前后端交互调试
* 使用 Postman 或浏览器进行接口测试

### 🧠 生活类比

* 整合像餐厅前台与厨房协调，保证下单正确处理

### 💻 代码示例

```javascript
// fetch提交数据, 处理返回
fetch('/api/add_book', {...}).then(res=>res.json()).then(data=>console.log(data))
```

### 🧩 练习题

1. 提交表单数据并显示新增书籍
2. 调试错误并修复接口返回问题

### 📝 参考答案

```javascript
// JS fetch示例见上面
```

---

## 第5课 全栈项目实战：图书管理系统

### 🎯 学习目标

* 综合使用前端、后端、数据库
* 完成可运行的全栈图书管理系统

### 🧠 生活类比

* 系统像完整的图书馆管理，从前台借书到后台管理数据库

### 💻 代码示例

```python
# 组合前端HTML+Flask后端+SQLite数据库,见上课示例
# 功能: 添加书籍, 删除书籍, 查询书籍, 显示书籍列表
```

### 🧩 练习题

1. 实现完整的添加、删除、修改、查询功能
2. 美化前端页面，优化用户体验
# 第6阶段 · Python全栈项目实战与优化（第6~10课 + 阶段综合练习）

## 第6课 用户认证与权限管理

### 🎯 学习目标

* 掌握用户注册、登录、权限控制
* 能保护接口数据安全

### 🧠 生活类比

* 权限管理像门禁系统，只有授权用户才能进入特定区域

### 💻 代码示例

```python
from flask import Flask, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
app = Flask(__name__)
app.secret_key='secret'

users={}

@app.route('/register',methods=['POST'])
def register():
    data=request.get_json()
    users[data['username']]=generate_password_hash(data['password'])
    return jsonify({'status':'registered'})

@app.route('/login',methods=['POST'])
def login():
    data=request.get_json()
    if data['username'] in users and check_password_hash(users[data['username']],data['password']):
        session['user']=data['username']
        return jsonify({'status':'logged_in'})
    return jsonify({'status':'fail'})

if __name__=='__main__':
    app.run(debug=True)
```

### 🧩 练习题

1. 实现用户注销功能
2. 根据用户权限控制访问接口

### 📝 参考答案

```python
@app.route('/logout')
def logout():
    session.pop('user',None)
    return jsonify({'status':'logged_out'})
```

---

## 第7课 高级前端交互与Vue.js基础

### 🎯 学习目标

* 学会使用 Vue.js 创建交互式前端
* 能与 Flask API 交互显示动态数据

### 🧠 生活类比

* Vue.js像智能仪表盘，根据后端数据动态更新显示

### 💻 代码示例

```html
<div id="app">
  <ul>
    <li v-for="book in books">{{ book.title }}</li>
  </ul>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
new Vue({
  el:'#app',
  data:{ books:[] },
  created(){
    fetch('/api/get_books').then(res=>res.json()).then(data=>{this.books=data})
  }
})
</script>
```

### 🧩 练习题

1. 显示书籍列表并支持添加新书
2. 实现书籍删除按钮并同步后端

### 📝 参考答案

```javascript
// 见上面示例
```

---

## 第8课 部署与性能优化

### 🎯 学习目标

* 掌握 Flask 部署到服务器
* 使用 Gunicorn + Nginx 部署
* 学会缓存、分页等性能优化

### 🧠 生活类比

* 部署像把餐厅开张营业，性能优化像优化点菜和出菜流程

### 💻 代码示例

```bash
# 安装 Gunicorn
pip install gunicorn
# 启动 Flask 应用
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

### 🧩 练习题

1. 部署 Flask 项目到本地服务器
2. 实现分页查询提高性能

### 📝 参考答案

```python
# Flask分页
page=1
per_page=10
books=c.execute('SELECT * FROM book LIMIT ? OFFSET ?',(per_page,(page-1)*per_page)).fetchall()
```

---

## 第9课 自动化测试与持续集成

### 🎯 学习目标

* 学会使用 pytest、unittest 编写自动化测试
* 了解 CI/CD 基础

### 🧠 生活类比

* 自动化测试像验收工序，每次更新都检查是否正常运行

### 💻 代码示例

```python
# pytest示例
def add(a,b):
    return a+b

def test_add():
    assert add(2,3)==5
```

### 🧩 练习题

1. 为前后端接口编写自动化测试
2. 配置 GitHub Actions 自动运行测试

### 📝 参考答案

```yaml
# GitHub Actions YAML
name: Python CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.10
      - run: pip install -r requirements.txt
      - run: pytest
```

---

## 第10课 综合项目：全栈图书管理系统优化与上线

### 🎯 学习目标

* 综合前6阶段所学
* 优化全栈系统性能、用户体验与安全
* 完成上线部署

### 🧠 生活类比

* 系统像成熟图书馆，从前台借书到后台管理全程优化

### 💻 代码示例

```python
# 综合前端Vue.js + Flask后端 + SQLite/MySQL数据库
# 功能: 添加/删除/修改/查询书籍, 用户登录权限, 日志记录, 自动生成报表, 性能优化, 部署上线
```

### 🧩 练习题

1. 优化前端交互体验
2. 添加用户权限与操作日志
3. 使用缓存和分页优化查询
4. 部署项目上线并验证功能

### 📝 参考答案

```python
# 参考前6阶段各课示例, 综合应用到全栈项目中
```

---

## 第6阶段综合练习题

### 🧩 练习题

1. 创建带用户认证的全栈图书管理系统
2. 实现前端Vue.js交互显示书籍
3. 部署Flask后端并优化查询性能
4. 编写自动化测试用例并配置CI/CD
5. 综合优化全栈系统并上线
