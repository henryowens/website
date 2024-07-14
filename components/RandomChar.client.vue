<template>
  <div
    :style="{
      width: lowercase ? '12px' : '15px',
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

<style scoped>
div {
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
