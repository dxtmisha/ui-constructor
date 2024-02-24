import { f as t } from "./forEach-B1ZDH1yu.js";
import { M2Icon as p } from "./M2Icon.js";
import { M2Image as i } from "./M2Image.js";
import { M2Progress as f } from "./M2Progress.js";
import { M3Icon as n } from "./M3Icon.js";
import { M3Image as s } from "./M3Image.js";
import { M3Progress as e } from "./M3Progress.js";
import { C1Icon as c } from "./C1Icon.js";
import { C1Image as g } from "./C1Image.js";
import { C1Progress as a } from "./C1Progress.js";
import { C2Icon as I } from "./C2Icon.js";
import { C2Image as C } from "./C2Image.js";
import { C2Progress as M } from "./C2Progress.js";
const P = {
  M2Icon: p,
  M2Image: i,
  M2Progress: f,
  M3Icon: n,
  M3Image: s,
  M3Progress: e,
  C1Icon: c,
  C1Image: g,
  C1Progress: a,
  C2Icon: I,
  C2Image: C,
  C2Progress: M
}, z = {
  install: async (o) => {
    t(P, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  P as components,
  z as uiComponentsPlugin
};
