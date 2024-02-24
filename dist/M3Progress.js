import './M3Progress.css';
import { defineComponent as d, computed as s, openBlock as u, createBlock as y, resolveDynamicComponent as P, unref as B } from "vue";
import { i as n } from "./inArray-BLmbg9f_.js";
import { p as _, d as f, P as k } from "./props-DeEfCN6z.js";
const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...f,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, v = {
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
}, x = /* @__PURE__ */ d({
  name: "M3Progress",
  __name: "M3Progress",
  props: { ...v },
  setup(i, { expose: p, emit: a }) {
    const m = a, e = i, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-progress": !0,
        "m3-progress--linear": e.linear && !e.circular,
        "m3-progress--circular": e.circular,
        [`m3-progress--indeterminate--${e.indeterminate}`]: n(t.indeterminate, e.indeterminate),
        [`m3-progress--position--${e.position}`]: n(t.position, e.position),
        "m3-progress--dense": e.dense,
        "m3-progress--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), l = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new k(
      "m3.progress",
      e,
      {
        emits: m,
        classes: c,
        styles: l
      }
    ), g = o.render();
    return p(o.expose()), (M, C) => (u(), y(P(B(g))));
  }
}), $ = x;
export {
  $ as M3Progress
};
