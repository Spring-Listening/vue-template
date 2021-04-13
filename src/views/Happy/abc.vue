<template>
  <div class="abc-container">
    abc组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Abc',
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
.abc-container {
}
</style>
