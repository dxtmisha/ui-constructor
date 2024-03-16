var v = Object.defineProperty;
var S = (e, n, t) => n in e ? v(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var h = (e, n, t) => (S(e, typeof n != "symbol" ? n + "" : n, t), t);
import { computed as l, h as o } from "vue";
import { c as C } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { c as f, d as m, e as y, u as B, b as T, a as P } from "./useEnabled-BTR3ciPG.js";
import { g as b } from "./getBind-CgHMfjrB.js";
import { e as k } from "./eventStopPropagation-fHm2p5BF.js";
const E = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, I = {
  ...E,
  iconTrailing: [String, Object]
}, O = function(e, n, t = "is-icon", s = "is-icon-trailing") {
  const i = l(() => b(
    e == null ? void 0 : e.icon,
    {
      class: t,
      active: e == null ? void 0 : e.selected,
      turn: !(e != null && e.iconTrailing) && (e == null ? void 0 : e.iconTurn),
      hide: e == null ? void 0 : e.iconHide,
      animationType: "type2",
      start: !0,
      "data-event-type": "icon"
    },
    "icon"
  )), a = "iconTrailing" in e ? l(() => b(
    e.iconTrailing,
    {
      class: s,
      turn: e == null ? void 0 : e.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, d = l(() => !!(e != null && e.icon || e != null && e.iconTrailing));
  return {
    iconBind: i,
    trailingBind: a,
    isIcon: d,
    renderIcon() {
      const c = [];
      return n && (e != null && e.icon && n.renderAdd(
        c,
        "icon",
        i.value,
        void 0,
        "icon"
      ), a && (e != null && e.iconTrailing) && n.renderAdd(
        c,
        "icon",
        a.value,
        void 0,
        "iconTrailing"
      )), c;
    }
  };
}, A = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, j = function(e, n, t) {
  const s = (a) => {
    var c, r, g;
    return {
      type: ((g = (r = (c = a.target) == null ? void 0 : c.closest("[data-event-type]")) == null ? void 0 : r.dataset) == null ? void 0 : g.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, i = () => !1;
  return {
    onClick(a) {
      n.isEnabled.value && !i() ? t == null || t("click", a, s(a)) : k(a);
    }
  };
};
class q extends C {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, s, i) {
    super(
      t,
      s,
      i
    );
    h(this, "icons");
    this.icons = O(
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
    const t = f(this.props);
    return {
      ...m(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...y(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...t,
      ...j(
        this.props,
        t,
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
    const t = this.setup(), s = [
      ...t.renderProgress(),
      ...t.renderLabel(),
      ...t.renderIcon(),
      o("span", { class: t.classes.value.paddingSpacer }),
      o("span", { class: t.classes.value.paddingSpacer })
    ];
    return t.isEnabled.value && this.components.renderAdd(s, "ripple"), o(((i = this.props) == null ? void 0 : i.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: t.classes.value.main,
      style: t.styles.value,
      disabled: t.disabledBind.value,
      onClick: t.onClick
    }, s);
  }
}
const u = {
  tag: "button"
}, w = {
  ...B,
  ...I,
  ...T,
  ...P,
  ...A,
  // Options
  tag: {
    type: String,
    default: u == null ? void 0 : u.tag
  },
  // :prop [!] System label / Системная метка
  disabled: Boolean,
  selected: Boolean,
  loading: Boolean,
  readonly: Boolean
};
export {
  q as B,
  u as d,
  w as p
};
