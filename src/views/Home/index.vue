<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-08 17:08:46
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="@assets/logo.png" />
    <div class="bg"></div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.bg {
  width: 200px;
  height: 200px;
  background: url('~@/assets/logo.png') no-repeat;
}
</style>
