import { defineComponent as i, computed as n, openBlock as m, createBlock as k, resolveDynamicComponent as u, unref as S } from "vue";
import { p as _, S as d } from "./props-fg8QRK0U.js";
const f = {
  ..._,
  // :prop [!] System label / Системная метка
  active: Boolean
}, C = /* @__PURE__ */ i({
  name: "C2Skeleton",
  __name: "C2Skeleton",
  props: { ...f },
  setup(t, { expose: s, emit: c }) {
    const r = c, e = t, p = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-skeleton": !0,
        "c2-skeleton--active": e.active
        // :classes-values [!] System label / Системная метка
      }
    })), l = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new d(
      "c2.skeleton",
      e,
      {
        emits: r,
        classes: p,
        styles: l
      }
    ), a = o.render();
    return s(o.expose()), (v, x) => (m(), k(u(S(a))));
  }
}), g = C;
export {
  g as C2Skeleton
};
