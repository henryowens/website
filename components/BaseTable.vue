<script setup lang="ts" generic="D extends Record<string, any>">
const { config, color = "#000" } = defineProps<{
  config: ReturnType<typeof useTable<D>>;
  color?: string;
}>();

const activeRow = ref<number>();

const keys = useMagicKeys();

const isDownPressed = computed(() => keys.current.has("arrowdown"));
const isUpPressed = computed(() => keys.current.has("arrowup"));
const isEspPressed = computed(() => keys.current.has("escape"));

watch(isDownPressed, (isDownPressed) => {
  if (isDownPressed) {
    if (activeRow.value === toValue(config).data.length - 1) {
      activeRow.value = 0;
      return;
    }

    activeRow.value = (activeRow.value ?? -1) + 1;
  }
});

watch(isUpPressed, (isUpPressed) => {
  if (isUpPressed) {
    if (activeRow.value === 0) {
      activeRow.value = toValue(config).data.length - 1;
      return;
    }

    activeRow.value = (activeRow.value ?? 1) - 1;
  }
});

watch(isEspPressed, (isEspPressed) => {
  if (isEspPressed) {
    activeRow.value = undefined;
  }
});
</script>

<template>
  <table :style="{ '--table-color': color, borderLeftColor: color }">
    <thead>
      <tr>
        <th />
        <th v-for="col in toValue(config).columns" :key="col.key">
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody class="overflow-scroll">
      <tr
        v-for="(row, rowIndex) in toValue(config).data"
        :key="rowIndex"
        :class="{
          row__active: rowIndex === activeRow,
        }"
      >
        <td class="h-[41px] hover:cursor-pointer" @click="activeRow = rowIndex">
          <div class="m-auto flex justify-center">
            <Icon name="pixelarticons:circle" size="12" />
          </div>
        </td>
        <td
          v-for="(col, colIndex) in toValue(config).columns"
          :key="colIndex"
          class="p-2"
        >
          <slot :row="row" :column="col" :name="col.key">
            <span class="text-xs">
              {{ row[col.key] }}
            </span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
table {
  @apply w-full border-l-[33px];
  border-color: var(--table-color);
  border-bottom: 1px solid lightgray;
  thead {
    tr {
      background-color: var(--table-color);
      th {
        @apply p-2 text-left text-xs tracking-wider text-gray-50 uppercase font-thin;

        &:first-child {
          @apply w-[43px];
        }
      }
    }
  }
  tbody {
    tr {
      @apply bg-[#e5e6e6];
      td {
        border: 1px solid lightgray;
        border-bottom: 0;
      }
      td {
        @apply whitespace-pre;
        &:first-child {
          @apply w-[43px];
        }
      }
    }
    .row__active {
      @apply border;
      td {
        border-color: var(--table-color) !important;
        border-bottom: 1px solid var(--table-color);
        color: var(--table-color);
        @apply border;
      }
    }
  }
}
</style>
