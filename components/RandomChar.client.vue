<template>
  <div
    class="random__char"
    :style="{
      width: width ? `${width}px` : lowercase ? '12px' : '15px',
    }"
  >
    {{ displayChar }}
  </div>
</template>

<script setup lang="ts">
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const props = withDefaults(
  defineProps<{
    delay: number;
    char: string;
    lowercase?: boolean;
    width?: string;
  }>(),
  {
    delay: 1000,
  }
);

const displayChar = computed(() => {
  return props.lowercase ? charToShow.value.toLowerCase() : charToShow.value;
});

const charToShow = computed(() => {
  return isLoaded.value ? props.char : activeChar.value;
});

const randomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
};
const activeChar = ref(randomChar());

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, props.delay);
});

const charInterval = setInterval(() => {
  activeChar.value = randomChar();
}, 100);

onUnmounted(() => clearInterval(charInterval));
</script>

<style lang="scss" scorped>
.random__char {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
