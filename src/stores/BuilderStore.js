import { defineStore } from "pinia";

export const useBuilderStore = defineStore("builder", {
  state: () => ({
    parts: [
      {
        name: "face",
        items: [
          { iconName: "mingcute:face-fill" },
          { iconName: "mingcute:face-line" },
        ],
      },
      {
        name: "haircut",
        items: [
          { iconName: "" },
          { iconName: "mingcute:hair-fill" },
          { iconName: "mingcute:hair-2-fill" },
        ],
      },
      {
        name: "eyes",
        items: [
          { iconName: "game-icons:evil-eyes" },
          { iconName: "noto-v1:eyes" },
          { iconName: "emojione:eyes" },
        ],
      },
      {
        name: "lips",
        items: [
          { iconName: "streamline:mouth-lip-solid" },
          { iconName: "fxemoji:lips" },
          { iconName: "game-icons:lips" },
          { iconName: "streamline-emojis:mouth" },
          { iconName: "icon-park-outline:mouth" },
          { iconName: "streamline:mouth-lip-solid" },
        ],
      },
      {
        name: "nose",
        items: [
          { iconName: "mingcute:nose-line" },
          { iconName: "openmoji:nose-medium-skin-tone" },
          { iconName: "fluent-emoji-flat:nose-light" },
          { iconName: "fxemoji:nose" },
        ],
      },
    ],
    // TODO: make it prettier
    faceState: {
      face: {
        selected: "mingcute:face-fill",
        color: "",
        size: 300,
        defaultSize: 300,
      },
      haircut: {
        selected: "",
        color: "",
        size: 400,
        defaultSize: 400,
      },
      eyes: {
        selected: "game-icons:evil-eyes",
        color: "",
        size: 150,
        defaultSize: 150,
      },
      lips: {
        selected: "streamline:mouth-lip-solid",
        color: "",
        size: 50,
        defaultSize: 50,
      },
      nose: {
        selected: "mingcute:nose-line",
        color: "",
        size: 50,
        defaultSize: 50,
      },
    },
  }),
  actions: {
    updateFaceState({ elementIndex, part, type, value }) {
      if (type === "color") {
        this.faceState[part].color = value;
        return;
      }
      if (type === "size") {
        this.faceState[part].size = value;
        return;
      }
      this.faceState[part].selected = this.parts.find(
        (p) => p.name === part
      ).items[elementIndex].iconName;
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
