<template>
  <div class="max-w-[250px] gap-4 w-full max-h-[350px] h-full flex flex-col items-center justify-center">
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
const route = useRoute();

const title = computed(() => route.meta.title?.toString() ?? '');
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
</style>
