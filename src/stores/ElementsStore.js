import { defineStore } from "pinia";
import { iconsList } from "../utils/icons";

const filters = [
  "invert(1)",
  "hue-rotate(45deg)",
  "brightness(0.5)",
  "contrast(200%)",
  "grayscale(1)",
  "sepia(1)",
];

export const useElementsStore = defineStore("elements", {
  state: () => ({
    iconsList,
    elements: Array(10)
      .fill()
      .map((_, i) => {
        const elementWidth = 128;
        const elementHeight = 135;
        const randomX = Math.floor(
          Math.random() * (window.innerWidth - elementWidth)
        );
        const randomY =
          Math.floor(Math.random() * (window.innerHeight - elementHeight));
        return {
          id: i,
          name: `echo ${i}`,
          x: randomX,
          y: randomY,
          coords: `left: ${randomX}px; top: ${randomY}px;`,
          filter: filters[i] || filters[0],
          width: 128,
          height: 135,
          iconName: iconsList[Math.floor(Math.random() * iconsList.length)],
        };
      }),
  }),
  actions: {
    getElementById(id) {
      return this.elements.find((element) => element.id === id);
    },
    updateElement(elemId, coords) {
      const targetElement = this.elements.find(
        (element) => element.id === elemId
      );
      targetElement.position = coords;
      const [left, top] = coords.split(";");
      targetElement.x = parseFloat(left.split(":")[1]);
      targetElement.y = parseFloat(top.split(":")[1]);
    },
    mergeElements(activeElemId, targetElemId) {
      this.elements = this.elements.filter(
        (element) => element.id !== activeElemId
      );
      // update icon on target element with merge rule
      const targetElement = this.getElementById(targetElemId);
      targetElement.iconName = this.onMergeIcons(targetElement.iconName);
    },
    getRandomIcon() {
      return iconsList[Math.floor(Math.random() * iconsList.length)];
    },
    onMergeIcons() {
      const randomIcon = this.getRandomIcon();
      return randomIcon;
    },
  },
});
