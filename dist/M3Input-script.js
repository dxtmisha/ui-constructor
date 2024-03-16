import { h as a, defineComponent as m, computed as o, openBlock as l, createBlock as d, resolveDynamicComponent as f, unref as h } from "vue";
import { c as x } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { p as I } from "./props-DjNqoww2.js";
class _ extends x {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, t, n) {
    super(
      e,
      t,
      n
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
    return a("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (e = this.classes) == null ? void 0 : e.value.main
    });
  }
}
const k = {
  ...I
}, g = /* @__PURE__ */ m({
  name: "M3Input",
  __name: "M3Input",
  props: { ...k },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(s, { expose: e, emit: t }) {
    const n = t, i = s, p = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-input": !0
        // :classes-values [!] System label / Системная метка
      }
    })), c = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new _(
      "m3.input",
      i,
      {
        emits: n,
        classes: p,
        styles: c
      }
    ), u = r.render();
    return e(r.expose()), (v, y) => (l(), d(f(h(u))));
  }
}), B = g;
export {
  B as M3Input
};
