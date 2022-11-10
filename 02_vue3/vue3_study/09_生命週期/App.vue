<template>
  <h2>App父級組件</h2>
  <button @click="isShow=!isShow">切換顯示</button>
  <hr>
  <Child v-if="isShow" />
</template>

<script lang="ts">
import Child from './components/ChildTool.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent ({
  name: 'APP',
  components: {
    Child,
  },
  setup(){
    console.log('3.0 setup')
    const isShow = ref(true);
    return {
      isShow
    }
  }
})
</script>

<style>

</style>