<template>
  <div class="default__layout">
    <div class="default__layout--nav__bar">
      <div class="default__layout--nav__bar--left">
        <NuxtLink
          to="/"
          aria-label="Link to Home page"
          class="opacity-50 hover:opacity-100 transition-all"
        >
          <RandomCharText text="Henry Owens" />
        </NuxtLink>
      </div>
      <div class="default__layout--nav__bar--right gap-2">
        <NuxtLink
          v-for="({ icon, url, label }, i) in socials"
          class="flex items-center"
          :key="i"
          :to="url"
          :aria-label="label"
          target="_blank"
        >
          <Icon :name="icon" size="24" />
        </NuxtLink>
        <span class="text-sm">
          |
          <Clock />
        </span>
      </div>
    </div>

    <RandomCharText :text="title ?? ''" :key="title" class="mt-14 mb-4 h-5" />

    <div class="flex-1 min-h-[225px] flex justify-center items-center w-full">
      <slot />
    </div>

    <div class="sublinks__container">
      <NuxtLink
        v-for="({ url, label, ariaLabel }, i) in links"
        :key="i"
        class="sublinks__container--link"
        :to="url"
        :aria-label="ariaLabel"
      >
        <RandomCharText size="sm" class="nav-link" :text="label" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import socials from "~/content/socials";

const route = useRoute();

const title = computed(() => route.meta.title?.toString() ?? "");

const links = [
  { url: "/", label: "home", ariaLabel: "Link to Home page" },
  {
    url: "/projects",
    label: "projects",
    ariaLabel: "Link to My Projects page",
  },
  {
    url: "/experience",
    label: "experience",
    ariaLabel: "Link to My Experience page",
  },
  { url: "/info", label: "info", ariaLabel: "Link to Info page" },
];
</script>

<style scoped lang="scss">
.sublinks__container {
  @apply flex justify-evenly w-full;

  &--link {
    @apply cursor-pointer;
    @apply opacity-50;
    @apply transition-all;
    @apply text-[10px] sm:text-xs;
    @apply py-3;
    @apply flex-1;
    @apply text-center;
    @apply border;

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
  @apply max-h-dvh;
  @apply flex flex-col;
  @apply items-center;
  @apply gap-0;
  @apply items-center justify-center;
  @apply flex-1;

  &--nav__bar {
    @apply fixed top-0 left-0 w-full px-4;
    @apply flex justify-between;
    @apply items-center;
    @apply gap-2;

    &--right {
      @apply flex items-center;
      @apply text-lg;

      > a {
        @apply py-4  flex h-fit;

        &:hover {
          .iconify {
            @apply transition-all;
            @apply opacity-100;
          }
        }
      }

      .iconify {
        @apply opacity-50;
        @apply transition-all;
      }
    }
  }
}

.nav-link {
  @apply justify-center;
  :deep(.char__sm) {
    @apply md:text-base;
  }
}
</style>
