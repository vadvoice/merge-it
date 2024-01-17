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
      color: [
        { color: "#e3e3e3" },
        { color: "#FFDFC4" },
        { color: "#F0D5BE" },
        { color: "#E1B899" },
        { color: "#C68642" },
        { color: "#8D5524" },
      ],
    },
    // TODO: make it prettier
    faceState: {
      face: "mingcute:face-fill",
      haircut: "",
      eyes: "game-icons:evil-eyes",
      lips: "streamline:mouth-lip-solid",
      nose: "mingcute:nose-line",
      color: "",
    },
  }),
  actions: {
    updateFaceState({ elementIndex, type }) {
      if (type === "color") {
        this.faceState[type] = this.parts[type][elementIndex].color;
        return;
      }
      this.faceState[type] = this.parts[type][elementIndex].iconName;
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
