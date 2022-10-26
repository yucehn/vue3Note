<template>
<!-- vue2中HTML模板中被須有一對根標籤，Vue3不需要也可以 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
// defineComponent函數，定義一個組件，內不可以傳入配置對象
import { defineComponent } from 'vue';
// 引入子級組建
import HelloWorld from './components/HelloWorld.vue';

// 暴露出去定義好的組件
export default defineComponent({
  // 當前組件名稱
  name: 'App',
  components: {
    // 註冊子級組建
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
