<template>
  <div class="layout">
    <!-- 给Menu组件 传递了一个title 字符串类型是不需要v-bind -->
    <!-- 传递非字符串类型需要加v-bind  简写 冒号 -->
    <!-- 从Menu 组件接受子组件派发的事件on-click 后面是我们自己定义的函数名称getList -->
        <Menu v-bind:data="data" title="我是标题" @on-click="getList" ref="menu"></Menu>
        <div class="layout-right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Menu from './components/Menu.vue'
import { reactive,ref } from 'vue';

const data = reactive<number[]>([1,2,3])

const getList = (list: number[]) => {
  console.log(list,'父组件收到子组件传过来的值');
  
}

// const menu = ref<InstanceType<typeof menu>>()


</script>

<style scoped>

</style>
