var v = Object.defineProperty;
var S = (e, t, n) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var h = (e, t, n) => (S(e, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as c, h as o } from "vue";
import { D as f } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { u as C, a as m, b as B, c as y } from "./useEnabled-D0wpeOWT.js";
import { g as u } from "./getBind-BTtwgl8A.js";
import { e as T } from "./eventStopPropagation-fHm2p5BF.js";
const P = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, k = {
  ...P,
  iconTrailing: [String, Object]
}, E = function(e, t, n = "is-icon", s = "is-icon-trailing") {
  const i = c(() => u(
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
  )), a = "iconTrailing" in e ? c(() => u(
    e.iconTrailing,
    {
      class: s,
      turn: e == null ? void 0 : e.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, d = c(() => !!(e != null && e.icon || e != null && e.iconTrailing));
  return {
    iconBind: i,
    trailingBind: a,
    isIcon: d,
    renderIcon() {
      const l = [];
      return t && (e != null && e.icon && t.renderAdd(
        l,
        "icon",
        i.value,
        void 0,
        "icon"
      ), a && (e != null && e.iconTrailing) && t.renderAdd(
        l,
        "icon",
        a.value,
        void 0,
        "iconTrailing"
      )), l;
    }
  };
}, I = {
  progress: [Boolean, Object]
}, O = function(e, t, n = "is-progress", s) {
  const i = c(() => u(
    e.loading,
    {
      class: n,
      ...s
    },
    "visible"
  ));
  return {
    progressBind: i,
    renderProgress() {
      const a = [];
      return t && (e != null && e.loading) && t.renderAdd(
        a,
        "progress",
        i.value
      ), a;
    }
  };
}, A = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, j = function(e, t, n) {
  const s = (a) => {
    var l, g, b;
    return {
      type: ((b = (g = (l = a.target) == null ? void 0 : l.closest("[data-event-type]")) == null ? void 0 : g.dataset) == null ? void 0 : b.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, i = () => !1;
  return {
    onClick(a) {
      t.isEnabled.value && !i() ? n == null || n("click", a, s(a)) : T(a);
    }
  };
};
class q extends f {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(n, s, i) {
    super(
      n,
      s,
      i
    );
    h(this, "icons");
    this.icons = E(
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
    const n = C(this.props);
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
      ...j(
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
    var i;
    const n = this.setup(), s = [
      ...n.renderProgress(),
      o("div", { class: n.classes.value.paddingSpacer }),
      ...n.renderLabel(),
      ...n.renderIcon(),
      o("div", { class: n.classes.value.paddingSpacer })
    ];
    return n.isEnabled.value && this.components.renderAdd(s, "ripple"), o(((i = this.props) == null ? void 0 : i.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: n.classes.value.main,
      style: n.styles.value,
      disabled: n.disabledBind.value,
      onClick: n.onClick
    }, s);
  }
}
const r = {
  tag: "button"
}, w = {
  ...B,
  ...k,
  ...I,
  ...y,
  ...A,
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
};
export {
  q as B,
  r as d,
  w as p
};
