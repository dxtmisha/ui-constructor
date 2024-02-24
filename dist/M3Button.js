import './M3Button.css';
var B = Object.defineProperty;
var v = (e, n, i) => n in e ? B(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[n] = i;
var f = (e, n, i) => (v(e, typeof n != "symbol" ? n + "" : n, i), i);
import { computed as o, h as y, defineComponent as S, openBlock as C, createBlock as T, resolveDynamicComponent as k, unref as P } from "vue";
import { i as b } from "./inArray-BLmbg9f_.js";
import { r as x, D as I } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { g as m } from "./getBind-BTtwgl8A.js";
import { e as E } from "./eventStopPropagation-fHm2p5BF.js";
import { M3Icon as O } from "./M3Icon.js";
import { M3Progress as A } from "./M3Progress.js";
const j = {
  label: [String, Number]
}, D = function(e, n, i = "is-label") {
  const l = o(
    () => !!(e != null && e.label || n && "default" in n)
  );
  return {
    isLabel: l,
    renderLabel() {
      var a;
      const t = [];
      if (l.value) {
        const c = [];
        e != null && e.label && c.push(e.label), n && (n != null && n.default) && c.push((a = n.default) == null ? void 0 : a.call(n, {})), c.length > 0 && t.push(x(
          "span",
          { class: i || "label" },
          c
        ));
      }
      return t;
    }
  };
}, _ = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, L = {
  ..._,
  iconTrailing: [String, Object]
}, M = function(e, n, i = "is-icon", l = "is-icon-trailing") {
  const t = o(() => m(
    e == null ? void 0 : e.icon,
    {
      class: i,
      active: e == null ? void 0 : e.selected,
      turn: !(e != null && e.iconTrailing) && (e == null ? void 0 : e.iconTurn),
      hide: e == null ? void 0 : e.iconHide,
      animationType: "type2",
      start: !0,
      "data-event-type": "icon"
    },
    "icon"
  )), a = "iconTrailing" in e ? o(() => m(
    e.iconTrailing,
    {
      class: l,
      turn: e == null ? void 0 : e.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, c = o(() => !!(e != null && e.icon || e != null && e.iconTrailing));
  return {
    iconBind: t,
    trailingBind: a,
    isIcon: c,
    renderIcon() {
      const d = [];
      return n && (e != null && e.icon && n.renderAdd(
        d,
        "icon",
        t.value,
        void 0,
        "icon"
      ), a && (e != null && e.iconTrailing) && n.renderAdd(
        d,
        "icon",
        a.value,
        void 0,
        "iconTrailing"
      )), d;
    }
  };
}, R = {
  progress: [Boolean, Object]
}, $ = function(e, n, i = "is-progress", l) {
  const t = o(() => m(
    e.loading,
    {
      class: i,
      ...l
    },
    "visible"
  ));
  return {
    progressBind: t,
    renderProgress() {
      const a = [];
      return n && (e != null && e.loading) && n.renderAdd(
        a,
        "progress",
        t.value
      ), a;
    }
  };
}, H = {
  progress: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, N = function(e) {
  const n = () => !!(e != null && e.disabled);
  return {
    disabledBind: o(() => n() || void 0),
    isEnabled: o(
      () => !(e != null && e.disabled) && !(e != null && e.readonly) && !(e != null && e.loading)
    ),
    isReadonly: o(() => !!(e != null && e.readonly)),
    isDisabled: o(() => n()),
    isProgress: o(() => !!(e != null && e.loading))
  };
}, V = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, w = function(e, n, i) {
  const l = (a) => {
    var d, u, g;
    return {
      type: ((g = (u = (d = a.target) == null ? void 0 : d.closest("[data-event-type]")) == null ? void 0 : u.dataset) == null ? void 0 : g.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, t = () => !1;
  return {
    onClick(a) {
      n.isEnabled.value && !t() ? i == null || i("click", a, l(a)) : E(a);
    }
  };
};
class q extends I {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(i, l, t) {
    super(
      i,
      l,
      t
    );
    f(this, "icons");
    this.icons = M(
      this.props,
      this.components,
      this.getSubClass("icon"),
      this.getSubClass("trailing")
    ), this.init();
  }
  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  makeOptions() {
    return this;
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    const i = N(this.props);
    return {
      ...D(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...$(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...i,
      ...w(
        this.props,
        i,
        this.emits
      )
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {
        [this.getStatusClass("icon")]: this.icons.isIcon.value
      },
      // :classes [!] System label / Системная метка
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      loading: this.getSubClass("loading")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var t;
    const i = this.setup(), l = [
      ...i.renderProgress(),
      ...i.renderLabel(),
      ...i.renderIcon()
    ];
    return i.isEnabled.value && this.components.renderAdd(l, "ripple"), y(((t = this.props) == null ? void 0 : t.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: i.classes.value.main,
      style: i.styles.value,
      disabled: i.disabledBind.value,
      onClick: i.onClick
    }, l);
  }
}
const r = {
  tag: "button"
}, z = {
  ...j,
  ...L,
  ...R,
  ...H,
  ...V,
  // Options
  tag: {
    type: String,
    default: r == null ? void 0 : r.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
}, h = {
  // :values [!] System label / Системная метка
  adaptive: ["icon", "sm", "md"],
  height: ["sm", "md", "lg"],
  palette: ["primary", "secondary", "tertiary", "red", "green", "error", "neutral", "neutralVariant"]
  // :values [!] System label / Системная метка
}, s = {
  ...r,
  // :default [!] System label / Системная метка
  height: "md",
  filled: !0
}, F = {
  ...z,
  // :prop [!] System label / Системная метка
  focus: Boolean,
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean,
  adaptive: String,
  height: {
    type: String,
    default: s == null ? void 0 : s.height
  },
  filled: {
    type: Boolean,
    default: s == null ? void 0 : s.filled
  },
  outlined: Boolean,
  text: Boolean,
  elevated: Boolean,
  tonal: Boolean,
  palette: String
}, G = /* @__PURE__ */ S({
  name: "M3Button",
  __name: "M3Button",
  props: { ...F },
  emits: ["click"],
  setup(e, { expose: n, emit: i }) {
    const l = i, t = e, a = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-button": !0,
        "m3-button--focus": t.focus,
        "m3-button--disabled": t.disabled,
        "m3-button--selected": t.selected,
        "m3-button--loading": t.loading,
        "m3-button--readonly": t.readonly,
        [`m3-button--adaptive--${t.adaptive}`]: b(h.adaptive, t.adaptive),
        [`m3-button--height--${t.height}`]: b(h.height, t.height),
        "m3-button--filled": t.filled && !t.outlined && !t.text && !t.elevated && !t.tonal,
        "m3-button--outlined": t.outlined,
        "m3-button--text": t.text,
        "m3-button--elevated": t.elevated,
        "m3-button--tonal": t.tonal,
        [`m3-palette--${t.palette}`]: b(h.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), c = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), d = new q(
      "m3.button",
      t,
      {
        emits: l,
        components: {
          icon: O,
          progress: A
        },
        classes: a,
        styles: c
      }
    ), u = d.render();
    return n(d.expose()), (g, J) => (C(), T(k(P(u))));
  }
}), ee = G;
export {
  ee as M3Button
};
