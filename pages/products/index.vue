<script setup>
const story = await useAsyncStoryblok('products', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>