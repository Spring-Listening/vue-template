<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-05 15:51:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-07 16:05:48
-->
<template>
  <!-- 拖动右边距改变div宽度 -->
  <div :id="`height${moveId}`" class="y-handle" @mousedown="mouseDown"></div>
</template>
<script>
export default {
  name: 'ChangeHeight',
  props: ['index', 'moveId'],
  data() {
    return {
      lastY: ''
    }
  },
  // @mouseup="mouseUp"
  mounted() {
    document.addEventListener('mouseup', () => {
      this.mouseUp()
    })
  },
  methods: {
    mouseDown(event) {
      document.addEventListener('mousemove', this.mouseMove)
      this.lastY = event.screenY
    },
    mouseMove(e) {
      this.$emit('heightChange', {
        height: e.screenY - this.lastY,
        index: this.index
      })
      this.lastY = e.screenY
    },
    mouseUp() {
      this.lastY = ''
      document.removeEventListener('mousemove', this.mouseMove)
      this.$emit('clearEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
.y-handle {
  height: 5px;
  cursor: s-resize;
  background: #2866f0;
  width: 30px;
  position: absolute;
  bottom: -1px;
  left: 40%;
}
</style>
