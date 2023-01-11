<!--
    watch 监听器
     watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用

        watch第一个参数监听源
        watch第二个参数回调函数cb（newVal,oldVal）
        watch第三个参数一个options配置项是一个对象{
        immediate:true //是否立即调用一次
        deep:true //是否开启深度监听
}
 -->
<template>
    <h4>{{ message2.a.b.c }}</h4>
    <button  @click="message2.a.b.c += '!'">点我改变message2.a.b.c 的值</button>
</template>

<script setup lang="ts">
import { ref,watch,reactive } from 'vue';
let message = ref({
// let message = reactive({
    nav:{
        bar:{
            name:""
        }
    }
})

let message1 = ref({
    name:'张三'
})

let message2 = reactive({
    a:{
        b:{
            c:"12"
        }
    },
    d:5
})
// 监听ref需要开启深度监听 reactive 不需要开启深度监听，因为已经强制开启了
// 情况一 ：监视ref定义的响应式数据
watch(message,(newValue,oldValue)=>{
    console.log("新的值",newValue);
    console.log("旧的值",oldValue);
},{
    immediate:true,
    deep:true
})

//情况二：监视多个ref定义的响应式数据
watch([message,message1],(newVal,oldVal)=>{
    console.log("新的值",newVal);
    console.log("旧的值",oldVal);
})

/* 情况三：监视reactive定义的响应式数据
			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
*/
watch(message2,(newValue,oldValue)=>{
	console.log('message2',newValue,oldValue)
},{immediate:true,deep:false}) //此处的deep配置不再奏效

//情况四：监视reactive定义的响应式数据中的某个属性
watch(()=>message2.a,(newValue,oldValue)=>{
	console.log('message2.a变化了',newValue,oldValue)
},{immediate:true,deep:true}) 

//情况五：监视reactive定义的响应式数据中的某些属性
watch([()=>message2.a,()=>message2.d],(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true})

//特殊情况
watch(()=>message2.a,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
},{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
</script>

<style>

</style>