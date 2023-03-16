
<template>
  <h2>provide和inject</h2>
  <p>當前顏色:{{ color }}</p>
  <button @click="color='red'">紅色</button>
  <button @click="color='yellow'">黃色</button>
  <button @click="color='green'">綠色</button>
  <hr/>
  <Son/>
</template>

<script lang="ts">
import { defineComponent,provide,ref } from 'vue';
import Son from './components/Son.vue'
export default defineComponent ({
  name: 'APP',
  components:{Son},
  setup(){
    // 響應式的數據
    const color = ref('red');
    // 提供數據
    provide('color', color);
    return {
      color,
    }
  }
})
</script>