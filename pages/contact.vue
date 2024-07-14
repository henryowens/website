<template>
  <div class="content__container">
    <RandomCharSentance sentance="coming soon" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "CONTACT",
});
</script>

<style scoped lang="scss">
.content__container {
  @apply flex;
  @apply flex-col;
  @apply gap-6;
  @apply text-green-500;
}
</style>
