<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useBuilderStore } from "../stores/BuilderStore";
import BuildList from "../components/BuildList.vue";
import { storeToRefs } from "pinia";

const store = useBuilderStore();
const { parts, faceState } = storeToRefs(store);

const updateFaceState = ({
  elementIndex,
  type,
}: {
  elementIndex: string;
  type: any;
}) => {
  store.updateFaceState({ elementIndex, type });
};
</script>

<template>
  <div class="builder flex-1 flex flex-col justify-center items-center">
    <div class="builder__panel relative">
      <Icon
        :icon="faceState.face"
        width="300"
        :style="{ color: faceState.color }"
      />

      <Icon :icon="faceState.eyes" width="150" class="absolute top-13 left-19" />
      <Icon :icon="faceState.nose" width="50" class="absolute top-35 left-31" />
      <Icon :icon="faceState.lips" width="50" class="absolute top-47 left-31" />
    </div>

    <article class="builder__palette flex flex-wrap relative">
      <BuildList
        v-for="collectionName in Object.keys(parts)"
        :elements="parts[collectionName]"
        :name="collectionName"
        :onElementChange="updateFaceState"
      />
    </article>
  </div>
</template>
