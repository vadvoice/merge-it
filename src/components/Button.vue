<script setup lang="ts">
  const props = defineProps<{
    title: string;
    variant: "primary" | "secondary";
  }>();

  const emit = defineEmits<{
    (e: "click"): void;
  }>();
  const baseButtonClassName = "p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer";
  // primary variant
  const primaryVariant = `${baseButtonClassName} bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700`;
  // secondary variant
  const secondaryVariant = `${baseButtonClassName} bg-amber-400 text-white hover:bg-amber-500 active:bg-amber-600`;
</script>
<template>
  <button
    :class="variant === 'primary' ? primaryVariant : secondaryVariant"
    @click="emit('click')"
    :title="props.title">
    <slot />
  </button>
</template>