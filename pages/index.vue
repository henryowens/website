<template>
  <p class="links__container">
    <NuxtLink
      class="links__container--link"
      to="https://wensowenso.com"
      target="_blank"
    >
      <RandomCharWord word="wensowenso.com" lowercase />
    </NuxtLink>
    <NuxtLink
      class="links__container--link"
      to="https://dontwalkbutrun.com"
      target="_blank"
    >
      <RandomCharWord word="dontwalkbutrun.com" lowercase />
    </NuxtLink>
  </p>
</template>

<script setup lang="ts">
definePageMeta({
  title: "HENRY OWENS",
});
</script>

<style scoped lang="scss">
.links__container {
  @apply flex flex-col;
  @apply items-center;
  @apply gap-5;
  @apply text-red-500;
  &--link {
    @apply w-fit;
    @apply cursor-pointer;
    @apply relative;
    &:before {
      content: "";
      @apply absolute;
      @apply inset-x-0;
      @apply bottom-0;
      @apply bg-red-500;
      @apply h-0.5;
      @apply w-0;
      @apply transition-all;
      @apply duration-300;
    }
    &:hover:before {
      @apply w-full;
    }

    &:after {
      // make content animate to an arrow from the bottom to signify external link
      content: "→";
      @apply absolute;
      @apply right-full;
      @apply text-transparent;
      @apply bottom-0;
      @apply transform translate-x-40;
      @apply transition-all;
      @apply duration-300;
      @apply delay-300;
      @apply -rotate-45;
      @apply right-0;
    }
    &:hover:after {
      @apply text-red-500;
      @apply w-fit;
    }
  }
}
</style>
