<template>
  <div class="aa-container">
    aa组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Aa',
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
.aa-container {
}
</style>
