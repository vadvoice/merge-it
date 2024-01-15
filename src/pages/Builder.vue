<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useBuilderStore } from "../stores/BuilderStore";
import BuildList from "../components/BuildList.vue";

const store = useBuilderStore();
const { parts, faceState } = store;
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
      <Icon :icon="faceState.face" width="300" />

      <Icon :icon="faceState.eyes" width="200" class="absolute top-6 left-12" />
      <Icon :icon="faceState.nose" width="90" class="absolute top-30 left-25" />
      <Icon :icon="faceState.lips" width="80" class="absolute top-45 left-27" />
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
