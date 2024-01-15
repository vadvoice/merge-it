<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const count = ref(0);
</script>

<template>
  <header class="app-header flex w-full justify-center">
    <nav class="p-2">
      <router-link
        class="color-white decoration-none"
        activeClass="color-purple!"
        to="/"
      >
        <Icon icon="solar:home-bold-duotone" />
        Home</router-link
      >
      <Icon icon="ph:dot-fill" />
      <router-link
        class="color-white decoration-none"
        activeClass="color-purple!"
        to="/build"
      >
        <Icon icon="ic:baseline-build-circle" />
        The Game</router-link
      >
      <Icon icon="ph:dot-fill" />
      <router-link
        class="color-white decoration-none"
        activeClass="color-purple!"
        to="/about"
      >
        <Icon icon="noto-v1:game-die" />
        About</router-link
      >
    </nav>
  </header>
  <router-view></router-view>
</template>
