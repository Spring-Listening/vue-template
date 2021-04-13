/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-13 15:44:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:46:10
 */
const aotoRoutes = [
  {
    path: '/papge',
    name: 'papge',
    component: () => import('@/views/Happy/papge.vue')
  },
  {
    path: '/nba',
    name: 'nba',
    component: () => import('@/views/Happy/nba.vue')
  } // last line route append
]

export default aotoRoutes
