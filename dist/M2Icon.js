import { defineComponent as y, computed as t, openBlock as u, createBlock as h, resolveDynamicComponent as g, unref as B } from "vue";import { i as o } from "./inArray-BLmbg9f_.js";import { p as T, d as f, I } from "./props-u_uuiqHZ.js";import { M2Image as x } from "./M2Image.js";(function(){if(typeof document !== undefined){let s=document.createElement('style');s.appendChild(document.createTextNode('.m2-icon{--m2-icon-_width: var(--m2-icon-width, calc(var(--sys-font-size, 16px) * 1.5));display:inline-flex;overflow:hidden;position:relative;justify-content:center;align-items:center;--sys-width: var(--m2-icon-_width);width:var(--sys-width);flex-basis:var(--sys-width);max-width:100%;aspect-ratio:1/1;min-width:var(--m2-icon-_width);touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--m2-icon-rounded, inherit);transition-property:margin,opacity,transform,-webkit-clip-path;transition-property:clip-path,margin,opacity,transform;transition-property:clip-path,margin,opacity,transform,-webkit-clip-path;transition-duration:var(--d-sys-transitionDuration-standard)}@supports not (aspect-ratio: 1/1){.m2-icon{--sys-height: var(--m2-icon-_width);height:var(--sys-height)}}.m2-icon--hide{opacity:0;transform:scale(.8)}.m2-icon--animationType--type2{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);transition:margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration);transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear;transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration)}.m2-icon--animationType--type2.m2-icon--hide{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0);margin:0 calc(var(--m2-icon-_width) * -1) 0 0!important;opacity:1;transition-duration:var(--d-sys-transitionDuration-fade-exit);transition-timing-function:linear;transform:none}.m2-icon--animationShow{animation-name:m2-icon-show;animation-duration:var(--d-sys-transitionDuration-standard)}.m2-icon--overlay{--sys-background: var(--m2-icon-sys-color, var(--sys-color));background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.m2-icon--dynamic{--sys-gradient: var(--m2-icon-sys-color, var(--sys-color));--sys-gradient-opacity: 0;background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))))}.m2-icon--start{order:1}.m2-icon--end{order:99999}.m2-icon--high{z-index:16}@keyframes m2-icon-show{0%{opacity:0;transform:scale(.6)}20%{transform:scale(.6)}60%{opacity:1}to{opacity:1;transform:none}}.m2-icon--overlay{--sys-background-opacity: var(--m2-sys-opacity-overlay)}.m2-icon:not(:disabled,.m2-icon--disabled,.m2-icon--readonly,.m2-icon--progress).m2-icon--dynamic:focus,.m2-icon:not(:disabled,.m2-icon--disabled,.m2-icon--readonly,.m2-icon--progress).m2-icon--dynamic:focus-within,.m2-icon:not(:disabled,.m2-icon--disabled,.m2-icon--readonly,.m2-icon--progress).m2-icon--dynamic.m2-icon--focus{--sys-gradient-opacity: var(--m2-sys-opacity-focus)}.m2-icon:not(:disabled,.m2-icon--disabled,.m2-icon--readonly,.m2-icon--progress).m2-icon--dynamic:hover{--sys-gradient-opacity: var(--m2-sys-opacity-hover)}.m2-icon:not(:disabled,.m2-icon--disabled,.m2-icon--readonly,.m2-icon--progress).m2-icon--dynamic:active{--sys-gradient-opacity: var(--m2-sys-opacity-pressed)}.m2-icon--rounded--none{border-radius:var(--m2-sys-rounded-none)}.m2-icon--rounded--standard{border-radius:var(--m2-sys-rounded-standard)}.m2-icon--rounded--sm{border-radius:var(--m2-sys-rounded-sm)}.m2-icon--rounded--md{border-radius:var(--m2-sys-rounded-md)}.m2-icon--rounded--lg{border-radius:var(--m2-sys-rounded-lg)}.m2-icon--rounded--xl{border-radius:var(--m2-sys-rounded-xl)}.m2-icon--rounded--full{border-radius:var(--m2-sys-rounded-full)}.m2-icon--size--xs{--m2-icon-width: var(--m2-ref-spacing-6)}.m2-icon--size--sm{--m2-icon-width: var(--m2-ref-spacing-8)}.m2-icon--size--md{--m2-icon-width: var(--m2-ref-spacing-10);border-radius:var(--m2-sys-rounded-full)}.m2-icon--size--lg{--m2-icon-width: var(--m2-ref-spacing-14);font-family:var(--m2-ref-font-family-roboto);--sys-font-size: var(--m2-ref-font-size-headline-6);font-size:var(--sys-font-size);font-weight:var(--m2-ref-font-weight-bold);--sys-line-height: var(--m2-ref-lineHeight-headline-6);line-height:var(--sys-line-height);letter-spacing:var(--m2-ref-letterSpacing-headline-6);text-transform:none;border-radius:var(--m2-sys-rounded-sm)}.m2-icon--size--xl{--m2-icon-width: calc(var(--m2-ref-spacing-px)*100);aspect-ratio:100/56;font-family:var(--m2-ref-font-family-roboto);--sys-font-size: var(--m2-ref-font-size-headline-5);font-size:var(--sys-font-size);font-weight:var(--m2-ref-font-weight-bold);--sys-line-height: var(--m2-ref-lineHeight-headline-5);line-height:var(--sys-line-height);letter-spacing:var(--m2-ref-letterSpacing-headline-5);text-transform:none;border-radius:var(--m2-sys-rounded-none)}@supports not (aspect-ratio: 100/56){.m2-icon--size--xl{height:calc(var(--sys-width) * 56 / 100)}}'));document.head.appendChild(s);}})()



const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  rounded: ["none", "standard", "sm", "md", "lg", "xl", "full"],
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
  name: "M2Icon",
  __name: "M2Icon",
  props: { ...z },
  emits: ["load"],
  setup(s, { expose: m, emit: r }) {
    const c = r, n = s, d = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-icon": !0,
        "m2-icon--turn": n.turn,
        "m2-icon--disabled": n.disabled,
        "m2-icon--hide": n.hide,
        [`m2-icon--animationType--${n.animationType}`]: o(e.animationType, n.animationType),
        "m2-icon--animationShow": n.animationShow,
        "m2-icon--overlay": n.overlay,
        "m2-icon--dynamic": n.dynamic,
        "m2-icon--start": n.start,
        "m2-icon--end": n.end,
        "m2-icon--high": n.high,
        [`m2-icon--rounded--${n.rounded}`]: o(e.rounded, n.rounded),
        [`m2-icon--size--${n.size}`]: o(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), p = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new I(
      "m2.icon",
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
  $ as M2Icon
};
