<script setup lang="ts">
import { ref, watch } from "vue";
import { useDraggable } from "@vueuse/core";
import { useElementsStore } from "../stores/ElementsStore";
const el = ref<HTMLElement | null>(null);
const store = useElementsStore();
import { Icon } from "@iconify/vue";

// get properties from parent
const props = defineProps<{
  element: {
    [x: string]: any;
    id: number;
    name: string;
    x: number;
    y: number;
    filter: string;
  };
  initialCoords?: {
    x: number;
    y: number;
  };
}>();
const { initialCoords, element } = props;

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: initialCoords || { x: element.x, y: element.y },
});

// weird way, could be improved
watch(style, (newVal) => {
  store.updateElement(props.element.id, newVal);
});

function isCollide(
  a: { id: any; y: number; height: any; x: number; width: any },
  b: { id: any; y: number; height: any; x: number; width: any }
) {
  if (a.id === b.id) return false;
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
}

function onDrop(element: any) {
  // detect collision with other elements
  const collision = store.elements.find((el: any) => isCollide(el, element));
  if (collision) {
    // store.mergeElements(element.id, collision.id);
    store.mergeElements(element.id, collision.id);
  }
}
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :hovered="{ scale: 1.2 }"
    :style="style"
    style="position: fixed; user-select: none; cursor: move"
    ref="el"
    @mouseup="() => onDrop(element)"
  >
    <img
      class="drop-shadow-sm"
      :style="{
        pointerEvents: 'none',
        filter: `${element.filter} drop-shadow(0 -2mm 4mm rgb(160, 0, 210))`,
        rotate: `${10 * element.id}deg`,
      }"
      src="/liquid.svg"
      alt="Vue logo"
      width="128"
    />
    <Icon
      :icon="element.iconName"
      :style="{
        fontSize: 72,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        right: 0,
      }"
    />
  </div>
</template>
