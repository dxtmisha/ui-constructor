import { defineComponent as c, computed as l, openBlock as g, createBlock as B, resolveDynamicComponent as b, unref as h } from "vue";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as f, d as y, B as v } from "./props-DUVaV4I8.js";
import { M3Icon as x } from "./M3Icon.js";
import { M3Progress as _ } from "./M3Progress.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, e = {
  ...y,
  // :default [!] System label / Системная метка
  height: "md",
  filled: !0
}, k = {
  ...f,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: e == null ? void 0 : e.height
  },
  filled: {
    type: Boolean,
    default: e == null ? void 0 : e.filled
  },
  outlined: Boolean,
  text: Boolean,
  elevated: Boolean,
  tonal: Boolean,
  palette: String
}, M = /* @__PURE__ */ c({
  name: "M3Button",
  __name: "M3Button",
  props: { ...k },
  emits: ["click"],
  setup(s, { expose: i, emit: r }) {
    const d = r, t = s, m = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-button": !0,
        "m3-button--focus": t.focus,
        "m3-button--disabled": t.disabled,
        "m3-button--selected": t.selected,
        "m3-button--loading": t.loading,
        "m3-button--readonly": t.readonly,
        [`m3-button--adaptive--${t.adaptive}`]: o(n.adaptive, t.adaptive),
        [`m3-button--height--${t.height}`]: o(n.height, t.height),
        "m3-button--filled": t.filled && !t.outlined && !t.text && !t.elevated && !t.tonal,
        "m3-button--outlined": t.outlined,
        "m3-button--text": t.text,
        "m3-button--elevated": t.elevated,
        "m3-button--tonal": t.tonal,
        [`m3-palette--${t.palette}`]: o(n.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), p = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new v(
      "m3.button",
      t,
      {
        emits: d,
        components: {
          icon: x,
          progress: _
        },
        classes: m,
        styles: p
      }
    ), u = a.render();
    return i(a.expose()), (S, $) => (g(), B(b(h(u))));
  }
}), w = M;
export {
  w as M3Button
};
