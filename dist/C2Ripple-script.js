import { defineComponent as m, computed as s, openBlock as a, createBlock as u, resolveDynamicComponent as R, unref as _ } from "vue";
import { p as d, R as f } from "./props-T1QLOSLc.js";
const C = {
  ...d
}, k = /* @__PURE__ */ m({
  name: "C2Ripple",
  __name: "C2Ripple",
  props: { ...C },
  setup(p, { expose: n, emit: o }) {
    const t = o, r = p, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new f(
      "c2.ripple",
      r,
      {
        emits: t,
        classes: c,
        styles: i
      }
    ), l = e.render();
    return n(e.expose()), (x, y) => (a(), u(R(_(l))));
  }
}), D = k;
export {
  D as C2Ripple
};
