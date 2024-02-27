import { defineComponent as p, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";
import { p as I, I as B } from "./props-CDUqm5aI.js";
const _ = {
  ...I,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, f = /* @__PURE__ */ p({
  name: "C1Image",
  __name: "C1Image",
  props: { ..._ },
  emits: ["load"],
  setup(s, { expose: a, emit: t }) {
    const c = t, e = s, i = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-image": !0,
        "c1-image--turn": e.turn,
        "c1-image--disabled": e.disabled,
        "c1-image--hide": e.hide,
        "c1-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), m = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new B(
      "c1.image",
      e,
      {
        emits: c,
        classes: i,
        styles: m
      }
    ), r = o.render();
    return a(o.expose()), (C, h) => (d(), l(g(u(r))));
  }
}), x = f;
export {
  x as C1Image
};
