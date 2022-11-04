<template>
  <h2>reactive和ref的細節問題</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <hr>
  <button @click="update">更新數據</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent ({
  name: 'APP',
  // 是Vue3的 composition API中2個最重要的響應式API(ref/reactive)
  // ref用來處理基本類型數據, reactive用來處理對象(遞歸深度響應式)
  // 如果用ref對象/數組, 內部會自動將對象/數組轉換為reactive的代理對象
  // ref內部: 通過給value屬性添加getter/setter來實現對數據的劫持
  // reactive內部: 通過使用Proxy來實現對對象內部所有數據的劫持, 並通過Reflect操作對象內部數據
  // ref的數據操作: 在js中要.value, 在模板中不需要(內部解析模板時會自動添加.value)
  setup() {
    const m1 = ref('abc')
    const m2 = reactive({
      name: '小名',
      wife: {
        name: '小紅'
      }
    })
    // ref 可以傳入對象嗎?
    // ref如果放入一個對象，那會是經過reactive處理，形成一個proxy類型對象
    const m3 = ref({
      name: '小名',
      wife: {
        name: '小紅'
      }
    })
    // 更新數據
    const update = ()=> {
      m1.value += '---';
      m2.wife.name += '---'
      m3.value.name += '---'
      m3.value.wife.name += '---'
      console.log(m3.value.wife)
    }
    return {
      m1,
      m2,
      m3,
      update
    }
  },
})
</script>

<style>

</style>