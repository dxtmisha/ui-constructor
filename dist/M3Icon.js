import { defineComponent as y, computed as t, openBlock as u, createBlock as h, resolveDynamicComponent as g, unref as B } from "vue";import { i as o } from "./inArray-BLmbg9f_.js";import { p as T, d as f, I } from "./props-u_uuiqHZ.js";import { M3Image as x } from "./M3Image.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.m3-icon{--m3-icon-_width: var(--m3-icon-width, calc(var(--sys-font-size, 16px) * 1.5));display:inline-flex;overflow:hidden;position:relative;justify-content:center;align-items:center;--sys-width: var(--m3-icon-_width);width:var(--sys-width);flex-basis:var(--sys-width);max-width:100%;aspect-ratio:1/1;min-width:var(--m3-icon-_width);touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--m3-icon-rounded, inherit);transition-property:margin,opacity,transform,-webkit-clip-path;transition-property:clip-path,margin,opacity,transform;transition-property:clip-path,margin,opacity,transform,-webkit-clip-path;transition-duration:var(--d-sys-transitionDuration-standard)}@supports not (aspect-ratio: 1/1){.m3-icon{--sys-height: var(--m3-icon-_width);height:var(--sys-height)}}.m3-icon--hide{opacity:0;transform:scale(.8)}.m3-icon--animationType--type2{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);transition:margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration);transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear;transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration)}.m3-icon--animationType--type2.m3-icon--hide{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0);margin:0 calc(var(--m3-icon-_width) * -1) 0 0!important;opacity:1;transition-duration:var(--d-sys-transitionDuration-fade-exit);transition-timing-function:linear;transform:none}.m3-icon--animationShow{animation-name:m3-icon-show;animation-duration:var(--d-sys-transitionDuration-standard)}.m3-icon--overlay{--sys-background: var(--m3-icon-sys-color, var(--sys-color));background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.m3-icon--dynamic{--sys-gradient: var(--m3-icon-sys-color, var(--sys-color));--sys-gradient-opacity: 0;background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))))}.m3-icon--start{order:1}.m3-icon--end{order:99999}.m3-icon--high{z-index:16}@keyframes m3-icon-show{0%{opacity:0;transform:scale(.6)}20%{transform:scale(.6)}60%{opacity:1}to{opacity:1;transform:none}}.m3-icon--overlay{--sys-background-opacity: var(--m3-sys-opacity-016)}.m3-icon:not(:disabled,.m3-icon--disabled,.m3-icon--readonly,.m3-icon--progress).m3-icon--dynamic:focus,.m3-icon:not(:disabled,.m3-icon--disabled,.m3-icon--readonly,.m3-icon--progress).m3-icon--dynamic:focus-within,.m3-icon:not(:disabled,.m3-icon--disabled,.m3-icon--readonly,.m3-icon--progress).m3-icon--dynamic.m3-icon--focus{--sys-gradient-opacity: var(--m3-sys-opacity-016)}.m3-icon:not(:disabled,.m3-icon--disabled,.m3-icon--readonly,.m3-icon--progress).m3-icon--dynamic:hover{--sys-gradient-opacity: var(--m3-sys-opacity-008)}.m3-icon:not(:disabled,.m3-icon--disabled,.m3-icon--readonly,.m3-icon--progress).m3-icon--dynamic:active{--sys-gradient-opacity: var(--m3-sys-opacity-012)}.m3-icon--rounded--none{border-radius:var(--m3-sys-rounded-none)}.m3-icon--rounded--standard{border-radius:var(--m3-sys-rounded-standard)}.m3-icon--rounded--sm{border-radius:var(--m3-sys-rounded-sm)}.m3-icon--rounded--md{border-radius:var(--m3-sys-rounded-md)}.m3-icon--rounded--lg{border-radius:var(--m3-sys-rounded-lg)}.m3-icon--rounded--xl{border-radius:var(--m3-sys-rounded-xl)}.m3-icon--rounded--2xl{border-radius:var(--m3-sys-rounded-2xl)}.m3-icon--rounded--full{border-radius:var(--m3-sys-rounded-full)}.m3-icon--size--xs{--m3-icon-width: var(--m3-ref-spacing-6)}.m3-icon--size--sm{--m3-icon-width: var(--m3-ref-spacing-8)}.m3-icon--size--md{--m3-icon-width: var(--m3-ref-spacing-10)}.m3-icon--size--lg{--m3-icon-width: var(--m3-ref-spacing-14);font-family:var(--m3-ref-font-family-roboto);--sys-font-size: var(--m3-ref-font-size-22);font-size:var(--sys-font-size);font-weight:var(--m3-ref-font-weight-400);--sys-line-height: var(--m3-ref-lineHeight-28);line-height:var(--sys-line-height);letter-spacing:var(--m3-ref-letterSpacing-none);border-radius:var(--m3-sys-rounded-none)}.m3-icon--size--xl{--m3-icon-width: var(--m3-ref-spacing-28);aspect-ratio:28/16;font-family:var(--m3-ref-font-family-roboto);--sys-font-size: var(--m3-ref-font-size-32);font-size:var(--sys-font-size);font-weight:var(--m3-ref-font-weight-400);--sys-line-height: var(--m3-ref-lineHeight-40);line-height:var(--sys-line-height);letter-spacing:var(--m3-ref-letterSpacing-none);border-radius:var(--m3-sys-rounded-none)}@supports not (aspect-ratio: 28/16){.m3-icon--size--xl{height:calc(var(--sys-width) * 16 / 28)}}'));document.head.appendChild(s);}}const (_){}})()



const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "2xl", "full"],
  size: ["xs", "sm", "md", "lg", "xl"]
  // :values [!] System label / Системная метка
}, i = {
  ...f,
  // :default [!] System label / Системная метка
  animationType: "type1"
}, z = {
  ...T,
  // :prop [!] System label / Системная метка
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  animationType: {
    type: String,
    default: i == null ? void 0 : i.animationType
  },
  animationShow: Boolean,
  overlay: Boolean,
  dynamic: Boolean,
  start: Boolean,
  end: Boolean,
  high: Boolean,
  rounded: String,
  size: String
}, S = /* @__PURE__ */ y({
  name: "M3Icon",
  __name: "M3Icon",
  props: { ...z },
  emits: ["load"],
  setup(s, { expose: m, emit: r }) {
    const c = r, n = s, d = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-icon": !0,
        "m3-icon--turn": n.turn,
        "m3-icon--disabled": n.disabled,
        "m3-icon--hide": n.hide,
        [`m3-icon--animationType--${n.animationType}`]: o(e.animationType, n.animationType),
        "m3-icon--animationShow": n.animationShow,
        "m3-icon--overlay": n.overlay,
        "m3-icon--dynamic": n.dynamic,
        "m3-icon--start": n.start,
        "m3-icon--end": n.end,
        "m3-icon--high": n.high,
        [`m3-icon--rounded--${n.rounded}`]: o(e.rounded, n.rounded),
        [`m3-icon--size--${n.size}`]: o(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new I(
      "m3.icon",
      n,
      {
        emits: c,
        components: { image: x },
        classes: d,
        styles: p
      }
    ), l = a.render();
    return m(a.expose()), (_, k) => (u(), h(g(B(l))));
  }
}), $ = S;
export {
  $ as M3Icon
};
