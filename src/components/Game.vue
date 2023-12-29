<script setup lang="ts">
import DraggableElement from "./DraggableElement.vue";
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useElementsStore } from "../stores/ElementsStore";

const store = useElementsStore();

defineProps<{ msg: string }>();
let topOffset = ref(0);
let loading = ref(true);

const headerEl = ref<HTMLElement | null>(null);
const distance = 200;

const elements = store.elements

onMounted(() => {
  topOffset.value = headerEl.value?.clientHeight || 95;
  loading.value = false;
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="scene w-full h-full flex flex-col">
    <header ref="headerEl">
      <h1 class="flex justify-center items-center">
        <Icon icon="mdi-light:home" style="color: red; font-size: inherit" />
        {{ msg }}
      </h1>
    </header>

    <div class="wrapper" style="position: relative; width: 100%; flex: 1">
      <div
        class="elements-container"
        v-for="(element, idx) in elements"
        :key="element.id"
      >
        <DraggableElement
          :element="element"
          :initialCoords="{ x: idx * distance, y: topOffset }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
