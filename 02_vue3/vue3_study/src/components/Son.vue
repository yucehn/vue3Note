<template>
    <h3>Son子集組件</h3>
    <hr/>
    <GrandSon/>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import GrandSon from './GrandSon.vue'
export default defineComponent({
    components:{GrandSon},
    setup() {
        // 注入操作
        const color = inject('color')
        return {
            color,
        }
    },
})
</script>
