import { defineStore } from "pinia";

export const useBuilderStore = defineStore("builder", {
  state: () => ({
    parts: [
      {
        name: "face",
        items: [
          { iconName: "mingcute:face-fill" },
          { iconName: "iconamoon:face-without-mouth-fill" },
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
          { iconName: "game-icons:angry-eyes" },
          { iconName: "noto-v1:eyes" },
          { iconName: "game-icons:worried-eyes" },
          { iconName: "fxemoji:eyes" },
          { iconName: "game-icons:evil-eyes" },
          { iconName: "noto:eyes" },
        ],
      },
      {
        name: "lips",
        items: [
          { iconName: "streamline:mouth-lip-solid" },
          { iconName: "fxemoji:lips" },
          { iconName: "game-icons:lips" },
          { iconName: "emojione-v1:lips2" },
          { iconName: "icon-park-outline:mouth" },
          { iconName: "streamline-emojis:mouth" },
        ],
      },
      {
        name: "nose",
        items: [
          { iconName: "mingcute:nose-line" },
          { iconName: "openmoji:nose-medium-skin-tone" },
          { iconName: "game-icons:nose-front" },
          { iconName: "fluent-emoji-flat:nose-light" },
          { iconName: "fxemoji:nose" },
          { iconName: "fluent-emoji-high-contrast:pig-nose" },
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
        isVisible: true,
      },
      haircut: {
        selected: "",
        color: "",
        size: 400,
        defaultSize: 400,
        isVisible: true,
      },
      eyes: {
        selected: "game-icons:angry-eyes",
        color: "",
        size: 150,
        defaultSize: 150,
        isVisible: true,
      },
      lips: {
        selected: "streamline:mouth-lip-solid",
        color: "",
        size: 50,
        defaultSize: 50,
        isVisible: true,
      },
      nose: {
        selected: "mingcute:nose-line",
        color: "",
        size: 50,
        defaultSize: 50,
        isVisible: true,
      },
    },
  }),
  actions: {
    updateFaceState({ elementIndex, part, type, value }) {
      if (type === "visibility") {
        this.faceState[part].isVisible = value;
        return;
      }
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
    shuffleBasicFaceConfig() {
      this.faceState.face.selected = this.parts[0].items[
        Math.floor(Math.random() * this.parts[0].items.length)
      ].iconName;
      this.faceState.haircut.selected = this.parts[1].items[
        Math.floor(Math.random() * this.parts[1].items.length)
      ].iconName;
      this.faceState.eyes.selected = this.parts[2].items[
        Math.floor(Math.random() * this.parts[2].items.length)
      ].iconName;
      this.faceState.lips.selected = this.parts[3].items[
        Math.floor(Math.random() * this.parts[3].items.length)
      ].iconName;
      this.faceState.nose.selected = this.parts[4].items[
        Math.floor(Math.random() * this.parts[4].items.length)
      ].iconName;
    }
  },
});
