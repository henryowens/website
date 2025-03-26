<template>
  <div class="content__container">
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
.content__container {
  @apply flex;
  @apply flex-col;
  @apply gap-6;
  @apply text-blue-500;
  @apply w-full;
  @apply mx-4;
}
</style>

<style lang="scss">
.sentance__container {
  @apply justify-center;
}
</style>
