<script setup>
const route = useRoute();
const story = await useAsyncStoryblok('service', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>