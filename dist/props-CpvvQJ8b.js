var g = Object.defineProperty;
var y = (l, s, e) => s in l ? g(l, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[s] = e;
var a = (l, s, e) => (y(l, typeof s != "symbol" ? s + "" : s, e), e);
import { watchEffect as f, computed as c, shallowRef as h, h as u } from "vue";
import { c as S } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { t as o } from "./toNumber-eA5ODeva.js";
import { a as V } from "./DesignAsyncAbstract-Bi5cMulT.js";
class x extends V {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, i) {
    super(e, i, [
      "value",
      "visible"
    ]);
    a(this, "timeout");
    a(this, "timeoutReject");
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  isValue() {
    return this.getValue() > 0;
  }
  /**
   * Returns the tag type for the element.<br>
   * Возвращает тип тега для элемента.
   */
  getTag() {
    var e;
    return (e = this.props) != null && e.circular ? "svg" : "div";
  }
  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  getValue() {
    var e;
    return o(((e = this.props) == null ? void 0 : e.value) ?? 0);
  }
  /**
   * Returns values in percentages.<br>
   * Возвращает значения в процентах.
   */
  getValueInPercent() {
    var e;
    if (this.isValue()) {
      const i = this.getValue(), n = 100 / this.getMax() * i;
      return (e = this.props) != null && e.circular ? n.toString() : `${100 - n}%`;
    }
    return null;
  }
  /**
   * Returns the maximum allowable value.<br>
   * Возвращает максимально допустимое значение.
   */
  getMax() {
    var e;
    return o(((e = this.props) == null ? void 0 : e.max) ?? 100);
  }
  /**
   * Returns the property for style.<br>
   * Возвращает свойство для стиля.
   */
  getStyles() {
    return {
      "--??-sys-value": this.getValueInPercent()
    };
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param animationName A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation({ animationName: e }) {
    e.match("-hidden") && (this.event.hide = !1, this.event.classes = this.initClasses(), this.makeCallbackItem());
  }
  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  async initEvent() {
    this.isChanged("visible") && ([
      this.event.hide,
      this.event.visible
    ] = await this.makeVisible()), this.isChanged("classes", [
      "value",
      "visible"
    ]) && (this.event.classes = this.initClasses());
  }
  /**
   * The mode is triggered when the visible property changes to change the output status of the element.<br>
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  makeVisible() {
    return new Promise((e, i) => {
      var p, v, b, d;
      const n = (p = this.props) == null ? void 0 : p.visible, r = o(((v = this.props) == null ? void 0 : v.delay) ?? 0), m = o(((b = this.props) == null ? void 0 : b.delayHide) ?? 0);
      clearTimeout(this.timeout), this.isValue() ? e([!1, !1]) : !!((d = this.event) != null && d.visible) !== n && (n && r ? (this.timeout = setTimeout(() => {
        clearTimeout(this.timeoutReject), e(this.initVisible());
      }, r), this.timeoutReject = setTimeout(i, r + 1e3)) : !n && m ? this.timeout = setTimeout(() => {
        e(this.initVisible());
      }, m) : e(this.initVisible()));
    });
  }
  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  initVisible() {
    var i;
    const e = (i = this.props) == null ? void 0 : i.visible;
    return [!e, !!e];
  }
  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  initClasses() {
    return {
      "??--hide": this.event.hide,
      "??--visible": this.event.visible,
      "??--value": this.isValue()
    };
  }
}
class C {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    a(this, "item");
    a(this, "tag", c(() => this.item.getTag()));
    a(this, "valueInPercent", c(() => this.item.getValueInPercent()));
    a(this, "hide", h(!1));
    a(this, "visible", h(!1));
    a(this, "classes", h({}));
    a(this, "styles", c(() => this.item.getStyles()));
    this.props = s, this.item = new x(
      s,
      (e) => {
        this.hide.value = e.hide, this.visible.value = e.visible, this.classes.value = e.classes;
      }
    ), f(() => this.item.make());
  }
  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param event A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation(s) {
    this.item.onAnimation(s);
  }
}
class T extends S {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, i, n) {
    super(
      e,
      i,
      n
    );
    a(this, "item");
    this.item = new C(i), this.init();
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
    return {
      tag: this.item.tag,
      valueInPercent: this.item.valueInPercent,
      hide: this.item.hide,
      visible: this.item.visible,
      onAnimation: (e) => this.item.onAnimation(e)
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
        ...this.toClassName(this.item.classes.value)
      },
      // :classes [!] System label / Системная метка
      circle: this.getSubClass("circle"),
      circleSub: this.getSubClass("circleSub")
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.toClassName(this.item.styles.value)
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var n, r;
    const e = this.setup(), i = [];
    return (n = this.props) != null && n.circular && (((r = this.props) == null ? void 0 : r.indeterminate) === "type3" && i.push(
      u("circle", {
        class: e.classes.value.circleSub,
        cx: "24",
        cy: "24",
        r: "20"
      })
    ), i.push(
      u("circle", {
        class: e.classes.value.circle,
        cx: "24",
        cy: "24",
        r: "20"
      })
    )), u(e.tag.value, {
      ref: this.element,
      class: e.classes.value.main,
      style: e.styles.value,
      viewBox: "0 0 48 48",
      onAnimationend: e.onAnimation
    }, i);
  }
}
const t = {
  max: 100,
  delay: 360,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
}, k = {
  // Values
  value: [Number, String],
  max: {
    type: [Number, String],
    default: t == null ? void 0 : t.max
  },
  // Status
  visible: Boolean,
  // Options
  delay: {
    type: [Number, String],
    default: t == null ? void 0 : t.delay
  },
  delayHide: [Number, String],
  // :prop [!] System label / Системная метка
  linear: {
    type: Boolean,
    default: t == null ? void 0 : t.linear
  },
  circular: Boolean,
  indeterminate: {
    type: String,
    default: t == null ? void 0 : t.indeterminate
  },
  position: {
    type: String,
    default: t == null ? void 0 : t.position
  },
  dense: Boolean,
  inverse: Boolean
};
export {
  T as P,
  t as d,
  k as p
};
