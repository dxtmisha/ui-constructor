import { f as t } from "./toArray-J4lAhJG7.js";
import { M3Button as i } from "./M3Button.js";
import { M3FieldMessage as p } from "./M3FieldMessage.js";
import { M3Icon as n } from "./M3Icon.js";
import { M3Image as M } from "./M3Image.js";
import { M3Input as f } from "./M3Input.js";
import { M3Mask as s } from "./M3Mask.js";
import { M3Mutation as e } from "./M3Mutation.js";
import { M3MutationItem as a } from "./M3MutationItem.js";
import { M3Progress as c } from "./M3Progress.js";
import { M3Ripple as l } from "./M3Ripple.js";
import { M3Scrollbar as u } from "./M3Scrollbar.js";
import { M3Window as g } from "./M3Window.js";
const I = {
  M3Button: i,
  M3FieldMessage: p,
  M3Icon: n,
  M3Image: M,
  M3Input: f,
  M3Mask: s,
  M3Mutation: e,
  M3MutationItem: a,
  M3Progress: c,
  M3Ripple: l,
  M3Scrollbar: u,
  M3Window: g
}, S = {
  install: async (o) => {
    t(I, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  I as components,
  S as uiM3ComponentsPlugin
};
