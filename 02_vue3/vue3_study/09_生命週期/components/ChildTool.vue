<template>
    <h2>子級組建</h2>
    <button @click="update">update</button>
    msg:{{msg}}
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted,onBeforeUpdate, onUpdated,onBeforeUnmount, onUnmounted } from 'vue'

export default defineComponent({
    setup() {
        console.log('setup child 3.0')
        const msg = ref('msg');
        const update = ()=>{
            msg.value += '---'
        };


        onBeforeMount(()=>{
            console.log('3.0 onBeforeMount')
        })
        onMounted(()=>{
            console.log('3.0 onMounted')
        })
        
        onBeforeUpdate(()=>{
            console.log('3.0 onBeforeUpdate')
        })
        onUpdated(()=>{
            console.log('3.0 onUpdated')
        })
        onBeforeUnmount(()=>{
            console.log('3.0 onBeforeUnmount')
        })
        onUnmounted(()=>{
            console.log('3.0 onUnmounted')
        })

        return {
            msg,
            update
        }
    },
    
})
</script>
