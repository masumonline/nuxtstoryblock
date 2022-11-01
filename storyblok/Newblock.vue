<template>
  <div
    v-editable="blok"
    class="py-32 text-6xl text-[#50b0ae] font-bold text-center"
  >
    {{ blok.newblock }}
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>