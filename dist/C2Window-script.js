import { defineComponent as p, computed as s, openBlock as g, createBlock as u, resolveDynamicComponent as f, unref as v } from "vue";
import { i as r } from "./isFilled-ClO-1E4U.js";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as y, d as S, W as T } from "./props-CpwNgB99.js";
import { C2Scrollbar as W } from "./C2Scrollbar.js";
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
  name: "C2Window",
  __name: "C2Window",
  props: { ...x },
  emits: ["window"],
  setup(c, { expose: a, emit: d }) {
    const l = d, t = c, w = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-window": !0,
        "c2-window--width--custom": r(t.width) && !o(i.width, t.width),
        [`c2-window--width--${t.width}`]: o(i.width, t.width),
        "c2-window--height--custom": r(t.height) && !o(i.height, t.height),
        [`c2-window--height--${t.height}`]: o(i.height, t.height),
        [`c2-window--adaptive--${t.adaptive}`]: o(i.adaptive, t.adaptive),
        "c2-window--overscroll": t.overscroll,
        "c2-window--dense": t.dense,
        "c2-window--fullscreen": t.fullscreen,
        [`c2-window--alignment--${t.alignment}`]: o(i.alignment, t.alignment),
        [`c2-window--origin--${t.origin}`]: o(i.origin, t.origin)
        // :classes-values [!] System label / Системная метка
      }
    })), m = s(() => ({
      // :styles-values [!] System label / Системная метка
      "c2-window-sys-width": t.width ?? null,
      "c2-window-sys-height": t.height ?? null
      // :styles-values [!] System label / Системная метка
    })), n = new T(
      "c2.window",
      t,
      {
        emits: l,
        components: {
          scrollbar: W
        },
        classes: w,
        styles: m
      }
    ), h = n.render();
    return a(n.expose()), (C, _) => (g(), u(f(v(h))));
  }
}), A = B;
export {
  A as C2Window
};
