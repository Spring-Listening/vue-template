<template>
  <div class="question-container">
    question组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Question',
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
.question-container {
}
</style>
