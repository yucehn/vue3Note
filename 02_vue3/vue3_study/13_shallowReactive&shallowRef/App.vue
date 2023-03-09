<template>
  <h2>shallowReactive & shallowRef</h2>
  <h3>m1:{{m1}}</h3>
  <h3>m2:{{m2}}</h3>
  <h3>m3:{{m3}}</h3>
  <h3>m4:{{m4}}</h3>
  <hr>
  <button @click="update">更新數據</button>
</template>

<script lang="ts">
import { defineComponent, reactive, shallowReactive,ref, shallowRef } from 'vue';

export default defineComponent ({
  name: 'APP',
  setup(){
    const m1 = reactive({
      name: 'abner',
      age: 32,
      car: {
        name: 'bmw',
        color: 'red'
      }
    });
    const m2 = shallowReactive({
      name: 'abner',
      age: 32,
      car: {
        name: 'bmw',
        color: 'red'
      }
    });
    const m3 = ref({
      name: 'abner',
      age: 32,
      car: {
        name: 'bmw',
        color: 'red'
      }
    });
    const m4 = shallowRef({
      name: 'abner',
      age: 32,
      car: {
        name: 'bmw',
        color: 'red'
      }
    });
    const update = ()=>{
      // 更改m1的數據 --- reactive (深度劫持/深監視---深度響應式)
      // m1.name += ' =='
      // m1.car.name += ' =='
      // 更改m2的數據 --- shallowReactive  (淺度劫持/深監視---淺度響應式)
      // m2.name += ' =='
      // m2.car.name += ' =='
      // 更改m3的數據 --- ref (深度劫持/深監視---深度響應式)
      // m3.value.name += ' =='
      // m3.value.car.name += ' =='
      // 更改m4的數據 --- shallowRef (淺度劫持/深監視---淺度響應式)
      // m4.value.name += ' =='
      // m4.value.car.name += ' =='
    };

    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
</script>

<style>

</style>