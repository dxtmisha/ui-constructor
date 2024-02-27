import { defineComponent as l, computed as s, openBlock as a, createBlock as u, resolveDynamicComponent as R, unref as _ } from "vue";import { p as d, R as f } from "./props-DgpY4GkM.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.m2-ripple{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;border-radius:inherit;--m2-ripple-backgroundColor: var(--m2-sys-palette-overlay);--m2-ripple-backgroundOpacity: var(--m2-sys-opacity-pressed)}@supports not (inset: 0){.m2-ripple{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.m2-ripple{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.m2-ripple{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.m2-ripple__item{position:absolute;top:0;right:0;bottom:0;left:0;--sys-background: var(--m2-ripple-sys-color, var(--sys-color, var(--m2-ripple-backgroundColor)));--sys-background-opacity: var(--m2-ripple-backgroundOpacity, 1);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}@supports not (inset: 0){.m2-ripple__item{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.m2-ripple__item{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.m2-ripple__item{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.m2-ripple:not(:active) .m2-ripple__item.m2-ripple--end,.m2-ripple .m2-ripple__item:not(:last-child).m2-ripple--end{opacity:0;transition-delay:var(--d-sys-transitionDuration-fade-enter);transition-duration:var(--d-sys-transitionDuration-fade-through);transition-property:opacity}.m2-ripple__item{animation-duration:var(--d-sys-transitionDuration-fade-through);animation-fill-mode:forwards;animation-name:m2-ripple-start;animation-timing-function:linear}@keyframes m2-ripple-start{0%{--sys-gradient-opacity: 0;-webkit-clip-path:circle(0% at var(--m2-ripple-sys-x) var(--m2-ripple-sys-y));clip-path:circle(0% at var(--m2-ripple-sys-x) var(--m2-ripple-sys-y))}50%{--sys-gradient-opacity: var(--m2-ripple-backgroundOpacity, 1);-webkit-clip-path:circle(75% at var(--m2-ripple-sys-x) var(--m2-ripple-sys-y));clip-path:circle(75% at var(--m2-ripple-sys-x) var(--m2-ripple-sys-y))}to{--sys-gradient-opacity: var(--m2-ripple-backgroundOpacity, 1);-webkit-clip-path:circle(150% at var(--m2-ripple-sys-x) var(--m2-ripple-sys-y));clip-path:circle(150% at var(--m2-ripple-sys-x) var(--m2-ripple-sys-y))}}'));document.head.appendChild(s);}}const (_){}})()

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
