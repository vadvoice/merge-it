<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col justify-between items-between flex-1 min-h-screen py-8">
    <div v-motion-pop class="mx-auto max-w-2xl px-4">
      <h1 class="text-center flex flex-col items-center justify-center gap-4 mb-8">
        <img alt="Merge It!" src="../assets/logo-full.png" class="w-32 hover:scale-110 transition-transform" />
        <span class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Merge it!
        </span>
      </h1>

      <p class="text-center text-lg leading-relaxed mb-8">
        <strong>Merge It!</strong> is a game that allows you to build your own
        avatar using a variety of options. You can change the face, hair, and
        background color. You can also download the avatar you created.
      </p>

      <h2 class="text-center text-2xl font-bold mb-6">Usage</h2>
      <ul class="space-y-4 list-disc list-inside max-w-xl mx-auto">
        <li class="text-gray-200">
          In the future, we plan to add more options for creating an avatar, as
          well as the ability to share your avatar on social networks.
        </li>
        <li class="text-gray-200">
          We hope you enjoy the game and have fun creating your own avatar!
        </li>
      </ul>
    </div>

    <footer v-motion-slide-top class="mt-12 bg-gray-800/50 py-6">
      <p class="text-center text-sm flex items-center justify-center flex-wrap gap-1 max-w-2xl mx-auto px-4">
        The game was created using
        <img class="hover:scale-110 transition-transform" src="../assets/vue.svg" title="Vue.js" width="20" />
        <a class="text-white hover:text-green-400 transition-colors" href="https://vuejs.org/" target="_blank">Vue 3</a>,
        <img class="hover:scale-110 transition-transform" src="https://unocss.dev/logo.svg" title="UnoCSS" width="20" />
        <a class="text-white hover:text-green-400 transition-colors" href="https://unocss.dev/" target="_blank">UnoCSS</a>, 
        and
        <img class="hover:scale-110 transition-transform" src="../assets/vite.svg" title="Vite" width="20" />
        <a class="text-white hover:text-green-400 transition-colors" href="https://vitejs.dev/" target="_blank">Vite</a>. 
        It uses the
        <Icon class="hover:scale-110 transition-transform" icon="simple-icons:iconify" />
        <a class="text-white hover:text-green-400 transition-colors" href="https://iconify.design/" target="_blank">Iconify</a>
        library to display the icons.
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
