<template>
  <div>我是父组件</div>
  <allComVue></allComVue>
</template>

<script setup lang="ts">


import { reactive,ref,provide } from 'vue';



    let car = reactive({name:'奔驰',price:'40万'})
    provide('car',car)


</script>

<style scoped>

</style>
