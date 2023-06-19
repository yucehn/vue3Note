
<template>
  <h2>APP父級組件:Suspense組件使用</h2>
 
  <hr/>
  <Suspense>
    <template #default>
      <!-- 異步組件 -->
      <!-- <AsyncComponentVue/> -->
      <AsyncAddress />
    </template>
    <template #fallback>
      <!-- Loading內容 -->
      <h2>Loading...</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

// 引入組件:靜態引入和動態引入

// vue2中的動態引入組件的寫法:(在vue中這種vue不行)
// const AsyncComponentVue = ()=> import('./AsyncComponent.vue');
// vue3中動態引入組件寫法
// const AsyncComponentVue = defineAsyncComponent(()=> import('./AsyncComponent.vue'));
import AsyncComponentVue from './AsyncComponent.vue';
import AsyncAddress from './AsyncAddress.vue';
export default defineComponent ({
  name: 'APP',
  components:{ 
    // AsyncComponentVue,
    AsyncAddress,
  },
  setup(){ }
})
</script>