import { f as t } from "./Api-DYbVHTIo.js";
import { C2Icon as r } from "./C2Icon.js";
import { C2Image as c } from "./C2Image.js";
const p = {
  C2Icon: r,
  C2Image: c
}, e = {
  install: async (o) => {
    t(p, (n, m) => {
      o.component(m, n);
    });
  }
};
export {
  p as components,
  e as uiC2ComponentsPlugin
};
