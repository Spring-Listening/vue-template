<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-07 00:38:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 20:23:35
-->
<template>
  <div class="test-container">
    <div>ssssss{{ name }} ==== {{ age }}</div>
    <div>{{ username }}===={{ userage }}</div>
    <div>{{ num }}</div>
    <button @click="handleAge">add</button>
    <button @click="handleAction">action</button>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'test',
  props: {
    data: {
      type: String
    }
  },
  setup(props, context) {
    const store = useStore()
    console.log('props', props)
    console.log('ctx', context)
    const data = reactive({
      name: 'zouchunwen',
      age: 23,
      username: computed(() => store.state.userStore.name),
      userage: computed(() => store.state.userStore.age),
      num: computed(() => store.state.num)
    })
    const handleAge = () => {
      store.commit('add')
      store.commit('userStore/addAage')
    }
    const handleAction = () => {
      store.dispatch('userStore/asyncAddAge', { num: 5 })
    }
    onMounted(() => {
      console.log('onMounted')

      console.log('======', process.env)
    })

    return {
      handleAge,
      handleAction,
      ...toRefs(data)
    }
  }
})
</script>
<style lang="scss">
.test-container {
  color: $primary;
}
</style>
