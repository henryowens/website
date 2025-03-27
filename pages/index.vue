<template>
  <div class="home__page">
    <NuxtLink
      v-for="({ name, url }, projectIndex) in projects"
      :key="projectIndex"
      class="home__page--link"
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

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style scoped lang="scss">
.home__page {
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
