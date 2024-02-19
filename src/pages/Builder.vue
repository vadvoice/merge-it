<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useBuilderStore } from "../stores/BuilderStore";
import BuildList from "../components/BuildList.vue";
import MotionCard from "../components/MotionCard.vue";
import { storeToRefs } from "pinia";

import { toPng } from "html-to-image";

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

const onDownload = () => {
  const node = document.querySelector(".builder__panel__face");
  toPng(node as HTMLElement).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
  });
};
</script>

<template>
  <div class="builder flex-1 flex flex-col justify-center items-center">
    <article class="absolute top-13 left-19">
      <button
        class="border-none border-rounded bg-sky cursor-pointer p-2"
        @click="onDownload"
      >
        Download
        <Icon icon="akar-icons:download" />
      </button>
    </article>
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
            :width="faceState.face.size"
          />

          <Icon
            class="absolute -top-20 -left-12"
            :icon="faceState.haircut.selected"
            :color="faceState.haircut.color"
            :width="faceState.haircut.size"
            :style="{
              zIndex: 1,
              left: faceState.face.size / 2 - faceState.haircut.size / 2 + 'px',
            }"
          />
          <Icon
            class="absolute top-13"
            :icon="faceState.eyes.selected"
            :color="faceState.eyes.color"
            :width="faceState.eyes.size"
            :style="{
              left: faceState.face.size / 2 - faceState.eyes.size / 2 + 'px',
            }"
          />
          <Icon
            class="absolute top-35"
            :icon="faceState.nose.selected"
            :color="faceState.nose.color"
            :width="faceState.nose.size"
            :style="{
              left: faceState.face.size / 2 - faceState.nose.size / 2 + 'px',
            }"
          />
          <Icon
            class="absolute top-47"
            :icon="faceState.lips.selected"
            :color="faceState.lips.color"
            :width="faceState.lips.size"
            :style="{
              left: faceState.face.size / 2 - faceState.lips.size / 2 + 'px',
            }"
          />
        </div>
      </MotionCard>
    </div>
    <article class="builder__palette flex flex-wrap relative">
      <BuildList
        v-for="collection in parts"
        :key="collection.name"
        :faceState="faceState"
        :elements="collection.items.map(item => ({ ...item, id: item.iconName, color: '' }))"
        :name="collection.name"
        :onElementChange="onElementChange"
      />
    </article>
  </div>
</template>
