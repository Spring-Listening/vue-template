<template>
  <div class="booring-container">
    booring组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Booring',
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
.booring-container {
}
</style>
