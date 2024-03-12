var p = Object.defineProperty;
var d = (i, e, s) => e in i ? p(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s;
var t = (i, e, s) => (d(i, typeof e != "symbol" ? e + "" : e, s), s);
import { computed as r, h as o, defineComponent as M, openBlock as f, createBlock as C, resolveDynamicComponent as v, unref as x } from "vue";
import { c as F } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { i as c } from "./isFilled-ClO-1E4U.js";
import { t as l } from "./toNumber-eA5ODeva.js";
class S {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.props = e;
  }
  /**
   * Checks if there is text.<br>
   * Проверяет, есть ли текст.
   */
  is() {
    return !!this.get();
  }
  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isValidation() {
    var e;
    return c((e = this.props) == null ? void 0 : e.validationMessage);
  }
  /**
   * Returns text.<br>
   * Возвращает текст.
   */
  get() {
    var e;
    if (this.isValidation())
      return this.props.validationMessage;
    if (c((e = this.props) == null ? void 0 : e.helperMessage))
      return this.props.helperMessage;
  }
}
class b {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.props = e;
  }
  /**
   * Checks if it is necessary to display the number of input characters.<br>
   * Проверяет, надо ли выводить количество вводимых символов.
   */
  is() {
    return this.getCounter() > 0 || this.isMax();
  }
  /**
   * Checks if it is necessary to display the maximum available number of characters.<br>
   * Проверяет, надо ли выводить максимальное доступное количество символов.
   */
  isMax() {
    return this.getMax() > 0;
  }
  /**
   * Returns text for output.<br>
   * Возвращает текст для вывода.
   */
  get() {
    return this.isMax() ? `${this.getCounter()} / ${this.getMax()}` : this.getCounter().toString();
  }
  /**
   * Returns the number of input characters.<br>
   * Возвращает количество вводимых символов.
   */
  getCounter() {
    var e;
    return l(((e = this.props) == null ? void 0 : e.counter) ?? 0);
  }
  /**
   * Returns the maximum available input number.<br>
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var e;
    return l(((e = this.props) == null ? void 0 : e.maxlength) ?? 0);
  }
}
class k {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(e) {
    t(this, "message");
    t(this, "counter");
    this.props = e, this.message = new S(e), this.counter = new b(e);
  }
  /**
   * Checks if there are values for outputting the element.<br>
   * Проверяет, есть ли значения для вывода элемента.
   */
  is() {
    var e;
    return !((e = this.props) != null && e.disabled) && (this.message.is() || this.counter.is());
  }
  /**
   * Returns data for the main style class.<br>
   * Возвращает данные для главного класса стиля.
   */
  classes() {
    return {
      "??--validation": this.message.isValidation()
    };
  }
}
class y {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(e) {
    t(this, "item");
    t(this, "is", r(() => this.item.is()));
    t(this, "isMessage", r(() => this.item.message.is()));
    t(this, "isValidation", r(() => this.item.message.isValidation()));
    t(this, "isCounter", r(() => this.item.counter.is()));
    t(this, "isMax", r(() => this.item.counter.isMax()));
    t(this, "message", r(() => this.item.message.get()));
    t(this, "counter", r(() => this.item.counter.get()));
    t(this, "classes", r(() => this.item.classes()));
    this.item = new k(e);
  }
}
class V extends F {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(s, n, a) {
    super(
      s,
      n,
      a
    );
    t(this, "message");
    /**
     * Rendering text.<br>
     * Рендеринг текста.
     */
    t(this, "renderInfo", () => {
      const s = this.setup();
      return o("div", {
        key: "message",
        class: s.classes.value.info,
        innerHTML: s.message.value
      });
    });
    /**
     * Rendering the entered number of characters.<br>
     * Рендеринг введенного количества символов.
     */
    t(this, "renderCounter", () => {
      const s = this.setup();
      return o("div", {
        key: "counter",
        class: s.classes.value.counter,
        innerHTML: s.counter.value
      });
    });
    this.message = new y(n), this.init();
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
      is: this.message.is,
      isMessage: this.message.isMessage,
      isValidation: this.message.isValidation,
      isCounter: this.message.isCounter,
      isMax: this.message.isMax,
      message: this.message.message,
      counter: this.message.counter,
      renderInfo: this.renderInfo,
      renderCounter: this.renderCounter
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
        ...this.toClassName(this.message.classes.value)
      },
      // :classes [!] System label / Системная метка
      info: this.getSubClass("info"),
      counter: this.getSubClass("counter")
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
    const s = this.setup(), n = [];
    if (s.isMessage.value && n.push(s.renderInfo()), s.isCounter.value && n.push(s.renderCounter()), s.is.value)
      return o("div", {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: s.classes.value.main
      }, n);
  }
}
const _ = {
  // Status
  disabled: Boolean,
  // Values
  counter: [String, Number],
  maxlength: [String, Number],
  // Message
  helperMessage: String,
  validationMessage: String
}, w = {
  ..._
}, I = /* @__PURE__ */ M({
  name: "M3FieldMessage",
  __name: "M3FieldMessage",
  props: { ...w },
  setup(i, { expose: e, emit: s }) {
    const n = s, a = i, g = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), h = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), u = new V(
      "m3.fieldMessage",
      a,
      {
        emits: n,
        classes: g,
        styles: h
      }
    ), m = u.render();
    return e(u.expose()), (B, N) => (f(), C(v(x(m))));
  }
}), R = I;
export {
  R as M3FieldMessage
};
