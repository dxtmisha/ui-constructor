import { f as r } from "./forEach-B1ZDH1yu.js";
import { C2Button as n } from "./C2Button.js";
import { C2Icon as i } from "./C2Icon.js";
import { C2Image as p } from "./C2Image.js";
import { C2Mutation as f } from "./C2Mutation.js";
import { C2MutationItem as s } from "./C2MutationItem.js";
import { C2Progress as C } from "./C2Progress.js";
import { C2Ripple as e } from "./C2Ripple.js";
const a = {
  C2Button: n,
  C2Icon: i,
  C2Image: p,
  C2Mutation: f,
  C2MutationItem: s,
  C2Progress: C,
  C2Ripple: e
}, x = {
  install: async (o) => {
    r(a, (t, m) => {
      o.component(m, t);
    });
  }
};
export {
  a as components,
  x as uiC2ComponentsPlugin
};
