<template>
	<div class="todo-footer">
		<div>
			<label>
				<input type="checkbox" v-model="idCheckAll">
			</label>
			<span>已完成 {{ count }}</span>/
			<span>全部 {{todoList?.length}}</span>
		</div>
		<div>
			<el-button type="danger" @click="clearAllCompeteTodo">清除已完成任務</el-button>
		</div>
	</div>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';
// 引入type接口
import { Todo } from '../types/todo';

export default defineComponent ({
	name: 'Footer',
	props: {
		todoList: {
			type: Array as () => Todo [],
			require: true,
		},
		selectAll: {
			type: Function,
			require: true,
		},
		clearAllCompeteTodo: {
			type: Function,
			require: true,
		}
	},
	setup(props){
		const count = computed(()=>{
			return props.todoList?.reduce((pre,todo,_)=> pre+(todo.isCompleted?1:0), 0) || 0;
		});
		// 全選/全部選的屬性計算
		const idCheckAll = computed({
			get(){
				return count.value > 0 && props.todoList?.length === count.value;
			},
			set(val){
				props.selectAll?props.selectAll(val):'';
			}
		});

		return {
			count,
			idCheckAll
		}
	}
})
</script>

<style scoped>
.todo-footer {
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	line-height: 32px;
	border-top:1px solid #d6d6d6;
}
</style>