import { defineComponent as u, computed as a, openBlock as g, createBlock as h, resolveDynamicComponent as b, unref as B } from "vue";import { i as o } from "./inArray-BLmbg9f_.js";import { p as y, d as f, B as k } from "./props-FIZ5m0Po.js";import { M2Icon as x } from "./M2Icon.js";import { M2Progress as v } from "./M2Progress.js";import { M2Ripple as M } from "./M2Ripple.js";(function(){try {if(typeof document !== undefined && document && 'createElement' in document){let s=document.createElement('style');s.appendChild(document.createTextNode('.m2-button{--m2-button-padding: 0;display:flex;align-items:center;justify-content:center;display:inline-flex;box-sizing:border-box;position:relative;padding:0;min-width:var(--sys-height, 0);text-decoration:none;background:transparent;border-radius:0;border:none;cursor:pointer;--m2-button-gap: var(--m2-ref-spacing-2);--m2-button-padding: var(--m2-ref-spacing-4);--m2-button-transitionFunction: var(--d-sys-transitionFunction-standard);font-family:var(--m2-ref-font-family-roboto);--sys-font-size: var(--m2-ref-font-size-md);font-size:var(--sys-font-size);font-weight:var(--m2-ref-font-weight-bold);--sys-line-height: var(--m2-ref-lineHeight-sm);line-height:var(--sys-line-height);letter-spacing:var(--m2-ref-letterSpacing-2xl);text-transform:uppercase;--sys-color-opacity: var(--m2-sys-opacity-surface-high);--sys-palette-color: var(--m2-palette-dark200, var(--m2-palette-basic500, var(--m2-sys-palette-primary)));--sys-palette-color-opacity: var(--m2-sys-palette-primary-opacity);--sys-color: var(--sys-palette-color);--sys-color-opacity-custom: var(--sys-palette-color-opacity);color:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));background-color:transparent;--sys-gradient-opacity: 0;--sys-palette-gradient: var(--m2-palette-dark200, var(--m2-palette-basic500, var(--m2-sys-palette-primary)));--sys-palette-gradient-opacity: var(--m2-sys-palette-primary-opacity);--sys-gradient: var(--sys-palette-gradient);--sys-gradient-opacity-custom: var(--sys-palette-gradient-opacity);background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))));border-radius:var(--m2-sys-rounded-standard);box-shadow:none;transition-duration:var(--d-sys-transitionDuration-lg-close);transition-property:background-color,background-image,border,box-shadow}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):hover{text-decoration:none}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):focus,.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):focus-within,.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--focus{outline:none}.m2-button:disabled,.m2-button.m2-button--disabled,.m2-button--disabled{cursor:default}.m2-button.m2-button--readonly,.m2-button--readonly{cursor:default}.m2-button__label{display:flex;align-items:center;justify-content:center;gap:var(--m2-button-gap);order:4;padding:0 var(--m2-button-padding);transition:opacity var(--d-sys-transitionDuration-standard) linear}.m2-button__paddingSpacer{order:1}.m2-button__paddingSpacer~.m2-button__paddingSpacer{order:24}.m2-button__icon,.m2-button__trailing{--m2-button-margin: calc((var(--sys-height) - var(--m2-icon-_width)) / 2);margin-inline-start:var(--m2-button-margin);margin-inline-end:var(--m2-button-margin)}@supports not (margin-inline-start: var(--m2-button-margin)){.m2-button__icon,.m2-button__trailing{margin-left:var(--d-dir-margin-left);margin-right:var(--d-dir-margin-right);--sys-margin-left: var(--m2-button-margin)}}@supports not (margin-inline-end: var(--m2-button-margin)){.m2-button__icon,.m2-button__trailing{margin-left:var(--d-dir-margin-left);margin-right:var(--d-dir-margin-right);--sys-margin-right: var(--m2-button-margin)}}.m2-button__label~.m2-button__icon{margin-inline-end:calc(var(--m2-button-margin) - var(--m2-button-padding))}@supports not (margin-inline-end: calc(var(--m2-button-margin) - var(--m2-button-padding))){.m2-button__label~.m2-button__icon{margin-left:var(--d-dir-margin-left);margin-right:var(--d-dir-margin-right);--sys-margin-right: calc(var(--m2-button-margin) - var(--m2-button-padding))}}.m2-button__label~.m2-button__trailing{margin-inline-start:calc(var(--m2-button-margin) - var(--m2-button-padding))}@supports not (margin-inline-start: calc(var(--m2-button-margin) - var(--m2-button-padding))){.m2-button__label~.m2-button__trailing{margin-left:var(--d-dir-margin-left);margin-right:var(--d-dir-margin-right);--sys-margin-left: calc(var(--m2-button-margin) - var(--m2-button-padding))}}.m2-button--icon{--m2-button-padding: calc(var(--sys-height) / 2)}.m2-button--icon .m2-button__paddingSpacer{display:none}.m2-button--loading{cursor:default}.m2-button__loading.m2-progress--visible~*{opacity:var(--m2-button-colorOpacity, 0)}.m2-button__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):focus,.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):focus-within,.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--focus{--sys-gradient-opacity: var(--m2-sys-opacity-focus)}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):hover{--sys-gradient-opacity: var(--m2-sys-opacity-hover);transition-duration:var(--d-sys-transitionDuration-sm)}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress):active{--sys-gradient-opacity: var(--m2-sys-opacity-pressed);transition-duration:var(--d-sys-transitionDuration-sm)}.m2-button:disabled,.m2-button.m2-button--disabled,.m2-button--disabled{--sys-color-opacity: var(--m2-sys-opacity-surface-disabled);--sys-palette-color: var(--sys-palette, var(--m2-sys-palette-disabled));--sys-palette-color-opacity: var(--m2-sys-palette-disabled-opacity);--sys-color: var(--sys-palette-color);--sys-color-opacity-custom: var(--sys-palette-color-opacity);color:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));box-shadow:none;transition-duration:var(--d-sys-transitionDuration-sm)}.m2-button--selected{--sys-palette-color: var(--m2-palette-dark700, var(--m2-palette-basic700, var(--m2-sys-palette-primaryVariant)));--sys-palette-color-opacity: var(--m2-sys-palette-primaryVariant-opacity);--sys-color: var(--sys-palette-color);--sys-color-opacity-custom: var(--sys-palette-color-opacity);color:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));--sys-palette-gradient: var(--m2-palette-dark700, var(--m2-palette-basic700, var(--m2-sys-palette-primaryVariant)));--sys-palette-gradient-opacity: var(--m2-sys-palette-primaryVariant-opacity);--sys-gradient: var(--sys-palette-gradient);--sys-gradient-opacity-custom: var(--sys-palette-gradient-opacity);background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))))}.m2-button--adaptive--icon{--m2-button-padding: 0;justify-content:var(--d-dir-start, flex-start)}.m2-button--adaptive--icon .m2-button__label{display:none;padding-inline-start:0;padding-inline-end:0}@supports not (padding-inline-start: 0){.m2-button--adaptive--icon .m2-button__label{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-left: 0}}@supports not (padding-inline-end: 0){.m2-button--adaptive--icon .m2-button__label{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-right: 0}}.m2-button--adaptive--icon .m2-button__paddingSpacer{display:none}@media screen and (max-width: 599px){.m2-button--adaptive--sm{--m2-button-padding: 0;justify-content:var(--d-dir-start, flex-start)}.m2-button--adaptive--sm .m2-button__label{display:none;padding-inline-start:0;padding-inline-end:0}@supports not (padding-inline-start: 0){.m2-button--adaptive--sm .m2-button__label{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-left: 0}}@supports not (padding-inline-end: 0){.m2-button--adaptive--sm .m2-button__label{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-right: 0}}.m2-button--adaptive--sm .m2-button__paddingSpacer{display:none}}@media screen and (max-width: 904px){.m2-button--adaptive--md{--m2-button-padding: 0;justify-content:var(--d-dir-start, flex-start)}.m2-button--adaptive--md .m2-button__label{display:none;padding-inline-start:0;padding-inline-end:0}@supports not (padding-inline-start: 0){.m2-button--adaptive--md .m2-button__label{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-left: 0}}@supports not (padding-inline-end: 0){.m2-button--adaptive--md .m2-button__label{padding-left:var(--d-dir-padding-left);padding-right:var(--d-dir-padding-right);--sys-padding-right: 0}}.m2-button--adaptive--md .m2-button__paddingSpacer{display:none}}.m2-button--height--sm{--sys-height: var(--m2-ref-spacing-7);height:var(--sys-height)}.m2-button--height--md{--sys-height: var(--m2-ref-spacing-9);height:var(--sys-height)}.m2-button--height--lg{--sys-height: var(--m2-ref-spacing-12);height:var(--sys-height)}.m2-button--contained{--sys-color: var(--m2-sys-palette-onPrimary);--sys-color-opacity-custom: var(--m2-sys-palette-onPrimary-opacity);color:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));--sys-color-opacity: var(--m2-sys-opacity-primary-high);--sys-palette-background: var(--m2-palette-dark200, var(--m2-palette-basic500, var(--m2-sys-palette-primary)));--sys-palette-background-opacity: var(--m2-sys-palette-primary-opacity);--sys-background: var(--sys-palette-background);--sys-background-opacity-custom: var(--sys-palette-background-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));--sys-gradient: var(--m2-sys-palette-onPrimary);--sys-gradient-opacity-custom: var(--m2-sys-palette-onPrimary-opacity);background-image:linear-gradient(0deg,rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))),rgba(var(--sys-gradient),var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))));box-shadow:var(--m2-ref-shadow-2)}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--contained:active{box-shadow:var(--m2-ref-shadow-8)}.m2-button--contained:disabled,.m2-button--contained.m2-button--disabled,.m2-button--contained--disabled{--sys-color: var(--m2-sys-palette-disabled);--sys-color-opacity-custom: var(--m2-sys-palette-disabled-opacity);color:rgba(var(--sys-color),var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));--sys-color-opacity: var(--m2-sys-opacity-surface-disabled);--sys-background-opacity: var(--m2-sys-opacity-disabled);--sys-palette-background: var(--sys-palette, var(--m2-sys-palette-disabled));--sys-palette-background-opacity: var(--m2-sys-palette-disabled-opacity);--sys-background: var(--sys-palette-background);--sys-background-opacity-custom: var(--sys-palette-background-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));box-shadow:none}.m2-button--contained.m2-button--selected{--sys-palette-background: var(--m2-palette-dark700, var(--m2-palette-basic700, var(--m2-sys-palette-primaryVariant)));--sys-palette-background-opacity: var(--m2-sys-palette-primaryVariant-opacity);--sys-background: var(--sys-palette-background);--sys-background-opacity-custom: var(--sys-palette-background-opacity);background-color:rgba(var(--sys-background),var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)))}.m2-button--outlined:before{content:" ";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;border-width:var(--m2-ref-spacing-px);border-style:solid;--sys-border: var(--m2-sys-palette-outline);--sys-border-opacity-custom: var(--m2-sys-palette-outline-opacity);border-color:rgba(var(--sys-border),var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)));--sys-border-opacity: var(--m2-sys-opacity-outline)}@supports not (inset: 0px){.m2-button--outlined:before{inset-inline-start:0px;inset-inline-end:0px;top:0;bottom:0}@supports not (inset-inline-start: 0px){.m2-button--outlined:before{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0px}}@supports not (inset-inline-end: 0px){.m2-button--outlined:before{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0px}}}.m2-button--outlined:after{content:" ";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;border-width:var(--m2-ref-spacing-px);border-style:solid;--sys-border: var(--m2-sys-palette-outline);--sys-border-opacity-custom: var(--m2-sys-palette-outline-opacity);border-color:rgba(var(--sys-border),var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)));--sys-border-opacity: 0;transition:inherit}@supports not (inset: 0px){.m2-button--outlined:after{inset-inline-start:0px;inset-inline-end:0px;top:0;bottom:0}@supports not (inset-inline-start: 0px){.m2-button--outlined:after{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0px}}@supports not (inset-inline-end: 0px){.m2-button--outlined:after{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0px}}}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--outlined:hover:after{content:" ";transition-duration:var(--d-sys-transitionDuration-lg-close)}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--outlined:active:after{content:" ";--sys-border-opacity: var(--m2-sys-opacity-scrim)}.m2-button--text{--m2-button-padding: var(--m2-ref-spacing-2)}.m2-button--text:after{content:" ";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;border-width:var(--m2-ref-spacing-px);border-style:solid;--sys-border: var(--m2-sys-palette-outline);--sys-border-opacity-custom: var(--m2-sys-palette-outline-opacity);border-color:rgba(var(--sys-border),var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)));--sys-border-opacity: 0;transition:inherit}@supports not (inset: 0px){.m2-button--text:after{inset-inline-start:0px;inset-inline-end:0px;top:0;bottom:0}@supports not (inset-inline-start: 0px){.m2-button--text:after{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-left: 0px}}@supports not (inset-inline-end: 0px){.m2-button--text:after{left:var(--d-dir-position-left);right:var(--d-dir-position-right);--sys-position-right: 0px}}}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--text:hover:after{content:" ";transition-duration:var(--d-sys-transitionDuration-lg-close)}.m2-button:not(:disabled,.m2-button--disabled,.m2-button--readonly,.m2-button--progress).m2-button--text:active:after{content:" ";--sys-border-opacity: var(--m2-sys-opacity-scrim)}'));document.head.appendChild(s);}}catch (_){}})()





const n = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "grey", "greyBlue", "white", "black", "blackLight"]
  // :values [!] System label / Системная метка
}, t = {
  ...f,
  // :default [!] System label / Системная метка
  height: "md",
  contained: !0
}, _ = {
  ...y,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: t == null ? void 0 : t.height
  },
  contained: {
    type: Boolean,
    default: t == null ? void 0 : t.contained
  },
  outlined: Boolean,
  text: Boolean,
  palette: String
}, w = /* @__PURE__ */ u({
  name: "M2Button",
  __name: "M2Button",
  props: { ..._ },
  emits: ["click"],
  setup(r, { expose: l, emit: s }) {
    const p = s, e = r, m = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m2-button": !0,
        "m2-button--focus": e.focus,
        "m2-button--disabled": e.disabled,
        "m2-button--selected": e.selected,
        "m2-button--loading": e.loading,
        "m2-button--readonly": e.readonly,
        [`m2-button--adaptive--${e.adaptive}`]: o(n.adaptive, e.adaptive),
        [`m2-button--height--${e.height}`]: o(n.height, e.height),
        "m2-button--contained": e.contained && !e.outlined && !e.text,
        "m2-button--outlined": e.outlined,
        "m2-button--text": e.text,
        [`m2-palette--${e.palette}`]: o(n.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), c = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new k(
      "m2.button",
      e,
      {
        emits: p,
        components: {
          icon: x,
          progress: v,
          ripple: M
        },
        classes: m,
        styles: c
      }
    ), d = i.render();
    return l(i.expose()), (S, $) => (g(), h(b(B(d))));
  }
}), G = w;
export {
  G as M2Button
};
