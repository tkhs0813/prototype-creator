import { Dom } from "../types";

export const flat = (elements: Dom[], arr: Dom[]): Dom[] => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.children.length !== 0) {
      arr.push(...flat(element.children, []));
    }
    arr.push(element);
  }

  return arr;
};
