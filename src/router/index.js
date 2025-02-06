import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/Landing.vue'

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    name: 'LandingPage',
    component: LandingPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 