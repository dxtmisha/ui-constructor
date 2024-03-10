import { defineComponent as a, computed as o, openBlock as u, createBlock as M, resolveDynamicComponent as l, unref as d } from "vue";
import { p as f, M as _ } from "./props-D56DBgEz.js";
import { M3MutationItem as k } from "./M3MutationItem.js";
const x = {
  ...f
}, y = /* @__PURE__ */ a({
  name: "M3Mutation",
  __name: "M3Mutation",
  props: { ...x },
  emits: ["load"],
  setup(e, { expose: n, emit: s }) {
    const m = s, r = e, c = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "m3.mutation",
      r,
      {
        emits: m,
        components: {
          item: k
        },
        classes: c,
        styles: i
      }
    ), p = t.render();
    return n(t.expose()), (g, B) => (u(), M(l(d(p))));
  }
}), T = y;
export {
  T as M3Mutation
};
