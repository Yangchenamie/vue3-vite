<template>
    <h4>我是孙组件</h4>
    <div>{{ car }}</div>
    
</template>

<script setup lang="ts">
import { inject } from 'vue';

    let car = inject('car')
</script>

<style>

</style>