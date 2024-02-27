<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const count = ref(0);
const baseNavItemClassName =
  "color-white decoration-none p-2 rounded-full transition-all duration-300 ease-in-out h-5 w-5 flex items-center justify-center;";
</script>

<template>
  <header class="app-header flex w-full justify-center z-1">
    <nav class="flex items-center p-2">
      <router-link
        :class="baseNavItemClassName"
        activeClass=" bg-gray-400!"
        to="/"
      >
        <Icon icon="mdi:baby-face-outline" :height="30" />
      </router-link>
      <Icon icon="ph:dot-fill" />
      <router-link
        :class="baseNavItemClassName"
        activeClass="bg-gray-400!"
        to="/build"
      >
        <Icon icon="gravity-ui:circles-5-random" :height="30" />
      </router-link>
      <Icon icon="ph:dot-fill" />
      <router-link
        :class="baseNavItemClassName"
        activeClass="bg-gray-400!"
        to="/about"
      >
        <Icon icon="mdi:about-circle-outline" :height="30" />
      </router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>
