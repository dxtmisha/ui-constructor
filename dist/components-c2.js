import { f as t } from "./toArray-J4lAhJG7.js";
import { C2Button as i } from "./C2Button.js";
import { C2Checkbox as p } from "./C2Checkbox.js";
import { C2FieldMessage as n } from "./C2FieldMessage.js";
import { C2Icon as f } from "./C2Icon.js";
import { C2Image as C } from "./C2Image.js";
import { C2Mutation as e } from "./C2Mutation.js";
import { C2MutationItem as s } from "./C2MutationItem.js";
import { C2Progress as a } from "./C2Progress.js";
import { C2Radio as c } from "./C2Radio.js";
import { C2Ripple as l } from "./C2Ripple.js";
import { C2Skeleton as u } from "./C2Skeleton.js";
import { C2Switch as g } from "./C2Switch.js";
const h = {
  C2Button: i,
  C2Checkbox: p,
  C2FieldMessage: n,
  C2Icon: f,
  C2Image: C,
  C2Mutation: e,
  C2MutationItem: s,
  C2Progress: a,
  C2Radio: c,
  C2Ripple: l,
  C2Skeleton: u,
  C2Switch: g
}, F = {
  install: async (o) => {
    t(h, (m, r) => {
      o.component(r, m);
    });
  }
};
export {
  h as components,
  F as uiC2ComponentsPlugin
};
