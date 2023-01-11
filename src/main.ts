import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 封装全局组件，后面要使用该组件，无需引入
import allComVue from './components/allCom.vue'

createApp(App).component('allComVue',allComVue).mount('#app')
