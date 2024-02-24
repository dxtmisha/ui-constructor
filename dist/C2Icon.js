import './C2Icon.css';
import { defineComponent as h, computed as t, openBlock as d, createBlock as v, resolveDynamicComponent as g, unref as B } from "vue";
import { i } from "./getBind-BlxhXjR2.js";
import { p as u, d as T, I } from "./props-DvKvgJvH.js";
import { C2Image as z } from "./C2Image.js";
const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  variation: ["icon", "payment", "avatar", "country"],
  shape: ["rect", "circle", "box"],
  size: ["12", "16", "20", "24", "32"]
  // :values [!] System label / Системная метка
}, o = {
  ...T,
  // :default [!] System label / Системная метка
  animationType: "type1",
  variation: "icon",
  shape: "box",
  size: "24"
}, S = {
  ...u,
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
  variation: {
    type: String,
    default: o == null ? void 0 : o.variation
  },
  shape: {
    type: String,
    default: o == null ? void 0 : o.shape
  },
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  }
}, x = /* @__PURE__ */ h({
  name: "C2Icon",
  __name: "C2Icon",
  props: { ...S },
  emits: ["load"],
  setup(c, { expose: s, emit: r }) {
    const p = r, n = c, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-icon": !0,
        "c2-icon--turn": n.turn,
        "c2-icon--disabled": n.disabled,
        "c2-icon--hide": n.hide,
        [`c2-icon--animationType--${n.animationType}`]: i(e.animationType, n.animationType),
        "c2-icon--animationShow": n.animationShow,
        "c2-icon--overlay": n.overlay,
        "c2-icon--dynamic": n.dynamic,
        "c2-icon--start": n.start,
        "c2-icon--end": n.end,
        "c2-icon--high": n.high,
        [`c2-icon--variation--${n.variation}`]: i(e.variation, n.variation),
        [`c2-icon--shape--${n.shape}`]: i(e.shape, n.shape),
        [`c2-icon--size--${n.size}`]: i(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), y = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new I(
      "c2.icon",
      n,
      {
        emits: p,
        components: { image: z },
        classes: m,
        styles: y
      }
    ), l = a.render();
    return s(a.expose()), (C, _) => (d(), v(g(B(l))));
  }
}), $ = x;
export {
  $ as C2Icon
};
