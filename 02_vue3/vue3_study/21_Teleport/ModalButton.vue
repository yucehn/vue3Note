<template>
	<button @click="modalOpen=true">open</button>
	<!-- 長在app裡面 -->
	<!-- <div v-if="modalOpen"  class="modal">
		<div>
			對話框顯示 A
			<button @click="modalOpen=false">close</button>
		</div>
	</div> -->

	<!-- 長在app外面 -->
	<teleport to="body">
		<div v-if="modalOpen"  class="modal">
			<div>
				對話框顯示 B
				<button @click="modalOpen=false">close</button>
			</div>
		</div>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  setup(){
	const modalOpen = ref(false);
		return {
			modalOpen
		}
   }
})
</script>

<style>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>