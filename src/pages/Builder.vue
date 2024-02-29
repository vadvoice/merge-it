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
    <div class="builder__panel relative">
      <MotionCard>
        <div
          v-motion
          class="builder__panel__face min-h-86"
          :initial="{
            opacity: 1,
          }"
        >
          <Icon
            :style="{
              visibility: faceState.face.isVisible ? 'visible' : 'hidden',
            }"
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
              visibility: faceState.haircut.isVisible ? 'visible' : 'hidden',
            }"
          />
          <Icon
            class="absolute top-13"
            :icon="faceState.eyes.selected"
            :color="faceState.eyes.color"
            :width="faceState.eyes.size"
            :style="{
              left: faceState.face.size / 2 - faceState.eyes.size / 2 + 'px',
              visibility: faceState.eyes.isVisible ? 'visible' : 'hidden',
            }"
          />
          <Icon
            class="absolute top-35"
            :icon="faceState.nose.selected"
            :color="faceState.nose.color"
            :width="faceState.nose.size"
            :style="{
              left: faceState.face.size / 2 - faceState.nose.size / 2 + 'px',
              visibility: faceState.nose.isVisible ? 'visible' : 'hidden',
            }"
          />
          <Icon
            class="absolute top-47"
            :icon="faceState.lips.selected"
            :color="faceState.lips.color"
            :width="faceState.lips.size"
            :style="{
              left: faceState.face.size / 2 - faceState.lips.size / 2 + 'px',
              visibility: faceState.lips.isVisible ? 'visible' : 'hidden',
            }"
          />
        </div>
      </MotionCard>
    </div>
    <article class="builder__palette flex relative overflow-scroll w-full">
      <BuildList
        v-for="collection in parts"
        :key="collection.name"
        :faceState="faceState"
        :elements="
          collection.items.map((item) => ({
            ...item,
            id: item.iconName,
            color: '',
          }))
        "
        :name="collection.name"
        :onElementChange="onElementChange"
      />
    </article>
  </div>
  <article class="flex justify-center p-6 gap-2">
    <button
      class="border-none border-rounded bg-sky cursor-pointer p-2 flex items-center gap-1"
      title="Download the face as an image"
      @click="onDownload"
    >
      Download
      <Icon icon="akar-icons:download" />
    </button>
    <button
      class="border-none border-rounded bg-yellow cursor-pointer p-2 flex items-center gap-1"
      title="Randomize the face configuration"
      @click="() => store.shuffleBasicFaceConfig()"
    >
      Shuffle
      <Icon icon="ph:shuffle-light" />
    </button>
  </article>
</template>
