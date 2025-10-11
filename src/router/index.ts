import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import LessonView from '@/views/LessonView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'lesson/:lessonId',
          name: 'lesson',
          component: LessonView,
          props: true
        }
      ]
    }
  ]
})

export default router