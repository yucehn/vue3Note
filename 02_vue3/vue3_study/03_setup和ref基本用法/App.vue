<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">增加</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求:頁面打開後可以直接看到一個數據，點擊按鈕後，該數據可以發生變化
  // vue2
  // data() {
  //   return {
  //     count: 0, // 屬性
  //   }
  // },
  // methods: {
  //   updateCount() { // 方法
  //     this.count++; 
  //   },
  // },

  // vue3
  // setup是組合API的入口函數
  setup(){
    // let count = 0; // 此時數據非響應式(數據不會根據頁面渲染而變化)
    const count = ref(0); // count為ref的對象
    const updateCount = () => {
      count.value++;
      // js中操作數據: xxx.value
      // 模板中操作數據: 不需要.value
    }
    // 返回的是一個對象
    return{
      // 屬性
      count,
      // 方法
      updateCount,
    }
  }
});
</script>