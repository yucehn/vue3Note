<template>
	<li 
		v-if="todo" 
		@mouseenter="mouseHandler(true)" 
		@mouseleave="mouseHandler(false)"
		:style="{backgroundColor:bgColor,color:myColor}"
	>
		<label>
			<input type="checkbox" v-model="isCompleted"/>
			<span>{{ todo.title }}</span>
		</label>
		<el-button type="danger" v-show="isShow" @click="delTodo">刪除</el-button>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent,ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
// 引入type接口
import { Todo } from '../types/todo';

export default defineComponent ({
	name: 'Item',
	props: {
		todo: {
			type: Object as ()=> Todo,// 函數返回的是Todo類型
			require: true,
		},
		index:{
			type: Number,
			require: true,
		},
		deleteTodo: {
			type: Function,
			require: true,
		},
		updateTodo:{
			type: Function,
			require: true,
		}
	},
	setup(props){
		const bgColor = ref('white');
		const myColor = ref('black');
		const isShow = ref(false);

		// 滑鼠進入漢離開事件的回掉函數
		const mouseHandler =(flag:boolean)=>{
			if(flag){
				// 滑鼠進入
				bgColor.value='pink';
				myColor.value='blue';
				isShow.value = true;
			} else {
				// 滑鼠離開
				bgColor.value='white';
				myColor.value='black';
				isShow.value = false;
			}
		}
		// 刪除數據方法
		const delTodo = (index:number)=>{
			// 提示
			ElMessageBox.confirm('確定要刪除嗎?', 'Warning', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				type: 'warning',
			}).then(() => {
				props.deleteTodo?props.deleteTodo(props.index):'';
					// ElMessage({
					// 	type: 'success',
					// 	message: 'Delete completed',
					// })
				})
				.catch(() => {
					// ElMessage({
					// 	type: 'info',
					// 	message: 'Delete canceled',
					// 	})
				})
		}
		// 處算屬性的方式--讓複選框勾選/不選
		const isCompleted = computed({
			get(){
				return props.todo?.isCompleted;
			},
			set(val){
				// todo 對象中的isCompleted
				console.log(val)
				props.updateTodo?props.updateTodo(props.todo, val):'';
			}
		});

		return {
			mouseHandler,
			bgColor,
			myColor,
			isShow,
			delTodo,
			isCompleted
		}
	}
})
</script>

<style scoped>
li {
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	line-height: 32px;
}
</style>