<template>
  <h2>APP父級組建</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="msg=msg+'===='">更新數據</button>
  <Child :msg="msg" msg2="珍香" @xxx="xxx"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// 引褥子級組建
import Child from './components/Child.vue';

export default defineComponent ({
  name: 'APP',
  components: {
    Child,
  },
  setup() {
    const msg = ref('我是數據');
    function xxx(text:string):void{
      console.log('APP xxx')
      msg.value += text
    }
    return {
      msg,
      xxx
    }
  },
})
</script>

<style>

</style>