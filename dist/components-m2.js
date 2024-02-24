import { f as t } from "./Api-DYbVHTIo.js";
import { M2Icon as r } from "./M2Icon.js";
import { M2Image as c } from "./M2Image.js";
const p = {
  M2Icon: r,
  M2Image: c
}, e = {
  install: async (o) => {
    t(p, (n, m) => {
      o.component(m, n);
    });
  }
};
export {
  p as components,
  e as uiM2ComponentsPlugin
};
