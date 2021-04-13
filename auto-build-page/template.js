/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-10 19:00:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:40:16
 */
// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName.toLowerCase()}-container">
    ${compoenntName}组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: '${compoenntName.charAt(0).toUpperCase() + compoenntName.slice(1)}',
  components: {},
  setup() {
    /** 定义响应式数据 */
    const data = reactive({})
    onMounted(() => {})
    return {
      data
    }
  }
}
</script>
<style lang="scss" scoped>
.${compoenntName.toLowerCase()}-container {
}
</style>
`
  }
}
