<script setup>
import { Icon } from "@iconify/vue";

const baseNavItemClassName =
  "color-white decoration-none p-2 rounded-full transition-all duration-300 ease-in-out h-5 w-5 flex items-center justify-center hover:bg-gray-700 hover:scale-110 active:scale-95 active:bg-gray-600;";

</script>

<template>
  <header class="app-header fixed top-0 left-0 right-0 flex w-full justify-center z-1 bg-gray-800/50 backdrop-blur-sm">
    <div class="flex items-center justify-center gap-4">
      <router-link to="/" class="hover:scale-110 transition-transform flex items-center justify-center">
        <img src="../src/assets/logo-full.png" alt="Merge It!" class="w-10 h-10" />
      </router-link>

      <nav class="flex items-center p-2">
        <router-link :class="baseNavItemClassName" activeClass=" bg-gray-400!" to="/">
          <Icon icon="mdi:baby-face-outline" :height="30" />
        </router-link>
        <Icon icon="ph:dot-fill" />
        <router-link :class="baseNavItemClassName" activeClass="bg-gray-400!" to="/build">
          <Icon icon="gravity-ui:circles-5-random" :height="30" />
        </router-link>
        <Icon icon="ph:dot-fill" />
        <router-link :class="baseNavItemClassName" activeClass="bg-gray-400!" to="/about">
          <Icon icon="mdi:about-circle-outline" :height="30" />
        </router-link>
      </nav>
    </div>

  </header>
  <router-view></router-view>
</template>
