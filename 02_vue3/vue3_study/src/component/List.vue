<template>
	<ul>
		<Item 
			v-for="(todo,index) in todoList" 
			:key="todo.id" 
			:todo="todo" 
			:deleteTodo="deleteTodo"
			:index="index"
			:updateTodo="updateTodo"
		/>
	</ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Item from './Item.vue';

export default defineComponent ({
	name: 'List',
	components: { Item },
	props:['todoList','deleteTodo','updateTodo'],
	
	setup(){}
})
</script>

<style scoped>
ul {
	padding: 0;
	margin: 0;
}
</style>