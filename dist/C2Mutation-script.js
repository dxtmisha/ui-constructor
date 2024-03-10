import { defineComponent as a, computed as o, openBlock as u, createBlock as l, resolveDynamicComponent as M, unref as d } from "vue";
import { p as f, M as C } from "./props-D56DBgEz.js";
import { C2MutationItem as _ } from "./C2MutationItem.js";
const k = {
  ...f
}, x = /* @__PURE__ */ a({
  name: "C2Mutation",
  __name: "C2Mutation",
  props: { ...k },
  emits: ["load"],
  setup(e, { expose: n, emit: s }) {
    const c = s, r = e, i = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutation": !0
        // :classes-values [!] System label / Системная метка
      }
    })), m = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new C(
      "c2.mutation",
      r,
      {
        emits: c,
        components: {
          item: _
        },
        classes: i,
        styles: m
      }
    ), p = t.render();
    return n(t.expose()), (y, g) => (u(), l(M(d(p))));
  }
}), T = x;
export {
  T as C2Mutation
};
