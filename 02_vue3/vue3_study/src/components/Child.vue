<template>
    <h2>Child子級組件</h2>
    <h3>msg: {{ msg }}</h3>
    <!-- <h4>count:{{ count }}</h4> -->
    <button @click="emitxxx()">emit事件</button>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent ({
    name: 'Child_',
    props: ['msg'],
    // setup細節問題:

    // setup在beforeCreate之前執行，setup執行時當前組件未建立，
    // 組件實例this不能使用(不能調用data/computed/methods/props 中相關內容)
    // 其實所有的composition API相關回調函數中也都不可以

    // setup與data函數中返回值都可以在html模板中使用，
    // setup與data函數中的對象中屬性會合併為組件對象屬性
    // setup中的對象方法和methods對象方法會合併為組件方法
    // 在vue3中盡量不要混合使用 setup 和 data，setup方法中不能訪問data和methods
    // setup不能是一個async函數: 因為返回值不再是return的對象, 而是promise, 
    // 模板看不到return對像中的屬性數據

    
    // // 數據初始化的生命週期
    // beforeCreate(){
    //   console.log('beforeCreate 執行了');
    // },
    setup(props, {attrs, emit} ){ // context, slots
      // props參數，是一個對象，裡面有父級組建向子級組件傳遞的數據，
      // 且在子級組件中使用props接收到的所有屬性
      // 包含props配置聲明且傳入了的所有屬性的對象

      // context參數，是一個對象，裡面有attrs對象(獲取當前組件標籤上所有屬性的對象，
      // 包含該屬性是在props中沒有聲明接收)，emit方法(分發事件)，slots對象(插槽)
      // attrs: 包含沒有在props配置中聲明的屬性的對象, 相當於 this.$attrs

      console.log('props',props.msg)
      // console.log('context', context.attrs)
      // console.log('context', context.emit)
      // console.log(context.attrs.msg2)
      console.log(attrs.msg)

      console.log('====================')
      console.log('setup 執行了', this)
      const showMsg = () => {
        console.log('setup中showMsg');
      };

      // emit
      function emitxxx(){
        console.log('emitxxx');
        emit('xxx','++')
      }

      return {
        showMsg,
        emitxxx,
        // setup 一般都是返回一個對象，可在html使用
      }
    },
    // data(){
    //   return {
    //     count: 10,
    //   }
    // },
    // // 介面渲染後的生命中騎回調
    // mounted() {
    //   console.log('mounted', this)
    // },
    // methods: {
    //   showMsg2(){
    //     console.log('methods中showMsg2');
    //   }
    // }
  })
  </script>
  
  <style>
  
  </style>