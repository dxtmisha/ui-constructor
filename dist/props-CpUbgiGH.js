var S = Object.defineProperty;
var v = (e, n, t) => n in e ? S(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var c = (e, n, t) => (v(e, typeof n != "symbol" ? n + "" : n, t), t);
import { computed as o, h as u } from "vue";
import { c as m } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { S as C } from "./Skeleton-u-yv2rzv.js";
import { c as f, d as B, e as k, u as y, b as T, a as P } from "./useEnabled-BTR3ciPG.js";
import { g as b } from "./getBind-CgHMfjrB.js";
import { e as E } from "./eventStopPropagation-fHm2p5BF.js";
const I = {
  // Values
  icon: [String, Object],
  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}, O = {
  ...I,
  iconTrailing: [String, Object]
}, A = function(e, n, t = "is-icon", a = "is-icon-trailing") {
  const i = o(() => b(
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
  )), s = "iconTrailing" in e ? o(() => b(
    e.iconTrailing,
    {
      class: a,
      turn: e == null ? void 0 : e.iconTurn,
      end: !0,
      high: !0,
      "data-event-type": "icon-trailing"
    },
    "icon"
  )) : void 0, d = o(() => !!(e != null && e.icon || e != null && e.iconTrailing));
  return {
    iconBind: i,
    trailingBind: s,
    isIcon: d,
    renderIcon() {
      const l = [];
      return n && (e != null && e.icon && n.renderAdd(
        l,
        "icon",
        i.value,
        void 0,
        "icon"
      ), s && (e != null && e.iconTrailing) && n.renderAdd(
        l,
        "icon",
        s.value,
        void 0,
        "iconTrailing"
      )), l;
    }
  };
}, j = {
  to: String,
  value: [String, Number, Object],
  detail: [Object]
}, L = function(e, n, t) {
  const a = (s) => {
    var l, g, h;
    return {
      type: ((h = (g = (l = s.target) == null ? void 0 : l.closest("[data-event-type]")) == null ? void 0 : g.dataset) == null ? void 0 : h.eventType) ?? "click",
      value: e == null ? void 0 : e.value,
      detail: e == null ? void 0 : e.detail
    };
  }, i = () => !1;
  return {
    onClick(s) {
      n.isEnabled.value && !i() ? t == null || t("click", s, a(s)) : E(s);
    }
  };
};
class z extends m {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, a, i) {
    super(
      t,
      a,
      i
    );
    c(this, "icons");
    c(this, "classesSkeleton");
    this.icons = A(
      this.props,
      this.components,
      this.getSubClass("icon"),
      this.getSubClass("trailing")
    ), this.classesSkeleton = C.getClassesListByDesign(this.name[0]), this.init();
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
      ...B(
        this.props,
        this.slots,
        this.getSubClass("label")
      ),
      ...this.icons,
      ...k(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0
        }
      ),
      ...t,
      ...L(
        this.props,
        t,
        this.emits
      ),
      classesSkeleton: this.classesSkeleton
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
        [this.getStatusClass("icon")]: this.icons.isIcon.value,
        [this.classesSkeleton.classBackground]: !0
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
    const t = this.setup(), a = [
      ...t.renderProgress(),
      ...t.renderLabel(),
      ...t.renderIcon(),
      u("span", { class: t.classes.value.paddingSpacer }),
      u("span", { class: t.classes.value.paddingSpacer })
    ];
    return t.isEnabled.value && this.components.renderAdd(a, "ripple"), u(((i = this.props) == null ? void 0 : i.tag) || "button", {
      ...this.getAttrs(),
      ref: this.element,
      class: t.classes.value.main,
      style: t.styles.value,
      disabled: t.disabledBind.value,
      onClick: t.onClick
    }, a);
  }
}
const r = {
  tag: "button"
}, F = {
  ...y,
  ...O,
  ...T,
  ...P,
  ...j,
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
  z as B,
  r as d,
  F as p
};
