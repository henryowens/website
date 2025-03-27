<template>
  <div class="info__page">
    <RandomCharText
      text="I am a website developer with over 7 years experience."
      class="justify-center"
    />

    <RandomCharText
      text="I enjoy to create user experiences people love."
      class="justify-center"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Info",
});
</script>

<style scoped lang="scss">
.info__page {
  @apply flex flex-col;
  @apply gap-6;
  @apply w-full;
  @apply mx-4;
  @apply text-blue-500;
}
</style>
