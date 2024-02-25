import './M2Button.css';
import { defineComponent as u, computed as a, openBlock as g, createBlock as h, resolveDynamicComponent as b, unref as B } from "vue";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as y, d as f, B as k } from "./props-DivFRTM3.js";
import { M2Icon as x } from "./M2Icon.js";
import { M2Progress as v } from "./M2Progress.js";
import { M2Ripple as M } from "./M2Ripple.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "grey", "greyBlue", "white", "black", "blackLight"]
  // :values [!] System label / Системная метка
}, t = {
  ...f,
  // :default [!] System label / Системная метка
  height: "md",
  contained: !0
}, _ = {
  ...y,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: t == null ? void 0 : t.height
  },
  contained: {
    type: Boolean,
    default: t == null ? void 0 : t.contained
  },
  outlined: Boolean,
  text: Boolean,
  palette: String
}, w = /* @__PURE__ */ u({
  name: "M2Button",
  __name: "M2Button",
  props: { ..._ },
  emits: ["click"],
  setup(r, { expose: l, emit: s }) {
    const p = s, e = r, m = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-button": !0,
        "m2-button--focus": e.focus,
        "m2-button--disabled": e.disabled,
        "m2-button--selected": e.selected,
        "m2-button--loading": e.loading,
        "m2-button--readonly": e.readonly,
        [`m2-button--adaptive--${e.adaptive}`]: o(n.adaptive, e.adaptive),
        [`m2-button--height--${e.height}`]: o(n.height, e.height),
        "m2-button--contained": e.contained && !e.outlined && !e.text,
        "m2-button--outlined": e.outlined,
        "m2-button--text": e.text,
        [`m2-palette--${e.palette}`]: o(n.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), c = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new k(
      "m2.button",
      e,
      {
        emits: p,
        components: {
          icon: x,
          progress: v,
          ripple: M
        },
        classes: m,
        styles: c
      }
    ), d = i.render();
    return l(i.expose()), (S, $) => (g(), h(b(B(d))));
  }
}), G = w;
export {
  G as M2Button
};
