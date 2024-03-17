import { defineComponent as a, computed as n, openBlock as i, createBlock as k, resolveDynamicComponent as u, unref as S } from "vue";
import { p as _, S as d } from "./props-fg8QRK0U.js";
const f = {
  ..._,
  // :prop [!] System label / Системная метка
  active: Boolean
}, v = /* @__PURE__ */ a({
  name: "M3Skeleton",
  __name: "M3Skeleton",
  props: { ...f },
  setup(t, { expose: s, emit: c }) {
    const r = c, e = t, p = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-skeleton": !0,
        "m3-skeleton--active": e.active
        // :classes-values [!] System label / Системная метка
      }
    })), m = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new d(
      "m3.skeleton",
      e,
      {
        emits: r,
        classes: p,
        styles: m
      }
    ), l = o.render();
    return s(o.expose()), (x, y) => (i(), k(u(S(l))));
  }
}), g = v;
export {
  g as M3Skeleton
};
