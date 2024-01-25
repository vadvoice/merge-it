import { defineStore } from "pinia";

export const useBuilderStore = defineStore("builder", {
  state: () => ({
    parts: {
      face: [
        { iconName: "mingcute:face-fill" },
        { iconName: "mingcute:face-line" },
      ],
      haircut: [
        { iconName: "" },
        { iconName: "mingcute:hair-fill" },
        { iconName: "mingcute:hair-2-fill" },
      ],
      eyes: [
        { iconName: "game-icons:evil-eyes" },
        { iconName: "noto-v1:eyes" },
        { iconName: "emojione:eyes" },
      ],
      lips: [
        { iconName: "streamline:mouth-lip-solid" },
        { iconName: "fxemoji:lips" },
        { iconName: "game-icons:lips" },
        { iconName: "streamline-emojis:mouth" },
        { iconName: "icon-park-outline:mouth" },
        { iconName: "streamline:mouth-lip-solid" },
      ],
      nose: [
        { iconName: "mingcute:nose-line" },
        { iconName: "openmoji:nose-medium-skin-tone" },
        { iconName: "fluent-emoji-flat:nose-light" },
        { iconName: "fxemoji:nose" },
      ],
    },
    // TODO: make it prettier
    faceState: {
      face: {
        selected: "mingcute:face-fill",
        color: null,
      },
      haircut: {
        selected: null,
        color: null,
      },
      eyes: {
        selected: "game-icons:evil-eyes",
        color: null,
      },
      lips: {
        selected: "streamline:mouth-lip-solid",
        color: null,
      },
      nose: {
        selected: "mingcute:nose-line",
        color: null,
      },
    },
  }),
  actions: {
    updateFaceState({ elementIndex, part, type, value }) {
      if (type === "color") {
        this.faceState[part].color = value;
        return;
      }
      this.faceState[part].selected = this.parts[part][elementIndex].iconName;
    },
    addElement(element) {
      this.elements.push(element);
    },
    removeElement(elementId) {
      this.elements = this.elements.filter(
        (element) => element.id !== elementId
      );
    },
  },
});
