<!-- reactive
用来绑定复杂的数据类型 例如 对象 数组
使用reactive 去修改值无须.value

他是不可以绑定普通的数据类型这样是不允许 会给我们报错
import { reactive} from 'vue'
let person = reactive('sad')

绑定普通的数据类型 用ref
 -->

<template>
    <!-- <form>
        <input  v-model = person.name  type="text">
        <br>
        <input v-model="person.age" type="text">
        <br>
        <button @click.prevent="submit" >提交</button>
        
    </form> -->
    <h4>{{ state }}</h4>
        <button @click="changeNum">点击改变数值</button>
        <button @click="changeNum1">点击改变数值</button>
        <button @click="state.c.d.e++">点击改变数值</button>
</template>

<script setup lang="ts">
  import  {reactive,shallowReactive,readonly} from 'vue'
  const person = reactive({
    name:"张三",
    age:18
  })
 const submit = ()=>{
    console.log(person);
    
 }
// shallowReactive 浅响应式，可以改第一层的响应式，深度的响应式不行，数值会改变，但无法更新到视图上
 const state =shallowReactive({
  a:1,
  b:2,
  c:{
    d:{
      e:5
    }
  }
 })


 function changeNum(){
  state.b = 5;
  state.c.d.e = 111;
  console.log(state);
  
 }
 function changeNum1(){
  state.a = 3;
 console.log(state);
 }

//  readonly 只允许可读。readonly: 让一个响应式数据变为只读的（深只读）。
</script>

<style>
</style>