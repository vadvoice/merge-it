import { defineStore } from 'pinia';

export const useElementsStore = defineStore('elements', {
  state: () => ({
    elements: [
      {
        id: 1,
        name: "H",
        x: 0,
        y: 0,
      },
      {
        id: 2,
        name: "O",
        x: 0,
        y: 0,
      },
      {
        id: 3,
        name: "H",
        x: 0,
        y: 0,
      },
      {
        id: 4,
        name: "L",
        x: 0,
        y: 0,
      },
    ],
  }),
  actions: {
    addElement(element) {
      this.elements.push(element);
    },
  },
});
