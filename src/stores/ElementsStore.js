import { defineStore } from "pinia";

const filters = [
  "invert(1)",
  'hue-rotate(45deg)',
  "brightness(0.5)",
  "contrast(200%)",
  'grayscale(1)',
  'sepia(1)'
];

export const useElementsStore = defineStore("elements", {
  state: () => ({
    elements: Array(5)
      .fill()
      .map((_, i) => ({
        id: i,
        name: `echo ${i}`,
        x: 0,
        y: 0,
        coords: "left: 0px; top: 0px;",
        filter: filters[i] || filters[0],
      })),
  }),
  actions: {
    updateElement(elemId, coords) {
      const targetElement = this.elements.find(
        (element) => element.id === elemId
      );
      targetElement.position = coords;
      const [left, top] = coords.split(";");
      targetElement.x = parseFloat(left.split(":")[1]);
      targetElement.y = parseFloat(top.split(":")[1]);
    },
    addElement(element) {
      this.elements.push(element);
    },
  },
});
