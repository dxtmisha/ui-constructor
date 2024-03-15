var c = Object.defineProperty;
var u = (e, s, t) => s in e ? c(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var o = (e, s, t) => (u(e, typeof s != "symbol" ? s + "" : s, t), t);
import { computed as h, provide as k, h as p } from "vue";
import { c as m } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { S, a as f } from "./typesBasic-gH1C25pW.js";
class v {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  constructor(s, t = "is-skeleton") {
    o(this, "skeleton");
    o(this, "isActive");
    this.skeleton = new S(s, t), this.isActive = h(() => this.skeleton.isActive()), k(f, this.isActive);
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses() {
    return this.skeleton.getClasses();
  }
}
class D extends m {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, i, n) {
    super(
      t,
      i,
      n
    );
    o(this, "skeleton");
    this.skeleton = new v(i, this.getName()), this.init();
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
      isActive: this.skeleton.isActive,
      slotDefault: this.skeleton.getClasses()
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
      main: {}
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
    var n, l, r, a;
    const t = this.setup(), i = [];
    return (n = this.slots) != null && n.default && i.push((r = (l = this.slots).default) == null ? void 0 : r.call(l, t.slotDefault)), p("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: (a = t.classes) == null ? void 0 : a.value.main
    }, i);
  }
}
const E = {
  // :prop [!] System label / Системная метка
  active: Boolean
};
export {
  D as S,
  E as p
};
