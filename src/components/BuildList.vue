<script setup lang="ts">
import { Icon } from "@iconify/vue";
import BuildItem from "./BuildItem.vue";
import { ref, watch } from "vue";
import ColorPicker from "./ColorPicker.vue";

const ELEMENT_WIDTH = 72;
// get properties from parent
const props = defineProps<{
  name: string;
  elements: [
    {
      iconName: string;
      id: number | string;
      color: string;
    }
  ];
  onElementChange: Function;
}>();
const { elements, name, onElementChange } = props;
const position = ref(0);

const updateValue = (color: string) => {
  onElementChange({
    elementIndex: position.value,
    part: name,
    type: "color",
    value: color,
  });
};

const scrollContainer = ref<HTMLElement | null>(null);

const onPositionChange = (direction: string) => {
  if (direction === "left" && position.value > 0) {
    position.value = position.value - 1;
  }
  if (direction === "right" && position.value < elements.length - 1) {
    position.value = position.value + 1;
  }
};
watch(position, () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: position.value * ELEMENT_WIDTH,
      behavior: "smooth",
    });

    onElementChange({
      elementIndex: position.value,
      part: name,
    });
  }
});
</script>

<template>
  <div class="build-list mx-5">
    <div class="build-list__header">
      <h2 class="build-list__title text-center capitalize color-coolGray">
        {{ name || "Build List" }}
      </h2>
    </div>
    <div class="build-list__container flex items-center">
      <button
        class="build-list__container__action build-list__container__action--left cursor-pointer b-none b-rounded-50 h-10 w-10 flex items-center justify-center mx-1"
        :disabled="position === 0"
        @click="() => onPositionChange('left')"
      >
        <Icon icon="raphael:arrowleft" width="24" />
      </button>

      <div
        ref="scrollContainer"
        class="build-list__container__items flex max-w-18 overflow-hidden position-relative flex"
      >
        <BuildItem
          v-for="element in elements"
          :key="element.id"
          :element="element"
        />
      </div>

      <ColorPicker :onChange="updateValue" />
      <button
        class="build-list__container__action build-list__container__action--right cursor-pointer b-none b-rounded-50 h-10 w-10 flex items-center justify-center mx-1"
        :disabled="position === elements.length - 1"
        @click="() => onPositionChange('right')"
      >
        <Icon icon="raphael:arrowright" width="24" />
      </button>
    </div>
  </div>
</template>
