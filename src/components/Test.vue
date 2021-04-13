<!--
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-03-03 10:10:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-03 10:14:04
-->
<template>
  <div>test component</div>
</template>
<script>
export default {
  name: 'test',
  beforeCreate() {
    console.log('test beforeCreate')
  },
  created() {
    console.log('test created')
  },
  beforeMount() {
    console.log('test beforeMount')
  },
  mounted() {
    console.log('test mounted')
  },
  beforeUpdate() {
    console.log('test beforeUpdate')
  },
  updated() {
    console.log('test updated')
  },
  beforeUnmount() {
    console.log('test beforeUnmount')
  },
  unmounted() {
    console.log('test unmounted')
  }
}
</script>
