// 第6阶段 - Python项目实战
import type { IStage } from '../types/Stage'

export const stage6: IStage = {
  id: 6,
  title: '第6阶段 · Python项目实战',
  description: '通过实际项目开发，综合运用Python技能',
  lessons: [
    {
      id: 'lesson6-1',
      title: 'Web框架实战：Flask博客系统',
      objective: '掌握Flask框架，开发完整的Web应用，学会路由、模板、数据库操作',
      analogy: '就像建造一栋房子，Flask是框架，路由是房间布局，模板是装修风格，数据库是储物间',
      codeExample: `from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

@app.route('/')
def index():
    posts = Post.query.all()
    return render_template('index.html', posts=posts)

if __name__ == '__main__':
    app.run(debug=True)`,
      originalExercises: [
        {
          id: 'ex6-1-1',
          title: '简单Flask应用',
          description: '创建一个显示"Hello World"的Flask应用',
          template: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route(\'/\')\ndef hello():\n    return \n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
          solution: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route(\'/\')\ndef hello():\n    return "Hello World!"\n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-1-adv-1',
          title: '模板渲染与上下文（示例片段）',
          description: '展示 Jinja2 模板变量渲染的基本用法（仅示例，不实际运行服务器）',
          template: `from jinja2 import Template
tmpl = Template("<h1>{{ title }}</h1><p>{{ content }}</p>")
html = tmpl.render(title="我的博客", content="欢迎来到我的博客主页")
print(html)`,
          solution: `from jinja2 import Template
tmpl = Template("<h1>{{ title }}</h1><p>{{ content }}</p>")
html = tmpl.render(title="我的博客", content="欢迎来到我的博客主页")
print(html)`,
          type: 'advanced'
        },
        {
          id: 'ex6-1-adv-2',
          title: 'REST 接口设计草图',
          description: '为博客系统设计基本的 REST 端点与数据结构（伪代码描述，不启动服务器）',
          template: `# 端点设计:
# GET /posts           -> 列出文章
# GET /posts/{id}      -> 获取文章详情
# POST /posts          -> 创建文章 {title, content}
# PUT /posts/{id}      -> 更新文章
# DELETE /posts/{id}   -> 删除文章
schema = {"Post": {"id": "int", "title": "str", "content": "str"}}
print(schema)`,
          solution: `schema = {"Post": {"id": "int", "title": "str", "content": "str"}}
print(schema)`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-1-1', type: 'single', question: 'Flask 获取所有文章常通过？', options: ['Post.list()','Post.query.all()','db.select_all()'], answer: 'Post.query.all()', explanation: 'SQLAlchemy 查询接口' },
        { id: 'q6-1-2', type: 'single', question: '模板渲染引擎是？', options: ['Jinja2','Mako','Bottle'], answer: 'Jinja2', explanation: 'Flask 默认使用 Jinja2' },
        { id: 'q6-1-3', type: 'judge', question: '配置数据库 URI 通常通过 app.config 设置', answer: true, explanation: 'app.config[...] 进行配置' },
        { id: 'q6-1-4', type: 'single', question: '返回 HTML 页应使用？', options: ['render_template','jsonify','send_file'], answer: 'render_template', explanation: '渲染模板' },
        { id: 'q6-1-5', type: 'judge', question: '创建表需在模型定义后调用 Base.metadata.create_all/扩展等对应方法', answer: true, explanation: '初始化数据库结构' }
      ],
      summary: 'Flask是轻量级Web框架，通过路由处理请求，模板渲染页面，SQLAlchemy操作数据库'
    },
    {
      id: 'lesson6-2',
      title: '爬虫项目实战：数据采集与分析',
      objective: '掌握网络爬虫技术，学会数据采集、清洗、存储和分析',
      analogy: '爬虫就像勤劳的蜜蜂，在网络花园中采集花蜜（数据），然后带回蜂巢（数据库）酿成蜂蜜（有价值的信息）',
      codeExample: `import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_news():
    url = 'https://example.com/news'
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    news_data = []
    for item in soup.find_all('div', class_='news-item'):
        title = item.find('h3').text.strip()
        news_data.append({'title': title})
    
    df = pd.DataFrame(news_data)
    df.to_csv('news.csv', index=False)
    print(f'抓取了 {len(news_data)} 条新闻')

scrape_news()`,
      originalExercises: [
        {
          id: 'ex6-2-1',
          title: '简单网页抓取',
          description: '使用requests获取网页内容',
          template: 'import requests\n\nurl = "https://httpbin.org/html"\nresponse = requests.get(url)\nprint(response.status_code)\nprint()',
          solution: 'import requests\n\nurl = "https://httpbin.org/html"\nresponse = requests.get(url)\nprint(response.status_code)\nprint(response.text[:100])',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-2-adv-1',
          title: '选择器优化与容错',
          description: '在 HTML 结构不稳定时，使用更稳健的选择器并做空值保护',
          template: `from bs4 import BeautifulSoup
html = "<div class='news-item'><h3>标题A</h3></div><div class='news-item'><span>无标题</span></div>"
soup = BeautifulSoup(html, "html.parser")
items = []
for div in soup.select(".news-item"):
    h = div.find("h3")
    items.append({"title": h.text.strip() if h else None})
print(items)`,
          solution: `from bs4 import BeautifulSoup
html = "<div class='news-item'><h3>标题A</h3></div><div class='news-item'><span>无标题</span></div>"
soup = BeautifulSoup(html, "html.parser")
items = []
for div in soup.select(".news-item"):
    h = div.find("h3")
    items.append({"title": h.text.strip() if h else None})
print(items)`,
          type: 'advanced'
        },
        {
          id: 'ex6-2-adv-2',
          title: '数据清洗与导出（模拟）',
          description: '对抓取的标题做去重与过滤空值，打印最终“将要导出”的记录数',
          template: `titles = ["新闻A", None, "新闻B", "新闻A", "新闻C", None]
clean = sorted({t for t in titles if t})
print("最终记录数:", len(clean))
print(clean)`,
          solution: `titles = ["新闻A", None, "新闻B", "新闻A", "新闻C", None]
clean = sorted({t for t in titles if t})
print("最终记录数:", len(clean))
print(clean)`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-2-1', type: 'single', question: '设置 UA 的目的？', options: ['伪装成浏览器','提升速度','开启缓存'], answer: '伪装成浏览器', explanation: '降低被拦截概率' },
        { id: 'q6-2-2', type: 'single', question: 'select(".news-item") 属于？', options: ['CSS 选择器','XPath','正则'], answer: 'CSS 选择器', explanation: 'BeautifulSoup 支持 select' },
        { id: 'q6-2-3', type: 'judge', question: '抽取时需做空值保护以防止 AttributeError', answer: true, explanation: 'HTML 结构不稳定' },
        { id: 'q6-2-4', type: 'single', question: '数据去重常用的容器/方法？', options: ['list','set','tuple'], answer: 'set', explanation: '利用集合去重' },
        { id: 'q6-2-5', type: 'judge', question: '导出前建议统计记录数并做基本校验', answer: true, explanation: '验证抓取质量' }
      ],
      summary: '爬虫通过requests获取网页，BeautifulSoup解析HTML，需要处理反爬虫和数据清洗'
    },
    {
      id: 'lesson6-3',
      title: '数据科学项目：股票分析系统',
      objective: '综合运用pandas、numpy、matplotlib进行金融数据分析和可视化',
      analogy: '就像股市分析师，收集股票数据，分析趋势，制作图表，为投资决策提供依据',
      codeExample: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def analyze_stock():
    # 生成模拟股票数据
    dates = pd.date_range('2023-01-01', periods=100)
    prices = np.random.randn(100).cumsum() + 100
    
    data = pd.DataFrame({'date': dates, 'price': prices})
    data['ma5'] = data['price'].rolling(5).mean()
    
    plt.figure(figsize=(10, 6))
    plt.plot(data['date'], data['price'], label='价格')
    plt.plot(data['date'], data['ma5'], label='5日均线')
    plt.legend()
    plt.title('股价分析')
    plt.show()
    
    return data

stock_data = analyze_stock()`,
      originalExercises: [
        {
          id: 'ex6-3-1',
          title: '股价移动平均',
          description: '计算股价的5日移动平均线',
          template: 'import pandas as pd\n\nprices = [100, 102, 98, 105, 107]\ndf = pd.DataFrame({\'price\': prices})\ndf[\'ma5\'] = \nprint(df)',
          solution: 'import pandas as pd\n\nprices = [100, 102, 98, 105, 107]\ndf = pd.DataFrame({\'price\': prices})\ndf[\'ma5\'] = df[\'price\'].rolling(3).mean()\nprint(df)',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-3-adv-1',
          title: '技术指标：MACD 简化实现',
          description: '用 EMA 模拟简化的 MACD 计算（仅演示核心思想）',
          template: `import pandas as pd
import numpy as np
price = pd.Series(np.random.randn(50).cumsum() + 100)
ema12 = price.ewm(span=12, adjust=False).mean()
ema26 = price.ewm(span=26, adjust=False).mean()
macd = ema12 - ema26
signal = macd.ewm(span=9, adjust=False).mean()
print(macd.tail().round(3).tolist())
print(signal.tail().round(3).tolist())`,
          solution: `import pandas as pd
import numpy as np
price = pd.Series(np.random.randn(50).cumsum() + 100)
ema12 = price.ewm(span=12, adjust=False).mean()
ema26 = price.ewm(span=26, adjust=False).mean()
macd = ema12 - ema26
signal = macd.ewm(span=9, adjust=False).mean()
print(macd.tail().round(3).tolist())
print(signal.tail().round(3).tolist())`,
          type: 'advanced'
        },
        {
          id: 'ex6-3-adv-2',
          title: '回测逻辑草图：均线交叉信号',
          description: '生成简单买卖信号（MA5 上穿 MA20 买入，下穿卖出），打印信号数量',
          template: `import pandas as pd
import numpy as np
price = pd.Series(np.random.randn(100).cumsum() + 100)
ma5 = price.rolling(5).mean(); ma20 = price.rolling(20).mean()
signal_buy = (ma5 > ma20) & (ma5.shift(1) <= ma20.shift(1))
signal_sell = (ma5 < ma20) & (ma5.shift(1) >= ma20.shift(1))
print("买入信号数:", int(signal_buy.sum()))
print("卖出信号数:", int(signal_sell.sum()))`,
          solution: `import pandas as pd
import numpy as np
price = pd.Series(np.random.randn(100).cumsum() + 100)
ma5 = price.rolling(5).mean(); ma20 = price.rolling(20).mean()
signal_buy = (ma5 > ma20) & (ma5.shift(1) <= ma20.shift(1))
signal_sell = (ma5 < ma20) & (ma5.shift(1) >= ma20.shift(1))
print("买入信号数:", int(signal_buy.sum()))
print("卖出信号数:", int(signal_sell.sum()))`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-3-1', type: 'single', question: '滚动均线的典型用法？', options: ['平滑噪声','提升分辨率','降低维度'], answer: '平滑噪声', explanation: '移动平均平滑序列' },
        { id: 'q6-3-2', type: 'single', question: 'MACD 的核心构成？', options: ['两条 EMA 差与其信号线','两条 SMA 比值','价格对数'], answer: '两条 EMA 差与其信号线', explanation: 'MACD = EMA12-EMA26，信号线为其 EMA' },
        { id: 'q6-3-3', type: 'judge', question: '技术指标不保证盈利，仅作辅助', answer: true, explanation: '需风险控制' },
        { id: 'q6-3-4', type: 'single', question: '买卖信号交叉常见策略？', options: ['MA5/MA20 交叉','FFT 交叉','PCA 交叉'], answer: 'MA5/MA20 交叉', explanation: '常见均线策略示例' },
        { id: 'q6-3-5', type: 'judge', question: '绘图前可先计算衍生列如 ma5', answer: true, explanation: '便于直观展示' }
      ],
      summary: '金融数据分析需要掌握技术指标计算、数据可视化和趋势分析方法'
    },
    {
      id: 'lesson6-4',
      title: '机器学习项目：智能推荐系统',
      objective: '使用scikit-learn构建推荐算法，理解协同过滤和内容推荐',
      analogy: '就像智能导购员，根据你的喜好和相似用户的选择，为你推荐最合适的商品',
      codeExample: `from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np

def simple_recommender():
    # 用户-物品评分矩阵
    data = {
        'user1': [5, 3, 0, 1],
        'user2': [4, 0, 0, 1],
        'user3': [1, 1, 0, 5]
    }
    
    df = pd.DataFrame(data, index=['item1', 'item2', 'item3', 'item4'])
    
    # 计算用户相似度
    user_similarity = cosine_similarity(df.T)
    print("用户相似度矩阵:")
    print(user_similarity)
    
    return df

recommender_data = simple_recommender()`,
      originalExercises: [
        {
          id: 'ex6-4-1',
          title: '相似度计算',
          description: '计算两个用户的余弦相似度',
          template: 'import numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nuser1 = np.array([[5, 3, 0, 1]])\nuser2 = np.array([[4, 0, 0, 1]])\n\nsimilarity = \nprint(f"相似度: {similarity[0][0]:.3f}")',
          solution: 'import numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nuser1 = np.array([[5, 3, 0, 1]])\nuser2 = np.array([[4, 0, 0, 1]])\n\nsimilarity = cosine_similarity(user1, user2)\nprint(f"相似度: {similarity[0][0]:.3f}")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-4-adv-1',
          title: '基于物品的协同过滤相似度',
          description: '计算物品之间的余弦相似度矩阵并输出前N相似物品',
          template: `import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

df = pd.DataFrame({
  'user1':[5,3,0,1],
  'user2':[4,0,0,1],
  'user3':[1,1,0,5]
}, index=['item1','item2','item3','item4'])
sim = cosine_similarity(df.values)
print("item 相似度矩阵形状:", sim.shape)`,
          solution: `import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

df = pd.DataFrame({
  'user1':[5,3,0,1],
  'user2':[4,0,0,1],
  'user3':[1,1,0,5]
}, index=['item1','item2','item3','item4'])
sim = cosine_similarity(df.values)
print("item 相似度矩阵形状:", sim.shape)`,
          type: 'advanced'
        },
        {
          id: 'ex6-4-adv-2',
          title: 'Top-N 推荐（简化版）',
          description: '基于用户相似度矩阵，给指定用户推荐评分为0的物品（简化逻辑）',
          template: `import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

M = np.array([[5,3,0,1],
              [4,0,0,1],
              [1,1,0,5]])  # 行=用户, 列=物品
sim = cosine_similarity(M)
target = 0  # 用户0
scores = sim[target].dot(M)  # 加权求和（简化）
recommend = [(j, scores[j]) for j in range(M.shape[1]) if M[target, j] == 0]
print(sorted(recommend, key=lambda x: -x[1]))`,
          solution: `import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

M = np.array([[5,3,0,1],
              [4,0,0,1],
              [1,1,0,5]])
sim = cosine_similarity(M)
target = 0
scores = sim[target].dot(M)
recommend = [(j, scores[j]) for j in range(M.shape[1]) if M[target, j] == 0]
print(sorted(recommend, key=lambda x: -x[1]))`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-4-1', type: 'single', question: '余弦相似度的值域？', options: ['[-1,1]','[0,1]','[0,∞)'], answer: '[0,1]', explanation: '非负数据常落在[0,1]' },
        { id: 'q6-4-2', type: 'single', question: '用户相似度矩阵的形状是？', options: ['物品数×用户数','用户数×用户数','用户数×物品数'], answer: '用户数×用户数', explanation: '两两用户相似度' },
        { id: 'q6-4-3', type: 'judge', question: '基于物品的协同过滤计算物品两两相似度', answer: true, explanation: '按列或按物品向量' },
        { id: 'q6-4-4', type: 'single', question: 'Top-N 推荐通常剔除哪些项？', options: ['已评分/已购买项','热门项','冷门项'], answer: '已评分/已购买项', explanation: '避免重复推荐' },
        { id: 'q6-4-5', type: 'judge', question: '矩阵稀疏是推荐系统常见问题', answer: true, explanation: '需降维/隐语义等方法' }
      ],
      summary: '推荐系统通过分析用户行为和物品特征，为用户提供个性化推荐'
    },
    {
      id: 'lesson6-5',
      title: '深度学习项目：图像识别系统',
      objective: '使用TensorFlow/Keras构建卷积神经网络，实现图像分类',
      analogy: '就像训练一个人工眼睛，通过大量图片学习识别不同物体的特征',
      codeExample: `import tensorflow as tf
from tensorflow import keras

def create_simple_model():
    model = keras.Sequential([
        keras.layers.Dense(128, activation='relu', input_shape=(784,)),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(10, activation='softmax')
    ])
    
    model.compile(
        optimizer='adam',
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

# 创建模型
model = create_simple_model()
print("模型创建完成")
model.summary()`,
      originalExercises: [
        {
          id: 'ex6-5-1',
          title: '简单神经网络',
          description: '创建一个基础的全连接神经网络',
          template: 'from tensorflow import keras\n\nmodel = keras.Sequential([\n    keras.layers.Dense(64, activation=\'relu\', input_shape=(10,)),\n    keras.layers.Dense(1, activation=\'sigmoid\')\n])\n\nmodel.compile(optimizer=, loss=)\nprint("模型创建完成")',
          solution: 'from tensorflow import keras\n\nmodel = keras.Sequential([\n    keras.layers.Dense(64, activation=\'relu\', input_shape=(10,)),\n    keras.layers.Dense(1, activation=\'sigmoid\')\n])\n\nmodel.compile(optimizer=\'adam\', loss=\'binary_crossentropy\')\nprint("模型创建完成")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-5-adv-1',
          title: '数据流水线（伪数据）与回调',
          description: '构造伪特征数据，演示 Keras 训练与简单回调（仅打印，不训练大模型）',
          template: `from tensorflow import keras
import numpy as np

X = np.random.rand(200, 10)
y = (X.sum(axis=1) > 5).astype('int32')

model = keras.Sequential([
    keras.layers.Dense(16, activation='relu', input_shape=(10,)),
    keras.layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

class PrintCallback(keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        print(f"epoch={epoch}, acc={logs.get('accuracy'):.3f}")

print("示例配置完成（实际训练可能较慢，谨慎运行 fit）")`,
          solution: `from tensorflow import keras
import numpy as np

X = np.random.rand(200, 10)
y = (X.sum(axis=1) > 5).astype('int32')

model = keras.Sequential([
    keras.layers.Dense(16, activation='relu', input_shape=(10,)),
    keras.layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

class PrintCallback(keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        print(f"epoch={epoch}, acc={logs.get('accuracy'):.3f}")

print("示例配置完成（实际训练可能较慢，谨慎运行 fit）")`,
          type: 'advanced'
        },
        {
          id: 'ex6-5-adv-2',
          title: '模型保存与加载（结构片段）',
          description: '演示保存/加载权重的代码片段（不生成文件，仅展示API使用）',
          template: `from tensorflow import keras
model = keras.Sequential([keras.layers.Dense(4, input_shape=(3,), activation='relu')])
model.compile(optimizer='adam', loss='mse')
print("保存: model.save_weights('model.weights.h5')  # 示例")
print("加载: model.load_weights('model.weights.h5')  # 示例")`,
          solution: `from tensorflow import keras
model = keras.Sequential([keras.layers.Dense(4, input_shape=(3,), activation='relu')])
model.compile(optimizer='adam', loss='mse')
print("保存: model.save_weights('model.weights.h5')  # 示例")
print("加载: model.load_weights('model.weights.h5')  # 示例")`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-5-1', type: 'single', question: 'Keras 构建序列模型使用？', options: ['keras.Sequential','keras.Series','keras.Stack'], answer: 'keras.Sequential', explanation: '顺序堆叠层' },
        { id: 'q6-5-2', type: 'single', question: '二分类最后一层常用激活？', options: ['relu','softmax','sigmoid'], answer: 'sigmoid', explanation: '输出概率' },
        { id: 'q6-5-3', type: 'judge', question: 'model.compile 需要指定优化器与损失', answer: true, explanation: '训练前配置' },
        { id: 'q6-5-4', type: 'single', question: '保存权重 API？', options: ['save_model','save_weights','dump'], answer: 'save_weights', explanation: '保存参数到文件' },
        { id: 'q6-5-5', type: 'judge', question: '示例中可用小数据快速演示而非长时间训练', answer: true, explanation: '兼顾教学与资源' }
      ],
      summary: '深度学习通过多层神经网络自动学习特征，CNN特别适合图像识别任务'
    },
    {
      id: 'lesson6-6',
      title: '自然语言处理：情感分析系统',
      objective: '使用NLTK和机器学习进行文本处理和情感分析',
      analogy: '就像一个能读懂文字情感的AI心理学家，分析文本中的喜怒哀乐',
      codeExample: `from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import re

def simple_sentiment_analysis():
    # 示例数据
    texts = [
        "这部电影太棒了",
        "电影很无聊",
        "非常喜欢这个故事",
        "浪费时间"
    ]
    labels = [1, 0, 1, 0]  # 1=正面，0=负面
    
    # 文本向量化
    vectorizer = CountVectorizer()
    X = vectorizer.fit_transform(texts)
    
    # 训练模型
    model = MultinomialNB()
    model.fit(X, labels)
    
    # 预测新文本
    new_text = ["这个电影不错"]
    X_new = vectorizer.transform(new_text)
    prediction = model.predict(X_new)
    
    print(f"预测结果: {'正面' if prediction[0] == 1 else '负面'}")

simple_sentiment_analysis()`,
      originalExercises: [
        {
          id: 'ex6-6-1',
          title: '文本预处理',
          description: '清理和预处理文本数据',
          template: 'import re\n\ndef clean_text(text):\n    # 移除标点符号，转为小写\n    cleaned = \n    return cleaned\n\ntext = "Hello World! 123"\nprint(clean_text(text))',
          solution: 'import re\n\ndef clean_text(text):\n    # 移除标点符号，转为小写\n    cleaned = re.sub(r\'[^a-zA-Z\\s]\', \'\', text.lower())\n    return cleaned\n\ntext = "Hello World! 123"\nprint(clean_text(text))',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-6-adv-1',
          title: '向量化与停用词',
          description: '使用 CountVectorizer 配置停用词并输出词汇表（不训练模型）',
          template: `from sklearn.feature_extraction.text import CountVectorizer
texts = ["我 喜欢 读书", "读书 让 人 成长", "我 不 喜欢 噪音"]
vec = CountVectorizer(token_pattern=r'\\b\\w+\\b', stop_words=['我','不'])
X = vec.fit_transform(texts)
print(sorted(vec.get_feature_names_out()))`,
          solution: `from sklearn.feature_extraction.text import CountVectorizer
texts = ["我 喜欢 读书", "读书 让 人 成长", "我 不 喜欢 噪音"]
vec = CountVectorizer(token_pattern=r'\\b\\w+\\b', stop_words=['我','不'])
X = vec.fit_transform(texts)
print(sorted(vec.get_feature_names_out()))`,
          type: 'advanced'
        },
        {
          id: 'ex6-6-adv-2',
          title: '混淆矩阵（模拟预测）',
          description: '构造真实标签与模型预测，计算并打印混淆矩阵',
          template: `from sklearn.metrics import confusion_matrix
y_true = [1,0,1,1,0,0,1]
y_pred = [1,0,0,1,0,1,1]
print(confusion_matrix(y_true, y_pred))`,
          solution: `from sklearn.metrics import confusion_matrix
y_true = [1,0,1,1,0,0,1]
y_pred = [1,0,0,1,0,1,1]
print(confusion_matrix(y_true, y_pred))`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-6-1', type: 'single', question: '清洗文本常见步骤不包括？', options: ['去标点/小写化','去停用词','增加噪声'], answer: '增加噪声', explanation: '应降低噪声' },
        { id: 'q6-6-2', type: 'single', question: 'CountVectorizer 作用？', options: ['词频向量化','词嵌入','主题建模'], answer: '词频向量化', explanation: '将文本转为词频表示' },
        { id: 'q6-6-3', type: 'judge', question: '停用词用于移除高频无意义词', answer: true, explanation: '提高特征质量' },
        { id: 'q6-6-4', type: 'single', question: '混淆矩阵用于评估？', options: ['回归','分类','聚类'], answer: '分类', explanation: '展示 TP/FP/FN/TN' },
        { id: 'q6-6-5', type: 'judge', question: '正则可用于初步清洗非字母数字字符', answer: true, explanation: '常用预处理手段' }
      ],
      summary: 'NLP通过文本预处理、特征提取、机器学习模型来理解和分析自然语言'
    },
    {
      id: 'lesson6-7',
      title: '自动化运维：系统监控与日志分析',
      objective: '开发系统监控工具，实现日志分析和自动化运维',
      analogy: '就像给服务器安装一个智能管家，24小时监控系统健康状况，及时发现和处理问题',
      codeExample: `import psutil
import datetime

def system_monitor():
    # 获取系统信息
    cpu_percent = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage('/')
    
    # 生成监控报告
    report = {
        'timestamp': datetime.datetime.now(),
        'cpu_usage': f"{cpu_percent}%",
        'memory_usage': f"{memory.percent}%",
        'disk_usage': f"{disk.percent}%"
    }
    
    print("系统监控报告:")
    for key, value in report.items():
        print(f"{key}: {value}")
    
    # 检查警告
    if cpu_percent > 80:
        print("⚠️ CPU使用率过高!")
    if memory.percent > 85:
        print("⚠️ 内存使用率过高!")
    
    return report

monitor_data = system_monitor()`,
      originalExercises: [
        {
          id: 'ex6-7-1',
          title: '系统信息获取',
          description: '获取并显示系统的CPU和内存使用率',
          template: 'import psutil\n\n# 获取CPU使用率\ncpu_usage = psutil.cpu_percent()\n\n# 获取内存信息\nmemory = psutil.virtual_memory()\n\nprint(f"CPU使用率: {cpu_usage}%")\nprint(f"内存使用率: {}%")',
          solution: 'import psutil\n\n# 获取CPU使用率\ncpu_usage = psutil.cpu_percent()\n\n# 获取内存信息\nmemory = psutil.virtual_memory()\n\nprint(f"CPU使用率: {cpu_usage}%")\nprint(f"内存使用率: {memory.percent}%")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-7-adv-1',
          title: '滚动均值告警（模拟）',
          description: '对 CPU 利用率序列计算滚动均值，超过阈值打印告警次数',
          template: `import pandas as pd
cpu = pd.Series([20,30,50,60,70,85,40,55,90,35])
ma3 = cpu.rolling(3).mean()
alerts = (ma3 > 60).sum()
print("滚动均值:", ma3.tolist())
print("告警次数:", int(alerts))`,
          solution: `import pandas as pd
cpu = pd.Series([20,30,50,60,70,85,40,55,90,35])
ma3 = cpu.rolling(3).mean()
alerts = (ma3 > 60).sum()
print("滚动均值:", ma3.tolist())
print("告警次数:", int(alerts))`,
          type: 'advanced'
        },
        {
          id: 'ex6-7-adv-2',
          title: '日志解析与分级',
          description: '解析日志级别（INFO/WARN/ERROR）并统计数量',
          template: `logs = ["INFO 启动", "WARN 配置缺失", "ERROR 崩溃", "INFO 心跳", "ERROR 连接中断"]
stats = {"INFO":0,"WARN":0,"ERROR":0}
for line in logs:
    level = line.split()[0]
    stats[level] += 1
print(stats)`,
          solution: `logs = ["INFO 启动", "WARN 配置缺失", "ERROR 崩溃", "INFO 心跳", "ERROR 连接中断"]
stats = {"INFO":0,"WARN":0,"ERROR":0}
for line in logs:
    level = line.split()[0]
    stats[level] += 1
print(stats)`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-7-1', type: 'single', question: 'psutil.cpu_percent(interval=1) 的 interval 含义？', options: ['采样次数','采样间隔秒','线程数量'], answer: '采样间隔秒', explanation: '计算平均 CPU 使用率' },
        { id: 'q6-7-2', type: 'single', question: '内存使用率字段？', options: ['memory.used','memory.percent','memory.rate'], answer: 'memory.percent', explanation: '百分比占用' },
        { id: 'q6-7-3', type: 'judge', question: '超过阈值可输出告警日志', answer: true, explanation: '基础告警策略' },
        { id: 'q6-7-4', type: 'single', question: '滚动均值用于？', options: ['平滑短期波动','增加峰值','压缩磁盘'], answer: '平滑短期波动', explanation: '更稳定的趋势' },
        { id: 'q6-7-5', type: 'judge', question: '日志解析常需正则或简单分隔处理', answer: true, explanation: '结构化日志便于统计' }
      ],
      summary: '自动化运维通过监控系统状态、分析日志、自动化部署来提高运维效率'
    },
    {
      id: 'lesson6-8',
      title: 'API开发实战：RESTful服务',
      objective: '使用FastAPI开发RESTful API，实现数据的增删改查操作',
      analogy: '就像建造一个服务窗口，不同的客户端可以通过标准化的方式来获取和提交数据',
      codeExample: `from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# 数据模型
class Item(BaseModel):
    id: int
    name: str
    price: float

# 模拟数据库
items_db = [
    Item(id=1, name="商品1", price=99.99),
    Item(id=2, name="商品2", price=199.99)
]

@app.get("/")
def read_root():
    return {"message": "欢迎使用商品API"}

@app.get("/items", response_model=List[Item])
def get_items():
    return items_db

@app.get("/items/{item_id}")
def get_item(item_id: int):
    for item in items_db:
        if item.id == item_id:
            return item
    return {"error": "商品未找到"}

@app.post("/items")
def create_item(item: Item):
    items_db.append(item)
    return {"message": "商品创建成功", "item": item}

# 运行: uvicorn main:app --reload`,
      originalExercises: [
        {
          id: 'ex6-8-1',
          title: '简单API端点',
          description: '创建一个返回JSON数据的API端点',
          template: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return \n\n# 运行: uvicorn main:app --reload',
          solution: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"message": "Hello API"}\n\n# 运行: uvicorn main:app --reload',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-8-adv-1',
          title: 'Pydantic 校验与默认值',
          description: '定义数据模型，演示必填/默认字段（结构片段，不运行服务）',
          template: `from pydantic import BaseModel
class Item(BaseModel):
    id: int
    name: str
    price: float = 0.0
print(Item(id=1, name="A"))`,
          solution: `from pydantic import BaseModel
class Item(BaseModel):
    id: int
    name: str
    price: float = 0.0
print(Item(id=1, name="A"))`,
          type: 'advanced'
        },
        {
          id: 'ex6-8-adv-2',
          title: '分页响应结构（草图）',
          description: '设计通用分页响应的字典结构与示例数据',
          template: `def page(items, page=1, size=2):
    total = len(items)
    start = (page-1)*size
    return {
      "page": page, "size": size, "total": total,
      "items": items[start:start+size]
    }
print(page([{"id":i} for i in range(1,6)], page=2, size=2))`,
          solution: `def page(items, page=1, size=2):
    total = len(items)
    start = (page-1)*size
    return {
      "page": page, "size": size, "total": total,
      "items": items[start:start+size]
    }
print(page([{"id":i} for i in range(1,6)], page=2, size=2))`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-8-1', type: 'single', question: '响应模型的作用？', options: ['限制输出结构','加速网络','压缩传输'], answer: '限制输出结构', explanation: 'Pydantic 校验/序列化' },
        { id: 'q6-8-2', type: 'single', question: 'POST 创建资源的常用返回码？', options: ['200','201','204'], answer: '201', explanation: '表示已创建' },
        { id: 'q6-8-3', type: 'judge', question: '分页响应需要 total/page/size/items 等字段', answer: true, explanation: '规范化结构' },
        { id: 'q6-8-4', type: 'single', question: '未找到资源通常返回？', options: ['400','401','404'], answer: '404', explanation: '资源不存在' },
        { id: 'q6-8-5', type: 'judge', question: '路径参数类型声明可自动校验', answer: true, explanation: 'FastAPI 利用类型提示' }
      ],
      summary: 'RESTful API通过HTTP方法和标准化的URL结构，为不同客户端提供数据服务'
    },
    {
      id: 'lesson6-9',
      title: '数据库项目：ORM与数据管理',
      objective: '使用SQLAlchemy进行数据库操作，实现复杂的数据关系管理',
      analogy: '就像图书馆管理员，通过分类、索引、关联来高效地管理和查询大量数据',
      codeExample: `from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

# 数据库配置
engine = create_engine('sqlite:///example.db')
Base = declarative_base()
Session = sessionmaker(bind=engine)

# 定义模型
class Author(Base):
    __tablename__ = 'authors'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    
    books = relationship("Book", back_populates="author")

class Book(Base):
    __tablename__ = 'books'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    author_id = Column(Integer, ForeignKey('authors.id'))
    
    author = relationship("Author", back_populates="books")

# 创建表
Base.metadata.create_all(engine)

# 使用示例
session = Session()

# 创建作者
author = Author(name="张三")
session.add(author)
session.commit()

# 创建书籍
book = Book(title="Python实战", author_id=author.id)
session.add(book)
session.commit()

print("数据插入成功")`,
      originalExercises: [
        {
          id: 'ex6-9-1',
          title: '简单数据库操作',
          description: '创建一个简单的用户表并插入数据',
          template: 'from sqlalchemy import create_engine, Column, Integer, String\nfrom sqlalchemy.ext.declarative import declarative_base\n\nBase = declarative_base()\n\nclass User(Base):\n    __tablename__ = \'users\'\n    \n    id = Column(Integer, primary_key=True)\n    name = Column(String(50))\n    email = Column()\n\nprint("模型定义完成")',
          solution: 'from sqlalchemy import create_engine, Column, Integer, String\nfrom sqlalchemy.ext.declarative import declarative_base\n\nBase = declarative_base()\n\nclass User(Base):\n    __tablename__ = \'users\'\n    \n    id = Column(Integer, primary_key=True)\n    name = Column(String(50))\n    email = Column(String(100))\n\nprint("模型定义完成")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-9-adv-1',
          title: '一对多查询（结构片段）',
          description: '演示 ORM 关系查询的思路（不连接真实数据库）',
          template: `# 伪代码：Author -> Books
author = {"id": 1, "name": "张三", "books": [{"title":"Python实战"}, {"title":"数据处理"}]}
print([b["title"] for b in author["books"]])`,
          solution: `author = {"id": 1, "name": "张三", "books": [{"title":"Python实战"}, {"title":"数据处理"}]}
print([b["title"] for b in author["books"]])`,
          type: 'advanced'
        },
        {
          id: 'ex6-9-adv-2',
          title: '事务与回滚（思路片段）',
          description: '以字典模拟事务：当异常发生时回滚变更（仅逻辑演示）',
          template: `db = {"users": []}
backup = db["users"][:]
try:
    db["users"].append({"id":1,"name":"A"})
    raise RuntimeError("模拟失败")
except Exception:
    db["users"] = backup
print("最终 users:", db["users"])`,
          solution: `db = {"users": []}
backup = db["users"][:]
try:
    db["users"].append({"id":1,"name":"A"})
    raise RuntimeError("模拟失败")
except Exception:
    db["users"] = backup
print("最终 users:", db["users"])`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-9-1', type: 'single', question: '一对多关系在 SQLAlchemy 中通常通过？', options: ['relationship','connect','join_only'], answer: 'relationship', explanation: 'relationship/back_populates 建立关系' },
        { id: 'q6-9-2', type: 'single', question: '主键字段类型常用？', options: ['String','Integer','Text'], answer: 'Integer', explanation: '自增整型常用作主键' },
        { id: 'q6-9-3', type: 'judge', question: '会话需要提交事务 commit 才会落库', answer: true, explanation: '否则仅在内存' },
        { id: 'q6-9-4', type: 'single', question: '外键在 Book 表中如何声明？', options: ['ForeignKey("authors.id")','PrimaryKey("authors.id")','Index("authors.id")'], answer: 'ForeignKey("authors.id")', explanation: '建立引用关系' },
        { id: 'q6-9-5', type: 'judge', question: '回滚可恢复到异常前的状态', answer: true, explanation: '保证一致性' }
      ],
      summary: 'ORM通过对象关系映射，让我们可以用面向对象的方式操作数据库'
    },
    {
      id: 'lesson6-10',
      title: '综合项目实战：个人助手系统',
      objective: '综合运用所学知识，开发一个包含多个功能模块的个人助手系统',
      analogy: '就像打造一个万能助手，集合了日程管理、数据分析、信息获取等多种能力',
      codeExample: `import datetime
import requests
import json

class PersonalAssistant:
    def __init__(self):
        self.tasks = []
        self.notes = []
    
    def add_task(self, task, due_date=None):
        """添加任务"""
        task_item = {
            'task': task,
            'due_date': due_date,
            'completed': False,
            'created_at': datetime.datetime.now()
        }
        self.tasks.append(task_item)
        print(f"任务已添加: {task}")
    
    def complete_task(self, task_index):
        """完成任务"""
        if 0 <= task_index < len(self.tasks):
            self.tasks[task_index]['completed'] = True
            print(f"任务已完成: {self.tasks[task_index]['task']}")
        else:
            print("任务索引无效")
    
    def list_tasks(self):
        """列出所有任务"""
        print("\\n=== 任务清单 ===")
        for i, task in enumerate(self.tasks):
            status = "✅" if task['completed'] else "⏳"
            print(f"{i}. {status} {task['task']}")
            if task['due_date']:
                print(f"   截止日期: {task['due_date']}")
    
    def add_note(self, content):
        """添加笔记"""
        note = {
            'content': content,
            'created_at': datetime.datetime.now()
        }
        self.notes.append(note)
        print("笔记已保存")
    
    def get_weather(self, city="北京"):
        """获取天气信息（模拟）"""
        # 实际项目中可以调用真实的天气API
        weather_data = {
            'city': city,
            'temperature': '22°C',
            'condition': '晴朗',
            'humidity': '65%'
        }
        
        print(f"\\n=== {city}天气 ===")
        print(f"温度: {weather_data['temperature']}")
        print(f"天气: {weather_data['condition']}")
        print(f"湿度: {weather_data['humidity']}")
        
        return weather_data
    
    def daily_summary(self):
        """生成每日总结"""
        total_tasks = len(self.tasks)
        completed_tasks = sum(1 for task in self.tasks if task['completed'])
        pending_tasks = total_tasks - completed_tasks
        
        print(f"\\n=== 每日总结 ===")
        print(f"总任务数: {total_tasks}")
        print(f"已完成: {completed_tasks}")
        print(f"待完成: {pending_tasks}")
        print(f"完成率: {(completed_tasks/total_tasks*100):.1f}%" if total_tasks > 0 else "完成率: 0%")

# 使用示例
assistant = PersonalAssistant()
assistant.add_task("学习Python", "2024-01-15")
assistant.add_task("写项目文档")
assistant.complete_task(0)
assistant.list_tasks()
assistant.add_note("今天学习了Flask框架")
assistant.get_weather("上海")
assistant.daily_summary()`,
      originalExercises: [
        {
          id: 'ex6-10-1',
          title: '简单任务管理器',
          description: '创建一个基本的任务管理类',
          template: 'class TaskManager:\n    def __init__(self):\n        self.tasks = []\n    \n    def add_task(self, task):\n        self.tasks.append(task)\n        print(f"任务已添加: {task}")\n    \n    def list_tasks(self):\n        print("任务列表:")\n        for i, task in enumerate(self.tasks):\n            print(f"{i+1}. {task}")\n\n# 测试\ntm = TaskManager()\ntm.add_task("学习Python")\ntm.add_task("写作业")\ntm.list_tasks()',
          solution: 'class TaskManager:\n    def __init__(self):\n        self.tasks = []\n    \n    def add_task(self, task):\n        self.tasks.append(task)\n        print(f"任务已添加: {task}")\n    \n    def list_tasks(self):\n        print("任务列表:")\n        for i, task in enumerate(self.tasks):\n            print(f"{i+1}. {task}")\n\n# 测试\ntm = TaskManager()\ntm.add_task("学习Python")\ntm.add_task("写作业")\ntm.list_tasks()',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex6-10-adv-1',
          title: '插件机制（轻量草图）',
          description: '为个人助手添加插件注册与执行机制（字典映射）',
          template: `class Assistant:
    def __init__(self): self.plugins = {}
    def register(self, name, fn): self.plugins[name] = fn
    def run(self, name, *args, **kwargs): return self.plugins[name](*args, **kwargs)

def greet(name): return f"你好，{name}！"
a = Assistant(); a.register("greet", greet)
print(a.run("greet", "小明"))`,
          solution: `class Assistant:
    def __init__(self): self.plugins = {}
    def register(self, name, fn): self.plugins[name] = fn
    def run(self, name, *args, **kwargs): return self.plugins[name](*args, **kwargs)

def greet(name): return f"你好，{name}！"
a = Assistant(); a.register("greet", greet)
print(a.run("greet", "小明"))`,
          type: 'advanced'
        },
        {
          id: 'ex6-10-adv-2',
          title: '持久化（内存→JSON字符串）',
          description: '将任务与笔记序列化为 JSON 字符串并打印（不写盘）',
          template: `import json
data = {"tasks":[{"t":"学习Python","done":True}], "notes":["复习第6阶段"]}
print(json.dumps(data, ensure_ascii=False))`,
          solution: `import json
data = {"tasks":[{"t":"学习Python","done":True}], "notes":["复习第6阶段"]}
print(json.dumps(data, ensure_ascii=False))`,
          type: 'advanced'
        }
      ],
      selfQuiz: [
        { id: 'q6-10-1', type: 'single', question: '任务列表更适合哪种数据结构存储？', options: ['list','set','int'], answer: 'list', explanation: '有序集合便于管理' },
        { id: 'q6-10-2', type: 'single', question: '完成任务的方法名更推荐？', options: ['do','complete_task','run'], answer: 'complete_task', explanation: '语义清晰' },
        { id: 'q6-10-3', type: 'judge', question: '天气信息在示例中为模拟数据', answer: true, explanation: '未实际调用外部 API' },
        { id: 'q6-10-4', type: 'single', question: '统计汇总中完成率计算需注意？', options: ['分母为0','整数除法','多线程竞争'], answer: '分母为0', explanation: '避免除零错误' },
        { id: 'q6-10-5', type: 'judge', question: '统一日志/配置有助于大项目维护', answer: true, explanation: '工程化基础' }
      ],
      summary: '综合项目需要整合多个技术栈，注重代码结构、错误处理和用户体验'
    }
  ]
}