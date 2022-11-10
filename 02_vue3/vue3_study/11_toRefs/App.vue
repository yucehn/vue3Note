<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{ state.name }}</h3>
  <h3>age: {{ state.age }}</h3> -->
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
  <hr>
  <h3>name2: {{ name2 }}</h3>
  <h3>age2: {{ age2 }}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

function useFeatureX(){
  const state = reactive({
    name2: '自來也1',
    age2: 46 
  })
  return {
    ...toRefs(state)
  }
}

export default defineComponent ({
  name: 'APP',
  setup(){
    const state = reactive({
      name: '自來也',
      age: 47
    });
    // 把一個響應式對象轉換成普通對象，該普通對象的每個 property 都是一個 ref
    // const state2 = toRefs(state)
    const { name, age } = toRefs(state)
    // 定時器，更新數據(測試是否為響應式)
    setInterval(()=>{
      // state.name += '===';
      // state2.name.value += '----'
      name.value += '===';
    }, 2000);
    const { name2, age2 } = useFeatureX()
    return {
      // state,
      // ...state //不適響應式
      // ...state2, // toRefs返回來對象
      name, age,
      name2, age2
    }
  }
})
</script>

<style>

</style>