<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-07 00:38:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 14:46:27
-->
<template>
  <div class="test-container">ssssss{{ name }} ==== {{ age }}</div>
</template>
<script>
import { onMounted, reactive, toRefs, defineComponent } from 'vue'
export default defineComponent({
  name: 'test',
  props: {
    data: {
      type: String
    }
  },
  setup(props, context) {
    console.log('props', props)
    console.log('ctx', context)
    const data = reactive({
      name: 'zouchunwen',
      age: 23
    })
    onMounted(() => {
      console.log('onMounted')

      console.log('======', process.env)
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>
<style lang="scss">
.test-container {
  color: $primary;
}
</style>
