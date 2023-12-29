<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
const el = ref<HTMLElement | null>(null);

// get properties from parent
const props = defineProps<{
  element: {
    id: number;
    name: string;
    x: number;
    y: number;
  };
  initialCoords: {
    x: number;
    y: number;
  };
}>();
const { initialCoords } = props;

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: initialCoords || { x: 40, y: 40 },
});
</script>

<template>
  <div
    ref="el"
    :style="style"
    style="position: fixed; user-select: none; cursor: move"
  >
    <img
      :style="{ pointerEvents: 'none' }"
      src="/liquid.svg"
      alt="Vue logo"
      width="128"
    />
  </div>
</template>
