<template>
  <h2>ref獲取元素</h2>
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent ({
  name: 'APP',
  // 需求:當頁面加載完畢後，頁面中的文本框可以直接獲取焦點(自動獲取焦點)
  setup(){
    // 默認是空，頁面加載完畢，說明組件已經存在，獲取文本框元素
    const inputRef = ref<HTMLElement|null>(null);
    onMounted(()=>{
      inputRef.value&&inputRef.value.focus() // 自動獲取焦點
    })
    return {
      inputRef
    }
  }
})
</script>

<style>

</style>