import { f as r } from "./forEach-B1ZDH1yu.js";
import { M2Icon as t } from "./M2Icon.js";
import { M2Image as s } from "./M2Image.js";
import { M2Progress as p } from "./M2Progress.js";
const c = {
  M2Icon: t,
  M2Image: s,
  M2Progress: p
}, M = {
  install: async (o) => {
    r(c, (m, n) => {
      o.component(n, m);
    });
  }
};
export {
  c as components,
  M as uiM2ComponentsPlugin
};
