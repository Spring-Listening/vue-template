<template>
  <div class="test-container">
    test组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Test',
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
.test-container {
}
</style>
