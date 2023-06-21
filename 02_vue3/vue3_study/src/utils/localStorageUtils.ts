import { Todo } from '../types/todo';
// 保存數據到瀏覽器的緩存中
export function saveTodoList(todoList:Todo []){
	localStorage.setItem('todo_key', JSON.stringify(todoList));
}

// 存瀏覽器讀的緩存中取數據
export function readTodoList(){
	return JSON.parse(localStorage.getItem('todo_key') || '[]')
}