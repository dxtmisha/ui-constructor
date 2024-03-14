import { f as t } from "./toArray-J4lAhJG7.js";
import { M3Button as i } from "./M3Button.js";
import { M3FieldMessage as p } from "./M3FieldMessage.js";
import { M3Icon as n } from "./M3Icon.js";
import { M3Image as M } from "./M3Image.js";
import { M3Input as f } from "./M3Input.js";
import { M3Mask as e } from "./M3Mask.js";
import { M3Mutation as s } from "./M3Mutation.js";
import { M3MutationItem as a } from "./M3MutationItem.js";
import { M3Progress as l } from "./M3Progress.js";
import { M3Ripple as c } from "./M3Ripple.js";
import { M3Scrollbar as u } from "./M3Scrollbar.js";
import { M3Skeleton as I } from "./M3Skeleton.js";
import { M3SkeletonItem as g } from "./M3SkeletonItem.js";
import { M3Window as k } from "./M3Window.js";
const S = {
  M3Button: i,
  M3FieldMessage: p,
  M3Icon: n,
  M3Image: M,
  M3Input: f,
  M3Mask: e,
  M3Mutation: s,
  M3MutationItem: a,
  M3Progress: l,
  M3Ripple: c,
  M3Scrollbar: u,
  M3Skeleton: I,
  M3SkeletonItem: g,
  M3Window: k
}, v = {
  install: async (o) => {
    t(S, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  S as components,
  v as uiM3ComponentsPlugin
};
