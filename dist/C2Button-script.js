import { defineComponent as m, computed as a, openBlock as g, createBlock as y, resolveDynamicComponent as B, unref as b } from "vue";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as f, d as v, B as h } from "./props-CpUbgiGH.js";
import { C2Icon as z } from "./C2Icon.js";
import { C2Progress as x } from "./C2Progress.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon"],
  size: ["x", "xs", "sm", "md", "lg", "xl"],
  palette: ["carmine", "iris", "redfish", "goldenrod", "asparagus", "slate", "gray", "alpha", "pistachio", "mint", "jade", "teal", "celestial", "indigo", "orchid", "cerise", "informative", "positive", "negative", "neutral"]
  // :values [!] System label / Системная метка
}, e = {
  ...v,
  // :default [!] System label / Системная метка
  primary: !0,
  size: "md"
}, C = {
  ...f,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  intent: Boolean,
  primary: {
    type: Boolean,
    default: e == null ? void 0 : e.primary
  },
  secondary: Boolean,
  outline: Boolean,
  ghost: Boolean,
  size: {
    type: String,
    default: e == null ? void 0 : e.size
  },
  palette: String
}, _ = /* @__PURE__ */ m({
  name: "C2Button",
  __name: "C2Button",
  props: { ...C },
  emits: ["click"],
  setup(i, { expose: r, emit: c }) {
    const l = c, t = i, p = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-button": !0,
        "c2-button--focus": t.focus,
        "c2-button--disabled": t.disabled,
        "c2-button--selected": t.selected,
        "c2-button--loading": t.loading,
        "c2-button--readonly": t.readonly,
        [`c2-button--adaptive--${t.adaptive}`]: o(n.adaptive, t.adaptive),
        "c2-button--intent": t.intent,
        "c2-button--primary": t.primary && !t.secondary && !t.outline && !t.ghost,
        "c2-button--secondary": t.secondary,
        "c2-button--outline": t.outline,
        "c2-button--ghost": t.ghost,
        [`c2-button--size--${t.size}`]: o(n.size, t.size),
        [`c2-palette c2-palette--${t.palette}`]: o(n.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), s = new h(
      "c2.button",
      t,
      {
        emits: l,
        components: {
          icon: z,
          progress: x
        },
        classes: p,
        styles: d
      }
    ), u = s.render();
    return r(s.expose()), (k, S) => (g(), y(B(b(u))));
  }
}), w = _;
export {
  w as C2Button
};
