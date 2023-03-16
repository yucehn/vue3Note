<template>
    <h3 :style="{ color: activeColor.color }">GrandSon的子集組件 {{activeColor}}</h3>
</template>

<script lang="ts">
import { defineComponent, inject, CSSProperties,ref  } from 'vue'

export default defineComponent({
    setup() {
        // 注入操作
        const activeColor = ref<CSSProperties>({});
            activeColor.value.color = inject('color');
        return {
            activeColor,
        }
    },
})
</script>
