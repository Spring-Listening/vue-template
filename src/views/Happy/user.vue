<template>
  <div class="user-container">
    user组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'User',
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
.user-container {
}
</style>
