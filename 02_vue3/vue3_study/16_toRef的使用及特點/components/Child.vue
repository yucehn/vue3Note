<template>
    <h2>child子組件</h2>
    <h3>age: {{ age }}</h3>
    <h3>length:{{length}}</h3>
</template>

<script lang="ts">
import { computed, defineComponent,Ref, toRef } from 'vue'
function useGetLength(age:Ref){
    return computed(()=>{
        return age.value.toString().length;
    })
}
export default defineComponent({
    props:{
        age: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const length = useGetLength(toRef(props, 'age'))
        return {
            length,
        }
    },
});
</script>
