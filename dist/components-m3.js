import { f as t } from "./forEach-B1ZDH1yu.js";
import { M3Button as i } from "./M3Button.js";
import { M3Icon as n } from "./M3Icon.js";
import { M3Image as p } from "./M3Image.js";
import { M3Mutation as f } from "./M3Mutation.js";
import { M3MutationItem as M } from "./M3MutationItem.js";
import { M3Progress as s } from "./M3Progress.js";
import { M3Ripple as a } from "./M3Ripple.js";
import { M3Scrollbar as c } from "./M3Scrollbar.js";
import { M3Window as e } from "./M3Window.js";
const l = {
  M3Button: i,
  M3Icon: n,
  M3Image: p,
  M3Mutation: f,
  M3MutationItem: M,
  M3Progress: s,
  M3Ripple: a,
  M3Scrollbar: c,
  M3Window: e
}, B = {
  install: async (o) => {
    t(l, (r, m) => {
      o.component(m, r);
    });
  }
};
export {
  l as components,
  B as uiM3ComponentsPlugin
};
