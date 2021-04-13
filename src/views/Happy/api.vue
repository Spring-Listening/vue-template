<template>
  <div class="api-container">
    api组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Api',
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
.api-container {
}
</style>
