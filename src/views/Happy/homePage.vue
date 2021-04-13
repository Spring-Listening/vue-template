<template>
  <div class="homepage-container">
    homePage组件
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'HomePage',
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
.homepage-container {
}
</style>
