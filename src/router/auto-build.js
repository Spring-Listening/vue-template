/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-13 15:44:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 20:25:36
 */
const aotoRoutes = [
  {
    path: '/classify-index',
    name: 'index',
    component: () =>
      import(/* webpackChunkName: 'index' */ '@/views/Classify/index.vue')
  },
  {
    path: '/classify-scroll',
    name: 'scroll',
    component: () => import(/* webpackChunkName: 'scroll' */ '@/views/Classify/scroll.vue')
  },
  { mark: 'this line not delete' }
]
export default aotoRoutes
