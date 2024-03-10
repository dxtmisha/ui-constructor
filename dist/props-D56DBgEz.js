var a = Object.defineProperty;
var r = (i, s, t) => s in i ? a(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var o = (i, s, t) => (r(i, typeof s != "symbol" ? s + "" : s, t), t);
import { shallowRef as u, onBeforeMount as m, nextTick as h, onUnmounted as p, h as c } from "vue";
import { c as d } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { M as l } from "./Mutation-Btn5_vGU.js";
class f {
  /**
   * Constructor
   */
  constructor() {
    o(this, "mutation");
    o(this, "items", u([]));
    this.mutation = new l(() => this.update()), m(async () => {
      await h(), requestAnimationFrame(() => {
        this.mutation.start(), this.update();
      });
    }), p(() => this.mutation.stop());
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.items.value = [...this.mutation.items.get()], this;
  }
}
class x extends d {
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
    o(this, "mutation");
    this.mutation = new f(), this.init();
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
      items: this.mutation.items
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      items: this.setup().items
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
    const t = this.setup(), e = [];
    return this.components.is("item") && t.items.value.forEach((n) => {
      this.components.renderAdd(
        e,
        "item",
        { item: n },
        void 0,
        n.getId()
      );
    }), c("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: t.classes.value.main
    }, e);
  }
}
const A = {
  disabled: Boolean
};
export {
  x as M,
  A as p
};
