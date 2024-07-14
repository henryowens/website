<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

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
