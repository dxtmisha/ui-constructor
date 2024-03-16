import { f as t } from "./toArray-J4lAhJG7.js";
import { M3Button as i } from "./M3Button.js";
import { M3Checkbox as p } from "./M3Checkbox.js";
import { M } from "./index-DeS7TDNN.js";
import { M3Icon as n } from "./M3Icon.js";
import { M3Image as f } from "./M3Image.js";
import { M3Input as e } from "./M3Input.js";
import { M3Mask as s } from "./M3Mask.js";
import { M3Mutation as a } from "./M3Mutation.js";
import { M3MutationItem as c } from "./M3MutationItem.js";
import { M3Progress as l } from "./M3Progress.js";
import { M3Ripple as u } from "./M3Ripple.js";
import { M3Scrollbar as I } from "./M3Scrollbar.js";
import { M3Skeleton as g } from "./M3Skeleton.js";
import { M3SkeletonItem as k } from "./M3SkeletonItem.js";
import { M3Window as S } from "./M3Window.js";
const b = {
  M3Button: i,
  M3Checkbox: p,
  M3FieldMessage: M,
  M3Icon: n,
  M3Image: f,
  M3Input: e,
  M3Mask: s,
  M3Mutation: a,
  M3MutationItem: c,
  M3Progress: l,
  M3Ripple: u,
  M3Scrollbar: I,
  M3Skeleton: g,
  M3SkeletonItem: k,
  M3Window: S
}, A = {
  install: async (o) => {
    t(b, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  b as components,
  A as uiM3ComponentsPlugin
};
