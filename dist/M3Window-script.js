import { defineComponent as p, computed as s, openBlock as g, createBlock as u, resolveDynamicComponent as f, unref as v } from "vue";
import { i as r } from "./isFilled-ClO-1E4U.js";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as y, d as S, W as T } from "./props-CpwNgB99.js";
import { M3Scrollbar as W } from "./M3Scrollbar.js";
const i = {
  // :values [!] System label / Системная метка
  width: ["auto", "max", "sm", "md", "lg"],
  height: ["auto", "max", "sm", "md", "lg"],
  adaptive: ["menu", "modal", "modalDynamic", "static", "auto", "staticSm", "staticMd", "staticLg"],
  alignment: ["center", "top", "right", "bottom", "left"],
  origin: ["center", "top", "right", "bottom", "left", "topToBottom", "rightToLeft", "bottomToTop", "leftToRight"]
  // :values [!] System label / Системная метка
}, e = {
  ...S,
  // :default [!] System label / Системная метка
  adaptive: "auto",
  overscroll: !0
}, x = {
  ...y,
  // :prop [!] System label / Системная метка
  width: String,
  height: String,
  adaptive: {
    type: String,
    default: e == null ? void 0 : e.adaptive
  },
  overscroll: {
    type: Boolean,
    default: e == null ? void 0 : e.overscroll
  },
  dense: Boolean,
  fullscreen: Boolean,
  alignment: String,
  origin: String
}, B = /* @__PURE__ */ p({
  name: "M3Window",
  __name: "M3Window",
  props: { ...x },
  emits: ["window"],
  setup(m, { expose: a, emit: d }) {
    const l = d, t = m, w = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-window": !0,
        "m3-window--width--custom": r(t.width) && !o(i.width, t.width),
        [`m3-window--width--${t.width}`]: o(i.width, t.width),
        "m3-window--height--custom": r(t.height) && !o(i.height, t.height),
        [`m3-window--height--${t.height}`]: o(i.height, t.height),
        [`m3-window--adaptive--${t.adaptive}`]: o(i.adaptive, t.adaptive),
        "m3-window--overscroll": t.overscroll,
        "m3-window--dense": t.dense,
        "m3-window--fullscreen": t.fullscreen,
        [`m3-window--alignment--${t.alignment}`]: o(i.alignment, t.alignment),
        [`m3-window--origin--${t.origin}`]: o(i.origin, t.origin)
        // :classes-values [!] System label / Системная метка
      }
    })), c = s(() => ({
      // :styles-values [!] System label / Системная метка
      "m3-window-sys-width": t.width ?? null,
      "m3-window-sys-height": t.height ?? null
      // :styles-values [!] System label / Системная метка
    })), n = new T(
      "m3.window",
      t,
      {
        emits: l,
        components: {
          scrollbar: W
        },
        classes: w,
        styles: c
      }
    ), h = n.render();
    return a(n.expose()), (_, b) => (g(), u(f(v(h))));
  }
}), L = B;
export {
  L as M3Window
};
