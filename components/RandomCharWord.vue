<template>
  <div
    :style="{
      textDecoration: lowercase ? 'lowercase' : 'uppercase',
    }"
    class="random__char__word"
  >
    <RandomChar
      v-for="(char, index) in splitWord"
      :key="index"
      :width="letterWidth"
      :delay="initalDelay + index * increment"
      :char="char"
      lowercase
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    word: string;
    initalDelay?: number;
    increment?: number;
    lowercase?: boolean;
    letterWidth?: string;
  }>(),
  {
    initalDelay: 1000,
    increment: 100,
  }
);

const splitWord = computed(() => props.word.split(""));
</script>

<style scoped lang="scss">
.random__char__word {
  @apply flex;
  @apply items-center;
  @apply relative;
}
</style>
