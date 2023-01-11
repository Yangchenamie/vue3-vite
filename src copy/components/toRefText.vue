<template>
    <div>
       <button @click="change">按钮</button>
       {{state}}
       <h4>姓名：{{ name }}</h4>
       <h4>年龄：{{ age }}</h4>
    </div>
 </template>
  
 <script setup lang="ts">
 import { reactive, toRef, toRefs, toRaw, markRaw } from 'vue'
  
 const obj = {
    foo: 1,
    bar: 1
 }
  
//toRef  只适用于响应式对象的值  如果原始对象是非响应式的就不会更新视图 数据是会变的
 //const state = toRef(obj, 'bar')

 // bar 转化为响应式对象
 const state = reactive(toRef(obj, 'bar'))
  
 const change = () => {
    state.value++
    console.log(obj, state);
  
 }

//  toRefs 可以批量创建ref对象 方便我们解构。
const person = reactive({
   name:"张三",
   age:18
})

let {name,age} = toRefs(person)

// toRaw 将一个由reactive生成的响应式对象转为普通对象。
// 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。

const obj1 = reactive({
   sex:"男"
})
const objRaw = toRaw(obj1)

console.log(objRaw);

 </script>