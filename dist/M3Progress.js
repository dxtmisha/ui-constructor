import { defineComponent as d, computed as s, openBlock as u, createBlock as y, resolveDynamicComponent as P, unref as B } from "vue";import { i as n } from "./inArray-BLmbg9f_.js";import { p as _, d as f, P as k } from "./props-DeEfCN6z.js";(function(){if(typeof document !== undefined){let s=document.createElement('style');s.appendChild(document.createTextNode('.m3-progress{--m3-progress-palette: var(--m3-progress-sys-color, var(--m3-progress-backgroundColor));--m3-progress-opacity: var(--m3-progress-sys-opacity, .1);--m3-progress-transitionDuration: 20s;display:none;overflow:hidden;position:absolute;box-sizing:border-box;z-index:16;transition-property:background-color;animation-fill-mode:forwards;-webkit-appearance:none;-moz-appearance:none;appearance:none;--m3-progress-height: var(--m3-ref-spacing-1);--m3-progress-backgroundColor: var(--m3-sys-palette-primary);--m3-progress-opacity: var(--m3-sys-opacity-012)}.m3-progress__circle,.m3-progress__circleSub{transition-property:background-color,stroke-dasharray;fill:transparent;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;stroke-opacity:1;stroke-width:var(--m3-progress-height);--sys-color: var(--m3-progress-palette);--sys-color-opacity-custom: var(--m3-progress-palette-opacity);stroke:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)))}.m3-progress--visible,.m3-progress--hide,.m3-progress--value{display:block}.m3-progress--visible{transition-duration:var(--d-sys-transitionDuration-fade-enter);animation-duration:var(--d-sys-transitionDuration-fade-enter)}.m3-progress--hide{transition-duration:var(--d-sys-transitionDuration-fade-exit);animation-duration:var(--d-sys-transitionDuration-fade-exit)}.m3-progress--value:after,.m3-progress--value:before{animation-name:none!important}.m3-progress--value .m3-progress__circle{animation-name:none!important;stroke-dasharray:calc(var(--m3-progress-sys-value) * var(--m3-progress-circular-dasharray)) var(--m3-progress-circular-length);stroke-linecap:butt}.m3-progress--linear{padding-inline-start:0;padding-inline-end:0;width:100%;height:var(--m3-progress-height);--sys-background: var(--m3-progress-palette);--sys-background-opacity-custom: var(--m3-progress-palette-opacity);--sys-background-opacity: var(--m3-progress-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}@supports not (padding-inline-start: 0){.m3-progress--linear{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-left: 0}}@supports not (padding-inline-end: 0){.m3-progress--linear{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-right: 0}}.m3-progress--linear:after,.m3-progress--linear:before{position:absolute;top:0;bottom:0;left:0;right:100%;content:" ";--sys-background: var(--m3-progress-palette);--sys-background-opacity-custom: var(--m3-progress-palette-opacity);--sys-background-opacity: 1;background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));transition-property:background-color;transition-duration:inherit}.m3-progress--linear.m3-progress--visible{animation-name:m3-progress-linear-visible}.m3-progress--linear.m3-progress--hide{animation-name:m3-progress-linear-hidden}.m3-progress--linear.m3-progress--value:after{display:none}.m3-progress--linear.m3-progress--value:before{right:var(--m3-progress-sys-value);transition-property:right}.m3-progress--linear.m3-progress--position--top{top:0;transform-origin:top}.m3-progress--linear.m3-progress--position--bottom{bottom:0;transform-origin:bottom}.m3-progress--linear.m3-progress--indeterminate--type1:after{animation-duration:var(--m3-progress-transitionDuration);animation-fill-mode:forwards}.m3-progress--linear.m3-progress--indeterminate--type1.m3-progress--visible:after{animation-name:m3-progress-linear-type1}.m3-progress--linear.m3-progress--indeterminate--type1.m3-progress--hide{animation-delay:var(--d-sys-transitionDuration-fade-exit)}.m3-progress--linear.m3-progress--indeterminate--type1.m3-progress--hide:after{animation-name:m3-progress-linear-type1}.m3-progress--linear.m3-progress--indeterminate--type1.m3-progress--hide:before{right:0;transition-property:right}.m3-progress--linear.m3-progress--indeterminate--type2:after{animation:m3-progress-linear-type3 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}.m3-progress--linear.m3-progress--indeterminate--type2:before{animation:m3-progress-linear-type2 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.m3-progress--linear.m3-progress--indeterminate--type3:after{animation:m3-progress-linear-type4 1.2s linear infinite}.m3-progress--circular{--m3-progress-circular-length: 125.66370614px;--m3-progress-circular-dasharray: calc(var(--m3-progress-circular-length) / 100);margin:auto;--sys-width: var(--m3-progress-width);width:var(--sys-width);flex-basis:var(--sys-width);max-width:100%;aspect-ratio:1/1;max-width:calc(100% - 2 * var(--m3-progress-inset));max-height:calc(100% - 2 * var(--m3-progress-inset));transform:translate(calc(var(--sys-transform-translateX, 0px) * var(--d-dir))) translateY(var(--sys-transform-translateY, 0px)) scale(var(--sys-transform-scale, 1)) rotate(var(--sys-transform-rotate, 0));--sys-transform-rotate: -90deg}@supports not (aspect-ratio: 1/1){.m3-progress--circular{--sys-height: var(--m3-progress-width);height:var(--sys-height)}}.m3-progress--circular.m3-progress--visible{animation-name:m3-progress-circle-visible}.m3-progress--circular.m3-progress--hide{animation-name:m3-progress-circle-hidden}.m3-progress--circular.m3-progress--dense{--m3-progress-inset: 0px}.m3-progress--circular.m3-progress--indeterminate--type1 .m3-progress__circle{animation-name:m3-progress-circle-type1;animation-duration:var(--m3-progress-transitionDuration);animation-fill-mode:forwards}.m3-progress--circular.m3-progress--indeterminate--type2 .m3-progress__circle{transform-origin:center;animation:m3-progress-circle-type2 2s linear infinite,m3-progress-circle-type3 1.5s ease-in-out infinite}.m3-progress--circular.m3-progress--indeterminate--type3 .m3-progress__circle{stroke-dasharray:32,200;stroke-dashoffset:0;transform-origin:center;animation:m3-progress-circle-type2 1.2s linear infinite}.m3-progress--circular.m3-progress--indeterminate--type3 .m3-progress__circleSub{stroke-dasharray:none;--sys-color-opacity: var(--m3-progress-opacity)}.m3-progress--inverse{--m3-progress-palette: var(--m3-progress-sys-color, var(--sys-color, var(--m3-progress-backgroundColor)))}@keyframes m3-progress-linear-visible{0%{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes m3-progress-linear-hidden{0%{transform:scaleY(1)}to{transform:scaleY(0)}}@keyframes m3-progress-linear-type1{0%{right:100%}5%{right:60%}50%{right:10%}to{right:5%}}@keyframes m3-progress-linear-type2{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes m3-progress-linear-type3{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes m3-progress-linear-type4{0%{left:-25%;right:100%}to{left:100%;right:-25%}}@keyframes m3-progress-circle-visible{0%{opacity:0}to{opacity:1}}@keyframes m3-progress-circle-hidden{0%{opacity:1}to{opacity:0}}@keyframes m3-progress-circle-type1{0%{stroke-dasharray:1.2566370614 125.6637061436}5%{stroke-dasharray:50.2654824574 125.6637061436}50%{stroke-dasharray:113.0973355292 125.6637061436}to{stroke-dasharray:119.3805208364 125.6637061436}}@keyframes m3-progress-circle-type2{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes m3-progress-circle-type3{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}.m3-progress--circular{--m3-progress-width: var(--m3-ref-spacing-12);--m3-progress-inset: var(--m3-ref-spacing-1);inset:var(--m3-ref-spacing-1)}@supports not (inset: var(--m3-ref-spacing-1)){.m3-progress--circular{inset-inline-start:var(--m3-ref-spacing-1);inset-inline-end:var(--m3-ref-spacing-1);top:var(--m3-ref-spacing-1);bottom:var(--m3-ref-spacing-1)}@supports not (inset-inline-start: var(--m3-ref-spacing-1)){.m3-progress--circular{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: var(--m3-ref-spacing-1)}}@supports not (inset-inline-end: var(--m3-ref-spacing-1)){.m3-progress--circular{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: var(--m3-ref-spacing-1)}}}'));document.head.appendChild(s);}})()


const t = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom"]
  // :values [!] System label / Системная метка
}, r = {
  ...f,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, v = {
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
}, x = /* @__PURE__ */ d({
  name: "M3Progress",
  __name: "M3Progress",
  props: { ...v },
  setup(i, { expose: p, emit: a }) {
    const m = a, e = i, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-progress": !0,
        "m3-progress--linear": e.linear && !e.circular,
        "m3-progress--circular": e.circular,
        [`m3-progress--indeterminate--${e.indeterminate}`]: n(t.indeterminate, e.indeterminate),
        [`m3-progress--position--${e.position}`]: n(t.position, e.position),
        "m3-progress--dense": e.dense,
        "m3-progress--inverse": e.inverse
        // :classes-values [!] System label / Системная метка
      }
    })), l = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new k(
      "m3.progress",
      e,
      {
        emits: m,
        classes: c,
        styles: l
      }
    ), g = o.render();
    return p(o.expose()), (M, C) => (u(), y(P(B(g))));
  }
}), $ = x;
export {
  $ as M3Progress
};
