import './M3Image.css';
import { defineComponent as c, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";
import { p as I, I as B } from "./props-BkWITUFK.js";
const _ = {
  ...I,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, f = /* @__PURE__ */ c({
  name: "M3Image",
  __name: "M3Image",
  props: { ..._ },
  emits: ["load"],
  setup(s, { expose: a, emit: t }) {
    const m = t, e = s, i = n(() => ({
      main: {
        // TODO: User state classes / Пользовательские классы состояния
        // :classes-values [!] System label / Системная метка
        "m3-image": !0,
        "m3-image--turn": e.turn,
        "m3-image--disabled": e.disabled,
        "m3-image--hide": e.hide,
        "m3-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
      // TODO: User subclasses / Пользовательские подклассы
    })), r = n(() => ({
      // TODO: User styles / Пользовательские стили
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new B(
      "m3.image",
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
  b as M3Image
};
