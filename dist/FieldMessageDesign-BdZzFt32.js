var h = Object.defineProperty;
var l = (i, s, e) => s in i ? h(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var t = (i, s, e) => (l(i, typeof s != "symbol" ? s + "" : s, e), e);
import { computed as r, h as a } from "vue";
import { c as m } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { i as o } from "./isFilled-ClO-1E4U.js";
import { t as u } from "./toNumber-eA5ODeva.js";
const b = {
  // Status
  disabled: Boolean,
  // Values
  counter: [String, Number],
  maxlength: [String, Number],
  // Message
  helperMessage: String,
  validationMessage: String
};
class c {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    this.props = s;
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
    var s;
    return o((s = this.props) == null ? void 0 : s.validationMessage);
  }
  /**
   * Returns text.<br>
   * Возвращает текст.
   */
  get() {
    var s;
    if (this.isValidation())
      return this.props.validationMessage;
    if (o((s = this.props) == null ? void 0 : s.helperMessage))
      return this.props.helperMessage;
  }
}
class d {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s) {
    this.props = s;
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
    var s;
    return u(((s = this.props) == null ? void 0 : s.counter) ?? 0);
  }
  /**
   * Returns the maximum available input number.<br>
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var s;
    return u(((s = this.props) == null ? void 0 : s.maxlength) ?? 0);
  }
}
class p {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(s) {
    t(this, "message");
    t(this, "counter");
    this.props = s, this.message = new c(s), this.counter = new d(s);
  }
  /**
   * Checks if there are values for outputting the element.<br>
   * Проверяет, есть ли значения для вывода элемента.
   */
  is() {
    var s;
    return !((s = this.props) != null && s.disabled) && (this.message.is() || this.counter.is());
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
class M {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  constructor(s) {
    t(this, "item");
    t(this, "is", r(() => this.item.is()));
    t(this, "isMessage", r(() => this.item.message.is()));
    t(this, "isValidation", r(() => this.item.message.isValidation()));
    t(this, "isCounter", r(() => this.item.counter.is()));
    t(this, "isMax", r(() => this.item.counter.isMax()));
    t(this, "message", r(() => this.item.message.get()));
    t(this, "counter", r(() => this.item.counter.get()));
    t(this, "classes", r(() => this.item.classes()));
    this.item = new p(s);
  }
}
class F extends m {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, n, g) {
    super(
      e,
      n,
      g
    );
    t(this, "message");
    /**
     * Rendering text.<br>
     * Рендеринг текста.
     */
    t(this, "renderInfo", () => {
      const e = this.setup();
      return a("div", {
        key: "message",
        class: e.classes.value.info,
        innerHTML: e.message.value
      });
    });
    /**
     * Rendering the entered number of characters.<br>
     * Рендеринг введенного количества символов.
     */
    t(this, "renderCounter", () => {
      const e = this.setup();
      return a("div", {
        key: "counter",
        class: e.classes.value.counter,
        innerHTML: e.counter.value
      });
    });
    this.message = new M(n), this.init();
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
    const e = this.setup(), n = [];
    if (e.isMessage.value && n.push(e.renderInfo()), e.isCounter.value && n.push(e.renderCounter()), e.is.value)
      return a("div", {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: e.classes.value.main
      }, n);
  }
}
export {
  F,
  b as p
};
