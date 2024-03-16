import { computed as a } from "vue";
import { r as t } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { g as c } from "./getBind-CgHMfjrB.js";
const m = {
  label: [String, Number]
}, P = function(e, n, b = "is-label") {
  const d = a(
    () => !!(e != null && e.label || n && "default" in n)
  );
  return {
    isLabel: d,
    renderLabel() {
      var i;
      const l = [];
      if (d.value) {
        const u = [];
        e != null && e.label && u.push(e.label), n && (n != null && n.default) && u.push((i = n.default) == null ? void 0 : i.call(n, {})), u.length > 0 && l.push(t(
          "span",
          { class: b || "label" },
          u
        ));
      }
      return l;
    }
  };
}, h = {
  loading: [Boolean, Object]
}, r = function(e, n, b = "is-progress", d) {
  const l = a(() => c(
    e.loading,
    {
      class: b,
      ...d
    },
    "visible"
  ));
  return {
    progressBind: l,
    renderProgress() {
      const i = [];
      return n && (e != null && e.loading) && n.renderAdd(
        i,
        "progress",
        l.value
      ), i;
    }
  };
}, v = {
  loading: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, y = function(e) {
  const n = () => !!(e != null && e.disabled);
  return {
    disabledBind: a(() => n() || void 0),
    isEnabled: a(
      () => !(e != null && e.disabled) && !(e != null && e.readonly) && !(e != null && e.loading)
    ),
    isReadonly: a(() => !!(e != null && e.readonly)),
    isDisabled: a(() => n()),
    isProgress: a(() => !!(e != null && e.loading))
  };
};
export {
  v as a,
  h as b,
  y as c,
  P as d,
  r as e,
  m as u
};
