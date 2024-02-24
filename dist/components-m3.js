import { f as t } from "./forEach-B1ZDH1yu.js";
import { M3Button as n } from "./M3Button.js";
import { M3Icon as p } from "./M3Icon.js";
import { M3Image as i } from "./M3Image.js";
import { M3Progress as s } from "./M3Progress.js";
import { M3Ripple as f } from "./M3Ripple.js";
const c = {
  M3Button: n,
  M3Icon: p,
  M3Image: i,
  M3Progress: s,
  M3Ripple: f
}, I = {
  install: async (o) => {
    t(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  I as uiM3ComponentsPlugin
};
