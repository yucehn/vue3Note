<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyword">
  {{ keyword }}
</template>

<script lang="ts">
import { defineComponent, ref, customRef } from 'vue';
// 自定義hook防抖的函數
// values傳入的數據，將來數據的類型不確定，因此使用泛型，
// delay 防抖的間隔時間(毫秒)
function useDebounceRef<T>(value:T, delay = 200){
  // 準備一個儲存定時器的id的變量
  let timeOutId:number
  return customRef((track, trigger)=>{
    return {
      // 返回數據
      get(){
        // 告訴vue追蹤數據
        track()
        return value
      },
      // 設置數據
      set(newValue:T){
        // 清理定時器
        clearTimeout(timeOutId);
        // 開啟定時器
        timeOutId = setTimeout(()=>{
          value = newValue;
          // 告訴vue更新介面
          trigger();
         }, delay);
      }
    }
  });
}
export default defineComponent ({
  name: 'APP',
  setup(){
    // const keyword = ref('abc');
    const keyword = useDebounceRef('abc', 500);
    return {
      keyword,
    }
  }
})
</script>
