<template>
  <span>
    {{ checkPrefixWithZero(timenow.getUTCHours()) }}<span>:</span
    >{{ checkPrefixWithZero(timenow.getUTCMinutes())
    }}<span class="clock-bar">:</span
    >{{ checkPrefixWithZero(timenow.getUTCSeconds()) }}
  </span>
</template>

<script setup lang="ts">
const timenow = ref(new Date());

const checkPrefixWithZero = (value: number) =>
  value.toString().length < 2 ? `0${value}` : value;

const interval = useInterval(1000, {
  callback: () => {
    timenow.value = new Date();
  },
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>
