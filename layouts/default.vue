<template>
  <div class="default__layout">
    <header class="default__layout--header">
      <div class="default__layout--header--left">
        <NuxtLink
          to="/"
          aria-label="Link to Home page"
          class="default__layout--header--left--link"
        >
          <RandomCharText text="Henry Owens" />
        </NuxtLink>
      </div>
      <div class="default__layout--header--right">
        <NuxtLink
          v-for="({ icon, url, label }, i) in socials"
          class="default__layout--header--right--link"
          :key="i"
          :to="url"
          :aria-label="label"
          target="_blank"
        >
          <Icon :name="icon" size="24" />
        </NuxtLink>
        <span class="default__layout--header--right--clock">
          |
          <Clock :server-timestamp="Date.now()" />
        </span>
      </div>
    </header>

    <RandomCharText
      :text="title ?? ''"
      :key="title"
      class="default__layout--page__title"
    />

    <div class="default__layout--page__container">
      <slot />
    </div>

    <footer class="default__layout--footer">
      <nav>
        <ul>
          <li
            v-for="({ url, label, ariaLabel }, linkIndex) in links"
            :key="linkIndex"
            class="default__layout--footer--link"
          >
            <NuxtLink :to="url" :aria-label="ariaLabel">
              <RandomCharText
                is="span"
                size="sm"
                class="nav-link"
                :text="label"
              />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
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
.router-link-active {
  @apply opacity-100 transition-all;
}

.default__layout {
  @apply max-h-dvh;
  @apply flex flex-col;
  @apply items-center;
  @apply gap-0;
  @apply items-center justify-center;
  @apply flex-1;

  &--header {
    @apply fixed top-0 left-0 w-full px-4;
    @apply flex justify-between;
    @apply items-center;
    @apply gap-2;

    &--left {
      &--link {
        @apply flex opacity-50 hover:opacity-100 py-4;
        @apply transition-all;
      }
      .router-link-active {
        @apply opacity-100;
      }
    }
    &--right {
      @apply flex items-center;
      @apply gap-2;
      @apply text-lg;

      &--link {
        @apply items-center py-4 flex h-fit;

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

      &--clock {
        @apply text-sm;
      }
    }
  }

  &--page__title {
    @apply mt-14 mb-4 h-5;
  }

  &--page__container {
    @apply flex-1 min-h-[225px] flex justify-center items-center w-full;
  }

  &--footer {
    @apply w-full;
    > nav > ul {
      @apply flex;
      > li {
        @apply flex-1;
        > a > span {
          @apply justify-center;
          :deep(.char__sm) {
            @apply md:text-base;
          }
        }
      }
    }
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
}
</style>
