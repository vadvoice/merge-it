<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col justify-between items-between flex-1">
    <div v-motion-pop class="mx-10">
      <h1 class="text-center flex flex-col items-center justify-center">
        <img alt="Merge It!" src="../assets/logo-full.png" width="100" />
        Merge it!
      </h1>

      <p class="text-center">
        <strong>Merge It!</strong> is a game that allows you to build your own
        avatar using a variety of options. You can change the face, hair, and
        background color. You can also download the avatar you created.
      </p>

      <h2 class="text-center">Usage</h2>
      <ul>
        <li>
          In the future, we plan to add more options for creating an avatar, as
          well as the ability to share your avatar on social networks.
        </li>
        <li>
          We hope you enjoy the game and have fun creating your own avatar!
        </li>
      </ul>
    </div>

    <footer v-motion-slide-top>
      <p class="text-center text-sm flex items-center justify-center">
        The game was created using
        <img class="ml-1" src="../assets/vue.svg" title="Vue.js" width="20" />
        <a class="text-white px-2" href="https://vuejs.org/" target="_blank">Vue 3</a
        >,
        <img class="ml-1" src="https://unocss.dev/logo.svg" title="UnoCSS" width="20" />
        <a class="text-white px-2" href="https://unocss.dev/" target="_blank"
          >UnoCSS</a
        >, and Vite
        <a class="text-white px-2" href="https://vitejs.dev/" target="_blank"
          >Vite</a
        >
        <img src="../assets/vite.svg" title="Vite" width="20" />. It uses the
        <Icon class="ml-1" icon="simple-icons:iconify" />
        <a class="text-white px-2" href="https://iconify.design/" target="_blank"
          >Iconify</a
        >
        library to display the icons.
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
