import { f as t } from "./Api-DYbVHTIo.js";
import { C1Icon as r } from "./C1Icon.js";
import { C1Image as c } from "./C1Image.js";
const p = {
  C1Icon: r,
  C1Image: c
}, e = {
  install: async (o) => {
    t(p, (n, m) => {
      o.component(m, n);
    });
  }
};
export {
  p as components,
  e as uiC1ComponentsPlugin
};
