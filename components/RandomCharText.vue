<template>
  <component :is="is" :key="processedText">
    <span
      v-for="(word, wordIndex) in processedText.split(' ')"
      class="whitespace-nowrap"
      :key="wordIndex"
    >
      <span
        v-for="(char, charIndex) in word.split('')"
        :key="charIndex"
        class="w-4 inline-flex justify-center items-end"
      >
        {{ char }}
      </span>
      <span class="w-4 inline-flex justify-center items-end">
        {{ " " }}
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
import { useTimeout, useInterval } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    text: string;
    is?: string;
  }>(),
  {
    is: "p",
  }
);

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456879!@#$%^&*()";

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

const getProcessedText = () => {
  return props.text
    .split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      }

      const randomChar = getRandomChar();
      if (char === char.toLowerCase()) return randomChar.toLowerCase();

      return randomChar;
    })
    .join("");
};

const processedText = ref(props.text);

const { pause: pauseInterval } = useInterval(100, {
  callback: () => {
    processedText.value = getProcessedText();
  },
  controls: true,
  immediate: true,
});

useTimeout(1000, {
  callback: () => {
    pauseInterval();
    let textLength = props.text.length;
    let count = 0;

    const interval = setInterval(() => {
      const original = props.text.substring(0, count);
      const random = getProcessedText().substring(count, textLength);
      processedText.value = original + random;
      if (count === textLength) {
        clearInterval(interval);
      }
      count++;
    }, 100);
  },
  immediate: true,
});
</script>
