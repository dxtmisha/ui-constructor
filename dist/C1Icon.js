import './C1Icon.css';
import { defineComponent as y, computed as t, openBlock as u, createBlock as h, resolveDynamicComponent as g, unref as B } from "vue";
import { i as e } from "./inArray-BLmbg9f_.js";
import { p as T, d as I, I as z } from "./props--Zfp7cBb.js";
import { C1Image as f } from "./C1Image.js";
const i = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "full"],
  size: ["xs", "sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, o = {
  ...I,
  // :default [!] System label / Системная метка
  animationType: "type1",
  rounded: "md",
  size: "xs"
}, x = {
  ...T,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: o == null ? void 0 : o.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: {
    type: String,
    default: o == null ? void 0 : o.rounded
  },
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  }
}, C = /* @__PURE__ */ y({
  name: "C1Icon",
  __name: "C1Icon",
  props: { ...x },
  emits: ["load"],
  setup(c, { expose: s, emit: r }) {
    const d = r, n = c, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-icon": !0,
        "c1-icon--turn": n.turn,
        "c1-icon--disabled": n.disabled,
        "c1-icon--hide": n.hide,
        [`c1-icon--animationType--${n.animationType}`]: e(i.animationType, n.animationType),
        "c1-icon--animationShow": n.animationShow,
        "c1-icon--overlay": n.overlay,
        "c1-icon--dynamic": n.dynamic,
        "c1-icon--start": n.start,
        "c1-icon--end": n.end,
        "c1-icon--high": n.high,
        [`c1-icon--rounded--${n.rounded}`]: e(i.rounded, n.rounded),
        [`c1-icon--size--${n.size}`]: e(i.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new z(
      "c1.icon",
      n,
      {
        emits: d,
        components: { image: f },
        classes: m,
        styles: p
      }
    ), l = a.render();
    return s(a.expose()), (S, _) => (u(), h(g(B(l))));
  }
}), $ = C;
export {
  $ as C1Icon
};
