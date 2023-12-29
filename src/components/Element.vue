<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

let dragging = ref(false);
let startX = ref(0);
let startY = ref(0);
let left = ref(0);
let top = ref(0);

const startDrag = (event: { clientX: number; clientY: number }) => {
  dragging.value = true;
  startX.value = event.clientX;
  startY.value = event.clientY;
};

const drag = (event: { clientX: number; clientY: number }) => {
  if (dragging.value) {
    left.value += event.clientX - startX.value;
    top.value += event.clientY - startY.value;
    startX.value = event.clientX;
    startY.value = event.clientY;
  }
};

const endDrag = () => {
  dragging.value = false;
};
</script>

<template>
  <div
    class="element"
    :style="{
      left: left + 'px',
      top: top + 'px',
      position: 'absolute',
      cursor: 'move',
      userSelect: 'none',
    }"
    @mousedown="startDrag"
    @mousemove="drag"
    @mouseup="endDrag"
  >
    <img
      :style="{ pointerEvents: 'none' }"
      src="/liquid.svg"
      alt="Vue logo"
      width="128"
    />
    <slot></slot>
  </div>
</template>
