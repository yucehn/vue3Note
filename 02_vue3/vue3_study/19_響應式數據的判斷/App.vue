
<template>
  <h2>響應式數據的判斷</h2>
 
  <hr/>
</template>

<script lang="ts">
import { defineComponent,isReactive,isReadonly,isRef,reactive,readonly,ref, isProxy } from 'vue';
export default defineComponent ({
  name: 'APP',
  setup(){
    // isRef: 檢查一個值是否為一個 ref 對象
    console.log(isRef(ref({})));
    // isReactive: 檢查一個對像是否是由 reactive 創建的響應式代理
    console.log(isReactive(reactive({})));
    // isReadonly: 檢查一個對像是否是由 readonly 創建的只讀代理
    console.log(isReadonly(readonly({})));
    // isProxy: 檢查一個對像是否是由 reactive 或者 readonly 方法創建的代理
    console.log('isProxy readonly', isProxy(readonly({})));
    console.log('isProxy reactive', isProxy(reactive({})));
  }
})
</script>