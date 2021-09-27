/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-27 11:18:25
 */
import { createRouter, createWebHistory } from 'vue-router'
import aotoRoutes from './auto-build'
const routes = [
  ...aotoRoutes, // 自动生成的页面的路径
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: 'welcome',
      auth: true
    },
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '@/views/About')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
/** 理由守卫 */
router.beforeEach((to, from, next) => {
  //如果未匹配到路由
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/home') //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next() //如果匹配到正确跳转
  }
  // 是否要做路由鉴权
  // if (to.meta.auth) {
  //   console.log('路由进入前的拦截')
  // }
})

export default router
