<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen
 * @Date: 2022-01-21 18:24:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-25 15:47:25
-->
<template>
  <div class="core-container">
    <div class="scroll-wrapper">
      <div class="scroll-content">
        <img src="@/assets/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import Movable from '@better-scroll/movable'
import Zoom from '@better-scroll/zoom'
BScroll.use(Movable)
BScroll.use(Zoom)
export default defineComponent({
  setup() {
    const bs = ref()
    const emojis = ref([
      '😀 😁 😂 🤣 😃',
      '😄 😅 😆 😉 😊',
      '😫 😴 😌 😛 😜',
      '👆🏻 😒 😓 😔 👇🏻'
    ])

    let init = () => {
      bs.value = new BScroll('.scroll-wrapper', {
        bindToTarget: true,
        scrollX: true,
        scrollY: true,
        freeScroll: true,
        movable: true,
        zoom: {
          start: 1,
          min: 1,
          max: 3
        }
      })
    }
    onMounted(() => {
      init()
    })
    onUnmounted(() => {
      bs.value.destroy()
    })
    return {
      init,
      emojis
    }
  }
})
</script>
<style lang="scss" scoped>
.core-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .scroll-wrapper {
    height: 400px;
    overflow: hidden;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    .scroll-content {
      width: 220px;
      background: pink;
    }
    .scroll-item {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      text-align: center;
      &:nth-child(2n) {
        background-color: #f3f5f7;
      }
      &:nth-child(2n + 1) {
        background-color: #42b983;
      }
    }
  }
}
</style>
