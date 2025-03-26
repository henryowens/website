<template>
  <TableWithFill class="content__container" color="#ef4e28" :config="table" />
</template>

<script setup lang="ts">
definePageMeta({
  title: "Experience",
});

const table = useTable(() => ({
  columns: [
    {
      key: "company",
      label: "Company",
    },
    {
      key: "position",
      label: "Position",
    },
    {
      key: "time_period",
      label: "Time Period",
    },
    {
      key: "location",
      label: "Location",
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
      company: "MatchWornShirt",
      position: "Frontend Developer",
      time_period: "Sep 2023 - Current",
      location: "Amsterdam, NL",
      stack: "Vue.js (Nuxt.js), Tailwind CSS",
      website: "https://matchwornshirt.com",
    },
    {
      company: "Oberon / Atabix",
      position: "Frontend Developer",
      time_period: "May 2023 - Sep 2023",
      location: "Amsterdam, NL",
      stack: "React (Next.js), Vue.js, Tailwind CSS",
      website: "https://atabix.com",
    },
    {
      company: "Fastforward.ai",
      position: "Fullstack Web Developer",
      time_period: "Mar 2019 - Mar 2023",
      location: "Amsterdam, NL",
      stack: "Vue.js, Node.js, MongoDB",
      website: "https://fastforward.ai",
    },
    {
      company: "Interact Software",
      position: ".Net Web Developer",
      time_period: "Aug 2018 - Feb 2019",
      location: "Manchester, UK",
      stack: "C#, Vue.js, SQL",
      website: "https://www.interactsoftware.com",
    },
    {
      company: "Chess Digial",
      position: "Apprentice .Net Developer",
      time_period: "Aug 2017 - Aug 2018",
      location: "Manchester, UK",
      stack: "C#, VB.Net, SQL, HTML, CSS, JavaScript",
      website: "https://chessict.co.uk",
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
