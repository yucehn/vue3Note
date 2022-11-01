

<template>
  <h2>reactive的使用</h2>
  <h3>名字: {{user.name}}</h3>
  <h3>年齡: {{user.age}}</h3>
  <h3>附屬: {{user.wife}}</h3>
  <h3>性別: {{ user.gender }}</h3>
  <button @click="updateUser">更新數據</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求:顯示用戶的相關訊息，點擊按鈕，可以更新用戶的相關信息數據
  /*
  作用: 定義多個數據的響應式
        const proxy = reactive(obj): 接收一個普通對象然後返回該普通對象的響應式代理器對象
        響應式轉換是“深層的”：會影響對象內部所有嵌套的屬性
        內部基於 ES6 的 Proxy 實現，通過代理對像操作源對象內部數據都是響應式的
  */
  setup() {
    const obj = {
      name: 'Yuyu',
      age: 12,
      wife: {
        name: 'Tom',
        age: 18,
        cars: ['本田','川崎','鈴木']
      },
    }
    // 返回的是一個 Proxy 的代理對象，被代理的目標對象(obj)就是reactive中的傳入的對象
    // user 代理對象， obj 目標對象
    const user = reactive<any>(obj);

    const updateUser = ()=> {
      // // // obj.name = 'jijiji'; // 無響應式
      // // user.name += '==';
      // // user.age += 2;
      // // user.wife.name += '++';
      // // user.wife.cars.push('新車');

      // // obj.name = '男'; // obj:any
      // user.gender = '男'; // ok
      // delete user.age // ok
      // console.log(obj);
      // console.log(user);

      // 總結: 如果操作代理對象，目標對象中的數據也會隨之變化，
      // 同時如果想操作數據時，介面也要跟著更新渲染，那也是要操作代理對象
    
      // 通過當前代理對象找到代理對象中的某個屬性，更改該屬性中的某個數組的數據
      // user.wife.cars[1] = '速可達';

      // 通過當前的代理對象把目標中的某個數組添加一個屬性
      user.wife.cars[3]='速可達';
    };

    return {
      user,
      updateUser,
    }
  },
});
</script>