<script setup lang="ts">
import { Icon } from "@iconify/vue";
import BuildItem from "./BuildItem.vue";
import { ref, watch } from "vue";
import ColorPicker from "./ColorPicker.vue";

const ELEMENT_WIDTH = 72;
// get properties from parent
const props = defineProps<{
  name: string;
  faceState: {
    [key: string]: {
      selected: string;
      color: string;
      size: number;
      defaultSize: number;
      isVisible: boolean;
    };
  };
  elements: {
    [x: string]: any;
    iconName: string;
    color: string;
  }[];
  onElementChange: Function;
}>();
const { elements, name, onElementChange, faceState } = props;
const elementSetup = faceState[name];
const position = ref(0);
const size = ref(elementSetup.size);
const isVisible = ref(elementSetup.isVisible || false);

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
watch(size, (newSize) => {
  onElementChange({
    elementIndex: position.value,
    part: name,
    type: "size",
    value: newSize,
  });
});
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

watch(isVisible, (newIsVisible) => {
  onElementChange({
    elementIndex: position.value,
    part: name,
    type: "visibility",
    value: newIsVisible,
  });
});
</script>

<template>
  <div class="build-list mx-5">
    <div class="build-list__header">
      <h2 class="build-list__title text-center capitalize text-sm">
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
          :element="{ ...element, id: element.id || '' }"
        />
      </div>
      <button
        class="build-list__container__action build-list__container__action--right cursor-pointer b-none b-rounded-50 h-10 w-10 flex items-center justify-center mx-1"
        :disabled="position === elements.length - 1"
        @click="() => onPositionChange('right')"
      >
        <Icon icon="raphael:arrowright" width="24" />
      </button>
    </div>

    <div class="actions flex flex-col gap-1 mt-5">
      <div class="flex justify-between">
        <span class="text-sm">Fill color:</span>
        <ColorPicker :onChange="updateValue" />
      </div>
      <div class="flex justify-between">
        <span class="text-sm">Size:</span>
        <input
          type="range"
          :min="elementSetup.defaultSize - 20"
          :max="elementSetup.defaultSize + 20"
          v-model="size"
        />
      </div>
      <div class="flex justify-between">
        <label
          class="text-sm select-none"
          :for="name"
          :title="!isVisible ? 'No visible' : ''"
        >
          <Icon
            v-if="!isVisible"
            icon="fluent-emoji:warning"
            title="Not visible"
          />Is visible :
        </label>
        <input class="w-10" type="checkbox" :id="name" v-model="isVisible" />
      </div>
    </div>
  </div>
</template>
