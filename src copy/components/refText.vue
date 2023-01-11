<!-- ref
接受一个内部值并返回一个响应式且可变的 ref 对象
ref 对象仅有一个 .value property，指向该内部值。
 -->
<template>
    <div>
        <!-- <button @click="changeMsg">change</button> -->
        <div>{{ message }}</div>
      
        <button @click="change">修改 customRef</button>

    </div>
</template>
   
   
   
<script setup lang="ts">
import { ref , isRef , Ref ,shallowRef , triggerRef , customRef} from 'vue';
  //let message: string = "我是message"
   
// 这样操作是无法改变message  的值 应为message 不是响应式的无法被vue 跟踪要改成ref
//   const changeMsg = () => {
//     console.log(message);
    
//      message = "change msg"
//      console.log(message);
     
//   }
// vue2响应式界面更新 this.$set(对象，属性，值)  | Vue.set(对象，属性，值)

// ref方法
    //let message = ref("我是message")

    // const changeMsg = ()=>{
    //     message.value="change msg"
    // }

// isRef 判断是不是一个ref对象

//let message: Ref<string | number> = ref("我是message")
let notRef:number = 123
// const changeMsg = () => {
//   message.value = "change msg"
//   console.log(isRef(message)); //true
//   console.log(isRef(notRef)); //false
// }

// shallowRef 会改变值但不会响应式出现  创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的
    
type Obj = {
  name: string
}
// let message: Ref<Obj> = shallowRef({
//   name: "小满"
// })
 
// const changeMsg = () => {
//   //message.value.name = '大满'
//   message.value = { name: "大满" }
//   console.log(message.value);

//   // triggerRef 强制更新页面DOM 这样也是可以改变值的
//   triggerRef(message)
// }
// customRef  自定义ref  customRef 是个工厂函数要求我们返回一个对象 并且实现 get 和 set  适合去做防抖之类的

function MyRef<T = any>(value : T){
    let timer : any;
    return customRef((track,trigger)=>{
        return {
            get(){
                track()
                return value
            },
            set(newVal){
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    console.log("触发了set");
                    value = newVal
                    trigger() 
                },500)
            }
        }
    })
}

const message = MyRef<string>('111')

const change = () =>{
    message.value = "222"
}
</script>
   
   
  <style>
  </style>