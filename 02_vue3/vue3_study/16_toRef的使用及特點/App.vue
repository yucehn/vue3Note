<template>
  <h2>toRef的使用及特點</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <button @click="update">update</button>
  <ChildVue :age="age"/>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, ref } from 'vue';
import ChildVue from './components/Child.vue';

export default defineComponent ({
  name: 'APP',
  components: {ChildVue},
  setup(){
    const state = reactive({
      age: 10,
      money:100,
    });
    // 把響應式數據state對象中的某個屬性age變成了ref對象
    const age = toRef(state,'age')
    // 把響應式數據state對象中的某個屬性使用ref進行包裝，變成ref對象
    const money = ref(state.money)
    console.log(age);
    console.log(money);
    const update = ()=>{
      // 更新數據
      // console.log('update');
      state.age += 100;
      // age.value += 3;
      // state.money += 100;
      money.value += 200;
    }

    return {
      state,
      age,
      money,
      update,
    }
  }
})
</script>