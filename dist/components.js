import { f as t } from "./forEach-B1ZDH1yu.js";
import { M2Button as p } from "./M2Button.js";
import { M2Icon as i } from "./M2Icon.js";
import { M2Image as f } from "./M2Image.js";
import { M2Progress as n } from "./M2Progress.js";
import { M2Ripple as e } from "./M2Ripple.js";
import { M3Button as s } from "./M3Button.js";
import { M3Icon as C } from "./M3Icon.js";
import { M3Image as c } from "./M3Image.js";
import { M3Progress as M } from "./M3Progress.js";
import { M3Ripple as g } from "./M3Ripple.js";
import { C1Button as a } from "./C1Button.js";
import { C1Icon as I } from "./C1Icon.js";
import { C1Image as l } from "./C1Image.js";
import { C1Progress as u } from "./C1Progress.js";
import { C1Ripple as P } from "./C1Ripple.js";
import { C2Button as B } from "./C2Button.js";
import { C2Icon as R } from "./C2Icon.js";
import { C2Image as h } from "./C2Image.js";
import { C2Progress as x } from "./C2Progress.js";
import { C2Ripple as y } from "./C2Ripple.js";
const E = {
  M2Button: p,
  M2Icon: i,
  M2Image: f,
  M2Progress: n,
  M2Ripple: e,
  M3Button: s,
  M3Icon: C,
  M3Image: c,
  M3Progress: M,
  M3Ripple: g,
  C1Button: a,
  C1Icon: I,
  C1Image: l,
  C1Progress: u,
  C1Ripple: P,
  C2Button: B,
  C2Icon: R,
  C2Image: h,
  C2Progress: x,
  C2Ripple: y
}, U = {
  install: async (o) => {
    t(E, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  E as components,
  U as uiComponentsPlugin
};
