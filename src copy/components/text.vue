<template>
    <div @click="parent">
      <div @click.stop="child">child</div>
    </div>

    <!-- v-bind 绑定class 案例 1 -->
    
  <div :class="[flag ? 'active' : 'other', 'h']">12323</div>

  <!-- v-model 案例 -->
  <input v-model="message" type="text" />
  <div>{{ message }}</div>

  </template>
   
   
<script setup lang="ts">
import { ref } from 'vue';
    const child = () => {
        console.log('child');

    }
    const parent = () => {
        console.log('parent');
    }

    // v-bind 绑定方法一
   // const flag : boolean = false
   
//    方法二
    type cls = {
        other:boolean,
        active:boolean
    }

    const flag : cls ={
        other:true,
        active:false
    }

//  v-bind 绑定Style   
    type Style = {
    height: string,
    color: string
    }
    
    const style: Style = {
    height: "300px",
    color: "blue"
    }
// v-model案例
    const message = ref("")
</script>

<style scoped>
.active {
  color: red;
}
.other {
  color: blue;
}
.h {
  height: 300px;
  border: 1px solid #ccc;
}
</style>