/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-15 18:28:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 20:27:35
 */
const userStore = {
  namespaced: true,
  state: {
    name: 'username',
    age: 12
  },
  getters: {},
  actions: {
    asyncAddAge(context, payload) {
      context.commit('addAage', payload)
    }
  },
  mutations: {
    addAage(state, payload) {
      console.log(payload)
      payload ? (state.age += payload.num) : state.age++
    }
  }
}

export default userStore
