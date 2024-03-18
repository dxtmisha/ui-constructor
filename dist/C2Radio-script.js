var u = Object.defineProperty;
var f = (o, e, s) => e in o ? u(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s;
var a = (o, e, s) => (f(o, typeof e != "symbol" ? e + "" : e, s), s);
import { defineComponent as C, computed as c, openBlock as g, createBlock as h, resolveDynamicComponent as x, unref as b } from "vue";
import { i as k } from "./inArray-BLmbg9f_.js";
import { C as B, p as y, d as z } from "./props-DTzsiaKN.js";
import { C2Image as I } from "./C2Image.js";
import { C2Progress as R } from "./C2Progress.js";
import { C2FieldMessage as _ } from "./C2FieldMessage.js";
class q extends B {
  constructor() {
    super(...arguments);
    a(this, "type", "radio");
  }
}
const D = {
  ...z
}, t = {
  ...y,
  // :prop [!] System label / Системная метка
  required: Boolean,
  right: Boolean,
  focus: Boolean,
  disabled: Boolean
}, v = {
  // :values [!] System label / Системная метка
  size: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, n = {
  ...D,
  iconCheckbox: "status-dot",
  iconIndeterminate: "status-dot",
  // :default [!] System label / Системная метка
  size: "md"
}, T = {
  ...t,
  iconCheckbox: {
    type: t.iconCheckbox,
    default: n.iconCheckbox
  },
  iconIndeterminate: {
    type: t.iconIndeterminate,
    default: n.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean,
  right: Boolean,
  size: {
    type: String,
    default: n == null ? void 0 : n.size
  },
  focus: Boolean,
  disabled: Boolean
}, V = /* @__PURE__ */ C({
  name: "C2Radio",
  __name: "C2Radio",
  props: { ...T },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(o, { expose: e, emit: s }) {
    const d = s, i = o, p = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-radio": !0,
        "c2-radio--required": i.required,
        "c2-radio--right": i.right,
        [`c2-radio--size--${i.size}`]: k(v.size, i.size),
        "c2-radio--focus": i.focus,
        "c2-radio--disabled": i.disabled
        // :classes-values [!] System label / Системная метка
      }
    })), m = c(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new q(
      "c2.radio",
      i,
      {
        emits: d,
        components: {
          icon: I,
          progress: R,
          message: _
        },
        classes: p,
        styles: m
      }
    ), l = r.render();
    return e(r.expose()), (w, A) => (g(), h(x(b(l))));
  }
}), G = V;
export {
  G as C2Radio
};
