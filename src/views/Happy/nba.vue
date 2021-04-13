<template>
  <div class="nba-container">
    nba组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Nba',
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
.nba-container {
}
</style>
