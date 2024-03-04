import { defineComponent as y, computed as t, openBlock as u, createBlock as h, resolveDynamicComponent as g, unref as B } from "vue";
import { i as o } from "./inArray-BLmbg9f_.js";
import { p as T, d as f, I } from "./props-CWYsEy3m.js";
import { M2Image as x } from "./M2Image.js";
const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, i = {
  ...f,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, z = {
  ...T,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: i == null ? void 0 : i.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
}, S = /* @__PURE__ */ y({
  name: "M2Icon",
  __name: "M2Icon",
  props: { ...z },
  emits: ["load"],
  setup(s, { expose: m, emit: r }) {
    const c = r, n = s, d = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-icon": !0,
        "m2-icon--turn": n.turn,
        "m2-icon--disabled": n.disabled,
        "m2-icon--hide": n.hide,
        [`m2-icon--animationType--${n.animationType}`]: o(e.animationType, n.animationType),
        "m2-icon--animationShow": n.animationShow,
        "m2-icon--overlay": n.overlay,
        "m2-icon--dynamic": n.dynamic,
        "m2-icon--start": n.start,
        "m2-icon--end": n.end,
        "m2-icon--high": n.high,
        [`m2-icon--rounded--${n.rounded}`]: o(e.rounded, n.rounded),
        [`m2-icon--size--${n.size}`]: o(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new I(
      "m2.icon",
      n,
      {
        emits: c,
        components: { image: x },
        classes: d,
        styles: p
      }
    ), l = a.render();
    return m(a.expose()), (_, k) => (u(), h(g(B(l))));
  }
}), $ = S;
export {
  $ as M2Icon
};
