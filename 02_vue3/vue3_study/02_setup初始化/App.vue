<template>
  <div>
    哈哈
    <!-- <span>{{ number }}</span> -->
  </div>
</template>

<script lang="ts">
// defineComponent函數，定義一個組件，內不可以傳入配置對象
import { defineComponent } from 'vue';

// 暴露出去定義好的組件
export default defineComponent({
  // 當前組件名稱
  name: 'App',
  // 測試代碼，setup是組合API中第一個要使用的函數
  // setup(){
  //   console.log('hello');
  //   const number = 10;
  //   return {
  //     number,
  //   }
  // }
});
</script>