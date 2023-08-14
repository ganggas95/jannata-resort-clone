import { defineStore } from "pinia";

export const uiStore = defineStore("ui-store", {
  state() {
    return {
      mainElement: null,
      scrollPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  actions: {
    setScrollPosition(pos: { x: number; y: number }) {
      this.scrollPosition = pos;
    },
  },
});
