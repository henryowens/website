<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
const SEO_META = {
  title: 'Henry Owens',
  description: 'Henry Owens is a software engineer with a passion for web development and design. He is a full-stack developer with experience in front-end and back-end technologies.',
  image: 'https://henryowens.dev/og-image.png'
}

const route = useRoute()


useSeoMeta({
  title: SEO_META.title,
  description: SEO_META.description,
  ogTitle: SEO_META.title,
  ogDescription: SEO_META.description,
  ogImage: SEO_META.image,
  ogUrl: () => `https://henryowens.dev/${route.path}`,
  ogType: 'website',
  twitterTitle: SEO_META.title,
  twitterDescription: SEO_META.description,
  twitterImage: SEO_META.image,
})
</script>

<style scoped lang="scss">
.app {
  @apply min-h-screen;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply flex-col;
  @apply gap-10;
  @apply m-auto;
  @apply max-w-[300px];
}
</style>
