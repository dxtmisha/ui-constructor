import { f as r } from "./forEach-B1ZDH1yu.js";
import { M3Icon as t } from "./M3Icon.js";
import { M3Image as s } from "./M3Image.js";
import { M3Progress as p } from "./M3Progress.js";
const c = {
  M3Icon: t,
  M3Image: s,
  M3Progress: p
}, M = {
  install: async (o) => {
    r(c, (m, n) => {
      o.component(n, m);
    });
  }
};
export {
  c as components,
  M as uiM3ComponentsPlugin
};
