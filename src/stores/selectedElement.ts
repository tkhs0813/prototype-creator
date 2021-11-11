import { defineStore } from "pinia";
import { Dom } from "../types";

export const useSelectedElement = defineStore("selectedElement", {
  state: () => {
    return {
      selectedElement: null as Dom | null,
    };
  },
  actions: {
    update(dom: Dom) {
      this.selectedElement = dom;
    },
  },
});
