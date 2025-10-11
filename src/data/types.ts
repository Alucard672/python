// 课程数据类型定义
export interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
  solution: string;
  type: 'basic' | 'intermediate' | 'advanced' | 'practical' | 'creative' | 'debug';
  // 可选：难度、提示、判题
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  hints?: string[];
  judge?: {
    mode: 'stdout' | 'assert';
    expected?: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  objective: string;
  analogy: string;
  codeExample: string;
  originalExercises: Exercise[];
  extendedExercises: Exercise[];
  // 可选：自测题
  selfQuiz?: Array<{
    id: string | number;
    type: 'single' | 'multi' | 'judge';
    question: string;
    options?: string[];
    answer: string | boolean | string[];
    explanation?: string;
  }>;
  summary: string;
}

export interface CourseStage {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface CourseData {
  title: string;
  description: string;
  stages: CourseStage[];
}