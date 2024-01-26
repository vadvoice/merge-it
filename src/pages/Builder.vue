<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useBuilderStore } from "../stores/BuilderStore";
import BuildList from "../components/BuildList.vue";
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

let constrain = 20;
function transforms(x: number, y: number, el: HTMLElement) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) "
  );
}

function transformElement(el: any, xyEl: any) {
  el.style.transform = transforms.apply(null, xyEl);
}

const onMouseMoveHandler = function (e: MouseEvent) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([e.target as any]);

  window.requestAnimationFrame(function () {
    transformElement(e.target, position);
  });
};
</script>

<template>
  <div class="builder flex-1 flex flex-col justify-center items-center">
    <div class="builder__panel relative">
      <div class="builder__panel__face" :onMousemove="onMouseMoveHandler">
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
