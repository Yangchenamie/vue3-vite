<!--
    watchEffect 高级监听器
        立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
        如果用到message 就只会监听message 就是用到几个监听几个 而且是非惰性 会默认调用一次

        watch的套路是：既要指明监视的属性，也要指明监视的回调。

        watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

        watchEffect有点像computed：

        但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
        而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。
 -->
 <template>
    <input type="text" v-model="message">
    <input type="text" v-model="message1">
    <button @click="stopWatch">停止监听</button>
</template>

<script setup lang="ts">
import { ref,watch,reactive, watchEffect } from 'vue';
let message = ref<string>('qqq')
let message1 = ref<string>('aaa')
const stop = watchEffect((oninvalidate)=>{
    // 就是在触发监听之前会调用一个函数  可以处理你的逻辑例如防抖
    oninvalidate(()=>{
        console.log('before');
        
    })
    console.log("message的值",message.value);
    
},{
    // 副作用刷新时机 flush 一般使用post  组件更新后执行
    // pre 组件更新前执行    sync 强制效果始终同步触发    post 组件更新后执行
    flush:'post',
    // onTrigger  可以帮助我们调试 watchEffect
    onTrigger(e){
        console.log('-----onTrigger----');
        debugger
    }
})

// 停止监听
const stopWatch = () => stop()



</script>

<style>

</style>