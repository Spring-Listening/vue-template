/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 16:08:21
 */
import { createRouter, createWebHistory } from 'vue-router'
import aotoRoutes from './auto-build'
const routes = [
  ...aotoRoutes,
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: 'welcome',
      auth: true
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
/** 理由守卫 */
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    //如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/home') //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next() //如果匹配到正确跳转
  }
  // if (to.meta.auth) {
  //   console.log('路由进入前的拦截')
  // }
})

export default router
