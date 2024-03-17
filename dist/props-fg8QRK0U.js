var u = Object.defineProperty;
var h = (i, s, t) => s in i ? u(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var o = (i, s, t) => (h(i, typeof s != "symbol" ? s + "" : s, t), t);
import { inject as p, computed as k, provide as m, h as v } from "vue";
import { c as A } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { S } from "./Skeleton-u-yv2rzv.js";
import { S as a } from "./typesBasic-Ds2oAucF.js";
class f {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  constructor(s, t = "is-skeleton") {
    o(this, "skeleton");
    o(this, "isActive");
    const e = p(
      a,
      void 0
    );
    this.skeleton = new S(s, t), this.isActive = k(() => e && e.value || this.skeleton.isActive()), m(a, this.isActive);
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses() {
    return this.skeleton.getClasses();
  }
}
class x extends A {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, e, n) {
    super(
      t,
      e,
      n
    );
    o(this, "skeleton");
    this.skeleton = new f(e, this.getName()), this.init();
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
    return {
      isActive: this.setup().isActive
    };
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
    var n, r, l, c;
    const t = this.setup(), e = [];
    return (n = this.slots) != null && n.default && e.push((l = (r = this.slots).default) == null ? void 0 : l.call(r, t.slotDefault)), v("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: (c = t.classes) == null ? void 0 : c.value.main
    }, e);
  }
}
const N = {
  // :prop [!] System label / Системная метка
  active: Boolean
};
export {
  x as S,
  N as p
};
