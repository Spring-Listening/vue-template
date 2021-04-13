<template>
  <div class="kd-container">
    kd组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Kd',
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
.kd-container {
}
</style>
