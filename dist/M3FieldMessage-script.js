import { defineComponent as m, computed as s, openBlock as l, createBlock as d, resolveDynamicComponent as M, unref as g } from "vue";
import { p as f, F as u } from "./FieldMessageDesign-BdZzFt32.js";
const F = {
  ...f
}, _ = /* @__PURE__ */ m({
  name: "M3FieldMessage",
  __name: "M3FieldMessage",
  props: { ...F },
  setup(n, { expose: o, emit: t }) {
    const r = t, c = n, p = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new u(
      "m3.fieldMessage",
      c,
      {
        emits: r,
        classes: p,
        styles: a
      }
    ), i = e.render();
    return o(e.expose()), (k, x) => (l(), d(M(g(i))));
  }
}), C = _;
export {
  C as M3FieldMessage
};
