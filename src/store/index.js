/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 20:47:12
 */
import { createStore } from 'vuex'
import userStore from './user'
import classify from './classify'
export default createStore({
  modules: {
    userStore,
    classify
  }
})
