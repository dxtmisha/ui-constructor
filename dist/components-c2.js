import { f as t } from "./forEach-B1ZDH1yu.js";
import { C2Button as n } from "./C2Button.js";
import { C2Icon as p } from "./C2Icon.js";
import { C2Image as i } from "./C2Image.js";
import { C2Progress as s } from "./C2Progress.js";
import { C2Ripple as f } from "./C2Ripple.js";
const c = {
  C2Button: n,
  C2Icon: p,
  C2Image: i,
  C2Progress: s,
  C2Ripple: f
}, I = {
  install: async (o) => {
    t(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  I as uiC2ComponentsPlugin
};
