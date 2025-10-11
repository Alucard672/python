<template>
  <div class="home-view">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">Python学习平台</span>
          </h1>
          <p class="hero-subtitle">
            从零基础到全栈开发，6个阶段60节课，系统掌握Python编程
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">6</div>
              <div class="stat-label">学习阶段</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">60</div>
              <div class="stat-label">精品课程</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">300+</div>
              <div class="stat-label">练习题目</div>
            </div>
          </div>
          <div class="hero-actions">
            <el-button 
              type="primary" 
              size="large" 
              @click="startLearning"
              class="start-btn"
            >
              <el-icon><CaretRight /></el-icon>
              开始学习
            </el-button>
            <el-button 
              size="large" 
              @click="viewProgress"
              class="progress-btn"
            >
              <el-icon><TrendCharts /></el-icon>
              查看进度
            </el-button>
          </div>
        </div>
        <div class="hero-image">
          <div class="code-preview">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="code-title">hello_python.py</span>
            </div>
            <div class="code-content">
              <pre><code class="python">{{ heroCode }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习路径 -->
    <section class="roadmap-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">学习路径</h2>
          <p class="section-subtitle">循序渐进，从基础到实战</p>
        </div>
        
        <div class="roadmap-container">
          <div 
            v-for="(stage, index) in courses" 
            :key="stage.id"
            class="stage-card"
            :class="{ 'completed': isStageCompleted(stage.id) }"
          >
            <div class="stage-number">{{ index + 1 }}</div>
            <div class="stage-content">
              <h3 class="stage-title">{{ stage.title }}</h3>
              <p class="stage-description">{{ stage.description }}</p>
              <div class="stage-stats">
                <span class="lesson-count">{{ stage.lessons.length }}节课</span>
                <span class="progress-text">
                  {{ getStageProgress(stage.id) }}% 完成
                </span>
              </div>
              <div class="stage-progress">
                <el-progress 
                  :percentage="getStageProgress(stage.id)" 
                  :stroke-width="6"
                  :show-text="false"
                />
              </div>
              <div class="stage-actions">
                <el-button 
                  v-if="getStageProgress(stage.id) === 0"
                  type="primary" 
                  size="small"
                  @click="startStage(stage)"
                >
                  开始学习
                </el-button>
                <el-button 
                  v-else
                  type="success" 
                  size="small"
                  @click="continueStage(stage)"
                >
                  继续学习
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色功能 -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">平台特色</h2>
          <p class="section-subtitle">为Python学习者量身打造</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon size="32"><Edit /></el-icon>
            </div>
            <h3 class="feature-title">在线编程</h3>
            <p class="feature-description">
              内置Monaco编辑器，支持语法高亮、智能提示，无需本地环境即可编程
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon size="32"><TrendCharts /></el-icon>
            </div>
            <h3 class="feature-title">进度追踪</h3>
            <p class="feature-description">
              实时记录学习进度，可视化展示完成情况，让学习更有方向感
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon size="32"><Collection /></el-icon>
            </div>
            <h3 class="feature-title">丰富练习</h3>
            <p class="feature-description">
              每课包含基础、进阶、实战、调试、创意5类练习，全面提升编程能力
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon size="32"><ChatDotRound /></el-icon>
            </div>
            <h3 class="feature-title">生活类比</h3>
            <p class="feature-description">
              用生活中的例子解释编程概念，降低学习门槛，让编程更易理解
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 最近学习 -->
    <section class="recent-section" v-if="recentLessons.length > 0">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">最近学习</h2>
          <p class="section-subtitle">继续上次的学习进度</p>
        </div>
        
        <div class="recent-grid">
          <div 
            v-for="lesson in recentLessons" 
            :key="lesson.id"
            class="recent-card"
            @click="goToLesson(lesson.id)"
          >
            <div class="recent-info">
              <h3 class="recent-title">{{ lesson.title }}</h3>
              <div class="recent-meta">
                <el-tag size="small" type="info">{{ getStageTitle(lesson.id) }}</el-tag>
                <span class="recent-time">{{ getLastStudyTime(lesson.id) }}</span>
              </div>
            </div>
            <div class="recent-action">
              <el-button type="primary" size="small">继续学习</el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  CaretRight, 
  TrendCharts, 
  Edit, 
  Collection, 
  ChatDotRound 
} from '@element-plus/icons-vue'
import { courses, type Lesson } from '@/data/courses'

const router = useRouter()

const heroCode = ref(`# 欢迎来到Python世界
def greet(name):
    return f"你好，{name}！"

# 开始你的编程之旅
message = greet("Python学习者")
print(message)

# 让我们一起探索Python的魅力
for i in range(3):
    print(f"第{i+1}步：掌握Python编程！")`)

const recentLessons = ref<Lesson[]>([])
const completedLessons = ref(new Set<string>())

// 计算属性
const totalLessons = computed(() => {
  return courses.reduce((total, stage) => total + stage.lessons.length, 0)
})

// 方法
const loadUserProgress = () => {
  const saved = localStorage.getItem('completedLessons')
  if (saved) {
    completedLessons.value = new Set(JSON.parse(saved))
  }
  
  // 加载最近学习的课程
  const recent = localStorage.getItem('recentLessons')
  if (recent) {
    const recentIds = JSON.parse(recent)
    recentLessons.value = courses
      .flatMap(stage => stage.lessons)
      .filter(lesson => recentIds.includes(lesson.id))
      .slice(0, 3)
  }
}

const isStageCompleted = (stageId: string) => {
  const stage = courses.find(s => s.id === stageId)
  if (!stage) return false
  
  return stage.lessons.every(lesson => completedLessons.value.has(lesson.id))
}

const getStageProgress = (stageId: string) => {
  const stage = courses.find(s => s.id === stageId)
  if (!stage) return 0
  
  const completedCount = stage.lessons.filter(lesson => 
    completedLessons.value.has(lesson.id)
  ).length
  
  return Math.round((completedCount / stage.lessons.length) * 100)
}

const startLearning = () => {
  // 跳转到第一课
  const firstLesson = courses[0]?.lessons[0]
  if (firstLesson) {
    router.push(`/lesson/${firstLesson.id}`)
  }
}

const viewProgress = () => {
  // 可以跳转到进度页面或显示进度弹窗
  console.log('查看进度')
}

const startStage = (stage: any) => {
  const firstLesson = stage.lessons[0]
  if (firstLesson) {
    router.push(`/lesson/${firstLesson.id}`)
  }
}

const continueStage = (stage: any) => {
  // 找到第一个未完成的课程
  const nextLesson = stage.lessons.find((lesson: Lesson) => 
    !completedLessons.value.has(lesson.id)
  ) || stage.lessons[0]
  
  router.push(`/lesson/${nextLesson.id}`)
}

const goToLesson = (lessonId: string) => {
  router.push(`/lesson/${lessonId}`)
}

const getStageTitle = (lessonId: string) => {
  for (const stage of courses) {
    if (stage.lessons.some(lesson => lesson.id === lessonId)) {
      return stage.title
    }
  }
  return ''
}

const getLastStudyTime = (lessonId: string) => {
  // 模拟最后学习时间
  return '2小时前'
}

onMounted(() => {
  loadUserProgress()
})
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-section {
  padding: 80px 0;
  color: white;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(45deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  margin: 0 0 40px 0;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.start-btn {
  padding: 12px 32px;
  font-size: 16px;
  height: auto;
}

.progress-btn {
  padding: 12px 32px;
  font-size: 16px;
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.progress-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.code-preview {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transform: rotateY(-5deg) rotateX(5deg);
  transition: transform 0.3s ease;
}

.code-preview:hover {
  transform: rotateY(0deg) rotateX(0deg);
}

.code-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #2d2d2d;
  border-bottom: 1px solid #404040;
}

.code-dots {
  display: flex;
  gap: 6px;
  margin-right: 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #28ca42; }

.code-title {
  color: #d4d4d4;
  font-size: 13px;
}

.code-content {
  padding: 20px;
}

.code-content pre {
  margin: 0;
  color: #d4d4d4;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.roadmap-section,
.features-section,
.recent-section {
  padding: 80px 0;
  background: white;
}

.features-section {
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #1a202c;
}

.section-subtitle {
  font-size: 18px;
  color: #718096;
  margin: 0;
}

.roadmap-container {
  display: grid;
  gap: 24px;
}

.stage-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.stage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.stage-card.completed {
  border-color: #10b981;
  background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
}

.stage-number {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}

.stage-content {
  flex: 1;
}

.stage-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1a202c;
}

.stage-description {
  color: #718096;
  margin: 0 0 16px 0;
  line-height: 1.6;
}

.stage-stats {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 14px;
}

.lesson-count {
  color: #667eea;
  font-weight: 500;
}

.progress-text {
  color: #718096;
}

.stage-progress {
  margin-bottom: 16px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-card {
  text-align: center;
  padding: 40px 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  color: white;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #1a202c;
}

.feature-description {
  color: #718096;
  line-height: 1.6;
  margin: 0;
}

.recent-grid {
  display: grid;
  gap: 16px;
}

.recent-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
}

.recent-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.recent-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: #1a202c;
}

.recent-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #718096;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .stage-card {
    flex-direction: column;
    text-align: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .recent-card {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>