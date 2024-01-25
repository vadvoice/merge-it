<template>
  <div>
    <color-picker
      v-model:pureColor="pureColor"
      v-model:gradientColor="gradientColor"
      v-on:update:pureColor="onChange"
      shape="circle"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { ColorInputWithoutInstance } from "tinycolor2";

export default defineComponent({
  setup() {
    const pureColor = ref<ColorInputWithoutInstance>("transparent");
    const gradientColor = ref(
      "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
    );

    return { pureColor, gradientColor };
  },
  props: {
    onChange: {
      type: Function,
      required: true,
    },
  }
});
</script>
