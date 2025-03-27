<template>
  <div class="flex w-full h-full">
    <TableWithFill color="#57b13c" class="content__container" :config="table" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Projects",
});

const table = useTable(() => ({
  columns: [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "duration",
      label: "Duration",
    },
    {
      key: "stack",
      label: "Stack",
    },
    {
      key: "links",
      label: "",
    },
  ],
  data: [
    {
      name: "EU Coin Collector",
      duration: "Sep 2023 - Current",
      stack: "Vue.js (Nuxt.js), Tailwind CSS",
    },
    {
      name: "Wensowenso.com",
      duration: "Sep 2023 - Current",
      stack: "Vue.js (Nuxt.js), Tailwind CSS",
    },
  ],
}));
</script>

<style scoped lang="scss">
.content__container {
  @apply flex;
  @apply flex-col;
  @apply gap-6;
  @apply w-full h-full;
  @apply overflow-x-scroll;
}
</style>
