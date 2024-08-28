<template>
  <p class="links__container">
    <NuxtLink
      v-if="links"
      v-for="({ name, link }, i) in links"
      :key="i"
      class="links__container--link"
      :to="link"
      target="_blank"
    >
      <RandomCharWord :word="name" lowercase />
    </NuxtLink>
  </p>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import projects from "~/content/projects";
import queries from "~/queries";

const { data } = useQuery({
  ...queries.storyblok.story("", {}),
  staleTime: Infinity,
  retry: false,
  placeholderData: (previous) => previous,
});

const links = computed(() => data.value?.content?.body);

definePageMeta({
  title: "HENRY OWENS",
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
