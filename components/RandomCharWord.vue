<template>
  <p
    :style="{
      textDecoration: lowercase ? 'lowercase' : 'uppercase',
    }"
  >
    <RandomChar
      v-for="(char, index) in splitWord"
      :key="index"
      :delay="props.initalDelay + index * props.increment"
      :char="char"
      :lowercase="props.lowercase"
    />
  </p>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    word: string;
    initalDelay?: number;
    increment?: number;
    lowercase?: boolean;
  }>(),
  {
    initalDelay: 1000,
    increment: 100,
  }
);

const splitWord = computed(() => props.word.split(""));
</script>

<style scoped lang="scss">
p {
  @apply flex;
  @apply items-center;
  @apply relative;
}
</style>
