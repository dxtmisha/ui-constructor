var p = Object.defineProperty;
var k = (s, t, e) => t in s ? p(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var c = (s, t, e) => (k(s, typeof t != "symbol" ? t + "" : t, e), e);
import { computed as a, provide as m, h, defineComponent as v, openBlock as f, createBlock as S, resolveDynamicComponent as d, unref as A } from "vue";
import { c as g } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { S as _, a as C } from "./typesBasic-gH1C25pW.js";
class x {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  constructor(t, e = "is-skeleton") {
    c(this, "skeleton");
    c(this, "isActive");
    this.skeleton = new _(t, e), this.isActive = a(() => this.skeleton.isActive()), m(C, this.isActive);
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses() {
    return this.skeleton.getClasses();
  }
}
class D extends g {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, n, o) {
    super(
      e,
      n,
      o
    );
    c(this, "skeleton");
    this.skeleton = new x(n, this.getName()), this.init();
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
    var o, r, l, i;
    const e = this.setup(), n = [];
    return (o = this.slots) != null && o.default && n.push((l = (r = this.slots).default) == null ? void 0 : l.call(r, e.slotDefault)), h("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: (i = e.classes) == null ? void 0 : i.value.main
    }, n);
  }
}
const T = {
  // :prop [!] System label / Системная метка
  active: Boolean
}, y = {
  ...T,
  // :prop [!] System label / Системная метка
  active: Boolean
}, B = /* @__PURE__ */ v({
  name: "M3Skeleton",
  __name: "M3Skeleton",
  props: { ...y },
  setup(s, { expose: t, emit: e }) {
    const n = e, o = s, r = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-skeleton": !0,
        "m3-skeleton--active": o.active
        // :classes-values [!] System label / Системная метка
      }
    })), l = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), i = new D(
      "m3.skeleton",
      o,
      {
        emits: n,
        classes: r,
        styles: l
      }
    ), u = i.render();
    return t(i.expose()), (E, M) => (f(), S(d(A(u))));
  }
}), b = B;
export {
  b as M3Skeleton
};
