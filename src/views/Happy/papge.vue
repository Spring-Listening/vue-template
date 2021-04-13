<template>
  <div class="papge-container">
    papge组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Papge',
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
.papge-container {
}
</style>
