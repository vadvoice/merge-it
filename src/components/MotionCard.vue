<script setup lang="js">
import { ref } from "vue";
const cardRef = ref(null);
const reflRef = ref(null);

function onMouseLeave() {
  const card = cardRef.value;
  card.style.transform = `perspective(500px) scale(1)`;
}

function onMouseMove() {
  const card = cardRef.value;

  const relX = (event.offsetX + 1) / card.offsetWidth;
  const relY = (event.offsetY + 1) / card.offsetHeight;
  const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
  const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
  card.style.transform = `perspective(500px) scale(1) ${rotY} ${rotX}`;
}
const scale = (val, inMin, inMax, outMin, outMax) => {
  outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
}
</script>
<template>
  <div
    class="card"
    :href="link"
    target="_blank"
    ref="cardRef"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <slot></slot>
  </div>
</template>
