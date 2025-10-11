// 导入所有阶段数据
import { stage1 } from './stage1'
import { stage2 } from './stage2'  
import { stage3 } from './stage3'
import { stage4 } from './stage4'
import { stage5 } from './stage5'
import { stage6 } from './stage6'
import type { IStage } from '../types/Stage'

// 课程数据接口定义（保持兼容性）
export interface Exercise {
  id: string
  title: string
  description: string
  template: string
  solution: string
  type: 'basic' | 'advanced' | 'practical' | 'debug' | 'creative'
  // 可选：难度、提示、判题配置
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert'
  hints?: string[]
  judge?: {
    mode: 'stdout' | 'assert'
    expected?: string
  }
}

export interface Lesson {
  id: string
  title: string
  objective: string
  analogy: string
  codeExample: string
  originalExercises: Exercise[]
  extendedExercises: Exercise[]
  // 可选：自测题
  selfQuiz?: Array<{
    id: string | number
    type: 'single' | 'multi' | 'judge'
    question: string
    options?: string[]
    answer: string | boolean | string[]
    explanation?: string
  }>
  summary: string
}

export interface Stage {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export interface CourseData {
  title: string
  description: string
  stages: Stage[]
}

// 转换函数：将IStage转换为Stage格式（保持兼容性）
const convertStageFormat = (stage: IStage): Stage => {
  return {
    id: stage.id.toString(),
    title: stage.title,
    description: stage.description,
    lessons: stage.lessons.map(lesson => ({
      id: lesson.id.toString(),
      title: lesson.title,
      objective: lesson.objective || '',
      analogy: lesson.analogy || '',
      codeExample: lesson.codeExample || '',
      originalExercises: Array.isArray(lesson.originalExercises) ? (lesson.originalExercises as Exercise[]) : [],
      extendedExercises: Array.isArray(lesson.extendedExercises) ? (lesson.extendedExercises as Exercise[]) : [],
      selfQuiz: Array.isArray((lesson as any).selfQuiz) ? (lesson as any).selfQuiz : undefined,
      summary: (lesson.content?.split('\n').slice(-1)[0]) ?? '本课程总结'
    }))
  }
}

// 课程数据
export const courseData: CourseData = {
  title: 'Python编程学习平台',
  description: '从零基础到项目实战的完整Python学习路径',
  stages: [
    convertStageFormat(stage1),
    convertStageFormat(stage2),
    convertStageFormat(stage3),
    convertStageFormat(stage4),
    convertStageFormat(stage5),
    convertStageFormat(stage6)
  ]
}

// 导出课程阶段数据（为了兼容现有组件）
export const courses = courseData.stages

// 导出默认课程数据（为了兼容性）
export default courseData