import { defineComponent as p, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";
import { p as _, I as B } from "./props-BkWITUFK.js";
const I = {
  ..._,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, x = /* @__PURE__ */ p({
  name: "C2Image",
  __name: "C2Image",
  props: { ...I },
  emits: ["load"],
  setup(s, { expose: a, emit: t }) {
    const i = t, e = s, c = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-image": !0,
        "c2-image--turn": e.turn,
        "c2-image--disabled": e.disabled,
        "c2-image--hide": e.hide,
        "c2-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), m = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new B(
      "c2.image",
      e,
      {
        emits: i,
        classes: c,
        styles: m
      }
    ), r = o.render();
    return a(o.expose()), (f, h) => (d(), l(g(u(r))));
  }
});
export {
  x as _
};
