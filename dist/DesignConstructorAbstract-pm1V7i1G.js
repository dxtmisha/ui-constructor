var d = Object.defineProperty;
var g = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => (g(i, typeof t != "symbol" ? t + "" : t, e), e);
import { isRef as y, h as C, toRefs as S, useAttrs as b, useSlots as A, ref as N, computed as u } from "vue";
import { i as o, f as h, t as l, a as $ } from "./toArray-J4lAhJG7.js";
function p(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${t[1].toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function c(i) {
  return y(i) ? i.value : i;
}
function j(i) {
  return i && "class" in i && typeof i.class == "string" ? i.class : void 0;
}
function v(i, t, e) {
  const s = j(t);
  return e && s ? `${e}.${s}` : e || s || i;
}
function O(i, t, e, s) {
  const r = v(i, t, s);
  return C(i, { key: r, ...t }, e);
}
class E {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = {}, e) {
    this.components = t, this.modification = e;
  }
  /**
   * Check the presence of the component.<br>
   * Проверить наличие компонента.
   * @param name name of the component /<br>названия компонента
   */
  is(t) {
    return t in this.components;
  }
  /**
   * Getting the object of the component.<br>
   * Получение объекта компонента.
   * @param name name of the component /<br>названия компонента
   */
  get(t) {
    var e;
    return (e = this.components) == null ? void 0 : e[t];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(t, e) {
    var s;
    if (t) {
      const r = c((s = this.modification) == null ? void 0 : s[t]);
      if (r && o(r)) {
        const n = {};
        return h(r, (f, m) => {
          n[m] = c(f);
        }), e && Object.assign(n, e), n;
      }
    }
    return e;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(t, e, s, r) {
    const n = this.renderOne(
      t,
      e,
      s,
      r
    );
    return n ? [n] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(t, e, s, r) {
    if (this.is(t)) {
      const n = r ?? t;
      return O(
        this.get(t),
        this.getModification(n, e),
        s,
        n
      );
    }
  }
  /**
   * Rendering the component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added /<br>
   * массив, по которому будет добавлять объект
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderAdd(t, e, s, r, n) {
    return t.push(...this.render(e, s, r, n)), this;
  }
}
class Z {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, e, s) {
    a(this, "name");
    a(this, "element", N());
    a(this, "refs");
    a(this, "components");
    a(this, "emits");
    a(this, "classes");
    a(this, "classesSub");
    a(this, "styles");
    a(this, "stylesSub");
    a(this, "attrs");
    a(this, "slots");
    a(this, "data");
    a(this, "dataExpose");
    this.props = e, this.name = this.initName(t), this.refs = this.props ? S(this.props) : {}, this.components = new E(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = s == null ? void 0 : s.classes, this.styles = s == null ? void 0 : s.styles, this.attrs = b(), this.slots = A();
  }
  init() {
    return this.makeOptions(), this.classesSub = u(() => this.initClasses()), this.stylesSub = u(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: u(() => this.updateClasses()),
      styles: u(() => this.updateStyles()),
      ...this.initSetup()
    }, this.dataExpose = this.initExpose(), this;
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   */
  getName() {
    return this.name.join("-");
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getSubClass(t) {
    return `${this.getName()}__${l(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${l(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${l(t).join("-")}`;
  }
  /**
   * Getting additional parameters.<br>
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const t = { ...this.attrs ?? {} };
    return "class" in t && delete t.class, "style" in t && delete t.style, t;
  }
  /**
   * Execution method to replace setup in Vue.<br>
   * Метод выполнения, для замены setup в Vue.
   */
  setup() {
    return this.data ?? {};
  }
  /**
   * List of available external variables.<br>
   * Список доступных переменных извне.
   */
  expose() {
    return this.dataExpose ?? {};
  }
  /**
   * The rendering method for the setup method.<br>
   * Метод рендеринга для метода настройки.
   */
  render() {
    return () => this.initRender();
  }
  /**
   * Initializes the slot.<br>
   * Инициализирует слот.
   * @param name slot name /<br>название слота
   * @param children if you pass this element, the slot will be added to it /<br>
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot /<br>свойство для слота
   */
  initSlot(t, e, s = {}) {
    var r;
    if (this.slots && ((r = this.slots) != null && r[t]) && typeof this.slots[t] == "function") {
      const n = this.slots[t](s);
      return e && e.push(n), n;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(t) {
    if ($(t)) {
      const e = {};
      return h(t, (s, r) => {
        r.match(/\?\?/) ? e[r.replace(/\?\?/, this.getName())] = s : r.match(/\?/) ? e[r.replace(/\?/, this.name[0])] = s : e[r] = s;
      }), e;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(t) {
    return h(t.split(".", 2), (e) => p(e));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, r;
    const t = (s = this.classesSub) == null ? void 0 : s.value, e = (r = this.classes) == null ? void 0 : r.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main)
      }
    } : e ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, r;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, e = (r = this.styles) == null ? void 0 : r.value;
    return t && e ? {
      ...t,
      ...e
    } : e ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(t) {
    return o(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
}
export {
  E as D,
  j as a,
  v as b,
  Z as c,
  c as g,
  O as r,
  p as t
};
