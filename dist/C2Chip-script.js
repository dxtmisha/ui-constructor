import { h as a, defineComponent as m, computed as o, openBlock as l, createBlock as h, resolveDynamicComponent as C, unref as d } from "vue";
import { c as f } from "./DesignConstructorAbstract-pm1V7i1G.js";
class x extends f {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(s, e, t) {
    super(
      s,
      e,
      t
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
    return {
      // TODO: List of parameters for setup
      // TODO: список параметры для setup
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
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
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var e;
    const s = this.setup();
    return a("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (e = s.classes) == null ? void 0 : e.value.main
    });
  }
}
const _ = {}, k = {
  ..._
}, y = /* @__PURE__ */ m({
  name: "C2Chip",
  __name: "C2Chip",
  props: { ...k },
  setup(n, { expose: s, emit: e }) {
    const t = e, i = n, c = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-chip": !0
        // :classes-values [!] System label / Системная метка
      }
    })), p = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new x(
      "c2.chip",
      i,
      {
        emits: t,
        classes: c,
        styles: p
      }
    ), u = r.render();
    return s(r.expose()), (g, v) => (l(), h(C(d(u))));
  }
}), S = y;
export {
  S as C2Chip
};
