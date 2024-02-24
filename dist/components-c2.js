import { f as r } from "./forEach-B1ZDH1yu.js";
import { C2Icon as t } from "./C2Icon.js";
import { C2Image as s } from "./C2Image.js";
import { C2Progress as p } from "./C2Progress.js";
const c = {
  C2Icon: t,
  C2Image: s,
  C2Progress: p
}, C = {
  install: async (o) => {
    r(c, (m, n) => {
      o.component(n, m);
    });
  }
};
export {
  c as components,
  C as uiC2ComponentsPlugin
};
