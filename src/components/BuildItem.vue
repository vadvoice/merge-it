<script setup lang="ts">
import { ref } from "vue";
const draggableEl = ref<HTMLElement | null>(null);
import { Icon } from "@iconify/vue";

// get properties from parent
const props = defineProps<{
  element: {
    iconName: string;
    color: string;
    id: string | number;
  };
}>();
const { element } = props;
</script>

<template>
  <div
    ref="draggableEl"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :hovered="{ scale: 1.2 }"
  >
    <Icon
      v-if="element.iconName"
      :icon="element.iconName"
      :style="{
        fontSize: 72,
      }"
    />
    <div
      v-if="element.color"
      :style="{ background: element.color, width: '72px', height: '72px' }"
    ></div>
  </div>
</template>
