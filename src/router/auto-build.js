/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-13 15:44:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-08 20:41:08
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
    component: () =>
      import(/* webpackChunkName: 'scroll' */ '@/views/Classify/scroll.vue')
  },
  {
    path: '/classify-example',
    name: 'example',
    component: () =>
      import(/* webpackChunkName: 'example' */ '@/views/Classify/example.vue')
  },
  { path: '/example' }
]
export default aotoRoutes
