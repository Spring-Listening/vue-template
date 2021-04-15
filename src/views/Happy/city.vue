<template>
  <div class="city-container">
    city组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'City',
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
.city-container {
}
</style>
