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
    ...Array.from({ length: dummyRows.value }, () => ({})),
  ],
}));
</script>

<template>
  <div class="relative flex w-full">
    <div
      ref="contentContainer"
      class="flex overflow-y-scroll content__container"
      :class="$attrs.class"
    >
      <BaseTable :color="color" class="w-full" :config="tableConfig" />
    </div>

    <div
      class="flex overflow-y-hidden content__container absolute top-0 left-0 -z-10"
      :class="$attrs.class"
    >
      <BaseTable
        :color="color"
        class="w-full"
        :config="{
          columns: toValue(config).columns,
          data: [
            ...toValue(config).data,
            ...Array.from(
              { length: 50 - toValue(config).data.length },
              () => ({})
            ),
          ],
        }"
      />
    </div>
  </div>
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
