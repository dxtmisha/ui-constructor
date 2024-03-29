var m = Object.defineProperty;
var c = (i, t, e) => t in i ? m(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => (c(i, typeof t != "symbol" ? t + "" : t, e), e);
import { a as u, g as r } from "./getElement-uQ-JTFk-.js";
import { i as f } from "./isNull-CjWwlQS3.js";
import { t as o, a as v } from "./toArray-J4lAhJG7.js";
function l(i) {
  return u(i) ? i : r(i);
}
function p(i) {
  var t;
  return !!((t = r(i)) != null && t.closest("html"));
}
class R {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor(t, e = ["click"], s, h, a) {
    /**
     * Element.<br>
     * Элемент.
     * @protected
     */
    n(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     * @protected
     */
    n(this, "elementControl");
    n(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.<br>
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     * @protected
     */
    n(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.<br>
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     * @protected
     */
    n(this, "listenerRecent", (t) => {
      var e, s;
      p(this.elementControl) ? ((e = this.listener) == null || e.call(this.element, t, this.detail), v(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.<br>
     * Состояния события.
     * @protected
     */
    n(this, "activity", !1);
    n(this, "activityItems", []);
    this.listener = s, this.options = h, this.detail = a, this.element = l(t), this.elementControl = r(t), this.type = o(e);
  }
  /**
   * Checks whether event listening is currently enabled.<br>
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive() {
    return this.activity;
  }
  /**
   * Change of an element for tracking.<br>
   * Изменение элемента для прослеживания.
   * @param elementSelector element /<br>элемент
   */
  setElement(t) {
    const e = l(t);
    return this.elementControlEdit || (this.elementControl = r(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element /<br>элемент
   */
  setElementControl(t) {
    return this.elementControl = r(t), this.elementControlEdit = !f(this.elementControl), this.elementControlEdit || (this.elementControl = r(this.element)), this;
  }
  /**
   * Changes the type of the handled event.<br>
   * Изменяет тип обрабатываемого события.
   * @param type type /<br>тип
   */
  setType(t) {
    return this.type = o(t), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(t) {
    return this.listener = t, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.<br>
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(t) {
    return this.options = t, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.<br>
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(t) {
    return this.detail = t, this;
  }
  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.<br>
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  dispatch(t = this.detail) {
    return this.type.forEach(
      (e) => {
        var s;
        return (s = this.element) == null ? void 0 : s.dispatchEvent(new CustomEvent(e, { detail: t }));
      }
    ), this;
  }
  /**
   * Starting event listening.<br>
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((t) => {
      this.element && !(t === "resize" && this.makeResize()) && !(t === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(t, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: t
      }));
    })), this;
  }
  /**
   * Stopping event listening.<br>
   * Остановка прослушивания события.
   */
  stop() {
    return this.activity && (this.activity = !1, this.activityItems.forEach(({
      element: t,
      type: e,
      listener: s,
      observer: h
    }) => {
      h ? h.disconnect() : s ? t == null || t.removeEventListener(e, s) : t == null || t.removeEventListener(e, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.<br>
   * Переключение состояния работы события.
   * @param activity event activation /<br>активация события
   */
  toggle(t) {
    return t ? this.start() : this.stop();
  }
  /**
   * Overloads the listening events.<br>
   * Перегружает события прослушивания.
   */
  reset() {
    return this.activity && (this.stop(), this.start()), this;
  }
  /**
   * Checks if the ResizeObserver object exists.<br>
   * Проверяет, существует ли объект ResizeObserver.
   */
  isObserver() {
    return "ResizeObserver" in window;
  }
  /**
   * The implementation of the resize event for an element.<br>
   * Реализация события изменения размера для элемента.
   * @protected
   */
  makeResize() {
    if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
      const t = new ResizeObserver(
        (e) => this.listenerRecent(e == null ? void 0 : e[0])
      );
      return t.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: t
      }), !0;
    }
    return !1;
  }
  /**
   * Implementation of the scroll event for an element.<br>
   * Реализация события изменения положения скролла для элемента.
   * @protected
   */
  makeScroll() {
    if (this.element) {
      let t = !1;
      const e = (s) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(s), t = !1;
        }));
      };
      return this.element.addEventListener("scroll", e, this.options), this.element.addEventListener("resize", e, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: e
        },
        {
          element: this.element,
          type: "resize",
          listener: e
        }
      ), !0;
    }
    return !1;
  }
}
export {
  R as E,
  l as g,
  p as i
};
