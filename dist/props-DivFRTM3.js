var h = Object.defineProperty;
var f = (e, n, i) => n in e ? h(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[n] = i;
var b = (e, n, i) => (f(e, typeof n != "symbol" ? n + "" : n, i), i);
import { computed as c, h as v } from "vue";
import { r as B, D as y } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { g as o } from "./getBind-BTtwgl8A.js";
import { e as S } from "./eventStopPropagation-fHm2p5BF.js";
const m = {
  label: [String, Number]
}, C = function(e, n, i = "is-label") {
  const l = c(
    () => !!(e != null && e.label || n && "default" in n)
  );
  return {
    isLabel: l,
    renderLabel() {
      var a;
      const t = [];
      if (l.value) {
        const d = [];
        e != null && e.label && d.push(e.label), n && (n != null && n.default) && d.push((a = n.default) == null ? void 0 : a.call(n, {})), d.length > 0 && t.push(B(
          "span",
          { class: i || "label" },
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
}, k = function(e, n, i = "is-icon", l = "is-icon-trailing") {
  const t = c(() => o(
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
      const u = [];
      return n && (e != null && e.icon && n.renderAdd(
        u,
        "icon",
        t.value,
        void 0,
        "icon"
      ), a && (e != null && e.iconTrailing) && n.renderAdd(
        u,
        "icon",
        a.value,
        void 0,
        "iconTrailing"
      )), u;
    }
  };
}, E = {
  progress: [Boolean, Object]
}, O = function(e, n, i = "is-progress", l) {
  const t = c(() => o(
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
}, I = {
  progress: [Object, Boolean],
  readonly: Boolean,
  disabled: Boolean
}, j = function(e) {
  const n = () => !!(e != null && e.disabled);
  return {
    disabledBind: c(() => n() || void 0),
    isEnabled: c(
      () => !(e != null && e.disabled) && !(e != null && e.readonly) && !(e != null && e.loading)
    ),
    isReadonly: c(() => !!(e != null && e.readonly)),
    isDisabled: c(() => n()),
    isProgress: c(() => !!(e != null && e.loading))
  };
}, A = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, D = function(e, n, i) {
  const l = (a) => {
    var u, g, r;
    return {
      type: ((r = (g = (u = a.target) == null ? void 0 : u.closest("[data-event-type]")) == null ? void 0 : g.dataset) == null ? void 0 : r.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, t = () => !1;
  return {
    onClick(a) {
      n.isEnabled.value && !t() ? i == null || i("click", a, l(a)) : S(a);
    }
  };
};
class q extends y {
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
    b(this, "icons");
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
    const i = j(this.props);
    return {
      ...C(
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
      ...i,
      ...D(
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
    return i.isEnabled.value && this.components.renderAdd(l, "ripple"), v(((t = this.props) == null ? void 0 : t.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: i.classes.value.main,
      style: i.styles.value,
      disabled: i.disabledBind.value,
      onClick: i.onClick
    }, l);
  }
}
const s = {
  tag: "button"
}, w = {
  ...m,
  ...P,
  ...E,
  ...I,
  ...A,
  // Options
  tag: {
    type: String,
    default: s == null ? void 0 : s.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
};
export {
  q as B,
  s as d,
  w as p
};
