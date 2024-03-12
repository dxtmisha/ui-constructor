import { defineComponent as d, computed as s, openBlock as u, createBlock as y, resolveDynamicComponent as P, unref as B } from "vue";
import { i as n } from "./inArray-BLmbg9f_.js";
import { p as _, d as f, P as C } from "./props-CpvvQJ8b.js";
const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...f,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type3",
  position: "top"
}, k = {
  ..._,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: r == null ? void 0 : r.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: r == null ? void 0 : r.indeterminate
  },
  position: {
    type: String,
    default: r == null ? void 0 : r.position
  },
  dense: Boolean,
  inverse: Boolean
}, v = /* @__PURE__ */ d({
  name: "C2Progress",
  __name: "C2Progress",
  props: { ...k },
  setup(i, { expose: p, emit: c }) {
    const a = c, e = i, m = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-progress": !0,
        "c2-progress--linear": e.linear && !e.circular,
        "c2-progress--circular": e.circular,
        [`c2-progress--indeterminate--${e.indeterminate}`]: n(t.indeterminate, e.indeterminate),
        [`c2-progress--position--${e.position}`]: n(t.position, e.position),
        "c2-progress--dense": e.dense,
        "c2-progress--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), l = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new C(
      "c2.progress",
      e,
      {
        emits: a,
        classes: m,
        styles: l
      }
    ), g = o.render();
    return p(o.expose()), (x, D) => (u(), y(P(B(g))));
  }
}), b = v;
export {
  b as C2Progress
};
