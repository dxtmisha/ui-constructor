import { f as t } from "./Api-DYbVHTIo.js";
import { M2Icon as n } from "./M2Icon.js";
import { M2Image as p } from "./M2Image.js";
import { M3Icon as i } from "./M3Icon.js";
import { M3Image as f } from "./M3Image.js";
import { C1Icon as c } from "./C1Icon.js";
import { C1Image as a } from "./C1Image.js";
import { C2Icon as e } from "./C2Icon.js";
import { C2Image as I } from "./C2Image.js";
const s = {
  M2Icon: n,
  M2Image: p,
  M3Icon: i,
  M3Image: f,
  C1Icon: c,
  C1Image: a,
  C2Icon: e,
  C2Image: I
}, P = {
  install: async (o) => {
    t(s, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  s as components,
  P as uiComponentsPlugin
};
