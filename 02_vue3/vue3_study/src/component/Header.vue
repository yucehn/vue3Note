<template>
	<div>
		<el-input
		    v-model="title"
			type="text"
			placeholder="請輸入你的任務名稱，按下enter確認"
			@keydown.enter="add"
		/>
	</div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent ({
	name: 'Header',
	props: {
		addTodo: {
			type: Function,
			required: true, // 必須
		}
	},
	setup(props){
		// 定義一個ref類型的數據
		const title = ref('');
		// enter事件的回掉函數，用來添加數據
		const add = () => {
			// 獲取文本框中輸入數據，判斷不為空
			const text = title.value;
			if(!text.trim()) return;
			// 此時有數據，創建一個todo對象
			const todo = {
				id: Date.now(),
				title: text,
				isCompleted: false,
			};
			// 調用方法addTodo的方法
			props.addTodo(todo);
			// 清空文本框
			title.value = '';
		}

		return {
			add,
			title
		}
	}
})
</script>

<style scoped>
</style>