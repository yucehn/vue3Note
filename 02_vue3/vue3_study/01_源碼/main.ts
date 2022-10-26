// 程序的主入口文件
// 引入 createApp 函數，創建對應的應用，產生應用的實例對象
import { createApp } from 'vue'
// 引入APP組件(所有組件的父級組件)
import App from './App.vue'
// 創建APP應用返回對應的實例對象，調用mount方法進行掛載
createApp(App).mount('#app')
