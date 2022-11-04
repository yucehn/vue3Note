<template>
  <h2>計算屬性和監視</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏: <input v-model="user.firstName" type="text" placeholder="請輸入姓氏" />
    <br>
    名字: <input v-model="user.lastName" type="text" placeholder="請輸入名字" />
  </fieldset>
  <fieldset>
    <legend>計算屬性和監視的演示</legend>
    姓名: <input v-model="fullName1" type="text" placeholder="顯示姓名" /><br>
    姓名: <input v-model="fullName2" type="text" placeholder="顯示姓名" /><br>
    姓名: <input v-model="fullName3" type="text" placeholder="顯示姓名" /><br>
  </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect, watch } from 'vue';

export default defineComponent ({
  name: 'APP',
  setup() {
    // 定義對象
    const user = reactive({
      firstName: '工藤',
      lastName: '新一'
    })
    // 通過計算屬性方式，實現姓名顯示
    // 計算屬性的函式中如果只傳入一個回調函數，表示的是get

    // 第一個姓名
    // 返回是一個ref對象
    const fullName1 = computed(()=>{
      return user.firstName+'_'+user.lastName
    });
    // 第二個姓名
    const fullName2 = computed({
      get() {
        return user.firstName+'_'+user.lastName
      },
      set(val:string){
        //  console.log(val,'----')
        const names = val.split('_');
        user.firstName=names[0];
        user.lastName=names[1];
      }
    });

    // 第3個姓名
    // 監視----監視指定的數據
    // immediate true 默認會先執行一次; deep 深度監視
    const fullName3 = ref('');
    watch(user, ({firstName,lastName})=>{
      fullName3.value = firstName+'_'+lastName;
    },{immediate:true,deep:true});
    
    // watchEffect，不需要配置immediate，本身默認監視(執行一次)
    // watchEffect(()=>{
    //   fullName3.value = user.firstName+'_'+user.lastName;
    // })

    // 監視fullName3，改變firstName和lastName
    watchEffect(()=>{
      const names = fullName3.value.split('_');
      user.firstName=names[0];
      user.lastName=names[1];
    })

    // watch 可以監視多個數據
    // watch([user.firstName, user.lastName, fullName3],()=>{
    //   // user.firstName, user.lastName => 非響應式
    //   // fullName3 => 響應式 (會去偵測)
    //   console.log('====')
    // })
    // 當我們使用watch監視非響應式的數據時
    watch([()=>user.firstName, ()=>user.lastName, fullName3],()=>{
      // user.firstName, user.lastName => 非響應式
      // fullName3 => 響應式 (會去偵測)
      console.log('====')
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  },
})
</script>

<style>

</style>