/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-01 17:14:59
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
