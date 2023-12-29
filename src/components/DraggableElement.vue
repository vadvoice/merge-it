<script setup lang="ts">
import { ref, watch } from "vue";
import { useDraggable } from "@vueuse/core";
import { useElementsStore } from "../stores/ElementsStore";
const el = ref<HTMLElement | null>(null);

const store = useElementsStore();

// get properties from parent
const props = defineProps<{
  element: {
    id: number;
    name: string;
    x: number;
    y: number;
    filter: string;
  };
  initialCoords: {
    x: number;
    y: number;
  };
}>();
const { initialCoords, element } = props;

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: initialCoords || { x: 40, y: 40 },
});

// weird way, could be improved
watch(style, (newVal) => {
  store.updateElement(props.element.id, newVal);
});
</script>

<template>
  <div
    ref="el"
    :style="style"
    style="position: fixed; user-select: none; cursor: move;"
  >
    <img
      :style="{ pointerEvents: 'none', filter: element.filter, rotate: `${10 * element.id}deg` }"
      src="/liquid.svg"
      alt="Vue logo"
      width="128"
    />
  </div>
</template>
