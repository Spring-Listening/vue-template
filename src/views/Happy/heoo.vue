<template>
  <div class="heoo-container">
    heoo组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Heoo',
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
.heoo-container {
}
</style>
