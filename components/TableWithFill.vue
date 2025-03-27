<script setup lang="ts" generic="D extends Record<string, any>">
const { config, color = "#000" } = defineProps<{
  config: ReturnType<typeof useTable<D>>;
  color?: string;
}>();

const contentContainer = useTemplateRef("contentContainer");
const { height: availibleContentHeight } = useElementSize(contentContainer);

const dataRowsLength = computed(() => toValue(config).data.length);
const rowHeight = 41;
const rowHeadHeight = 32;

const dataRowHeight = computed(() => dataRowsLength.value * rowHeight);
const tableHeight = computed(() => dataRowHeight.value + rowHeadHeight);

const remainingContentSpace = ref(0);

onMounted(() => {
  remainingContentSpace.value =
    availibleContentHeight.value - tableHeight.value;
});

const dummyRows = computed(() =>
  Math.floor(remainingContentSpace.value / rowHeight)
);

const tableConfig = computed(() => ({
  ...toValue(config),
  columns: toValue(config).columns,
  data: [
    ...toValue(config).data,
    ...Array.from(
      { length: import.meta.server ? 25 : dummyRows.value },
      () => ({})
    ),
  ],
}));
</script>

<template>
  <ClientOnly>
    <div
      ref="contentContainer"
      class="flex overflow-y-scroll"
      :class="$attrs.class"
    >
      <BaseTable :color="color" class="w-full" :config="tableConfig" />
    </div>
    <template #fallback>
      <div
        ref="contentContainer"
        class="flex overflow-y-hidden"
        :class="$attrs.class"
      >
        <BaseTable :color="color" class="w-full" :config="tableConfig" />
      </div>
    </template>
  </ClientOnly>
</template>

<style scoped lang="scss">
.content__container {
  @apply flex;
  @apply flex-col;
  @apply gap-6;
  @apply w-full h-full;
  @apply overflow-x-scroll;
}
</style>
