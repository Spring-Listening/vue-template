<template>
  <div class="example-container">
    example组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Example',
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
.example-container {
}
</style>
