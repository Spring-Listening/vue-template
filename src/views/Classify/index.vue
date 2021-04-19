<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-19 20:25:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 21:13:58
-->
<template>
  <div class="classify-container">
    index组件
    <div>vuex 测试</div>
    <div>{{ name }}</div>
    <div>
      <button @click="handleChangeName">改变name</button>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted, computed, toRefs } from 'vue'
import { useStore } from 'vuex'
import { CHANGEUSERNAME, ASYNCCHANGRUSERNAME } from '@/store/types.js'
export default {
  name: 'Classify',
  components: {},
  setup() {
    let store = useStore()
    /** 定义响应式数据 */
    const data = reactive({
      name: computed(() => store.state.classify.name)
    })
    onMounted(() => {
      setName()
    })
    /** 自定义方法 */
    const setName = () => {
      store.commit(`classify/${CHANGEUSERNAME}`, { name: 'this is a new name' })
    }
    const handleChangeName = () => {
      store.dispatch(`classify/${ASYNCCHANGRUSERNAME}`, {
        name: data.name + 'iso'
      })
    }
    return {
      ...toRefs(data),
      handleChangeName
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
}
</style>
