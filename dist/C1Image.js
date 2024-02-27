import { defineComponent as p, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";import { p as I, I as B } from "./props-Dqztp8T7.js";(function(){if(typeof document !== undefined){let s=document.createElement('style');s.appendChild(document.createTextNode('.c1-image{direction:ltr;display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:inherit;transition-property:background-size,filter,opacity,transform;transition-duration:var(--d-sys-transitionDuration-standard);transform:none}@supports not (inset: 0){.c1-image{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.c1-image{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.c1-image{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.c1-image--type--public{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;mask-position:center;mask-repeat:no-repeat;mask-size:contain}.c1-image--type--public.c1-image--background{--sys-background: var(--sys-color);--sys-background-opacity-custom: var(--sys-color-opacity);--sys-background-opacity: var(--sys-color-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.c1-image--type--icon{background-size:cover}.c1-image--type--color:disabled,.c1-image--type--color.c1-image--disabled,.c1-image--type--color--disabled,.c1-image--type--file:disabled,.c1-image--type--file.c1-image--disabled,.c1-image--type--file--disabled,.c1-image--type--image:disabled,.c1-image--type--image.c1-image--disabled,.c1-image--type--image--disabled{filter:grayscale(1) opacity(var(--sys-color-opacity, var(--c1-image-colorOpacity, 1)))}.c1-image--adaptive{background-size:100%}.c1-image--turn{transform:translate(calc(var(--sys-transform-translateX, 0px) * var(--d-dir))) translateY(var(--sys-transform-translateY, 0px)) scale(var(--sys-transform-scale, 1)) rotate(var(--sys-transform-rotate, 0));--sys-transform-rotate: 180deg}.c1-image--disabled{color:rgba(var(--sys-color, var(--c1-image-color)),var(--sys-color-opacity, var(--c1-image-colorOpacity, 1)))}.c1-image--hide{opacity:0;scale:.8}.c1-image.material-icons{direction:ltr;display:inline-flex;font-size:var(--c1-image-font-size, 1.5em)}.c1-image--type--outlined{font-family:Material Icons Outlined,sans-serif}.c1-image--type--round{font-family:Material Icons Round,sans-serif}.c1-image--type--sharp{font-family:Material Icons Sharp,sans-serif}.c1-image--type--two-tone{font-family:Material Icons Two Tone,sans-serif}.c1-image--disabled{--c1-image-color: var(--c1-sys-palette-onDisabled)}'));document.head.appendChild(s);}})()

const _ = {
  ...I,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, f = /* @__PURE__ */ p({
  name: "C1Image",
  __name: "C1Image",
  props: { ..._ },
  emits: ["load"],
  setup(s, { expose: a, emit: t }) {
    const c = t, e = s, i = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-image": !0,
        "c1-image--turn": e.turn,
        "c1-image--disabled": e.disabled,
        "c1-image--hide": e.hide,
        "c1-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), m = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new B(
      "c1.image",
      e,
      {
        emits: c,
        classes: i,
        styles: m
      }
    ), r = o.render();
    return a(o.expose()), (C, h) => (d(), l(g(u(r))));
  }
}), x = f;
export {
  x as C1Image
};
