import { defineComponent as d, computed as s, openBlock as u, createBlock as y, resolveDynamicComponent as P, unref as B } from "vue";import { i as n } from "./inArray-BLmbg9f_.js";import { p as _, d as f, P as C } from "./props-DeEfCN6z.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.c2-progress{--c2-progress-palette: var(--c2-progress-sys-color, var(--c2-progress-backgroundColor));--c2-progress-opacity: var(--c2-progress-sys-opacity, .1);--c2-progress-transitionDuration: 20s;display:none;overflow:hidden;position:absolute;box-sizing:border-box;z-index:16;transition-property:background-color;animation-fill-mode:forwards;-webkit-appearance:none;-moz-appearance:none;appearance:none;--c2-progress-height: var(--c2-st-global-distance-space-inline-xs);--c2-progress-backgroundColor: var(--c2-st-action-bg-color-primary-solid-normal);--c2-progress-opacity: var(--c2-ot-opacity-25)}.c2-progress__circle,.c2-progress__circleSub{transition-property:background-color,stroke-dasharray;fill:transparent;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;stroke-opacity:1;stroke-width:var(--c2-progress-height);--sys-color: var(--c2-progress-palette);--sys-color-opacity-custom: var(--c2-progress-palette-opacity);stroke:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)))}.c2-progress--visible,.c2-progress--hide,.c2-progress--value{display:block}.c2-progress--visible{transition-duration:var(--d-sys-transitionDuration-fade-enter);animation-duration:var(--d-sys-transitionDuration-fade-enter)}.c2-progress--hide{transition-duration:var(--d-sys-transitionDuration-fade-exit);animation-duration:var(--d-sys-transitionDuration-fade-exit)}.c2-progress--value:after,.c2-progress--value:before{animation-name:none!important}.c2-progress--value .c2-progress__circle{animation-name:none!important;stroke-dasharray:calc(var(--c2-progress-sys-value) * var(--c2-progress-circular-dasharray)) var(--c2-progress-circular-length);stroke-linecap:butt}.c2-progress--linear{padding-inline-start:0;padding-inline-end:0;width:100%;height:var(--c2-progress-height);--sys-background: var(--c2-progress-palette);--sys-background-opacity-custom: var(--c2-progress-palette-opacity);--sys-background-opacity: var(--c2-progress-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}@supports not (padding-inline-start: 0){.c2-progress--linear{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-left: 0}}@supports not (padding-inline-end: 0){.c2-progress--linear{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-right: 0}}.c2-progress--linear:after,.c2-progress--linear:before{position:absolute;top:0;bottom:0;left:0;right:100%;content:" ";--sys-background: var(--c2-progress-palette);--sys-background-opacity-custom: var(--c2-progress-palette-opacity);--sys-background-opacity: 1;background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));transition-property:background-color;transition-duration:inherit}.c2-progress--linear.c2-progress--visible{animation-name:c2-progress-linear-visible}.c2-progress--linear.c2-progress--hide{animation-name:c2-progress-linear-hidden}.c2-progress--linear.c2-progress--value:after{display:none}.c2-progress--linear.c2-progress--value:before{right:var(--c2-progress-sys-value);transition-property:right}.c2-progress--linear.c2-progress--position--top{top:0;transform-origin:top}.c2-progress--linear.c2-progress--position--bottom{bottom:0;transform-origin:bottom}.c2-progress--linear.c2-progress--indeterminate--type1:after{animation-duration:var(--c2-progress-transitionDuration);animation-fill-mode:forwards}.c2-progress--linear.c2-progress--indeterminate--type1.c2-progress--visible:after{animation-name:c2-progress-linear-type1}.c2-progress--linear.c2-progress--indeterminate--type1.c2-progress--hide{animation-delay:var(--d-sys-transitionDuration-fade-exit)}.c2-progress--linear.c2-progress--indeterminate--type1.c2-progress--hide:after{animation-name:c2-progress-linear-type1}.c2-progress--linear.c2-progress--indeterminate--type1.c2-progress--hide:before{right:0;transition-property:right}.c2-progress--linear.c2-progress--indeterminate--type2:after{animation:c2-progress-linear-type3 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}.c2-progress--linear.c2-progress--indeterminate--type2:before{animation:c2-progress-linear-type2 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.c2-progress--linear.c2-progress--indeterminate--type3:after{animation:c2-progress-linear-type4 1.2s linear infinite}.c2-progress--circular{--c2-progress-circular-length: 125.66370614px;--c2-progress-circular-dasharray: calc(var(--c2-progress-circular-length) / 100);margin:auto;--sys-width: var(--c2-progress-width);width:var(--sys-width);flex-basis:var(--sys-width);max-width:100%;aspect-ratio:1/1;max-width:calc(100% - 2 * var(--c2-progress-inset));max-height:calc(100% - 2 * var(--c2-progress-inset));transform:translate(calc(var(--sys-transform-translateX, 0px) * var(--d-dir))) translateY(var(--sys-transform-translateY, 0px)) scale(var(--sys-transform-scale, 1)) rotate(var(--sys-transform-rotate, 0));--sys-transform-rotate: -90deg}@supports not (aspect-ratio: 1/1){.c2-progress--circular{--sys-height: var(--c2-progress-width);height:var(--sys-height)}}.c2-progress--circular.c2-progress--visible{animation-name:c2-progress-circle-visible}.c2-progress--circular.c2-progress--hide{animation-name:c2-progress-circle-hidden}.c2-progress--circular.c2-progress--dense{--c2-progress-inset: 0px}.c2-progress--circular.c2-progress--indeterminate--type1 .c2-progress__circle{animation-name:c2-progress-circle-type1;animation-duration:var(--c2-progress-transitionDuration);animation-fill-mode:forwards}.c2-progress--circular.c2-progress--indeterminate--type2 .c2-progress__circle{transform-origin:center;animation:c2-progress-circle-type2 2s linear infinite,c2-progress-circle-type3 1.5s ease-in-out infinite}.c2-progress--circular.c2-progress--indeterminate--type3 .c2-progress__circle{stroke-dasharray:32,200;stroke-dashoffset:0;transform-origin:center;animation:c2-progress-circle-type2 1.2s linear infinite}.c2-progress--circular.c2-progress--indeterminate--type3 .c2-progress__circleSub{stroke-dasharray:none;--sys-color-opacity: var(--c2-progress-opacity)}.c2-progress--inverse{--c2-progress-palette: var(--c2-progress-sys-color, var(--sys-color, var(--c2-progress-backgroundColor)))}@keyframes c2-progress-linear-visible{0%{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes c2-progress-linear-hidden{0%{transform:scaleY(1)}to{transform:scaleY(0)}}@keyframes c2-progress-linear-type1{0%{right:100%}5%{right:60%}50%{right:10%}to{right:5%}}@keyframes c2-progress-linear-type2{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes c2-progress-linear-type3{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes c2-progress-linear-type4{0%{left:-25%;right:100%}to{left:100%;right:-25%}}@keyframes c2-progress-circle-visible{0%{opacity:0}to{opacity:1}}@keyframes c2-progress-circle-hidden{0%{opacity:1}to{opacity:0}}@keyframes c2-progress-circle-type1{0%{stroke-dasharray:1.2566370614 125.6637061436}5%{stroke-dasharray:50.2654824574 125.6637061436}50%{stroke-dasharray:113.0973355292 125.6637061436}to{stroke-dasharray:119.3805208364 125.6637061436}}@keyframes c2-progress-circle-type2{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes c2-progress-circle-type3{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}.c2-progress--circular{--c2-progress-width: var(--c2-ot-dimension-300);--c2-progress-inset: var(--c2-st-global-distance-space-inline-md);inset:var(--c2-st-global-distance-space-inline-md)}@supports not (inset: var(--c2-st-global-distance-space-inline-md)){.c2-progress--circular{inset-inline-start:var(--c2-st-global-distance-space-inline-md);inset-inline-end:var(--c2-st-global-distance-space-inline-md);top:var(--c2-st-global-distance-space-inline-md);bottom:var(--c2-st-global-distance-space-inline-md)}@supports not (inset-inline-start: var(--c2-st-global-distance-space-inline-md)){.c2-progress--circular{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: var(--c2-st-global-distance-space-inline-md)}}@supports not (inset-inline-end: var(--c2-st-global-distance-space-inline-md)){.c2-progress--circular{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: var(--c2-st-global-distance-space-inline-md)}}}'));document.head.appendChild(s);}}catch (_){}})()


const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...f,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type3",
  position: "top"
}, k = {
  ..._,
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: r == null ? void 0 : r.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: r == null ? void 0 : r.indeterminate
  },
  position: {
    type: String,
    default: r == null ? void 0 : r.position
  },
  dense: Boolean,
  inverse: Boolean
}, v = /* @__PURE__ */ d({
  name: "C2Progress",
  __name: "C2Progress",
  props: { ...k },
  setup(i, { expose: p, emit: c }) {
    const a = c, e = i, m = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-progress": !0,
        "c2-progress--linear": e.linear && !e.circular,
        "c2-progress--circular": e.circular,
        [`c2-progress--indeterminate--${e.indeterminate}`]: n(t.indeterminate, e.indeterminate),
        [`c2-progress--position--${e.position}`]: n(t.position, e.position),
        "c2-progress--dense": e.dense,
        "c2-progress--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), l = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new C(
      "c2.progress",
      e,
      {
        emits: a,
        classes: m,
        styles: l
      }
    ), g = o.render();
    return p(o.expose()), (x, D) => (u(), y(P(B(g))));
  }
}), b = v;
export {
  b as C2Progress
};
