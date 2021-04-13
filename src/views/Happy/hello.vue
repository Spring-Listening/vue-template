<template>
  <div class="hello-container">
    hello组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Hello',
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
.hello-container {
}
</style>
