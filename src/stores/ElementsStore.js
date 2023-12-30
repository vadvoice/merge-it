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

const topOffset = 95;
const distance = 200;
export const useElementsStore = defineStore("elements", {
  state: () => ({
    iconsList,
    elements: Array(5)
      .fill()
      .map((_, i) => {
        const randomTopOffset = Math.floor(Math.random() * 100) + topOffset;
        return {
          id: i,
          name: `echo ${i}`,
          x: i * distance,
          y: randomTopOffset,
          coords: `left: ${i * distance}px; top: ${randomTopOffset}px;`,
          filter: filters[i] || filters[0],
          width: 128,
          height: 135,
          iconName: iconsList[Math.floor(Math.random() * iconsList.length)]
        }
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
