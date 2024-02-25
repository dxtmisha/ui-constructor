import { f as t } from "./forEach-B1ZDH1yu.js";
import { C1Button as n } from "./C1Button.js";
import { C1Icon as p } from "./C1Icon.js";
import { C1Image as i } from "./C1Image.js";
import { C1Progress as s } from "./C1Progress.js";
import { C1Ripple as f } from "./C1Ripple.js";
const c = {
  C1Button: n,
  C1Icon: p,
  C1Image: i,
  C1Progress: s,
  C1Ripple: f
}, I = {
  install: async (o) => {
    t(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  I as uiC1ComponentsPlugin
};
