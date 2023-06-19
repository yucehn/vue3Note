
<template>
  <h2>Teleport</h2>
 
  <hr/>
  <ModalButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalButton from './ModalButton.vue';

export default defineComponent ({
  name: 'APP',
  components:{ModalButton},
  setup(){ }
})
</script>