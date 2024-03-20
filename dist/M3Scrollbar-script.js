import { defineComponent as m, computed as r, openBlock as p, createBlock as b, resolveDynamicComponent as d, unref as u } from "vue";
import { p as v, S } from "./props-CWBtSxkn.js";
const _ = {
  ...v,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, f = /* @__PURE__ */ m({
  name: "M3Scrollbar",
  __name: "M3Scrollbar",
  props: { ..._ },
  setup(s, { expose: n, emit: l }) {
    const c = l, e = s, t = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-scrollbar": !0,
        "m3-scrollbar--visible": e.visible,
        "m3-scrollbar--border": e.border,
        "m3-scrollbar--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), a = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new S(
      "m3.scrollbar",
      e,
      {
        emits: c,
        classes: t,
        styles: a
      }
    ), i = o.render();
    return n(o.expose()), (B, k) => (p(), b(d(u(i))));
  }
}), M = f;
export {
  M as M3Scrollbar
};
