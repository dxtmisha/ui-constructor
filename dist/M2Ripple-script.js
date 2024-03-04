import { defineComponent as l, computed as s, openBlock as a, createBlock as u, resolveDynamicComponent as R, unref as _ } from "vue";
import { p as d, R as f } from "./props-T1QLOSLc.js";
const k = {
  ...d
}, x = /* @__PURE__ */ l({
  name: "M2Ripple",
  __name: "M2Ripple",
  props: { ...k },
  setup(p, { expose: n, emit: o }) {
    const t = o, r = p, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new f(
      "m2.ripple",
      r,
      {
        emits: t,
        classes: c,
        styles: i
      }
    ), m = e.render();
    return n(e.expose()), (y, M) => (a(), u(R(_(m))));
  }
}), C = x;
export {
  C as M2Ripple
};
