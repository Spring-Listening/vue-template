/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 19:32:12
 */
import { createStore } from 'vuex'
import userStore from './user'
export default createStore({
  state: {
    name: 'father',
    num: 3
  },
  mutations: {
    add(state) {
      state.num++
    }
  },
  actions: {},
  modules: {
    userStore
  }
})
