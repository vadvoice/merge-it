<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <header class="app-header flex w-full justify-center">
    <nav>
      <router-link class="color-white" to="/">Home</router-link> |
      <router-link class="color-white" to="/about">About</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>
