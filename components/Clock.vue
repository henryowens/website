<template>
  <ClientOnly>
    <span>
      {{ checkPrefixWithZero(timenow.getUTCHours()) }}<span>:</span
      >{{ checkPrefixWithZero(timenow.getUTCMinutes()) }}<span>:</span
      >{{ checkPrefixWithZero(timenow.getUTCSeconds()) }}
    </span>

    <template #fallback>
      <span>00:00:00</span>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const timenow = ref(new Date());

const checkPrefixWithZero = (value: number) =>
  value.toString().length < 2 ? `0${value}` : value;

const interval = useInterval(1000, {
  callback: async () => {
    setTimeout(() => {
      timenow.value = new Date();
    }, 1000);
  },
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>
