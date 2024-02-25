import './C2Button.css';
import { defineComponent as m, computed as s, openBlock as g, createBlock as y, resolveDynamicComponent as B, unref as b } from "vue";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as f, d as v, B as h } from "./props-FIZ5m0Po.js";
import { C2Icon as k } from "./C2Icon.js";
import { C2Progress as z } from "./C2Progress.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon"],
  size: ["xl", "lg", "md", "sm", "xs", "x"],
  intent: ["positive", "informative", "negative", "neutral", "default"],
  palette: ["carmine", "iris", "redfish", "goldenrod", "asparagus", "slate", "gray", "alpha", "pistachio", "mint", "jade", "teal", "celestial", "indigo", "orchid", "cerise"]
  // :values [!] System label / Системная метка
}, e = {
  ...v,
  // :default [!] System label / Системная метка
  size: "md",
  intent: "default",
  primary: !0
}, x = {
  ...f,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  size: {
    type: String,
    default: e == null ? void 0 : e.size
  },
  outline: Boolean,
  link: Boolean,
  intent: {
    type: String,
    default: e == null ? void 0 : e.intent
  },
  primary: {
    type: Boolean,
    default: e == null ? void 0 : e.primary
  },
  secondary: Boolean,
  ghost: Boolean,
  palette: String
}, C = /* @__PURE__ */ m({
  name: "C2Button",
  __name: "C2Button",
  props: { ...x },
  emits: ["click"],
  setup(a, { expose: r, emit: c }) {
    const l = c, t = a, p = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-button": !0,
        "c2-button--focus": t.focus,
        "c2-button--disabled": t.disabled,
        "c2-button--selected": t.selected,
        "c2-button--loading": t.loading,
        "c2-button--readonly": t.readonly,
        [`c2-button--adaptive--${t.adaptive}`]: o(n.adaptive, t.adaptive),
        [`c2-button--size--${t.size}`]: o(n.size, t.size),
        "c2-button--outline": t.outline,
        "c2-button--link": t.link,
        [`c2-button--intent--${t.intent}`]: o(n.intent, t.intent),
        "c2-button--primary": t.primary && !t.outline && !t.link && !t.secondary && !t.ghost,
        "c2-button--secondary": t.secondary,
        "c2-button--ghost": t.ghost,
        [`c2-palette--${t.palette}`]: o(n.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new h(
      "c2.button",
      t,
      {
        emits: l,
        components: {
          icon: k,
          progress: z
        },
        classes: p,
        styles: d
      }
    ), u = i.render();
    return r(i.expose()), (_, S) => (g(), y(B(b(u))));
  }
}), w = C;
export {
  w as C2Button
};
