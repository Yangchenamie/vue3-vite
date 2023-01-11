<template>
    <h4>我是menu组件</h4>
    <div>
        菜单区域 : {{ title }}
        <div>{{ data }}</div>
    </div>
    <button @click="clickTap">给父组件传参</button>
</template>

<script setup lang="ts">
import { type } from 'os';
import { reactive } from 'vue';
// 父给子传参 defineProps
    // 方法一：
    // defineProps<{
    //     title:string,
    //     data:number[]
    // }>()
    // 方法二：withDefaults是个函数也是无须引入开箱即用接受一个props函数第二个参数是一个对象设置默认值
    type Props = {
        title?:string,
        data?:number[]
    }
    withDefaults(defineProps<Props>(),{
        title:'张三',
        data:()=>[1,2,2,3]
    })

// 子给父传参 defineEmits
    const list = reactive<number[]>([1,2,3,4,5,6,7])
    // const emit = defineEmits(['on-click'])
    const emit = defineEmits<{
        (e:'on-click',arr:number[]):void
    }>()

    const clickTap = ()=>{
        emit('on-click',list)
}

defineExpose({
  name:"张三",
  open:()=>console.log(1)
  
})
</script>

<style>

</style>