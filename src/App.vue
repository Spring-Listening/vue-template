<!--
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-03-02 19:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-07 16:02:58
-->
<template>
  <router-view />
  <div @click="handleClick(1, $event)">按钮</div>
  <div>{{ a }}====={{ b }}</div>
  <Test :data="a"></Test>
</template>
<script>
import {
  onBeforeMount,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
  defineComponent
} from 'vue'
import { useRouter } from 'vue-router'
import Test from '@/views/Test.vue'
export default defineComponent({
  name: 'App',
  components: {
    Test
  },
  data() {
    return {
      invoke: 'spring'
    }
  },
  setup(props, ctx) {
    console.log('222', ctx)
    console.log(ctx.root)
    let router = useRouter()
    let handleClick = () => {
      router.push('/about')
    }
    const data = reactive({
      a: 1,
      b: 2
    })
    onBeforeMount(() => {
      console.log('beforeMounted')
    })
    onMounted(() => {
      console.log('mounted')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return {
      handleClick,
      ...toRefs(data)
    }
  }
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
