import { f as t } from "./forEach-B1ZDH1yu.js";
import { M3Button as i } from "./M3Button.js";
import { M3Icon as p } from "./M3Icon.js";
import { M3Image as n } from "./M3Image.js";
import { M3Input as M } from "./M3Input.js";
import { M3Mask as f } from "./M3Mask.js";
import { M3Mutation as s } from "./M3Mutation.js";
import { M3MutationItem as a } from "./M3MutationItem.js";
import { M3Progress as c } from "./M3Progress.js";
import { M3Ripple as e } from "./M3Ripple.js";
import { M3Scrollbar as l } from "./M3Scrollbar.js";
import { M3Window as u } from "./M3Window.js";
const I = {
  M3Button: i,
  M3Icon: p,
  M3Image: n,
  M3Input: M,
  M3Mask: f,
  M3Mutation: s,
  M3MutationItem: a,
  M3Progress: c,
  M3Ripple: e,
  M3Scrollbar: l,
  M3Window: u
}, R = {
  install: async (o) => {
    t(I, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  I as components,
  R as uiM3ComponentsPlugin
};
