import { defineComponent as p, computed as e, openBlock as u, createBlock as M, resolveDynamicComponent as l, unref as I } from "vue";
import { p as d, M as _ } from "./props-D1fZbXxa.js";
const f = {
  ...d
}, k = /* @__PURE__ */ p({
  name: "M3MutationItem",
  __name: "M3MutationItem",
  props: { ...f },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const m = s, r = o, c = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "m3.mutationItem",
      r,
      {
        emits: m,
        classes: c,
        styles: a
      }
    ), i = t.render();
    return n(t.expose()), (x, y) => (u(), M(l(I(i))));
  }
}), C = k;
export {
  C as M3MutationItem
};
