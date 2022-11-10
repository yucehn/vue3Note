<template>
  <h2>自定義hook函數操作</h2>
  <h2>x:{{x}},y:{{y}}</h2>
  <h3 v-if="loading">正在努力中...</h3>
  <h3 v-else-if="errMsg">錯誤訊息:{{ errMsg }}</h3>
  <ul v-else>
    <li>id:{{data?.id}}</li>
    <li>address:{{data?.address}}</li>
    <li>distance:{{data?.distance}}</li>
  </ul>

  <ul v-for="item in data" :key="item.id">
    <li>id: {{item.id}}</li>
    <li>title: {{item.title}}</li>
    <li>price: {{item.price}}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'
// 定義接口
interface AddressData {
  "id": number,
  "address": string,
  "distance": string,
}
interface ProductData {
  "id": number,
  "title": string,
  "price": string,
}
export default defineComponent ({
  name: 'APP',
  // 需求1: 用戶在頁面中點擊頁面，把點擊的位置的橫縱坐標收集並展示出來
  setup(){
    const { x, y } = useMousePosition();
    // const { loading, data, errMsg } = useRequest<AddressData>('/data/address.json');
    const { loading, data, errMsg } = useRequest<ProductData[]>('/data/products.json');
    // 監視
    watch(data, ()=> {
      console.log('', data.value?.length)
    })
    return {
      x,
      y,
      loading,
      data,
      errMsg
    }
  }
})
</script>

<style>

</style>