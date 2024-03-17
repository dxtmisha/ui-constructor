import { defineComponent as l, computed as s, openBlock as m, createBlock as d, resolveDynamicComponent as g, unref as f } from "vue";
import { p as u, F as M } from "./FieldMessageDesign-BdZzFt32.js";
const F = {
  ...u
}, _ = /* @__PURE__ */ l({
  name: "C2FieldMessage",
  __name: "C2FieldMessage",
  props: { ...F },
  setup(n, { expose: o, emit: t }) {
    const c = t, r = n, p = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new M(
      "c2.fieldMessage",
      r,
      {
        emits: c,
        classes: p,
        styles: a
      }
    ), i = e.render();
    return o(e.expose()), (C, k) => (m(), d(g(f(i))));
  }
}), B = _;
export {
  B as C2FieldMessage
};
