import { defineComponent as l, computed as n, openBlock as u, createBlock as k, resolveDynamicComponent as h, unref as x } from "vue";
import { p as o, d as b, C as f } from "./props-BHZgwoYk.js";
import { M3Image as C } from "./M3Image.js";
import { M3Ripple as g } from "./M3Ripple.js";
import { M3Progress as M } from "./M3Progress.js";
import { M3FieldMessage as _ } from "./M3FieldMessage.js";
const s = {
  ...b,
  iconCheckbox: "check",
  iconIndeterminate: "horizontal_rule"
}, I = {
  ...o,
  iconCheckbox: {
    type: o.iconCheckbox,
    default: s.iconCheckbox
  },
  iconIndeterminate: {
    type: o.iconIndeterminate,
    default: s.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean,
  focus: Boolean,
  disabled: Boolean
}, y = /* @__PURE__ */ l({
  name: "M3Checkbox",
  __name: "M3Checkbox",
  props: { ...I },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(t, { expose: r, emit: i }) {
    const m = i, e = t, a = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-checkbox": !0,
        "m3-checkbox--required": e.required,
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
    return r(c.expose()), (B, q) => (u(), k(h(x(d))));
  }
}), P = y;
export {
  P as M3Checkbox
};
