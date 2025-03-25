<template>
  <div class="links__container">
    <NuxtLink
      v-for="({ name, url }, i) in projects"
      :key="i"
      class="links__container--link"
      :to="url"
      target="_blank"
      :aria-label="name"
    >
      <RandomCharText :text="name.toLocaleLowerCase()" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import projects from "~/content/projects";

definePageMeta({
  title: "Henry Owens",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style scoped lang="scss">
.links__container {
  @apply flex flex-col;
  @apply items-center;
  @apply gap-5;

  &--link {
    @apply w-fit;
    @apply cursor-pointer;
    @apply text-red-500;
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
  }
}
</style>

<style lang="scss" scoped>
.random__char__word {
  &::after {
    content: "→";
    position: absolute;
    right: -20px;
    transform: rotate(-45deg);
    @apply text-transparent;
    @apply transition-all;
    @apply delay-300;
  }

  &:hover::after {
    @apply text-red-500;
    @apply transition-all;
  }
}
</style>
