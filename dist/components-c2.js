import { f as t } from "./toArray-J4lAhJG7.js";
import { C2Button as i } from "./C2Button.js";
import { C2Checkbox as p } from "./C2Checkbox.js";
import { C2Chip as C } from "./C2Chip.js";
import { C2FieldMessage as f } from "./C2FieldMessage.js";
import { C2Icon as n } from "./C2Icon.js";
import { C2Image as e } from "./C2Image.js";
import { C2Mutation as s } from "./C2Mutation.js";
import { C2MutationItem as a } from "./C2MutationItem.js";
import { C2Progress as c } from "./C2Progress.js";
import { C2Radio as l } from "./C2Radio.js";
import { C2Ripple as u } from "./C2Ripple.js";
import { C2Scrollbar as g } from "./C2Scrollbar.js";
import { C2Skeleton as h } from "./C2Skeleton.js";
import { C2Switch as d } from "./C2Switch.js";
import { C2Window as I } from "./C2Window.js";
const M = {
  C2Button: i,
  C2Checkbox: p,
  C2Chip: C,
  C2FieldMessage: f,
  C2Icon: n,
  C2Image: e,
  C2Mutation: s,
  C2MutationItem: a,
  C2Progress: c,
  C2Radio: l,
  C2Ripple: u,
  C2Scrollbar: g,
  C2Skeleton: h,
  C2Switch: d,
  C2Window: I
}, A = {
  install: async (o) => {
    t(M, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  M as components,
  A as uiC2ComponentsPlugin
};
