<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-29 14:40:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 14:54:27
-->
<template>
  <div class="scroll-container">
    <h2>修改滚动条样式</h2>
    <div class="scroll-box test-1">
      <div
        class="item"
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  name: 'Scroll',
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
.scroll-container {
  .scroll-box {
    margin: 0 auto;
    width: 600px;
    height: 600px;
    background: pink;
    overflow: auto;
    .item {
      height: 100px;
    }
  }
  .test-1::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .test-1::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
  }
  .test-1::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: transparent;
  }
}
</style>
