var c = Object.defineProperty;
var h = (e, t, s) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => (h(e, typeof t != "symbol" ? t + "" : t, s), s);
import { ref as u, watchEffect as p, onMounted as b, nextTick as d, h as m } from "vue";
import { c as g } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { c as l } from "./createElement-Bvijtmfm.js";
import { D as f } from "./DataStorage-BS0mwKb9.js";
import { E as v } from "./EventItem-CNRiCeQO.js";
class a {
  /**
   * Checks whether to enable scroll hiding.<br>
   * Проверяет, надо ли включить скрытие скролла.
   */
  static async is() {
    const t = await this.get();
    return t !== -1 && t <= 8;
  }
  /**
   * Returns the width of the scroll.<br>
   * Возвращает ширину скролла.
   */
  static async get() {
    const t = this.storage.get() ?? -1;
    if (!this.calculate && t === -1) {
      const s = await this.init();
      return this.storage.set(s), s;
    }
    return t;
  }
  /**
   * Creates elements to check the width of the scroll.<br>
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return l(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", l(t, "div", (s) => {
        s.style.height = "100px";
      });
    });
  }
  /**
   * Initialization of data to check the width of the scroll.<br>
   * Инициализация данных для проверки ширины скролла.
   */
  static init() {
    return new Promise((t) => {
      this.calculate = !0;
      const s = this.createElement();
      requestAnimationFrame(() => {
        t(s.offsetWidth - s.clientWidth), s.remove(), this.calculate = !1;
      });
    });
  }
}
r(a, "storage", new f("scrollbar", !0)), r(a, "calculate", !1);
const o = 8;
class w {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    r(this, "event");
    r(this, "top", !1);
    r(this, "bottom", !1);
    this.props = t, this.element = s, this.callback = i;
  }
  /**
   * Returns values for the class.<br>
   * Возвращает значения для класса.
   */
  getClasses() {
    return {
      "??--border--top": this.top,
      "??--border--bottom": this.bottom
    };
  }
  /**
   * Start monitoring the scroll.<br>
   * Начать слежение за скроллом.
   */
  start() {
    return this.event ? this.event.start() : this.event = new v(
      this.element.value,
      ["scroll-sync"],
      () => this.on()
    ).start(), this.on(), this;
  }
  /**
   * Stopping the monitoring of scroll changes.<br>
   * Остановка слежения за изменениями скролла.
   */
  stop() {
    return this.event && this.event.stop(), this;
  }
  /**
   * Changing the monitoring status depending on the border parameter.<br>
   * Изменение статуса слежения в зависимости от параметра border.
   */
  toggle() {
    return this.props.border ? this.start() : this.stop(), this;
  }
  /**
   * Updating the monitoring element for the event object.<br>
   * Обновление элемента слежения для объекта события.
   */
  reset() {
    return this.event && this.event.setElement(this.element.value), this.toggle();
  }
  /**
   * Changing the data for class output.<br>
   * Изменение данных для вывода класса.
   * @param top status of the top border display /<br>статус отображения верхнего бордера
   * @param bottom status of the bottom border display /<br>статус отображения нижнего бордера
   */
  setData(t, s) {
    return (this.top !== t || this.bottom !== s) && (this.top = t, this.bottom = s, this.callback && this.callback()), this;
  }
  /**
   * Function for the event of monitoring scroll changes.<br>
   * Функция для события слежения за изменениями скролла.
   */
  on() {
    const t = this.element.value;
    t && this.setData(
      t.scrollTop > o,
      t.scrollTop < t.scrollHeight - t.clientHeight - o
    );
  }
}
class y {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    r(this, "border");
    this.border = new w(
      t,
      s,
      i
    );
  }
  /**
   * Returns values for the class.<br>
   * Возвращает значения для класса.
   */
  async getClasses() {
    return {
      "??--disabled": await this.getDisabled(),
      ...this.border.getClasses()
    };
  }
  /**
   * Returns information on whether to disable scroll changes.
   * This is when the scroll has no width.<br>
   * Возвращает информацию, надо ли выключить изменения скролла.
   * Это когда скролл не имеет ширины.
   */
  async getDisabled() {
    return await a.is();
  }
}
class S {
  /**
   * Constructor
   * @param props properties /<br>свойства
   * @param element input element /<br>элемент ввода
   */
  constructor(t, s) {
    r(this, "scrollbar");
    r(this, "classes", u({}));
    this.scrollbar = new y(
      t,
      s,
      () => this.updateClasses().then()
    ), p(async () => {
      this.scrollbar.border.reset(), await this.updateClasses();
    }), b(async () => {
      await d(), requestAnimationFrame(() => this.scrollbar.border.toggle());
    });
  }
  /**
   * Updates the class values.<br>
   * Обновляет значения класса.
   */
  async updateClasses() {
    return this.classes.value = await this.scrollbar.getClasses(), this;
  }
}
class R extends g {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(s, i, n) {
    super(
      s,
      i,
      n
    );
    r(this, "scrollbar");
    this.scrollbar = new S(this.props, this.element), this.init();
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
    return {};
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
        ...this.toClassName(this.scrollbar.classes.value)
      }
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
    const s = this.setup(), i = [this.initSlot("default")];
    return m(this.props.tag, {
      ...this.getAttrs(),
      ref: this.element,
      class: s.classes.value.main
    }, i);
  }
}
const C = {
  tag: "div"
}, T = {
  tag: {
    type: String,
    default: C.tag
  },
  // :prop [!] System label / Системная метка
  visible: Boolean,
  border: Boolean,
  inverse: Boolean
};
export {
  R as S,
  T as p
};
