import { defineComponent as c, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";
import { p as I, I as B } from "./props-C7IZVTXX.js";
const _ = {
  ...I,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, f = /* @__PURE__ */ c({
  name: "M2Image",
  __name: "M2Image",
  props: { ..._ },
  emits: ["load"],
  setup(s, { expose: a, emit: t }) {
    const m = t, e = s, i = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-image": !0,
        "m2-image--turn": e.turn,
        "m2-image--disabled": e.disabled,
        "m2-image--hide": e.hide,
        "m2-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), r = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new B(
      "m2.image",
      e,
      {
        emits: m,
        classes: i,
        styles: r
      }
    ), p = o.render();
    return a(o.expose()), (h, k) => (d(), l(g(u(p))));
  }
}), b = f;
export {
  b as M2Image
};
