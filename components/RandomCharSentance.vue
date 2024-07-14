<template>
  <div class="sentance__container">
    <RandomCharWord v-for="(word, i) in words" :key="i" :word="word" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sentance: string;
}>();

const words = computed(() => props.sentance.split(" "));
</script>

<style scoped lang="scss">
.sentance__container {
  @apply flex;
  @apply items-center;
  @apply flex-wrap;
  @apply gap-x-3;
  @apply gap-y-1;
}
</style>
