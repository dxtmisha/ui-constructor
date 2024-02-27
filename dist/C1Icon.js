import { defineComponent as y, computed as t, openBlock as u, createBlock as h, resolveDynamicComponent as g, unref as B } from "vue";import { i as e } from "./inArray-BLmbg9f_.js";import { p as T, d as I, I as z } from "./props-u_uuiqHZ.js";import { C1Image as f } from "./C1Image.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.c1-icon{--c1-icon-_width: var(--c1-icon-width, calc(var(--sys-font-size, 16px) * 1.5));display:inline-flex;overflow:hidden;position:relative;justify-content:center;align-items:center;--sys-width: var(--c1-icon-_width);width:var(--sys-width);flex-basis:var(--sys-width);max-width:100%;aspect-ratio:1/1;min-width:var(--c1-icon-_width);touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--c1-icon-rounded, inherit);transition-property:margin,opacity,transform,-webkit-clip-path;transition-property:clip-path,margin,opacity,transform;transition-property:clip-path,margin,opacity,transform,-webkit-clip-path;transition-duration:var(--d-sys-transitionDuration-standard)}@supports not (aspect-ratio: 1/1){.c1-icon{--sys-height: var(--c1-icon-_width);height:var(--sys-height)}}.c1-icon--hide{opacity:0;transform:scale(.8)}.c1-icon--animationType--type2{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);transition:margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration);transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear;transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration)}.c1-icon--animationType--type2.c1-icon--hide{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0);margin:0 calc(var(--c1-icon-_width) * -1) 0 0!important;opacity:1;transition-duration:var(--d-sys-transitionDuration-fade-exit);transition-timing-function:linear;transform:none}.c1-icon--animationShow{animation-name:c1-icon-show;animation-duration:var(--d-sys-transitionDuration-standard)}.c1-icon--overlay{--sys-background: var(--c1-icon-sys-color, var(--sys-color));background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.c1-icon--dynamic{--sys-gradient: var(--c1-icon-sys-color, var(--sys-color));--sys-gradient-opacity: 0;background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))))}.c1-icon--start{order:1}.c1-icon--end{order:99999}.c1-icon--high{z-index:16}@keyframes c1-icon-show{0%{opacity:0;transform:scale(.6)}20%{transform:scale(.6)}60%{opacity:1}to{opacity:1;transform:none}}.c1-icon--overlay{--sys-background: var(--c1-sys-palette-overlay);--sys-background-opacity-custom: var(--c1-sys-palette-overlay-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.c1-icon--rounded--none{border-radius:var(--c1-ref-rounded-0)}.c1-icon--rounded--standard,.c1-icon--rounded--sm{border-radius:var(--c1-ref-rounded-1)}.c1-icon--rounded--md{border-radius:var(--c1-ref-rounded-2)}.c1-icon--rounded--lg{border-radius:var(--c1-sys-rounded-4)}.c1-icon--rounded--full{border-radius:var(--c1-ref-rounded-full)}.c1-icon--size--xs{--c1-icon-width: var(--c1-ref-spacing-6)}.c1-icon--size--sm{--c1-icon-width: var(--c1-ref-spacing-8)}.c1-icon--size--md{--c1-icon-width: var(--c1-ref-spacing-10)}.c1-icon--size--lg{--c1-icon-width: var(--c1-ref-spacing-16);font-family:var(--c1-ref-font-family-rubik);--sys-font-size: var(--c1-ref-font-size-20);font-size:var(--sys-font-size);font-weight:var(--c1-ref-font-weight-500);--sys-line-height: var(--c1-ref-lineHeight-24);line-height:var(--sys-line-height);letter-spacing:var(--c1-ref-letterSpacing-none);border-radius:var(--c1-ref-rounded-full)}'));document.head.appendChild(s);}}catch (_){}})()



const i = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "full"],
  size: ["xs", "sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, o = {
  ...I,
  // :default [!] System label / Системная метка
  animationType: "type1",
  rounded: "md",
  size: "xs"
}, x = {
  ...T,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: o == null ? void 0 : o.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: {
    type: String,
    default: o == null ? void 0 : o.rounded
  },
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  }
}, C = /* @__PURE__ */ y({
  name: "C1Icon",
  __name: "C1Icon",
  props: { ...x },
  emits: ["load"],
  setup(c, { expose: s, emit: r }) {
    const d = r, n = c, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c1-icon": !0,
        "c1-icon--turn": n.turn,
        "c1-icon--disabled": n.disabled,
        "c1-icon--hide": n.hide,
        [`c1-icon--animationType--${n.animationType}`]: e(i.animationType, n.animationType),
        "c1-icon--animationShow": n.animationShow,
        "c1-icon--overlay": n.overlay,
        "c1-icon--dynamic": n.dynamic,
        "c1-icon--start": n.start,
        "c1-icon--end": n.end,
        "c1-icon--high": n.high,
        [`c1-icon--rounded--${n.rounded}`]: e(i.rounded, n.rounded),
        [`c1-icon--size--${n.size}`]: e(i.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new z(
      "c1.icon",
      n,
      {
        emits: d,
        components: { image: f },
        classes: m,
        styles: p
      }
    ), l = a.render();
    return s(a.expose()), (S, _) => (u(), h(g(B(l))));
  }
}), $ = C;
export {
  $ as C1Icon
};
