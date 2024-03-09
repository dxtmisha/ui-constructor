var f = Object.defineProperty;
var I = (e, t, s) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (I(e, typeof t != "symbol" ? t + "" : t, s), s);
import { f as h, t as S } from "./toArray-J4lAhJG7.js";
import { g as L } from "./getElement-BhVCn14C.js";
import { g as E } from "./getElementId-BsOuboE0.js";
import { i as u } from "./isFilled-C9CTZZIi.js";
import { i as w } from "./Geo-BWOHrzQ1.js";
import { t as $ } from "./DesignConstructorAbstract-_dNu1bTO.js";
import { u as C, t as A } from "./DataStorage-D-GdtGQf.js";
import { T as y } from "./Translate-DSM-n0U-.js";
var r = /* @__PURE__ */ ((e) => (e.new = "new", e.init = "init", e.end = "end", e))(r || {});
function g(e) {
  return e.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
const p = "d-mutation", N = g(C("DESIGNS_MAIN", "design")), v = g(C("DESIGNS_GLOBAL", "ui")), l = "__UI_PROJECT";
class c {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi() {
    return v;
  }
  /**
   * Returns the names of keys indicating that the element is being processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
   */
  static getKeyInit() {
    return r.init;
  }
  /**
   * Returns the names of keys indicating that the element has already been processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент уже обработан.
   */
  static getKeyEnd() {
    return r.end;
  }
  /**
   * Returns the names of attributes indicating the design name.<br>
   * Возвращает названия атрибутов, обозначающих название дизайна.
   */
  static getAttributeUi() {
    return `data-${this.getKeyUi()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент находится в обработке.
   */
  static getClassInit() {
    return `${p}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${p}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, s = r.new) {
    const i = [];
    if ("querySelector" in t) {
      const n = this.getSelectorByStatus(s);
      t.querySelector(n) && t.querySelectorAll(n).forEach((d) => i.push(d));
    }
    return i;
  }
  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit(t) {
    var s, i;
    return !!((s = t == null ? void 0 : t.closest) != null && s.call(t, this.getSelectorInit()) || !((i = t == null ? void 0 : t.closest) != null && i.call(t, "body")));
  }
  /**
   * Returns the select for a new element.<br>
   * Возвращает селект для нового элемента.
   */
  static getSelectorNew() {
    return `*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`;
  }
  /**
   * Returns the select for an element in processing.<br>
   * Возвращает селект для элемента в обработке.
   */
  static getSelectorInit() {
    return `*[${this.getAttributeUi()}].${this.getClassInit()}`;
  }
  /**
   * Returns the select for an element that has already been processed.<br>
   * Возвращает селект для элемента, который уже обработан.
   */
  static getSelectorEnd() {
    return `*[${this.getAttributeUi()}].${this.getClassEnd()}`;
  }
  /**
   * Returns the select for searching elements by their status.<br>
   * Возвращает селект для поиска элементов по их статусу.
   * @param status status name /<br>название статуса
   */
  static getSelectorByStatus(t) {
    switch (t) {
      case r.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`;
      case r.end:
        return this.getSelectorEnd();
      default:
        return this.getSelectorNew();
    }
  }
}
function b(e) {
  const t = {}, s = L(e);
  if (s)
    for (const i of s.attributes)
      t[i.name] = ((i == null ? void 0 : i.value) || (i == null ? void 0 : i.textContent)) ?? void 0;
  return t;
}
function m(e) {
  return $(e).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
class a {
  /**
   * Checks if a function is in the list by its name.<br>
   * Проверяет, есть ли функция в списке по ее имени.
   * @param name function name /<br>название функции
   */
  static isFunction(t) {
    return t in this.functions;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли класс в списке по его имени.
   * @param name class name /<br>название класса
   */
  static isClass(t) {
    return t in this.classes;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли компонент в списке по его имени.
   * @param name component name /<br>название компонента
   */
  static isComponent(t) {
    return t in this.components;
  }
  /**
   * Returns a list of connected components.<br>
   * Возвращает список подключенных компонентов.
   */
  static getComponentList() {
    return this.components;
  }
  /**
   * Returns a list of global projects.<br>
   * Возвращает список глобальных проектов.
   */
  static getComponentGlobal() {
    return l in window ? window[l] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var s;
    if (l in window)
      return ((s = window[l]) == null ? void 0 : s[t]) ?? void 0;
  }
  /**
   * Returns connected Vue components by their name.<br>
   * Возвращает подключенные компоненты Vue по их имени.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentVue(t) {
    if (t in this.components)
      return this.components[t];
  }
  /**
   * Returns an instance of the element.<br>
   * Возвращает экземпляр элемента.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentItem(t) {
    if (t in this.compItems)
      return this.compItems[t].item;
  }
  /**
   * Adds a new function.<br>
   * Добавляет новую функцию.
   * @param name function name /<br>название функции
   * @param item new function /<br>новая функция
   */
  static addFunction(t, s) {
    this.isFunction(t) || (this.functions[t] = s);
  }
  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass(t, s) {
    this.isClass(t) || (this.classes[t] = s);
  }
  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent(t, s) {
    this.isComponent(t) || (this.components[t] = s);
  }
  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList(t) {
    h(t, (s, i) => {
      this.addFunction(i, s);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    h(t, (s, i) => {
      this.addClass(i, s);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    h(t, (s, i) => {
      this.addComponent(i, s);
    });
  }
  /**
   * Adds texts in sync mode.<br>
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static addTranslate(t) {
    y.addSync(t);
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, s, i) {
    if (this.compItems[t] = {
      item: s,
      callback: i
    }, t in this.compCaching) {
      const n = this.compCaching[t];
      return delete this.compCaching[t], n;
    }
  }
  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp(t, s) {
    t in this.compItems ? this.compItems[t].callback(s) : this.compCaching[t] = s;
  }
  /**
   * Removal of the component from the list.<br>
   * Удаление компонента из списка.
   * @param name component identifier /<br>идентификатор компонента
   */
  static removeComponent(t) {
    t in this.compItems && delete this.compItems[t];
  }
}
o(a, "functions", {}), o(a, "classes", {}), o(a, "components", {}), o(a, "compItems", {}), o(a, "compCaching", {});
class M {
  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor(t) {
    o(this, "id");
    o(this, "componentName");
    o(this, "static");
    o(this, "slots", {});
    o(this, "props", {});
    o(this, "callback");
    var s;
    this.element = t, this.id = E(t), this.componentName = ((s = t.dataset) == null ? void 0 : s[c.getKeyUi()]) ?? "component", this.static = r.new, this.slots = this.initSlots(), this.setStatus(r.init), this.element.classList.add(this.getClassMain());
  }
  /**
   * Checks if the element belongs to the current object.<br>
   * Проверяет, принадлежит ли элемент текущему объекту.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return this.element === t;
  }
  /**
   * Checks if the current element is a link.<br>
   * Проверяет, является ли текущий элемент ссылкой.
   */
  isLink() {
    return !!this.componentName.match("/");
  }
  /**
   * Returns the identifier.<br>
   * Возвращает идентификатор.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the identifier.<br>
   * Возвращает названия компонента.
   */
  getComponentName() {
    if (this.isLink())
      return this.componentName;
    const t = m(this.componentName);
    return a.isComponent(t) ? t : m(`${N}-${this.componentName}`);
  }
  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign() {
    return g(this.getComponentName()).replace(/-.*?$/, "");
  }
  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain() {
    return `${this.getDesign()}-system`;
  }
  /**
   * Returns the element.<br>
   * Возвращает элемент.
   */
  getElement() {
    return this.element;
  }
  /**
   * Returns the status.<br>
   * Возвращает статус.
   */
  getStatus() {
    return this.static;
  }
  /**
   * Returns property data.<br>
   * Возвращает данные свойства.
   */
  getProps() {
    return {
      ...this.getDataset(),
      ...this.props
    };
  }
  /**
   * Returns data about the slot.<br>
   * Возвращает данные о слоте.
   */
  getSlots() {
    return this.slots;
  }
  /**
   * Changes the status of the item.<br>
   * Изменяет статус элемента.
   * @param status status values /<br>значения статуса
   */
  setStatus(t) {
    switch (this.removeClasses(), this.static = t, this.static) {
      case r.init:
        this.element.classList.add(c.getClassInit());
        break;
      case r.end:
        this.element.classList.add(c.getClassEnd());
        break;
    }
    return this;
  }
  /**
   * Registers a component for data update.<br>
   * Регистрирует компонент для обновления данных.
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  registration(t, s) {
    const i = a.registrationComponent(
      this.getId(),
      t,
      (n) => {
        u(n) && this.setProps(n).update();
      }
    );
    return i && this.setProps(i), this.callback = s, this;
  }
  /**
   * Called upon data update.<br>
   * Вызывается при обновлении данных.
   */
  update() {
    var t;
    return (t = this.callback) == null || t.call(
      this,
      this.getProps()
    ), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  disconnect() {
    return a.removeComponent(this.getId()), this;
  }
  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  getDataset() {
    const t = {};
    return h(this.element.dataset, (s, i) => {
      i !== c.getKeyUi() && (t[i] = A(s));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return u(t) && h(t, (s, i) => {
      i === "slots" ? this.setSlots(s) : this.props[i] = s;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return u(t) && h(t, (s, i) => {
      this.slots[i] = this.initChildrenList(S(s));
    }), this;
  }
  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  initSlots() {
    const t = {}, s = [];
    for (const i of this.element.children) {
      const n = i.getAttribute("data-slot");
      if (n)
        t[n] = this.initChildrenList(i.childNodes);
      else {
        const d = this.initChildren(i);
        d && ("default" in t ? t.default.push(d) : t.default = [d]);
      }
      s.push(i);
    }
    for (const i of s)
      this.element.removeChild(i);
    return t;
  }
  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  initChildrenList(t) {
    const s = [];
    for (const i of t) {
      const n = this.initChildren(i);
      n && s.push(n);
    }
    return s;
  }
  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  initChildren(t) {
    var i, n;
    if (t instanceof HTMLElement)
      return {
        tag: t.nodeName,
        attributes: {
          ...b(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const s = (n = (i = t == null ? void 0 : t.textContent) == null ? void 0 : i.trim) == null ? void 0 : n.call(i);
    if (u(s))
      return s;
    if (w(t) && u(t))
      return t;
  }
  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  removeClasses() {
    return this.element.classList.remove(c.getClassInit()), this.element.classList.remove(c.getClassEnd()), this;
  }
}
export {
  l as K,
  c as M,
  M as a,
  r as b,
  a as c,
  g as d,
  b as g,
  m as t
};
