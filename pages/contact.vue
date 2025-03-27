<template>
  <div class="contact__page">
    <RandomCharText text="coming soon" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Contact",
});
</script>

<style scoped lang="scss">
.contact__page {
  @apply flex flex-col;
  @apply text-green-500;
}
</style>
