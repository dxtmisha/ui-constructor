import { defineComponent as p, computed as n, openBlock as d, createBlock as l, resolveDynamicComponent as g, unref as u } from "vue";import { p as I, I as B } from "./props-Dqztp8T7.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.c2-image{direction:ltr;display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:inherit;transition-property:background-size,filter,opacity,transform;transition-duration:var(--d-sys-transitionDuration-standard);transform:none}@supports not (inset: 0){.c2-image{inset-inline-start:0;inset-inline-end:0;top:0;bottom:0}@supports not (inset-inline-start: 0){.c2-image{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0}}@supports not (inset-inline-end: 0){.c2-image{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0}}}.c2-image--type--public{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;mask-position:center;mask-repeat:no-repeat;mask-size:contain}.c2-image--type--public.c2-image--background{--sys-background: var(--sys-color);--sys-background-opacity-custom: var(--sys-color-opacity);--sys-background-opacity: var(--sys-color-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.c2-image--type--icon{background-size:cover}.c2-image--type--color:disabled,.c2-image--type--color.c2-image--disabled,.c2-image--type--color--disabled,.c2-image--type--file:disabled,.c2-image--type--file.c2-image--disabled,.c2-image--type--file--disabled,.c2-image--type--image:disabled,.c2-image--type--image.c2-image--disabled,.c2-image--type--image--disabled{filter:grayscale(1) opacity(var(--sys-color-opacity, var(--c2-image-colorOpacity, 1)))}.c2-image--adaptive{background-size:100%}.c2-image--turn{transform:translate(calc(var(--sys-transform-translateX, 0px) * var(--d-dir))) translateY(var(--sys-transform-translateY, 0px)) scale(var(--sys-transform-scale, 1)) rotate(var(--sys-transform-rotate, 0));--sys-transform-rotate: 180deg}.c2-image--disabled{color:rgba(var(--sys-color, var(--c2-image-color)),var(--sys-color-opacity, var(--c2-image-colorOpacity, 1)))}.c2-image--hide{opacity:0;scale:.8}.c2-image.material-icons{direction:ltr;display:inline-flex;font-size:var(--c2-image-font-size, 1.5em)}.c2-image--type--outlined{font-family:Material Icons Outlined,sans-serif}.c2-image--type--round{font-family:Material Icons Round,sans-serif}.c2-image--type--sharp{font-family:Material Icons Sharp,sans-serif}.c2-image--type--two-tone{font-family:Material Icons Two Tone,sans-serif}.c2-image--disabled{--c2-image-color: var(--c2-st-content-fg-color-neutral-disable)}'));document.head.appendChild(s);}}const (_){}})()

const _ = {
  ...I,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  adaptive: Boolean
}, f = /* @__PURE__ */ p({
  name: "C2Image",
  __name: "C2Image",
  props: { ..._ },
  emits: ["load"],
  setup(s, { expose: a, emit: t }) {
    const c = t, e = s, i = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-image": !0,
        "c2-image--turn": e.turn,
        "c2-image--disabled": e.disabled,
        "c2-image--hide": e.hide,
        "c2-image--adaptive": e.adaptive
        // :classes-values [!] System label / Системная метка
      }
    })), m = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new B(
      "c2.image",
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
  x as C2Image
};
