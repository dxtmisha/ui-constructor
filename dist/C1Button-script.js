import { defineComponent as b, computed as r, openBlock as x, createBlock as m, resolveDynamicComponent as g, unref as w } from "vue";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as y, d as B, B as f } from "./props-CpUbgiGH.js";
import { C1Icon as k } from "./C1Icon.js";
import { C1Progress as h } from "./C1Progress.js";
import { C1Ripple as z } from "./C1Ripple.js";
const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon"],
  size: ["sm", "md", "lg", "xl"],
  palette: ["webText", "webWhite", "webAccent", "webAccentWhite", "webError", "webGray1", "webGray2", "webGray3", "webGray4", "webGlue1", "webGlue2", "webGlue3", "accent", "success", "error", "notification", "ripple", "background", "backgroundImage", "backgroundNotificationInfo", "backgroundNotificationWarning", "backgroundError", "gray1", "gray2", "gray3", "gray4", "shading", "green1", "green2", "yellow1", "yellow2", "yellow3", "blue1", "extra1", "extra2", "extra3", "extra4", "extra5", "extra6", "extra7", "extra8", "extra9", "extra10", "extra11", "extra12", "extra13", "extra14", "extra15", "extra16", "extra17", "extra18", "extra19"]
  // :values [!] System label / Системная метка
}, t = {
  ...B,
  // :default [!] System label / Системная метка
  size: "md",
  contained: !0
}, C = {
  ...y,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  size: {
    type: String,
    default: t == null ? void 0 : t.size
  },
  contained: {
    type: Boolean,
    default: t == null ? void 0 : t.contained
  },
  outlined: Boolean,
  white: Boolean,
  text: Boolean,
  palette: String
}, v = /* @__PURE__ */ b({
  name: "C1Button",
  __name: "C1Button",
  props: { ...C },
  emits: ["click"],
  setup(i, { expose: c, emit: s }) {
    const l = s, e = i, p = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-button": !0,
        "c1-button--focus": e.focus,
        "c1-button--disabled": e.disabled,
        "c1-button--selected": e.selected,
        "c1-button--loading": e.loading,
        "c1-button--readonly": e.readonly,
        [`c1-button--adaptive--${e.adaptive}`]: o(n.adaptive, e.adaptive),
        [`c1-button--size--${e.size}`]: o(n.size, e.size),
        "c1-button--contained": e.contained && !e.outlined && !e.white && !e.text,
        "c1-button--outlined": e.outlined,
        "c1-button--white": e.white,
        "c1-button--text": e.text,
        [`c1-palette--${e.palette}`]: o(n.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), u = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new f(
      "c1.button",
      e,
      {
        emits: l,
        components: {
          icon: k,
          progress: h,
          ripple: z
        },
        classes: p,
        styles: u
      }
    ), d = a.render();
    return c(a.expose()), (G, _) => (x(), m(g(w(d))));
  }
}), D = v;
export {
  D as C1Button
};
