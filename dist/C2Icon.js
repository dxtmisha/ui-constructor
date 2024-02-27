import { defineComponent as h, computed as t, openBlock as d, createBlock as v, resolveDynamicComponent as g, unref as B } from "vue";import { i } from "./inArray-BLmbg9f_.js";import { p as u, d as T, I } from "./props-u_uuiqHZ.js";import { C2Image as z } from "./C2Image.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.c2-icon{--c2-icon-_width: var(--c2-icon-width, calc(var(--sys-font-size, 16px) * 1.5));display:inline-flex;overflow:hidden;position:relative;justify-content:center;align-items:center;--sys-width: var(--c2-icon-_width);width:var(--sys-width);flex-basis:var(--sys-width);max-width:100%;aspect-ratio:1/1;min-width:var(--c2-icon-_width);touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--c2-icon-rounded, inherit);transition-property:margin,opacity,transform,-webkit-clip-path;transition-property:clip-path,margin,opacity,transform;transition-property:clip-path,margin,opacity,transform,-webkit-clip-path;transition-duration:var(--d-sys-transitionDuration-standard);--c2-icon-width: var(--c2-base-size-icons-lg);aspect-ratio:auto;gap:var(--c2-base-space-selectable-input-inline-none);padding:var(--c2-base-space-selectable-input-inset-none);--sys-height: var(--c2-base-size-icons-lg);height:var(--sys-height)}@supports not (aspect-ratio: 1/1){.c2-icon{--sys-height: var(--c2-icon-_width);height:var(--sys-height)}}.c2-icon--hide{opacity:0;transform:scale(.8)}.c2-icon--animationType--type2{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);transition:margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration);transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear;transition:clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration),margin var(--d-ref-transitionDuration-1) linear,background var(--d-sys-transitionDuration-standard) linear,opacity var(--d-sys-transitionDuration-standard) linear,transform var(--d-sys-transitionDuration-standard) linear,-webkit-clip-path var(--d-sys-transitionDuration-fade-enter) var(--d-sys-transitionFunction-deceleration)}.c2-icon--animationType--type2.c2-icon--hide{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0);margin:0 calc(var(--c2-icon-_width) * -1) 0 0!important;opacity:1;transition-duration:var(--d-sys-transitionDuration-fade-exit);transition-timing-function:linear;transform:none}.c2-icon--animationShow{animation-name:c2-icon-show;animation-duration:var(--d-sys-transitionDuration-standard)}.c2-icon--overlay{--sys-background: var(--c2-icon-sys-color, var(--sys-color));background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.c2-icon--dynamic{--sys-gradient: var(--c2-icon-sys-color, var(--sys-color));--sys-gradient-opacity: 0;background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))))}.c2-icon--start{order:1}.c2-icon--end{order:99999}.c2-icon--high{z-index:16}@keyframes c2-icon-show{0%{opacity:0;transform:scale(.6)}20%{transform:scale(.6)}60%{opacity:1}to{opacity:1;transform:none}}.c2-icon--variation--icon.c2-icon--shape--box.c2-icon--size--12{--c2-icon-width: 12px;--sys-height: 12px;height:var(--sys-height)}.c2-icon--variation--icon.c2-icon--shape--box.c2-icon--size--16{--c2-icon-width: 16px;--sys-height: 16px;height:var(--sys-height)}.c2-icon--variation--icon.c2-icon--shape--box.c2-icon--size--20{--c2-icon-width: var(--c2-ct-selectable-icon-size-md);--sys-height: var(--c2-ct-selectable-icon-size-md);height:var(--sys-height)}.c2-icon--variation--icon.c2-icon--shape--box.c2-icon--size--24{--c2-icon-width: var(--c2-base-size-icons-lg);--sys-height: var(--c2-base-size-icons-lg);height:var(--sys-height)}.c2-icon--variation--icon.c2-icon--shape--box.c2-icon--size--32{--c2-icon-width: 32px;--sys-height: 32px;height:var(--sys-height)}.c2-icon--variation--payment.c2-icon--shape--rect{--c2-icon-width: 36px}.c2-icon--variation--payment.c2-icon--shape--rect.c2-icon--size--20{--c2-icon-width: 30}.c2-icon--variation--avatar.c2-icon--shape--circle.c2-icon--size--16{--c2-icon-width: 16px;border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--avatar.c2-icon--shape--circle.c2-icon--size--20{--c2-icon-width: var(--c2-ct-selectable-icon-size-md);border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--avatar.c2-icon--shape--circle.c2-icon--size--24{border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--country.c2-icon--shape--circle{gap:unset;padding:0}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--16{--c2-icon-width: 16px;border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--16--belarus375byBlr{--c2-icon-width: 24px;--sys-height: 16px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--16--belarus375byBlr--frame312{--c2-icon-width: 3.333px;--sys-height: 16px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--20{--c2-icon-width: auto;border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--20--belarus375byBlr{--c2-icon-width: 30;--sys-height: 20;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--20--belarus375byBlr--frame312{--c2-icon-width: 4.167px;--sys-height: var(--c2-ct-selectable-icon-size-md);height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--24{border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--24--belarus375byBlr{--c2-icon-width: 36px;--sys-height: 24px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--24--belarus375byBlr--frame312{--c2-icon-width: 5px;--sys-height: var(--c2-base-size-icons-lg);height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--32{--c2-icon-width: 32px;--sys-height: 32px;height:var(--sys-height);border-radius:var(--c2-st-selectable-borderRadius-size-pill)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--32--belarus375byBlr{--c2-icon-width: 48px;--sys-height: 32px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--circle.c2-icon--size--32--belarus375byBlr--frame312{--c2-icon-width: 6.667px;--sys-height: 32px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect{--c2-icon-width: 36px}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--16--belarus375byBlr{--c2-icon-width: 24px;--sys-height: 16px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--16--belarus375byBlr--frame312{--c2-icon-width: 3.333px;--sys-height: 16px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--20{--c2-icon-width: 30}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--20--belarus375byBlr{--c2-icon-width: 30;--sys-height: 20;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--20--belarus375byBlr--frame312{--c2-icon-width: 4.167px;--sys-height: var(--c2-ct-selectable-icon-size-md);height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--24--belarus375byBlr{--c2-icon-width: 36px;--sys-height: 24px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--24--belarus375byBlr--frame312{--c2-icon-width: 5px;--sys-height: var(--c2-base-size-icons-lg);height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--32,.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--32--belarus375byBlr{--c2-icon-width: 48px;--sys-height: 32px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--shape--rect.c2-icon--size--32--belarus375byBlr--frame312{--c2-icon-width: 6.667px;--sys-height: 32px;height:var(--sys-height)}.c2-icon--variation--country.c2-icon--size--32{--sys-height: 32px;height:var(--sys-height)}.c2-icon--size--12{--c2-icon-width: 12px;--sys-height: 12px;height:var(--sys-height)}.c2-icon--size--16{--c2-icon-width: 16px;--sys-height: 16px;height:var(--sys-height)}.c2-icon--size--20{--c2-icon-width: var(--c2-ct-selectable-icon-size-md);--sys-height: var(--c2-ct-selectable-icon-size-md);height:var(--sys-height)}.c2-icon--size--32{--c2-icon-width: 32px;gap:unset;padding:0;--sys-height: 32px;height:var(--sys-height)}'));document.head.appendChild(s);}}const (_){}})()



const e = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  variation: ["icon", "payment", "avatar", "country"],
  shape: ["rect", "circle", "box"],
  size: ["12", "16", "20", "24", "32"]
  // :values [!] System label / Системная метка
}, o = {
  ...T,
  // :default [!] System label / Системная метка
  animationType: "type1",
  variation: "icon",
  shape: "box",
  size: "24"
}, S = {
  ...u,
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
  variation: {
    type: String,
    default: o == null ? void 0 : o.variation
  },
  shape: {
    type: String,
    default: o == null ? void 0 : o.shape
  },
  size: {
    type: String,
    default: o == null ? void 0 : o.size
  }
}, x = /* @__PURE__ */ h({
  name: "C2Icon",
  __name: "C2Icon",
  props: { ...S },
  emits: ["load"],
  setup(c, { expose: s, emit: r }) {
    const p = r, n = c, m = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-icon": !0,
        "c2-icon--turn": n.turn,
        "c2-icon--disabled": n.disabled,
        "c2-icon--hide": n.hide,
        [`c2-icon--animationType--${n.animationType}`]: i(e.animationType, n.animationType),
        "c2-icon--animationShow": n.animationShow,
        "c2-icon--overlay": n.overlay,
        "c2-icon--dynamic": n.dynamic,
        "c2-icon--start": n.start,
        "c2-icon--end": n.end,
        "c2-icon--high": n.high,
        [`c2-icon--variation--${n.variation}`]: i(e.variation, n.variation),
        [`c2-icon--shape--${n.shape}`]: i(e.shape, n.shape),
        [`c2-icon--size--${n.size}`]: i(e.size, n.size)
        // :classes-values [!] System label / Системная метка
      }
    })), y = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new I(
      "c2.icon",
      n,
      {
        emits: p,
        components: { image: z },
        classes: m,
        styles: y
      }
    ), l = a.render();
    return s(a.expose()), (C, _) => (d(), v(g(B(l))));
  }
}), $ = x;
export {
  $ as C2Icon
};
