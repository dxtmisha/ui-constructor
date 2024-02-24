import { f as n } from "./forEach-B1ZDH1yu.js";
import { C1Icon as t } from "./C1Icon.js";
import { C1Image as p } from "./C1Image.js";
import { C1Progress as i } from "./C1Progress.js";
import { C1Ripple as s } from "./C1Ripple.js";
const c = {
  C1Icon: t,
  C1Image: p,
  C1Progress: i,
  C1Ripple: s
}, g = {
  install: async (o) => {
    n(c, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  c as components,
  g as uiC1ComponentsPlugin
};
