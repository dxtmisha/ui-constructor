import { defineComponent as m, computed as s, openBlock as a, createBlock as u, resolveDynamicComponent as R, unref as _ } from "vue";import { p as d, R as f } from "./props-DgpY4GkM.js";(function(){if(typeof document !== undefined){let s=document.createElement('style');s.appendChild(document.createTextNode('.c1-ripple{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;border-radius:inherit;--c1-ripple-backgroundColor: var(--c1-ref-palette-webText-50);--c1-ripple-backgroundOpacity: var(--c1-sys-opacity-pressed)}@supports not (inset: 0){.c1-ripple{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.c1-ripple{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.c1-ripple{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.c1-ripple__item{position:absolute;top:0;right:0;bottom:0;left:0;--sys-background: var(--c1-ripple-sys-color, var(--sys-color, var(--c1-ripple-backgroundColor)));--sys-background-opacity: var(--c1-ripple-backgroundOpacity, 1);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}@supports not (inset: 0){.c1-ripple__item{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.c1-ripple__item{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.c1-ripple__item{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.c1-ripple:not(:active) .c1-ripple__item.c1-ripple--end,.c1-ripple .c1-ripple__item:not(:last-child).c1-ripple--end{opacity:0;transition-delay:var(--d-sys-transitionDuration-fade-enter);transition-duration:var(--d-sys-transitionDuration-fade-through);transition-property:opacity}.c1-ripple__item{animation-duration:var(--d-sys-transitionDuration-fade-through);animation-fill-mode:forwards;animation-name:c1-ripple-start;animation-timing-function:linear}@keyframes c1-ripple-start{0%{--sys-gradient-opacity: 0;-webkit-clip-path:circle(0% at var(--c1-ripple-sys-x) var(--c1-ripple-sys-y));clip-path:circle(0% at var(--c1-ripple-sys-x) var(--c1-ripple-sys-y))}50%{--sys-gradient-opacity: var(--c1-ripple-backgroundOpacity, 1);-webkit-clip-path:circle(75% at var(--c1-ripple-sys-x) var(--c1-ripple-sys-y));clip-path:circle(75% at var(--c1-ripple-sys-x) var(--c1-ripple-sys-y))}to{--sys-gradient-opacity: var(--c1-ripple-backgroundOpacity, 1);-webkit-clip-path:circle(150% at var(--c1-ripple-sys-x) var(--c1-ripple-sys-y));clip-path:circle(150% at var(--c1-ripple-sys-x) var(--c1-ripple-sys-y))}}'));document.head.appendChild(s);}})()

const C = {
  ...d
}, k = /* @__PURE__ */ m({
  name: "C1Ripple",
  __name: "C1Ripple",
  props: { ...C },
  setup(p, { expose: n, emit: o }) {
    const t = o, r = p, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new f(
      "c1.ripple",
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
  D as C1Ripple
};
