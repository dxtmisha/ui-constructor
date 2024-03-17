import { defineComponent as u, computed as n, openBlock as l, createBlock as k, resolveDynamicComponent as x, unref as b } from "vue";
import { i as h } from "./inArray-BLmbg9f_.js";
import { p as c, d as C, C as f } from "./props-CzcOXFoA.js";
import { C2Image as g } from "./C2Image.js";
import { C2Progress as z } from "./C2Progress.js";
import { C2FieldMessage as y } from "./C2FieldMessage.js";
const I = {
  // :values [!] System label / Системная метка
  size: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, o = {
  ...C,
  iconCheckbox: "check-md",
  iconIndeterminate: "minus-md",
  // :default [!] System label / Системная метка
  size: "md"
}, _ = {
  ...c,
  iconCheckbox: {
    type: c.iconCheckbox,
    default: o.iconCheckbox
  },
  iconIndeterminate: {
    type: c.iconIndeterminate,
    default: o.iconIndeterminate
  },
  // :prop [!] System label / Системная метка
  required: Boolean,
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  },
  focus: Boolean,
  disabled: Boolean
}, B = /* @__PURE__ */ u({
  name: "C2Checkbox",
  __name: "C2Checkbox",
  props: { ..._ },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(t, { expose: i, emit: r }) {
    const m = r, e = t, a = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-checkbox": !0,
        "c2-checkbox--required": e.required,
        [`c2-checkbox--size--${e.size}`]: h(I.size, e.size),
        "c2-checkbox--focus": e.focus,
        "c2-checkbox--disabled": e.disabled
        // :classes-values [!] System label / Системная метка
      }
    })), p = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), s = new f(
      "c2.checkbox",
      e,
      {
        emits: m,
        components: {
          icon: g,
          progress: z,
          message: y
        },
        classes: a,
        styles: p
      }
    ), d = s.render();
    return i(s.expose()), (q, v) => (l(), k(x(b(d))));
  }
}), M = B;
export {
  M as C2Checkbox
};
