import { f as r } from "./forEach-B1ZDH1yu.js";
import { M3Button as n } from "./M3Button.js";
import { M3Icon as i } from "./M3Icon.js";
import { M3Image as p } from "./M3Image.js";
import { M3Mutation as f } from "./M3Mutation.js";
import { M3MutationItem as M } from "./M3MutationItem.js";
import { M3Progress as s } from "./M3Progress.js";
import { M3Ripple as e } from "./M3Ripple.js";
const a = {
  M3Button: n,
  M3Icon: i,
  M3Image: p,
  M3Mutation: f,
  M3MutationItem: M,
  M3Progress: s,
  M3Ripple: e
}, y = {
  install: async (o) => {
    r(a, (t, m) => {
      o.component(m, t);
    });
  }
};
export {
  a as components,
  y as uiM3ComponentsPlugin
};
