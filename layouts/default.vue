<template>
  <div class="default__layout">
    <div class="default__layout--nav__bar">
      <div class="default__layout--nav__bar--left">
        <NuxtLink
          v-for="({ icon, url }, i) in socials"
          :key="i"
          :to="url"
          target="_blank"
        >
          <Icon :name="icon" />
        </NuxtLink>
      </div>
      <div>
        <!-- <Icon name="icon-park-outline:sun-one" color="black" /> -->
      </div>
    </div>
    <RandomCharSentance :sentance="title" :key="title" />

    <div class="min-h-[225px] flex justify-center items-center">
      <slot />
    </div>

    <div class="sublinks__container">
      <NuxtLink class="sublinks__container--link" to="/">
        <RandomCharWord word="home" lowercase />
      </NuxtLink>

      <NuxtLink class="sublinks__container--link" to="/info">
        <RandomCharWord word="info" lowercase />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import socials from "~/content/socials";

const route = useRoute();

const title = computed(() => route.meta.title?.toString() ?? "");
</script>

<style scoped lang="scss">
.sublinks__container {
  @apply flex justify-evenly w-full;

  &--link {
    @apply cursor-pointer;
    @apply opacity-50;
    @apply transition-all;
    @apply text-xs;

    &:hover {
      @apply transition-all;
      @apply opacity-100;
    }
  }
}

.router-link-active {
  @apply opacity-100;
}

.default__layout {
  @apply flex flex-col;
  @apply items-center;
  @apply gap-5;
  @apply items-center justify-center;

  &--nav__bar {
    @apply fixed top-0 left-0 w-full p-4;
    @apply flex justify-between;
    @apply items-center;
    @apply gap-2;
    &--left {
      @apply flex items-center gap-1;
      @apply cursor-pointer;
      @apply text-lg;

      .iconify {
        @apply opacity-50;
        @apply transition-all;
        &:hover {
          @apply transition-all;
          @apply opacity-100;
        }
      }
    }
  }
}
</style>
