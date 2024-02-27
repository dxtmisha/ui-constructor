import { defineComponent as m, computed as s, openBlock as a, createBlock as u, resolveDynamicComponent as R, unref as _ } from "vue";import { p as d, R as f } from "./props-DgpY4GkM.js";(function(){if(typeof document !== undefined){let s=document.createElement('style');s.appendChild(document.createTextNode('.c2-ripple{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;border-radius:inherit;--c2-ripple-backgroundColor: var(--c2-st-content-fg-color-neutral-primary);--c2-ripple-backgroundOpacity: var(--c2-ot-opacity-25)}@supports not (inset: 0){.c2-ripple{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.c2-ripple{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.c2-ripple{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.c2-ripple__item{position:absolute;top:0;right:0;bottom:0;left:0;--sys-background: var(--c2-ripple-sys-color, var(--sys-color, var(--c2-ripple-backgroundColor)));--sys-background-opacity: var(--c2-ripple-backgroundOpacity, 1);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}@supports not (inset: 0){.c2-ripple__item{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.c2-ripple__item{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.c2-ripple__item{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.c2-ripple:not(:active) .c2-ripple__item.c2-ripple--end,.c2-ripple .c2-ripple__item:not(:last-child).c2-ripple--end{opacity:0;transition-delay:var(--d-sys-transitionDuration-fade-enter);transition-duration:var(--d-sys-transitionDuration-fade-through);transition-property:opacity}.c2-ripple__item{animation-duration:var(--d-sys-transitionDuration-fade-through);animation-fill-mode:forwards;animation-name:c2-ripple-start;animation-timing-function:linear}@keyframes c2-ripple-start{0%{--sys-gradient-opacity: 0;-webkit-clip-path:circle(0% at var(--c2-ripple-sys-x) var(--c2-ripple-sys-y));clip-path:circle(0% at var(--c2-ripple-sys-x) var(--c2-ripple-sys-y))}50%{--sys-gradient-opacity: var(--c2-ripple-backgroundOpacity, 1);-webkit-clip-path:circle(75% at var(--c2-ripple-sys-x) var(--c2-ripple-sys-y));clip-path:circle(75% at var(--c2-ripple-sys-x) var(--c2-ripple-sys-y))}to{--sys-gradient-opacity: var(--c2-ripple-backgroundOpacity, 1);-webkit-clip-path:circle(150% at var(--c2-ripple-sys-x) var(--c2-ripple-sys-y));clip-path:circle(150% at var(--c2-ripple-sys-x) var(--c2-ripple-sys-y))}}'));document.head.appendChild(s);}})()

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
