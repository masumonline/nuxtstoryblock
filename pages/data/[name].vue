<template>
  <div v-editable="blok" class="px-4">
    <h3>Dynamic Page</h3>
    <StoryblokComponent v-for="blok in blok?.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>
