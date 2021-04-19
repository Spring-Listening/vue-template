/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-19 20:33:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 21:14:22
 */
import { CHANGEUSERNAME, ADDAGE, ASYNCCHANGRUSERNAME } from './types'
const userStore = {
  namespaced: true,
  state: {
    name: 'spring_zou',
    age: 67
  },
  getters: {},
  actions: {
    [ASYNCCHANGRUSERNAME](ctx, payload) {
      ctx.commit('changeUserName', payload)
    }
  },
  mutations: {
    [CHANGEUSERNAME](state, payload) {
      state.name = payload.name
    },
    [ADDAGE](state) {
      state.age++
    }
  }
}

export default userStore
