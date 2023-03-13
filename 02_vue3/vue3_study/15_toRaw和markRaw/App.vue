<template>
  <h2>toRaw & markRaw</h2>
  <h3>state:{{ state }}</h3>
  <button @click="toRawClick">測試toRaw</button>
  <button @click="markRawClick">測試markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from 'vue';
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent ({
  name: 'APP',
  setup(){
    const state = reactive<UserInfo>({
      name:'ppp',
      age:20,
    });
    const toRawClick = ()=>{
      console.log('toRawClick');
      // 把代理對象變成了普通對象，數據變化，介面部變化
      const user = toRaw(state);
      user.name += '=='
    };
    const markRawClick = ()=>{
      // state.likes = ['吃','喝'];
      // state.likes[0] += '==';
      // console.log('markRawClick', state.likes);
      const likes = ['吃','喝'];
      // markRaw標記對象數據的對象，不能再成為代理對象(不能更改)
      state.likes = markRaw(likes);
      setInterval(()=>{
        if(state.likes){
          console.log('定時器', state.likes);
          state.likes[0] += '=';
        }
      },1000);
    };
    return {
      state,
      toRawClick,
      markRawClick,
    }
  }
})
</script>

<style>

</style>