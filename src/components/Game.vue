<script setup lang="ts">
import DraggableElement from "./DraggableElement.vue";
import { onMounted, ref } from "vue";
import { useElementsStore } from "../stores/ElementsStore";
import { storeToRefs } from 'pinia';

const store = useElementsStore();

defineProps<{ msg: string }>();
let loading = ref(true);

const {elements} = storeToRefs(store);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="scene w-full h-full flex flex-col">
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
