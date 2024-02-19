<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useBuilderStore } from "../stores/BuilderStore";
import BuildList from "../components/BuildList.vue";
import MotionCard from "../components/MotionCard.vue";
import { storeToRefs } from "pinia";

const store = useBuilderStore();
const { parts, faceState } = storeToRefs(store);

const onElementChange = ({
  elementIndex,
  type,
  part,
  value,
}: {
  elementIndex: string;
  type: any;
  part: string;
  value?: string;
}) => {
  store.updateFaceState({ elementIndex, part, type, value });
};
</script>

<template>
  <div class="builder flex-1 flex flex-col justify-center items-center">
    <div class="builder__panel relative">
      <MotionCard>
        <div
          v-motion
          class="builder__panel__face"
          :initial="{
            opacity: 1,
          }"
        >
          <Icon
            :icon="faceState.face.selected"
            :color="faceState.face.color"
            width="300"
          />

          <Icon
            :icon="faceState.haircut.selected"
            :color="faceState.haircut.color"
            width="400"
            class="absolute -top-20 -left-12"
            :style="{ zIndex: 1 }"
          />
          <Icon
            :icon="faceState.eyes.selected"
            :color="faceState.eyes.color"
            width="150"
            class="absolute top-13 left-19"
          />
          <Icon
            :icon="faceState.nose.selected"
            :color="faceState.nose.color"
            width="50"
            class="absolute top-35 left-31"
          />
          <Icon
            :icon="faceState.lips.selected"
            :color="faceState.lips.color"
            width="50"
            class="absolute top-47 left-31"
          />
        </div>
      </MotionCard>
    </div>

    <article class="builder__palette flex flex-wrap relative">
      <BuildList
        v-for="collectionName in Object.keys(parts)"
        :elements="parts[collectionName]"
        :name="collectionName"
        :onElementChange="onElementChange"
      />
    </article>
  </div>
</template>
