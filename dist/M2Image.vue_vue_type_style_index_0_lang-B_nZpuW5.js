import { defineComponent as c, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";
import { p as _, I as B } from "./props-BkWITUFK.js";
const I = {
  ..._,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, x = /* @__PURE__ */ c({
  name: "M2Image",
  __name: "M2Image",
  props: { ...I },
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
    return a(o.expose()), (f, h) => (d(), l(g(u(p))));
  }
});
export {
  x as _
};
