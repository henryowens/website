<template>
  <div class="content__container">
    <RandomCharSentance
      sentance="I am a website developer with over 6+ experice."
    />

    <RandomCharSentance
      sentance="I enjoy to create user experices people love."
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "INFO",
});
</script>

<style scoped lang="scss">
.content__container {
  @apply flex;
  @apply flex-col;
  @apply gap-6;
  @apply text-blue-500;
}
</style>
