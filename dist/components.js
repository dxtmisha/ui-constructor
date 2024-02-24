import { f as p } from "./forEach-B1ZDH1yu.js";
import { M2Icon as t } from "./M2Icon.js";
import { M2Image as i } from "./M2Image.js";
import { M2Progress as f } from "./M2Progress.js";
import { M2Ripple as e } from "./M2Ripple.js";
import { M3Button as n } from "./M3Button.js";
import { M3Icon as s } from "./M3Icon.js";
import { M3Image as c } from "./M3Image.js";
import { M3Progress as g } from "./M3Progress.js";
import { M3Ripple as C } from "./M3Ripple.js";
import { C1Icon as M } from "./C1Icon.js";
import { C1Image as a } from "./C1Image.js";
import { C1Progress as I } from "./C1Progress.js";
import { C1Ripple as l } from "./C1Ripple.js";
import { C2Icon as P } from "./C2Icon.js";
import { C2Image as R } from "./C2Image.js";
import { C2Progress as u } from "./C2Progress.js";
import { C2Ripple as h } from "./C2Ripple.js";
const x = {
  M2Icon: t,
  M2Image: i,
  M2Progress: f,
  M2Ripple: e,
  M3Button: n,
  M3Icon: s,
  M3Image: c,
  M3Progress: g,
  M3Ripple: C,
  C1Icon: M,
  C1Image: a,
  C1Progress: I,
  C1Ripple: l,
  C2Icon: P,
  C2Image: R,
  C2Progress: u,
  C2Ripple: h
}, L = {
  install: async (o) => {
    p(x, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  x as components,
  L as uiComponentsPlugin
};
