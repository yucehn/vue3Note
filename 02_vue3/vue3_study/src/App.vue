<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo" />
        <List :todoList="todoList" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
        <Footer :todoList="todoList" :selectAll="selectAll" :clearAllCompeteTodo=clearAllCompeteTodo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted } from 'vue';
// 引入直接的子及組件
import Header from './component/Header.vue';
import List from './component/List.vue';
import Footer from './component/Footer.vue';
import { saveTodoList, readTodoList } from './utils/localStorageUtils';

// 引入type接口
import { Todo } from './types/todo';

export default defineComponent ({
  name: 'APP',
  // 註冊組件
  components:{ Header, List, Footer },
  // 數據應該用數組還儲存，數組中每個數據都是一個對象，對象中應該有三個屬性(id,title,isCompleted)
  // 把數組暫且定義在App.vue父級組件
  setup(){
    // const state = reactive<{todoList:Todo[]}>({
    //   todoList: [
    //     { id:1, title:'BMW', isCompleted: false },
    //     { id:2, title:'MV', isCompleted: true },
    //     { id:3, title:'KTM', isCompleted: false }
    //   ]
    // });

    const state = reactive<{todoList:Todo[]}>({
      todoList: []
    });
    // 當介面加載完畢後，在讀取數據
    onMounted(()=>{
      // setTimeout(()=>{
      //   state.todoList = readTodoList()
      // },1000)
      state.todoList = readTodoList()
    })

    // 添加數據方法
    const addTodo = (todo:Todo)=>{
      state.todoList.unshift(todo);
    };
    // 刪除數據的方法
    const deleteTodo = (index:number) => {
      state.todoList.splice(index,1);
    };
    // 修改todo的isCompleted屬性的狀態
		const updateTodo = (todo:Todo,isCompleted:boolean)=>{
			todo.isCompleted = isCompleted;
      console.log(todo,isCompleted)
		};
    // 全選or全部選的方法
    const selectAll = (isCompleted:boolean)=>{
      state.todoList.forEach(todo =>{
        // 遍歷數組
        todo.isCompleted = isCompleted;
      });
    };
    // 清理所有選中的數據
    const clearAllCompeteTodo = ()=>{
      state.todoList = state.todoList.filter(todo=> !todo.isCompleted)
    }
    // 監視操作:如果todoList數據發生變化，直接存到瀏覽器的緩存中
    // watch(() => state.todoList, (value) => {
    //   // 保存到瀏覽器中
    //   saveZTodoList(value);
    // }, { deep: true})

    watch(() => state.todoList,  saveTodoList, { deep: true})
    
    return {
      addTodo,
      deleteTodo,
      updateTodo,
      selectAll,
      clearAllCompeteTodo,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
.todo-container {
  display: flex;
  justify-content: center;
}
.todo-wrap {
  min-width: 360px;
  padding: 10px;
  border: 1px solid #d6d6d6;
}
</style>