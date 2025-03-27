<template>
  <div class="projects__page">
    <TableWithFill color="#57b13c" :config="table" />
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
.projects__page {
  @apply flex;
  @apply w-full h-full;
}
</style>
