<script setup lang="ts">
import DraggableElement from "./DraggableElement.vue";
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useElementsStore } from "../stores/ElementsStore";
import { storeToRefs } from 'pinia';

const store = useElementsStore();

defineProps<{ msg: string }>();
let loading = ref(true);
const headerEl = ref<HTMLElement | null>(null);

const {elements} = storeToRefs(store);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="scene w-full h-full flex flex-col">
    <header ref="headerEl">
      <h1 class="flex justify-center items-center">
        <Icon icon="noto-v1:angry-face" style="color: red; font-size: inherit" />
        {{ msg }}
      </h1>
    </header>

    <div class="wrapper" style="position: relative; width: 100%; flex: 1">
      <div
        class="elements-container"
        v-for="element in elements"
        :key="element.id"
      >
        <DraggableElement :element="element" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
