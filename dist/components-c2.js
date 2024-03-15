import { f as r } from "./toArray-J4lAhJG7.js";
import { C2Button as n } from "./C2Button.js";
import { C2Icon as i } from "./C2Icon.js";
import { C2Image as p } from "./C2Image.js";
import { C2Mutation as f } from "./C2Mutation.js";
import { C2MutationItem as e } from "./C2MutationItem.js";
import { C2Progress as C } from "./C2Progress.js";
import { C2Ripple as s } from "./C2Ripple.js";
import { C2Skeleton as a } from "./C2Skeleton.js";
const c = {
  C2Button: n,
  C2Icon: i,
  C2Image: p,
  C2Mutation: f,
  C2MutationItem: e,
  C2Progress: C,
  C2Ripple: s,
  C2Skeleton: a
}, y = {
  install: async (o) => {
    r(c, (t, m) => {
      o.component(m, t);
    });
  }
};
export {
  c as components,
  y as uiC2ComponentsPlugin
};
