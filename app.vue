<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import meta from "~/content/meta";

const route = useRoute();

useSeoMeta({
  title: meta.title,
  description: meta.description,
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.image,
  ogUrl: () => `https://henryowens.dev/${route.path}`,
  ogType: "website",
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.image,
});
</script>

<style scoped lang="scss">
.app {
  @apply flex flex-col flex-1 h-dvh;
  width: 100%;
}
</style>
