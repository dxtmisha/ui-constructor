var v = Object.defineProperty;
var f = (e, i, n) => i in e ? v(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[i] = n;
var h = (e, i, n) => (f(e, typeof i != "symbol" ? i + "" : i, n), n);
import { computed as c, h as u } from "vue";
import { r as B, D as S } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { g as o } from "./getBind-BTtwgl8A.js";
import { e as y } from "./eventStopPropagation-fHm2p5BF.js";
const C = {
  label: [String, Number]
}, m = function(e, i, n = "is-label") {
  const l = c(
    () => !!(e != null && e.label || i && "default" in i)
  );
  return {
    isLabel: l,
    renderLabel() {
      var a;
      const t = [];
      if (l.value) {
        const d = [];
        e != null && e.label && d.push(e.label), i && (i != null && i.default) && d.push((a = i.default) == null ? void 0 : a.call(i, {})), d.length > 0 && t.push(B(
          "span",
          { class: n || "label" },
          d
        ));
      }
      return t;
    }
  };
}, T = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, P = {
  ...T,
  iconTrailing: [String, Object]
}, k = function(e, i, n = "is-icon", l = "is-icon-trailing") {
  const t = c(() => o(
    e == null ? void 0 : e.icon,
    {
      class: n,
      active: e == null ? void 0 : e.selected,
      turn: !(e != null && e.iconTrailing) && (e == null ? void 0 : e.iconTurn),
      hide: e == null ? void 0 : e.iconHide,
      animationType: "type2",
      start: !0,
      "data-event-type": "icon"
    },
    "icon"
  )), a = "iconTrailing" in e ? c(() => o(
    e.iconTrailing,
    {
      class: l,
      turn: e == null ? void 0 : e.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, d = c(() => !!(e != null && e.icon || e != null && e.iconTrailing));
  return {
    iconBind: t,
    trailingBind: a,
    isIcon: d,
    renderIcon() {
      const s = [];
      return i && (e != null && e.icon && i.renderAdd(
        s,
        "icon",
        t.value,
        void 0,
        "icon"
      ), a && (e != null && e.iconTrailing) && i.renderAdd(
        s,
        "icon",
        a.value,
        void 0,
        "iconTrailing"
      )), s;
    }
  };
}, E = {
  progress: [Boolean, Object]
}, O = function(e, i, n = "is-progress", l) {
  const t = c(() => o(
    e.loading,
    {
      class: n,
      ...l
    },
    "visible"
  ));
  return {
    progressBind: t,
    renderProgress() {
      const a = [];
      return i && (e != null && e.loading) && i.renderAdd(
        a,
        "progress",
        t.value
      ), a;
    }
  };
}, I = {
  progress: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, j = function(e) {
  const i = () => !!(e != null && e.disabled);
  return {
    disabledBind: c(() => i() || void 0),
    isEnabled: c(
      () => !(e != null && e.disabled) && !(e != null && e.readonly) && !(e != null && e.loading)
    ),
    isReadonly: c(() => !!(e != null && e.readonly)),
    isDisabled: c(() => i()),
    isProgress: c(() => !!(e != null && e.loading))
  };
}, A = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, D = function(e, i, n) {
  const l = (a) => {
    var s, r, b;
    return {
      type: ((b = (r = (s = a.target) == null ? void 0 : s.closest("[data-event-type]")) == null ? void 0 : r.dataset) == null ? void 0 : b.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, t = () => !1;
  return {
    onClick(a) {
      i.isEnabled.value && !t() ? n == null || n("click", a, l(a)) : y(a);
    }
  };
};
class q extends S {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(n, l, t) {
    super(
      n,
      l,
      t
    );
    h(this, "icons");
    this.icons = k(
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
    const n = j(this.props);
    return {
      ...m(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...O(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...n,
      ...D(
        this.props,
        n,
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
      paddingSpacer: this.getSubClass("paddingSpacer"),
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
    const n = this.setup(), l = [
      ...n.renderProgress(),
      u("div", { class: n.classes.value.paddingSpacer }),
      ...n.renderLabel(),
      ...n.renderIcon(),
      u("div", { class: n.classes.value.paddingSpacer })
    ];
    return n.isEnabled.value && this.components.renderAdd(l, "ripple"), u(((t = this.props) == null ? void 0 : t.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: n.classes.value.main,
      style: n.styles.value,
      disabled: n.disabledBind.value,
      onClick: n.onClick
    }, l);
  }
}
const g = {
  tag: "button"
}, w = {
  ...C,
  ...P,
  ...E,
  ...I,
  ...A,
  // Options
  tag: {
    type: String,
    default: g == null ? void 0 : g.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
};
export {
  q as B,
  g as d,
  w as p
};
