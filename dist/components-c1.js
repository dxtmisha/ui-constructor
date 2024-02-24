import { f as r } from "./forEach-B1ZDH1yu.js";
import { C1Icon as t } from "./C1Icon.js";
import { C1Image as s } from "./C1Image.js";
import { C1Progress as p } from "./C1Progress.js";
const c = {
  C1Icon: t,
  C1Image: s,
  C1Progress: p
}, C = {
  install: async (o) => {
    r(c, (m, n) => {
      o.component(n, m);
    });
  }
};
export {
  c as components,
  C as uiC1ComponentsPlugin
};
