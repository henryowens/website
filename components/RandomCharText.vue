<template>
  <component :is="is" :key="processedText" class="flex flex-wrap gap-[10px]">
    <span
      v-for="(word, wordIndex) in processedText.split(' ')"
      class="whitespace-nowrap"
      :key="wordIndex"
    >
      <span
        v-for="(char, charIndex) in word.split('')"
        :key="charIndex"
        :class="`char__${size}`"
      >
        {{ char }}
      </span>
      <span :class="`char__${size}`">
        {{ " " }}
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
import { useTimeout, useInterval } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
    text: string;
    is?: string;
    time?: number;
  }>(),
  {
    is: "p",
    size: "md",
    time: 1000,
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

const intervalTime = computed(() => props.time / 10);

const { pause: pauseInterval } = useInterval(intervalTime, {
  callback: () => {
    processedText.value = getProcessedText();
  },
  controls: true,
  immediate: true,
});

useTimeout(props.time, {
  callback: () => {
    pauseInterval();

    const countLength = props.time / intervalTime.value;
    let count = 0;
    const wordSplitInterval = setInterval(() => {
      const words = props.text.split(" ");
      const newWords = words.map((word) => {
        const step = Math.ceil(word.length / countLength);
        const original = word.substring(0, step * count);

        if (original === word) {
          return original;
        }

        const random = getProcessedText().substring(step * count, word.length);
        return original + random;
      });
      processedText.value = newWords.join(" ");

      if (count === countLength - 1) {
        processedText.value = props.text;
        clearInterval(wordSplitInterval);
      }
      count++;
    }, intervalTime.value);
  },
  immediate: true,
});
</script>

<style lang="scss" scoped>
.char {
  &__sm {
    // @apply inline-flex justify-center items-end;
    // @apply w-3;
    @apply text-xs;
  }
  &__md {
    // @apply inline-flex justify-center items-end;
    // @apply w-4;
    @apply text-base;
  }
  &__lg {
    @apply inline-flex justify-center items-end;
    @apply text-lg;
  }
}
</style>
