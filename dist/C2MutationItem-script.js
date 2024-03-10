import { defineComponent as p, computed as e, openBlock as u, createBlock as l, resolveDynamicComponent as I, unref as d } from "vue";
import { p as M, M as _ } from "./props-Dc2Gg3-V.js";
const f = {
  ...M
}, C = /* @__PURE__ */ p({
  name: "C2MutationItem",
  __name: "C2MutationItem",
  props: { ...f },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const m = s, c = o, r = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "c2.mutationItem",
      c,
      {
        emits: m,
        classes: r,
        styles: a
      }
    ), i = t.render();
    return n(t.expose()), (k, x) => (u(), l(I(d(i))));
  }
}), B = C;
export {
  B as C2MutationItem
};
