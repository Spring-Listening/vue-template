/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:46:48
 */
import { createRouter, createWebHistory } from 'vue-router'
import aotoRoutes from './auto-build'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/kd',
    name: 'kd',
    component: '@/views/Happy/kd.vue'
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: '@/views/Happy/homePage.vue'
  },
  {
    path: '/booring',
    name: 'booring',
    component: '@/views/Happy/booring.vue'
  },
  {
    path: '/question',
    name: 'question',
    component: '@/views/Happy/question.vue'
  },
  {
    path: '/api',
    name: 'api',
    component: '@/views/Happy/api.vue'
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/Happy/user.vue')
  },
  ...aotoRoutes
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
