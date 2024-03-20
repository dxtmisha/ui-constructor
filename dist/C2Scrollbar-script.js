import { defineComponent as p, computed as r, openBlock as b, createBlock as m, resolveDynamicComponent as d, unref as u } from "vue";
import { p as v, S } from "./props-CWBtSxkn.js";
const _ = {
  ...v,
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
}, f = /* @__PURE__ */ p({
  name: "C2Scrollbar",
  __name: "C2Scrollbar",
  props: { ..._ },
  setup(s, { expose: n, emit: c }) {
    const l = c, e = s, t = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-scrollbar": !0,
        "c2-scrollbar--visible": e.visible,
        "c2-scrollbar--border": e.border,
        "c2-scrollbar--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), a = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new S(
      "c2.scrollbar",
      e,
      {
        emits: l,
        classes: t,
        styles: a
      }
    ), i = o.render();
    return n(o.expose()), (B, C) => (b(), m(d(u(i))));
  }
}), y = f;
export {
  y as C2Scrollbar
};
