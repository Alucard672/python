export interface IExercise {
  id: string | number;
  title: string;
  description?: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  code: string;
  solution: string;
  hints: string[];
}

export interface IQuizItem {
  id: string | number;
  type: 'single' | 'multi' | 'judge';
  question: string;
  options?: string[];
  answer: string | boolean | string[];
  explanation?: string;
}

export interface ILesson {
  id: string | number;
  title: string;
  description?: string;
  objective?: string;
  analogy?: string;
  codeExample?: string;
  content?: string;
  exercises?: IExercise[];
  originalExercises?: any[];
  extendedExercises?: any[];
  selfQuiz?: IQuizItem[];
  summary?: string;
}

export interface IProject {
  id: string | number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  estimatedHours: number;
}

export interface IStage {
  id: number;
  title: string;
  description: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  estimatedHours?: number;
  lessons: ILesson[];
  prerequisites?: string[];
  skills?: string[];
  projects?: IProject[];
}