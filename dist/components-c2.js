import { f as t } from "./toArray-J4lAhJG7.js";
import { C2Button as i } from "./C2Button.js";
import { C2Checkbox as p } from "./C2Checkbox.js";
import { C2FieldMessage as n } from "./C2FieldMessage.js";
import { C2Icon as e } from "./C2Icon.js";
import { C2Image as f } from "./C2Image.js";
import { C2Mutation as C } from "./C2Mutation.js";
import { C2MutationItem as s } from "./C2MutationItem.js";
import { C2Progress as a } from "./C2Progress.js";
import { C2Ripple as c } from "./C2Ripple.js";
import { C2Skeleton as l } from "./C2Skeleton.js";
const u = {
  C2Button: i,
  C2Checkbox: p,
  C2FieldMessage: n,
  C2Icon: e,
  C2Image: f,
  C2Mutation: C,
  C2MutationItem: s,
  C2Progress: a,
  C2Ripple: c,
  C2Skeleton: l
}, E = {
  install: async (o) => {
    t(u, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  u as components,
  E as uiC2ComponentsPlugin
};
