var u = Object.defineProperty;
var f = (o, e, s) => e in o ? u(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s;
var a = (o, e, s) => (f(o, typeof e != "symbol" ? e + "" : e, s), s);
import { defineComponent as C, computed as c, openBlock as x, createBlock as b, resolveDynamicComponent as g, unref as k } from "vue";
import { i as h } from "./inArray-BLmbg9f_.js";
import { C as y, p as z, d as B } from "./props-BHZgwoYk.js";
import { C2Image as I } from "./C2Image.js";
import { C2Progress as R } from "./C2Progress.js";
import { C2FieldMessage as _ } from "./C2FieldMessage.js";
class q extends y {
  constructor() {
    super(...arguments);
    a(this, "type", "radio");
  }
}
const D = {
  ...B
}, t = {
  ...z,
  // :prop [!] System label / Системная метка
  required: Boolean,
  focus: Boolean,
  disabled: Boolean
}, v = {
  // :values [!] System label / Системная метка
  size: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, i = {
  ...D,
  iconCheckbox: "status-dot",
  iconIndeterminate: "status-dot",
  // :default [!] System label / Системная метка
  size: "md"
}, T = {
  ...t,
  iconCheckbox: {
    type: t.iconCheckbox,
    default: i.iconCheckbox
  },
  iconIndeterminate: {
    type: t.iconIndeterminate,
    default: i.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean,
  size: {
    type: String,
    default: i == null ? void 0 : i.size
  },
  focus: Boolean,
  disabled: Boolean
}, V = /* @__PURE__ */ C({
  name: "C2Radio",
  __name: "C2Radio",
  props: { ...T },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(o, { expose: e, emit: s }) {
    const d = s, n = o, p = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-radio": !0,
        "c2-radio--required": n.required,
        [`c2-radio--size--${n.size}`]: h(v.size, n.size),
        "c2-radio--focus": n.focus,
        "c2-radio--disabled": n.disabled
        // :classes-values [!] System label / Системная метка
      }
    })), m = c(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new q(
      "c2.radio",
      n,
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
    return e(r.expose()), (w, A) => (x(), b(g(k(l))));
  }
}), G = V;
export {
  G as C2Radio
};
