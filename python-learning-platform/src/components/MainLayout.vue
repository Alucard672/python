<template>
  <div class="main-layout">
    <!-- 移动端顶部栏：汉堡按钮与标题 -->
    <header class="mobile-header">
      <button class="hamburger" @click="mobileNavOpen = !mobileNavOpen" aria-label="切换导航">☰</button>
      <h1 class="app-title">Python学习平台</h1>
    </header>
    <!-- 左侧导航栏 -->
    <aside class="sidebar" :class="{ 'sidebar--mobile-open': mobileNavOpen }">
      <div class="sidebar-header">
        <h1 class="logo">
          <span class="logo-icon">🐍</span>
          Python学习平台
        </h1>
      </div>
      
      <div class="sidebar-content">
        <el-menu
          :default-active="activeMenu"
          mode="vertical"
          :collapse="false"
          @select="handleMenuSelect"
          class="course-menu"
        >
          <el-sub-menu
            v-for="stage in courses"
            :key="stage.id"
            :index="stage.id"
          >
            <template #title>
              <el-icon><Document /></el-icon>
              <span>{{ stage.title }}</span>
            </template>
            
            <el-menu-item
              v-for="lesson in stage.lessons"
              :key="lesson.id"
              :index="lesson.id"
              class="lesson-item"
            >
              <el-icon><EditPen /></el-icon>
              <span class="lesson-title">{{ lesson.title }}</span>
              <el-tag
                v-if="isLessonCompleted(lesson.id)"
                type="success"
                size="small"
                class="completion-tag"
              >
                ✓
              </el-tag>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      
      <!-- 学习进度 -->
      <div class="progress-section">
        <div class="progress-title">学习进度</div>
        <el-progress
          :percentage="overallProgress"
          :stroke-width="8"
          :show-text="true"
          class="progress-bar"
        />
        <div class="progress-text">
          已完成 {{ completedLessons }} / {{ totalLessons }} 课
        </div>
      </div>
    </aside>
    
    <!-- 右侧主内容区 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Document, EditPen } from '@element-plus/icons-vue'
import { courses } from '@/data/courses'

const router = useRouter()
const route = useRoute()

const activeMenu = ref('')
const completedLessonsSet = ref(new Set<string>())

// 移动端导航抽屉状态与窗口变化处理
const mobileNavOpen = ref(false)
function handleResize() {
  if (window.innerWidth > 768) {
    mobileNavOpen.value = false
  }
}

// 计算总课程数
const totalLessons = computed(() => {
  return courses.reduce((total, stage) => total + stage.lessons.length, 0)
})

// 计算已完成课程数
const completedLessons = computed(() => completedLessonsSet.value.size)

// 计算总体进度
const overallProgress = computed(() => {
  if (totalLessons.value === 0) return 0
  return Math.round((completedLessons.value / totalLessons.value) * 100)
})

// 检查课程是否完成
const isLessonCompleted = (lessonId: string) => {
  return completedLessonsSet.value.has(lessonId)
}

// 处理菜单选择
const handleMenuSelect = (index: string) => {
  // 如果选择的是课程，跳转到课程页面
  const lesson = courses
    .flatMap(stage => stage.lessons)
    .find(lesson => lesson.id === index)
  
  if (lesson) {
    router.push(`/lesson/${index}`)
  }
}

// 标记课程为完成
const markLessonCompleted = (lessonId: string) => {
  completedLessonsSet.value.add(lessonId)
  // 保存到localStorage
  localStorage.setItem('completedLessons', JSON.stringify([...completedLessonsSet.value]))
}

// 从localStorage加载完成状态
const loadCompletedLessons = () => {
  const saved = localStorage.getItem('completedLessons')
  if (saved) {
    completedLessonsSet.value = new Set(JSON.parse(saved))
  }
}

// 监听路由变化，更新活跃菜单
const updateActiveMenu = () => {
  if (route.params.lessonId) {
    activeMenu.value = route.params.lessonId as string
  }
}

onMounted(() => {
  loadCompletedLessons()
  updateActiveMenu()
})
// 监听窗口尺寸变化以收敛抽屉
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

// 暴露方法给子组件使用
defineExpose({
  markLessonCompleted
})
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
  background: #f5f7fa;
}

.sidebar {
  width: 350px;
  background: #ffffff;
  border-right: 1px solid #e4e7ed;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #e4e7ed;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.logo {
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 24px;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
}

.course-menu {
  border: none;
}

.course-menu .el-sub-menu__title {
  height: 50px;
  line-height: 50px;
  font-weight: 500;
  color: #303133;
  font-size: 14px;
  padding-left: 24px !important;
}

.lesson-item {
  position: relative;
  height: 44px !important;
  line-height: 44px !important;
  padding-left: 48px !important;
}

.lesson-title {
  font-size: 13px;
  color: #606266;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
}

.completion-tag {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.progress-section {
  padding: 20px;
  border-top: 1px solid #e4e7ed;
  background: #fafbfc;
}

.progress-title {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  margin-bottom: 12px;
}

.progress-bar {
  margin-bottom: 8px;
}

.progress-text {
  font-size: 12px;
  color: #909399;
  text-align: center;
}

.main-content {
  flex: 1;
  overflow: hidden;
  background: #ffffff;
}

/* 移动端顶部栏样式 */
.mobile-header {
  display: none;
  position: sticky;
  top: 0;
  z-index: 1001;
  background: #fff;
  border-bottom: 1px solid #ebeef5;
  padding: 8px 12px;
}
.hamburger {
  appearance: none;
  border: 1px solid #dcdfe6;
  background: #fff;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;
}
.app-title {
  display: inline-block;
  font-size: 16px;
  margin: 0;
  vertical-align: middle;
}

/* 响应式设计：移动端抽屉导航与顶部栏 */
@media (max-width: 768px) {
  .main-layout {
    display: block;
    min-height: 100svh;
  }
  .mobile-header {
    display: block;
  }
  .sidebar {
    position: fixed;
    top: 48px; /* 预留给移动顶部栏 */
    left: 0;
    width: 80%;
    max-width: 280px;
    height: calc(100svh - 48px);
    background: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transform: translateX(-100%);
    transition: transform .2s ease;
    z-index: 1000;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .sidebar.sidebar--mobile-open {
    transform: translateX(0);
  }

  .logo {
    font-size: 16px;
  }
  .lesson-title {
    font-size: 12px;
  }
}
</style>