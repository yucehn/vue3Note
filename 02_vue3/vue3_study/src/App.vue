<template>
  <h2>readonly & shallowReadonly</h2>
  <h3>state:{{ state }}</h3>
 <button @click="update">更新數據</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue';

export default defineComponent ({
  name: 'APP',
  setup(){
    const state = reactive({
      name:'amy',
      age:20,
      car: {
        name: 'bmw',
        color: 'yellow',
      }
    });
    // 只讀的數據---深度的只讀
    const state2 = readonly(state);
    // 只讀的數據---淺的只讀
    const state3 = shallowReadonly(state)
    const update = ()=>{
      // state2.name += '---'
      // state2.car.name += '---';

      // state3.name += '---';
      state3.car.name += '---';
    }

    return {
      state,
      state2,
      update,
    }
  }
})
</script>

<style>

</style>