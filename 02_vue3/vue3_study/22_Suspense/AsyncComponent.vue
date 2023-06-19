<template>
	<h3>AsyncComponent子級組建</h3>
	msg: {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve({
					msg:'resolve'
				})
			},2000)
		})
	},
})
</script>
