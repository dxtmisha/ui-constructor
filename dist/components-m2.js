import { f as t } from "./toArray-J4lAhJG7.js";
import { M2Button as n } from "./M2Button.js";
import { M2Icon as p } from "./M2Icon.js";
import { M2Image as i } from "./M2Image.js";
import { M2Progress as s } from "./M2Progress.js";
import { M2Ripple as f } from "./M2Ripple.js";
const c = {
  M2Button: n,
  M2Icon: p,
  M2Image: i,
  M2Progress: s,
  M2Ripple: f
}, I = {
  install: async (o) => {
    t(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  I as uiM2ComponentsPlugin
};
