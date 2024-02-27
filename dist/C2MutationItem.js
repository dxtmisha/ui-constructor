import { defineComponent as p, computed as e, openBlock as u, createBlock as l, resolveDynamicComponent as I, unref as d } from "vue";import { p as M, M as _ } from "./props-Cbi6M5Ad.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.c2-mutationItem{--c2-mutationItem-main: var(--d-mutationItem)}'));document.head.appendChild(s);}}const (_){}})()

const f = {
  ...M
}, C = /* @__PURE__ */ p({
  name: "C2MutationItem",
  __name: "C2MutationItem",
  props: { ...f },
  emits: ["load"],
  setup(o, { expose: n, emit: s }) {
    const m = s, c = o, r = e(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-mutationItem": !0
        // :classes-values [!] System label / Системная метка
      }
    })), a = e(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), t = new _(
      "c2.mutationItem",
      c,
      {
        emits: m,
        classes: r,
        styles: a
      }
    ), i = t.render();
    return n(t.expose()), (k, x) => (u(), l(I(d(i))));
  }
}), B = C;
export {
  B as C2MutationItem
};
