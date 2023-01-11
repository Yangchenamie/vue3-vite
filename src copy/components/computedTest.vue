<!-- 
    computed用法
        计算属性就是当依赖的属性的值发生变化的时候，才会触发他的更改，
        如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。
 -->
<template>
    <!-- <input type="text" v-model="person.firstName">
    <br>
    <input type="text" v-model="person.lastName">
    <br>
    <h4>{{ fullname }}</h4> -->
    <!-- 购物车案例 -->
    <div>
      <table style="width:800px" border>
         <thead>
            <tr>
               <th>名称</th>
               <th>数量</th>
               <th>价格</th>
               <th>操作</th>
            </tr>
         </thead>
         <tbody>
            <tr :key="index" v-for="(item, index) in data">
               <td align="center">{{ item.name }}</td>
               <td align="center">
                  <button @click="AddAnbSub(item, false)">-</button>
                  {{ item.num }}
                  <button @click="AddAnbSub(item, true)">+</button>
               </td>
               <td align="center">{{ item.num * item.price }}</td>
               <td align="center">
                  <button @click="del(index)">删除</button>
               </td>
            </tr>
         </tbody>
         <tfoot>
            <tr>
               <td></td>
               <td></td>
               <td></td>
               <td align="center">总价:{{ $total }}</td>
            </tr>
         </tfoot>
      </table>
   </div>
</template>

<script setup lang="ts">
import { locStub } from '@vue/compiler-core';
import { computed,reactive,ref } from 'vue';
// let price = ref(0)

// let m = computed<string>(()=>{
//     return '$' + price.value
// })
// price.value = 500
const person = reactive({
    firstName:'',
    lastName:''
})
// 简写
// const fullname = computed<string>(()=>{
//     return person.firstName + '-' + person.lastName
// })

// 常规
const fullname = computed({
    // get(){
    //     return person.firstName + '-' + person.lastName
    // },
    // set(value){
    //     const nameArr = value.split('-')
    //     person.firstName = nameArr[0]
    //     person.lastName = nameArr[1]
    // }
    get:()=>{
        return person.firstName + '-' + person.lastName
    },
    set:(value)=>{
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
    }
})

// 购物车
type shop = {
    name:string,
    num:number,
    price:number
}
let $total = ref<number>(0)
const data = reactive<shop[]>([
    {
        name:"袜子",
        num:5,
        price:100
    },
    {
        name:"裤子",
        num:3,
        price:200
    },
    {
        name:"上衣",
        num:1,
        price:300
    },
])
const AddAnbSub = (item:shop,type:boolean = false): void =>{
    if(item.num >1 && !type){
        item.num--;
    }
    if(item.num <99 && type){
        item.num++
    }
}
const del = (index:number) =>{
    data.splice(index,1)
}
$total = computed<number>(()=>{
    return data.reduce((prev,next)=>{
        return prev + (next.num * next.price)
    },0)
})
</script>

<style>

</style>