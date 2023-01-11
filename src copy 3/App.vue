<template>
  <div>我是父组件</div>
  <Children></Children>

</template>

<script setup lang="ts">

import son from './components/son.vue'
import { reactive,ref,provide } from 'vue';
import Children from './components/children.vue';

    let car = reactive({name:'奔驰',price:'40万'})
    provide('car',car)


</script>

<style scoped>

</style>
