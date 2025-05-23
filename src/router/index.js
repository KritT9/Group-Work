import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/singin',
    name: 'singin',
    component: () => import('../views/singin.vue')
  },
  {
    path: '/japanmenu',
    name: 'japanmenu',
    component: () => import('../views/Japanmenu.vue')
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
