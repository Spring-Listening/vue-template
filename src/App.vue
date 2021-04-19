<!--
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-17 16:24:03
-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" username="spring" />
    </keep-alive>
  </router-view>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      invoke: 'spring'
    }
  },
  setup() {}
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style lan="css">
@import url('//at.alicdn.com/t/font_740468_4p5zw9b0j9c.css');
</style>
