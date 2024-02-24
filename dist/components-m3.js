import { f as t } from "./Api-DYbVHTIo.js";
import { M3Icon as r } from "./M3Icon.js";
import { M3Image as c } from "./M3Image.js";
const p = {
  M3Icon: r,
  M3Image: c
}, e = {
  install: async (o) => {
    t(p, (n, m) => {
      o.component(m, n);
    });
  }
};
export {
  p as components,
  e as uiM3ComponentsPlugin
};
