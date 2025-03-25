<template>
  <div class="content__container">
    <RandomCharText text="I am a website developer with over 7 years experience." letter-width="11" />

    <RandomCharText text="I enjoy to create user experiences people love." letter-width="11" />
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
}
</style>

<style lang="scss">
.sentance__container {
  @apply justify-center;
}
</style>
