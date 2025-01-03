<template>
  <div class="default__layout">
    <div class="default__layout--nav__bar">
      <div class="default__layout--nav__bar--left">
        <NuxtLink v-for="({ icon, url, label }, i) in socials" :key="i" :to="url" :aria-label="label" target="_blank">
          <Icon :name="icon" size="24" />
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
      <NuxtLink class="sublinks__container--link" to="/" aria-label="Link to Home page">
        <RandomCharWord word="home" lowercase />
      </NuxtLink>

      <NuxtLink class="sublinks__container--link" to="/info" aria-label="Link to Info page">
        <RandomCharWord word="info" lowercase />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import socials from "~/content/socials";

const route = useRoute();

const title = computed(() => route.meta.title?.toString() ?? "");

useSchemaOrg([
  definePerson({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Henry Owens",
    "url": "https://henryowens.dev",
    "sameAs": [
      "https://github.com/henryowens",
      "https://linkedin.com/in/henrytomowens"
    ],
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "MatchWornShirt",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressRegion": "North Holland",
      "addressCountry": "Netherlands",
    }
  })
])
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
    @apply fixed top-0 left-0 w-full px-4;
    @apply flex justify-between;
    @apply items-center;
    @apply gap-2;

    &--left {
      @apply flex items-center;
      @apply cursor-pointer;
      @apply text-lg;

      >a {
        @apply py-4 px-2 flex h-fit;

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
</style>
