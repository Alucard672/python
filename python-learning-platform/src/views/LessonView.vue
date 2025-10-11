    <template>
  <div class="lesson-view" v-if="currentLesson">
    <!-- 课程头部 -->
    <div class="lesson-header">
      <div class="lesson-title-section">
        <h1 class="lesson-title">{{ currentLesson.title }}</h1>
        <div class="lesson-meta">
          <el-tag type="info" size="small">{{ currentStage?.title }}</el-tag>
          <el-tag type="success" size="small" v-if="isCompleted">已完成</el-tag>
        </div>
      </div>
      
      <div class="lesson-actions">
        <el-button-group>
          <el-button @click="previousLesson" :disabled="!hasPrevious">
            <el-icon><ArrowLeft /></el-icon>上一课
          </el-button>
          <el-button @click="nextLesson" :disabled="!hasNext">
            下一课<el-icon><ArrowRight /></el-icon>
          </el-button>
        </el-button-group>
      </div>
    </div>
    
    <!-- 课程内容区域 -->
    <div class="lesson-content">
      <!-- 左侧内容面板 -->
      <div class="content-panel">
        <el-tabs v-model="activeTab" class="content-tabs">
          <!-- 课程内容 -->
          <el-tab-pane label="📚 课程内容" name="content">
            <div class="lesson-section">
              <div class="section-card">
                <div class="section-header">
                  <h3>🎯 学习目标</h3>
                </div>
                <div class="section-content">
                  {{ currentLesson.objective }}
                </div>
              </div>
              
              <div class="section-card">
                <div class="section-header">
                  <h3>🧠 生活类比</h3>
                </div>
                <div class="section-content">
                  {{ currentLesson.analogy }}
                </div>
              </div>
              
              <div class="section-card">
                <div class="section-header">
                  <h3>💻 代码示例</h3>
                </div>
                <div class="section-content">
                  <pre class="code-example"><code>{{ currentLesson.codeExample }}</code></pre>
                  <el-button 
                    size="small" 
                    type="primary" 
                    @click="runExampleCode"
                    class="run-example-btn"
                  >
                    运行示例
                  </el-button>
                </div>
              </div>
              
              <div class="section-card">
                <div class="section-header">
                  <h3>📖 小结</h3>
                </div>
                <div class="section-content">
                  {{ currentLesson.summary }}
                </div>
              </div>


            </div>
          </el-tab-pane>
          
          <!-- 练习题 -->
          <el-tab-pane label="🧩 练习题" name="exercises">
            <div class="exercises-section">
              <div class="exercise-type-tabs">
                <el-radio-group v-model="exerciseType" @change="handleExerciseTypeChange">
                  <el-radio-button label="original">基础练习</el-radio-button>
                  <el-radio-button label="extended">扩展练习</el-radio-button>
                </el-radio-group>
              </div>
              
              <div class="exercise-list">
                <div 
                  v-for="(exercise, index) in currentExercises" 
                  :key="exercise.id"
                  class="exercise-card"
                  :class="{ 'active': selectedExercise?.id === exercise.id }"
                  @click="selectExercise(exercise)"
                >
                  <div class="exercise-header">
                    <div class="exercise-info">
                      <span class="exercise-number">{{ index + 1 }}</span>
                      <span class="exercise-title">{{ exercise.title }}</span>
                      <!-- 难度徽标：若存在 difficulty 则显示 -->
                      <el-tag
                        v-if="(exercise as any).difficulty"
                        size="small"
                        :type="difficultyTagType((exercise as any).difficulty)"
                        class="exercise-difficulty"
                      >
                        {{ difficultyLabel((exercise as any).difficulty) }}
                      </el-tag>
                      <el-tag 
                        v-if="!((exercise as any).difficulty)"
                        :type="getExerciseTypeColor(exercise.type)" 
                        size="small"
                        class="exercise-type-tag"
                      >
                        {{ getExerciseTypeText(exercise.type) }}
                      </el-tag>
                    </div>
                    <el-icon 
                      v-if="completedExercises.has(exercise.id)"
                      class="completed-icon"
                      color="#67C23A"
                    >
                      <Check />
                    </el-icon>
                  </div>
                  <div class="exercise-description">
                    {{ exercise.description }}
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <!-- 自测题独立Tab（如果存在则显示） -->
          <el-tab-pane v-if="currentLesson && currentLesson.selfQuiz && currentLesson.selfQuiz.length" label="📝 自测题" name="quiz">
            <div class="lesson-section">
              <div class="section-card">
                <div class="section-header">
                  <h3>📝 自测题</h3>
                </div>
                <div class="section-content">
                  <div class="quiz-list">
                    <div class="quiz-item" v-for="q in currentLesson.selfQuiz" :key="q.id">
                      <div class="quiz-question">
                        {{ q.question }}
                        <el-tag size="small" type="info" class="quiz-type" v-if="q.type">
                          {{ q.type === 'single' ? '单选' : (q.type === 'multi' ? '多选' : '判断') }}
                        </el-tag>
                      </div>

                      <!-- 选项区：原生表单控件 -->
                      <div class="quiz-controls" v-if="q.type === 'single' && q.options?.length">
                        <label v-for="opt in q.options" :key="opt" style="margin-right:12px; display:inline-flex; align-items:center; gap:6px;">
                          <input 
                            type="radio" 
                            :name="'q_'+q.id" 
                            :value="opt" 
                            v-model="quizResponses[q.id]" 
                          />
                          <span>{{ opt }}</span>
                        </label>
                      </div>

                      <div class="quiz-controls" v-else-if="q.type === 'multi' && q.options?.length">
                        <label v-for="opt in q.options" :key="opt" style="margin-right:12px; display:inline-flex; align-items:center; gap:6px;">
                          <input 
                            type="checkbox" 
                            :value="opt" 
                            v-model="quizResponses[q.id]" 
                          />
                          <span>{{ opt }}</span>
                        </label>
                      </div>

                      <div class="quiz-controls" v-else>
                        <label style="margin-right:12px; display:inline-flex; align-items:center; gap:6px;">
                          <input type="radio" :name="'q_'+q.id" :value="true" v-model="quizResponses[q.id]" />
                          <span>True</span>
                        </label>
                        <label style="display:inline-flex; align-items:center; gap:6px;">
                          <input type="radio" :name="'q_'+q.id" :value="false" v-model="quizResponses[q.id]" />
                          <span>False</span>
                        </label>
                      </div>

                      <!-- 操作与反馈 -->
                      <div class="quiz-actions">
                        <el-button size="small" type="primary" @click.stop="submitQuiz(q)">判分</el-button>
                        <el-tag v-if="quizResults[q.id] === true" size="small" type="success">正确</el-tag>
                        <el-tag v-else-if="quizResults[q.id] === false" size="small" type="danger">错误</el-tag>
                      </div>

                      <!-- 解析：作答后展示 -->
                      <div class="quiz-explain" v-if="quizResults[q.id] !== undefined && q.explanation">
                        <el-tag size="small" type="warning">解析</el-tag>
                        <span>{{ q.explanation }}</span>
                      </div>
                    </div>

                    <!-- 总体操作 -->
                    <div class="quiz-overall-actions">
                      <el-button size="small" type="success" @click="submitAllQuiz">全部判分</el-button>
                      <el-button size="small" @click="clearAllQuiz" text>清空作答</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      
      <!-- 右侧代码编辑器 -->
      <div class="editor-panel">
        <div class="editor-header">
          <div class="editor-title">
            <span v-if="selectedExercise">{{ selectedExercise.title }}</span>
            <span v-else>代码编辑器</span>
          </div>
          <div class="editor-actions">
            <el-button-group size="small">
              <el-button @click="runCode" type="primary" :loading="isRunning">
                <el-icon><CaretRight /></el-icon>运行 (Ctrl+Enter)
              </el-button>
              <el-button @click="resetCode">
                <el-icon><RefreshLeft /></el-icon>重置
              </el-button>
              <el-button @click="showSolution" v-if="selectedExercise">
                <el-icon><View /></el-icon>查看答案
              </el-button>
            </el-button-group>
          </div>
        </div>
        
        <!-- 代码编辑器 -->
        <div class="code-editor-wrapper">
          <textarea
            ref="codeEditor"
            v-model="currentCode"
            class="code-textarea"
            placeholder="在这里编写Python代码..."
            @keydown="handleKeydown"
          ></textarea>
        </div>
        
        <!-- 输出区域 -->
        <div class="output-panel">
          <div class="output-header">
            <span class="output-title">输出结果</span>
            <el-button size="small" text @click="clearOutput">
              <el-icon><Delete /></el-icon>清空
            </el-button>
          </div>
          <div class="output-content" ref="outputContainer">
            <div v-if="output.length === 0" class="output-placeholder">
              点击"运行"按钮执行代码，结果将在这里显示
            </div>
            <div 
              v-for="(item, index) in output" 
              :key="index" 
              class="output-item"
              :class="item.type"
            >
              <pre>{{ item.content }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 加载状态 -->
  <div v-else class="loading-container">
    <el-empty description="课程加载中..." />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ArrowLeft, 
  ArrowRight, 
  CaretRight, 
  RefreshLeft, 
  View, 
  Delete,
  Check 
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { courses, type Lesson, type Exercise } from '@/data/courses'
import { pythonExecutor } from '@/utils/pythonExecutor'

const route = useRoute()
const router = useRouter()

// 组件状态
const activeTab = ref('content')
const exerciseType = ref('original')
const selectedExercise = ref<Exercise | null>(null)
const completedExercises = ref(new Set<string>())
const output = ref<Array<{type: 'success' | 'error' | 'info', content: string}>>([])

// 自测题交互状态
const quizResponses = ref<Record<string, any>>({})
const quizResults = ref<Record<string, boolean | undefined>>({})


const isRunning = ref(false)
const currentCode = ref('')

// 编辑器相关
const codeEditor = ref<HTMLTextAreaElement>()
const outputContainer = ref<HTMLElement>()

// 当前课程数据
const currentLesson = ref<Lesson | null>(null)
const currentStage = ref<any>(null)

// 计算属性
const currentExercises = computed(() => {
  if (!currentLesson.value) return []
  return exerciseType.value === 'original' 
    ? currentLesson.value.originalExercises 
    : currentLesson.value.extendedExercises
})

const isCompleted = computed(() => {
  if (!currentLesson.value) return false
  return localStorage.getItem(`lesson_${currentLesson.value.id}_completed`) === 'true'
})

// 导航相关
const allLessons = computed(() => {
  return courses.flatMap(stage => stage.lessons)
})

const currentLessonIndex = computed(() => {
  if (!currentLesson.value) return -1
  return allLessons.value.findIndex(lesson => lesson.id === currentLesson.value!.id)
})

const hasPrevious = computed(() => currentLessonIndex.value > 0)
const hasNext = computed(() => currentLessonIndex.value < allLessons.value.length - 1)

// 方法
const loadLesson = () => {
  const lessonId = route.params.lessonId as string
  
  for (const stage of courses) {
    const lesson = stage.lessons.find(l => l.id === lessonId)
    if (lesson) {
      currentLesson.value = lesson
      currentStage.value = stage
      break
    }
  }
  
  if (currentLesson.value && currentLesson.value.originalExercises.length > 0) {
    const first = currentLesson.value.originalExercises[0]
    if (first) {
      selectedExercise.value = first as Exercise
      currentCode.value = first.template
    }
  } else {
    selectedExercise.value = null
    currentCode.value = ''
  }
}

const runCode = async () => {
  if (!currentCode.value.trim()) {
    ElMessage.warning('请输入代码')
    return
  }
  
  isRunning.value = true
  output.value = []
  
  try {
    const result = await pythonExecutor.runCode(currentCode.value)
    
    if (result.type === 'error') {
      output.value.push({
        type: 'error',
        content: result.error || '执行出错'
      })
    } else {
      output.value.push({
        type: 'success',
        content: result.output
      })
      
      // 检查练习是否完成
      if (selectedExercise.value && checkExerciseCompletion(currentCode.value)) {
        completedExercises.value.add(selectedExercise.value.id)
        ElMessage.success('练习完成！')
        
        // 保存完成状态
        const completed = [...completedExercises.value]
        localStorage.setItem('completedExercises', JSON.stringify(completed))
      }
    }
  } catch (error) {
    output.value.push({
      type: 'error',
      content: `错误: ${error}`
    })
  } finally {
    isRunning.value = false
  }
}

const checkExerciseCompletion = (code: string): boolean => {
  // 简单的完成度检查逻辑
  return code.trim().length > 10 && code.includes('print')
}

const resetCode = () => {
  if (!selectedExercise.value) return
  currentCode.value = selectedExercise.value.template
}

const showSolution = async () => {
  if (!selectedExercise.value) return
  
  try {
    await ElMessageBox.confirm('查看答案后将无法撤销，确定要查看吗？', '提示', {
      confirmButtonText: '查看答案',
      cancelButtonText: '取消',
      type: 'warning'
    })
    
    currentCode.value = selectedExercise.value.solution
  } catch {
    // 用户取消
  }
}

const runExampleCode = () => {
  if (!currentLesson.value) return
  currentCode.value = currentLesson.value.codeExample
  runCode()
}

const clearOutput = () => {
  output.value = []
}

const selectExercise = (exercise: Exercise) => {
  selectedExercise.value = exercise
  currentCode.value = exercise.template
  clearOutput()
}

const handleExerciseTypeChange = () => {
  const first = currentExercises.value[0]
  if (first) {
    selectExercise(first as Exercise)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    event.preventDefault()
    runCode()
  }
  
  // 处理Tab键缩进
  if (event.key === 'Tab') {
    event.preventDefault()
    const textarea = event.target as HTMLTextAreaElement
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    
    textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end)
    textarea.selectionStart = textarea.selectionEnd = start + 4
    
    // 更新v-model
    currentCode.value = textarea.value
  }
}

const getExerciseTypeText = (type: string) => {
  const typeMap = {
    basic: '基础',
    advanced: '进阶',
    practical: '实战',
    debug: '调试',
    creative: '创意'
  }
  return typeMap[type as keyof typeof typeMap] || type
}

const getExerciseTypeColor = (type: string) => {
  const colorMap = {
    basic: 'info',
    advanced: 'warning',
    practical: 'success',
    debug: 'danger',
    creative: 'primary'
  }
  return colorMap[type as keyof typeof colorMap] || 'info'
}

/** 自测题判题逻辑（更稳健的类型规范化） */
const normalizeAnswer = (q: any, ans: any) => {
  // 将各种类型统一到字符串或字符串数组进行比较
  const toStr = (x: any) => {
    if (typeof x === 'boolean') return x ? 'true' : 'false'
    if (x === null || x === undefined) return ''
    return String(x).trim()
  }

  // 多选：返回排序后的不重复字符串数组
  if (q?.type === 'multi') {
    const arr = Array.isArray(ans) ? ans : (ans == null ? [] : [ans])
    const norm = arr.map(toStr).filter(s => s.length > 0)
    // 去重 + 排序
    return Array.from(new Set(norm)).sort()
  }

  // 判断题（没有选项时默认理解为 True/False）
  if (!q?.options || q.options.length === 0) {
    const s = toStr(ans).toLowerCase()
    if (s === 'true' || s === 't' || s === '1') return 'true'
    if (s === 'false' || s === 'f' || s === '0') return 'false'
    return s
  }

  // 单选/普通：统一为字符串
  return toStr(ans)
}

const isCorrectQuiz = (q: any, resp: any): boolean => {
  if (!q) return false
  const expected = normalizeAnswer(q, q.answer)
  const got = normalizeAnswer(q, resp)

  // 多选：数组深度比较（顺序无关，已排序去重）
  if (Array.isArray(expected) && Array.isArray(got)) {
    if (expected.length !== got.length) return false
    return expected.every((v: any, i: number) => v === got[i])
  }
  // 其它：字符串直接比较
  return expected === got
}
const submitQuiz = (q: any) => {
  const resp = quizResponses.value[q.id]
  quizResults.value[q.id] = isCorrectQuiz(q, resp)
}
const submitAllQuiz = () => {
  if (!currentLesson.value?.selfQuiz) return
  for (const q of currentLesson.value.selfQuiz) submitQuiz(q)
}
const clearAllQuiz = () => {
  if (!currentLesson.value?.selfQuiz) return
  for (const q of currentLesson.value.selfQuiz) {
    quizResponses.value[q.id] = q.type === 'multi' ? [] : undefined
    quizResults.value[q.id] = undefined
  }
}



// 映射难度到标签样式与文案
const difficultyTagType = (d: string) => {
  switch (d) {
    case 'easy': return 'success'
    case 'medium': return 'warning'
    case 'hard': return 'danger'
    case 'expert': return 'info'
    default: return 'info'
  }
}
const difficultyLabel = (d: string) => {
  switch (d) {
    case 'easy': return '基础'
    case 'medium': return '中等'
    case 'hard': return '困难'
    case 'expert': return '专家'
    default: return String(d)
  }
}

const previousLesson = () => {
  if (hasPrevious.value) {
    const prevLesson = allLessons.value[currentLessonIndex.value - 1]
    if (prevLesson) {
      router.push(`/lesson/${prevLesson.id}`)
    }
  }
}

const nextLesson = () => {
  if (hasNext.value) {
    const nextLesson = allLessons.value[currentLessonIndex.value + 1]
    if (nextLesson) {
      router.push(`/lesson/${nextLesson.id}`)
    }
  }
}

// 监听路由变化
watch(() => route.params.lessonId, () => {
  loadLesson()
  clearOutput()
})

// 监听选中的练习变化
watch(selectedExercise, (newEx) => {
  if (newEx) {
    currentCode.value = newEx.template
  }
})

onMounted(() => {
  loadLesson()
  
  // 加载完成的练习
  const saved = localStorage.getItem('completedExercises')
  if (saved) {
    completedExercises.value = new Set(JSON.parse(saved))
  }
})
</script>

<style scoped>
.lesson-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e4e7ed;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.lesson-title-section {
  flex: 1;
}

.lesson-title {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 600;
  color: #303133;
}

.lesson-meta {
  display: flex;
  gap: 8px;
}

.lesson-content {
  flex: 1;
  display: grid;
  grid-template-columns: 35% 1fr;
  min-height: 0;
}

.content-panel {
  /* width is controlled by grid-template-columns */
  border-right: 1px solid #e4e7ed;
  background: white;
  min-width: 400px;
  display: flex;
  flex-direction: column;
}

.content-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-tabs :deep(.el-tabs__content) {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  min-height: 0;
  height: 100%;
}

.content-tabs :deep(.el-tabs__header) {
  margin: 0;
  flex-shrink: 0;
}

.lesson-section {
  padding: 16px;
  box-sizing: border-box;
}

.section-card {
  margin-bottom: 24px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  overflow: hidden;
}

.section-header {
  background: #f5f7fa;
  padding: 12px 16px;
  border-bottom: 1px solid #e4e7ed;
}

.section-header h3 {
  margin: 0;
  font-size: 16px;
  color: #303133;
}

.section-content {
  padding: 16px;
  line-height: 1.6;
  color: #606266;
}

.code-example {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 12px;
  margin: 12px 0;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.4;
  overflow-x: auto;
}

.run-example-btn {
  margin-top: 8px;
}

.exercises-section {
  padding: 16px;
  box-sizing: border-box;
}

.exercise-type-tabs {
  margin-bottom: 16px;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.exercise-card {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.exercise-card:hover {
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.1);
}

.exercise-card.active {
  border-color: #409eff;
  background: #f0f9ff;
}

.exercise-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.exercise-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.exercise-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #409eff;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
}

.exercise-title {
  font-weight: 500;
  color: #303133;
}

.exercise-type-tag {
  margin-left: 8px;
}
.exercise-difficulty {
  margin-left: 6px;
}

/* 自测题样式 */
.quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.quiz-item {
  padding: 10px 12px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  background: #f9fafb;
}
.quiz-question {
  font-weight: 600;
  margin-bottom: 8px;
}
.quiz-options {
  margin: 0 0 8px 16px;
  padding: 0;
}
.quiz-options li {
  list-style: disc;
}
.quiz-answer, .quiz-explain {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

/* 自测题交互样式 */
.quiz-controls {
  margin: 8px 0;
}
.quiz-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}
.quiz-overall-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

/* 自测题交互样式 */
.quiz-controls {
  margin: 8px 0;
}
.quiz-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}
.quiz-overall-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.completed-icon {
  font-size: 20px;
}

.exercise-description {
  font-size: 14px;
  color: #606266;
  line-height: 1.5;
}

.editor-panel {
  display: grid;
  grid-template-rows: 60px 1fr 300px; /* Header, Editor, Output */
  min-height: 0;
  min-width: 0;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e4e7ed;
  background: #fafbfc;
  grid-row: 1;
}

.editor-title {
  font-weight: 500;
  color: #303133;
}

.code-editor-wrapper {
  grid-row: 2;
  min-height: 0; /* Important for scrolling */
}

.code-textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 16px;
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  background: #fdfdfd;
  color: #303133;
  box-sizing: border-box;
}

.output-panel {
  grid-row: 3;
  height: 300px;
  min-height: 150px;
  border-top: 1px solid #e4e7ed;
  display: flex;
  flex-direction: column;
  background: white;
}

.output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #f5f7fa;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
  height: 40px;
  box-sizing: border-box;
}

.output-title {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}

.output-content {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  box-sizing: border-box;
}

.output-placeholder {
  color: #888;
  font-style: italic;
  text-align: center;
  margin-top: 60px;
  font-size: 14px;
}

.output-item {
  margin-bottom: 8px;
}

.output-item.success pre {
  color: #4ade80;
}

.output-item.error pre {
  color: #f87171;
}

.output-item.info pre {
  color: #60a5fa;
}

.output-item pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

@media (max-width: 1200px) {
  .lesson-content {
    flex-direction: column;
  }

  .content-panel {
    width: 100%;
    border-right: none;
    min-width: auto;
    height: auto;
  }

  .editor-panel {
    min-height: 80vh;
  }
}
</style>