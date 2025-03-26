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
  console.log(availibleContentHeight.value);
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
  <div
    ref="contentContainer"
    class="relative h-full"
    :class="$attrs.class"
    :style="{ '--table-color': color }"
  >
    <div>
      <BaseTable :color="color" class="w-full" :config="tableConfig" />

      <div
        class="mocktable absolute -z-30 top-0 left-0 w-full h-full border-l-[33px] overflow-hidden"
      >
        <div class="sidebar w-full h-[32.5px]"></div>
        <div class="bg-[#e5e6e6] w-full h-full"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mocktable {
  border-color: var(--table-color);
  .sidebar {
    background: var(--table-color);
  }
}
</style>
