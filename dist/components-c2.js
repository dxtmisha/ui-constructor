import { f as n } from "./forEach-B1ZDH1yu.js";
import { C2Icon as t } from "./C2Icon.js";
import { C2Image as p } from "./C2Image.js";
import { C2Progress as i } from "./C2Progress.js";
import { C2Ripple as s } from "./C2Ripple.js";
const c = {
  C2Icon: t,
  C2Image: p,
  C2Progress: i,
  C2Ripple: s
}, g = {
  install: async (o) => {
    n(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  g as uiC2ComponentsPlugin
};
