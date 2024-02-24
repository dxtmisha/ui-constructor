import { f as n } from "./forEach-B1ZDH1yu.js";
import { M2Icon as t } from "./M2Icon.js";
import { M2Image as p } from "./M2Image.js";
import { M2Progress as i } from "./M2Progress.js";
import { M2Ripple as s } from "./M2Ripple.js";
const c = {
  M2Icon: t,
  M2Image: p,
  M2Progress: i,
  M2Ripple: s
}, g = {
  install: async (o) => {
    n(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  g as uiM2ComponentsPlugin
};
