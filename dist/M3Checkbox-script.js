import { defineComponent as l, computed as n, openBlock as h, createBlock as u, resolveDynamicComponent as k, unref as x } from "vue";
import { p as o, d as b, C as f } from "./props-DTzsiaKN.js";
import { M3Image as C } from "./M3Image.js";
import { M3Ripple as g } from "./M3Ripple.js";
import { M3Progress as M } from "./M3Progress.js";
import { M3FieldMessage as _ } from "./M3FieldMessage.js";
const t = {
  ...b,
  iconCheckbox: "check",
  iconIndeterminate: "horizontal_rule"
}, B = {
  ...o,
  iconCheckbox: {
    type: o.iconCheckbox,
    default: t.iconCheckbox
  },
  iconIndeterminate: {
    type: o.iconIndeterminate,
    default: t.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean,
  right: Boolean,
  focus: Boolean,
  disabled: Boolean
}, I = /* @__PURE__ */ l({
  name: "M3Checkbox",
  __name: "M3Checkbox",
  props: { ...B },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(s, { expose: r, emit: i }) {
    const m = i, e = s, a = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-checkbox": !0,
        "m3-checkbox--required": e.required,
        "m3-checkbox--right": e.right,
        "m3-checkbox--focus": e.focus,
        "m3-checkbox--disabled": e.disabled
        // :classes-values [!] System label / Системная метка
      }
    })), p = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), c = new f(
      "m3.checkbox",
      e,
      {
        emits: m,
        components: {
          icon: C,
          ripple: g,
          progress: M,
          message: _
        },
        classes: a,
        styles: p
      }
    ), d = c.render();
    return r(c.expose()), (y, q) => (h(), u(k(x(d))));
  }
}), P = I;
export {
  P as M3Checkbox
};
