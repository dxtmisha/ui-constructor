var N = Object.defineProperty;
var T = (n, t, s) => t in n ? N(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var o = (n, t, s) => (T(n, typeof t != "symbol" ? t + "" : t, s), s);
import { isRef as G, h as R, toRefs as O, useAttrs as B, useSlots as j, ref as F, computed as y } from "vue";
import { g as v, f as g, d as M, G as p, a as z } from "./Api-DYbVHTIo.js";
import { t as f } from "./toArray-rswbj5Xf.js";
function w(n) {
  return v(n) && !Array.isArray(n);
}
function P(n) {
  return n.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${t[1].toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function L(n) {
  return G(n) ? n.value : n;
}
function U(n) {
  return n && "class" in n && typeof n.class == "string" ? n.class : void 0;
}
function K(n, t, s) {
  const i = U(t);
  return s && i ? `${s}.${i}` : s || i || n;
}
function Z(n, t, s, i) {
  const r = K(n, t, i);
  return R(n, { key: r, ...t }, s);
}
class x {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = {}, s) {
    this.components = t, this.modification = s;
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
    var s;
    return (s = this.components) == null ? void 0 : s[t];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(t, s) {
    var i;
    if (t) {
      const r = L((i = this.modification) == null ? void 0 : i[t]);
      if (r && w(r)) {
        const a = {};
        return g(r, (c, h) => {
          a[h] = L(c);
        }), s && Object.assign(a, s), a;
      }
    }
    return s;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(t, s, i, r) {
    const a = this.renderOne(
      t,
      s,
      i,
      r
    );
    return a ? [a] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(t, s, i, r) {
    if (this.is(t)) {
      const a = r ?? t;
      return Z(
        this.get(t),
        this.getModification(a, s),
        i,
        a
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
  renderAdd(t, s, i, r, a) {
    return t.push(...this.render(s, i, r, a)), this;
  }
}
class et {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, s, i) {
    o(this, "name");
    o(this, "element", F());
    o(this, "refs");
    o(this, "components");
    o(this, "emits");
    o(this, "classes");
    o(this, "classesSub");
    o(this, "styles");
    o(this, "stylesSub");
    o(this, "attrs");
    o(this, "slots");
    o(this, "data");
    o(this, "dataExpose");
    this.props = s, this.name = this.initName(t), this.refs = this.props ? O(this.props) : {}, this.components = new x(i == null ? void 0 : i.components, i == null ? void 0 : i.compMod), this.emits = i == null ? void 0 : i.emits, this.classes = i == null ? void 0 : i.classes, this.styles = i == null ? void 0 : i.styles, this.attrs = B(), this.slots = j();
  }
  init() {
    return this.makeOptions(), this.classesSub = y(() => this.initClasses()), this.stylesSub = y(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: y(() => this.updateClasses()),
      styles: y(() => this.updateStyles()),
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
    return `${this.getName()}__${f(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${f(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${f(t).join("-")}`;
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
  initSlot(t, s, i = {}) {
    var r;
    if (this.slots && ((r = this.slots) != null && r[t]) && typeof this.slots[t] == "function") {
      const a = this.slots[t](i);
      return s && s.push(a), a;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(t) {
    if (v(t)) {
      const s = {};
      return g(t, (i, r) => {
        r.match(/\?\?/) ? s[r.replace(/\?\?/, this.getName())] = i : r.match(/\?/) ? s[r.replace(/\?/, this.name[0])] = i : s[r] = i;
      }), s;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(t) {
    return g(t.split(".", 2), (s) => P(s));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var i, r;
    const t = (i = this.classesSub) == null ? void 0 : i.value, s = (r = this.classes) == null ? void 0 : r.value;
    return t && s ? {
      ...t,
      ...s,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(s == null ? void 0 : s.main)
      }
    } : s ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var i, r;
    const t = (i = this.stylesSub) == null ? void 0 : i.value, s = (r = this.styles) == null ? void 0 : r.value;
    return t && s ? {
      ...t,
      ...s
    } : s ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(t) {
    return w(t) ? t : Array.isArray(t) ? { [t.filter((i) => typeof i == "string" && i.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
}
function H(n) {
  return Array.isArray(n);
}
class V {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s = Object.keys(t)) {
    o(this, "cache", {});
    this.props = t, this.watch = s;
  }
  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param name property name /<br>название свойства
   */
  is(t) {
    return H(t) ? !!t.find((s) => this.isDifferent(s)) : this.isDifferent(t);
  }
  /**
   * Checks if there are changes in the data.<br>
   * Проверяет, есть ли изменения в данных.
   */
  isChanged() {
    const t = this.props;
    return !!this.watch.find((s) => s in t && this.isDifferent(s));
  }
  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  update() {
    const t = this.props;
    this.watch.forEach((s) => {
      s in t && this.isDifferent(s) && (this.cache[s] = t[s]);
    });
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param name property name /<br>название свойства
   */
  isDifferent(t) {
    var s, i;
    return ((s = this.cache) == null ? void 0 : s[t]) !== ((i = this.props) == null ? void 0 : i[t]);
  }
}
class W {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   * @param changed base data /<br>данный для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, s, i) {
    o(this, "event", {});
    o(this, "changed");
    this.props = t, this.callback = s, this.changed = new V(t, i);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t), this;
  }
  /**
   * Checks if there are values in the property.<br>
   * Проверяет, есть ли значения в свойстве.
   * @param name property names /<br>названия свойств
   */
  is(t) {
    return t in this.props;
  }
  /**
   * Checks if the value has been changed by the property name.<br>
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names /<br>названия свойств
   * @param nameProp names of properties of the input variable /<br>названия свойств входной переменной
   */
  isChanged(t, s) {
    return !(t in this.event) || this.changed.is(s || t);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  makeCallback(t = !1) {
    (t || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
  /**
   * The function calls an image call.<br>
   * Функция вызывает образный вызов.
   */
  makeCallbackItem() {
    this.callback && this.callback(this.event);
  }
}
class st extends W {
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t).then(), this;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  async makeCallback(t) {
    (t || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
}
class it {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    o(this, "cache");
    o(this, "comparisons", []);
    this.callback = t;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(t) {
    return this.isUpdate(t) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(t) {
    return this.isUpdate(t) && await this.setCacheAsync(), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).<br>
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  isUpdate(t) {
    return this.cache === void 0 || this.comparisons.length !== t.length || this.comparisons.findIndex((s, i) => s !== t[i]) >= 0 ? (this.comparisons = [...t], !0) : !1;
  }
}
function d(n) {
  if (n instanceof Date)
    return n;
  if (M(n))
    return /* @__PURE__ */ new Date();
  if (typeof n == "number")
    return new Date(n);
  let t = n, s = "";
  n.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (r, a, c) => (t = a, s = c, r));
  const i = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${i}${s}`);
}
function b(n) {
  if (typeof n == "number")
    return n;
  let t = n.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
class Y {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = p.getLocation()) {
    o(this, "geo");
    this.geo = p.find(t);
    const s = this.getLocation();
    if (s in C)
      return C[s];
    C[s] = this;
  }
  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, s) {
    let i = { type: "language" }, r;
    s && (typeof s == "string" ? i.type = s : i = {
      ...i,
      ...s
    });
    try {
      t ? r = new Intl.DisplayNames(this.getLocation(), i).of(t) : i.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.language) : i.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.country));
    } catch {
    }
    return r ?? t ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, s) {
    const i = {
      type: "language",
      style: s
    };
    return this.display(t, i);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, s) {
    const i = {
      type: "region",
      style: s
    };
    return this.display(t, i);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, s) {
    var i, r;
    return ((r = (i = this.numberObject(s)) == null ? void 0 : i.format) == null ? void 0 : r.call(i, b(t))) || t.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var t, s, i, r, a;
    return ((a = (r = (i = (s = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : s.call(t, 1.2)) == null ? void 0 : i.find) == null ? void 0 : r.call(i, (c) => c.type === "decimal")) == null ? void 0 : a.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, s, i = !1) {
    const r = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof s == "string" ? { currency: s } : s || {}
    }, a = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...c) => (r.currency = c[2].toUpperCase(), c[1]));
    if (i) {
      const c = this.numberObject(r);
      return c ? c.formatToParts(b(t)).filter((h) => ["literal", "currency"].indexOf(h.type) === -1).join("") : t.toString();
    } else
      return this.number(a, r);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, s) {
    const i = {
      style: "unit",
      ...typeof s == "string" ? { unit: s } : s || {}
    }, r = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...a) => (i.unit = a[2].toLowerCase(), a[1]));
    return this.number(r, i);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, s) {
    return this.number(t, {
      style: "percent",
      ...s || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, s) {
    return this.percent(b(t) / 100, s);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, s, i, r) {
    const a = d(t), c = typeof i == "string", h = this.dateOptions(s, c ? i : "short");
    return r && (h.hour12 = !1), c || Object.assign(h, i), a.toLocaleString(this.getLocation(), h);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, s, i) {
    const r = d(t), a = i || /* @__PURE__ */ new Date(), c = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    let h = "second", l = (r.getTime() - a.getTime()) / 1e3;
    Math.abs(l) >= 60 && (h = "minute", l /= 60, Math.abs(l) >= 60 && (h = "hour", l /= 60, Math.abs(l) >= 24 && (h = "day", l /= 24, Math.abs(l) >= 30 && (h = "month", l /= 30, Math.abs(l) >= 12 && (h = "year", l /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), c).format(Math.round(l), h);
    } catch {
    }
    return "";
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit(t, s, i, r, a, c, h) {
    const l = d(t), u = i || /* @__PURE__ */ new Date(), D = new Date(u), A = new Date(u);
    return D.setDate(u.getDate() - s), A.setDate(u.getDate() + s), l >= D && l <= A ? this.relative(
      l,
      r,
      u
    ) : this.date(
      l,
      c,
      a,
      h
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, s) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: s || "long" }).format(d(t));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    const s = [{
      label: "",
      value: void 0
    }];
    try {
      const i = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
      for (let a = 0; a < 12; a++)
        i.setMonth(a), s.push({
          label: r.format(i).replace(/^./, (c) => c.toUpperCase()),
          value: a + 1
        });
    } catch {
    }
    return s;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, s) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: s || "long" }).format(d(t));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    const s = [{
      label: "",
      value: void 0
    }];
    try {
      const i = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), a = i.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      i.setDate(i.getDate() - a);
      for (let c = 0; c < 7; c++)
        s.push({
          label: r.format(i).replace(/^./, (h) => h.toUpperCase()),
          value: i.getDay()
        }), i.setDate(i.getDate() + 1);
    } catch {
    }
    return s;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return this.date(t, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(t, s = (i, r) => [i, r]) {
    const i = new Intl.Collator(this.getLocation());
    return t.sort((r, a) => i.compare(...s(r, a)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(t) {
    try {
      return new Intl.NumberFormat(this.getLocation(), t);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(t, s = "short") {
    const i = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (i.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(t) !== -1 && (i.month = s), ["full", "datetime", "date", void 0, "day"].indexOf(t) !== -1 && (i.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (i.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (i.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (i.second = "2-digit")), i;
  }
}
const C = {}, e = "@flag", m = class m {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = p.getLocation()) {
    this.code = t;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(t = this.code) {
    var i;
    const s = p.find(t);
    if (s) {
      const r = this.getCountry(s);
      return {
        language: this.getLanguage(s),
        country: r,
        standard: s.standard,
        icon: (i = m.flags) == null ? void 0 : i[s.country],
        label: r,
        value: s.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code) {
    var s;
    return (s = this.get(t)) == null ? void 0 : s.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return g(this.getCodes(t), (s) => this.get(s));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return g(this.getList(t), (s) => {
      const i = new m(s.language).get(s.standard);
      return {
        ...s,
        nationalLanguage: i == null ? void 0 : i.language,
        nationalCountry: i == null ? void 0 : i.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new Y(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(t) {
    return t ?? Object.keys(m.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(t) {
    return this.getLocation().languageName(t.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(t) {
    return this.getLocation().countryName(t.country);
  }
};
o(m, "flags", {
  AD: `${e}-ad`,
  AE: `${e}-ae`,
  AF: `${e}-af`,
  AG: `${e}-ag`,
  AI: `${e}-ai`,
  AL: `${e}-al`,
  AM: `${e}-am`,
  AN: `${e}-an`,
  AO: `${e}-ao`,
  AQ: `${e}-aq`,
  AR: `${e}-ar`,
  AS: `${e}-as`,
  AT: `${e}-at`,
  AU: `${e}-au`,
  AW: `${e}-aw`,
  AX: `${e}-ax`,
  AZ: `${e}-az`,
  BA: `${e}-ba`,
  BB: `${e}-bb`,
  BD: `${e}-bd`,
  BE: `${e}-be`,
  BF: `${e}-bf`,
  BG: `${e}-bg`,
  BH: `${e}-bh`,
  BI: `${e}-bi`,
  BJ: `${e}-bj`,
  BL: `${e}-bl`,
  BM: `${e}-bm`,
  BN: `${e}-bn`,
  BO: `${e}-bo`,
  BQ: `${e}-bq`,
  BR: `${e}-br`,
  BS: `${e}-bs`,
  BT: `${e}-bt`,
  BV: `${e}-bv`,
  BW: `${e}-bw`,
  BY: `${e}-by`,
  BZ: `${e}-bz`,
  CA: `${e}-ca`,
  CC: `${e}-cc`,
  CD: `${e}-cd`,
  CF: `${e}-cf`,
  CG: `${e}-cg`,
  CH: `${e}-ch`,
  CI: `${e}-ci`,
  CK: `${e}-ck`,
  CL: `${e}-cl`,
  CM: `${e}-cm`,
  CN: `${e}-cn`,
  CO: `${e}-co`,
  CR: `${e}-cr`,
  CU: `${e}-cu`,
  CV: `${e}-cv`,
  CW: `${e}-cw`,
  CX: `${e}-cx`,
  CY: `${e}-cy`,
  CZ: `${e}-cz`,
  DE: `${e}-de`,
  DJ: `${e}-dj`,
  DK: `${e}-dk`,
  DM: `${e}-dm`,
  DO: `${e}-do`,
  DZ: `${e}-dz`,
  EC: `${e}-ec`,
  EE: `${e}-ee`,
  EG: `${e}-eg`,
  EH: `${e}-eh`,
  ER: `${e}-er`,
  ES: `${e}-es`,
  ET: `${e}-et`,
  FI: `${e}-fi`,
  FJ: `${e}-fj`,
  FK: `${e}-fk`,
  FM: `${e}-fm`,
  FO: `${e}-fo`,
  FR: `${e}-fr`,
  GA: `${e}-ga`,
  GB: `${e}-gb`,
  GD: `${e}-gd`,
  GE: `${e}-ge`,
  GF: `${e}-gf`,
  GG: `${e}-gg`,
  GH: `${e}-gh`,
  GI: `${e}-gi`,
  GL: `${e}-gl`,
  GM: `${e}-gm`,
  GN: `${e}-gn`,
  GP: `${e}-gp`,
  GQ: `${e}-gq`,
  GR: `${e}-gr`,
  GT: `${e}-gt`,
  GU: `${e}-gu`,
  GW: `${e}-gw`,
  GY: `${e}-gy`,
  HK: `${e}-hk`,
  HM: `${e}-hm`,
  HN: `${e}-hn`,
  HR: `${e}-hr`,
  HT: `${e}-ht`,
  HU: `${e}-hu`,
  ID: `${e}-id`,
  IE: `${e}-ie`,
  IL: `${e}-il`,
  IM: `${e}-im`,
  IN: `${e}-in`,
  IO: `${e}-io`,
  IQ: `${e}-iq`,
  IR: `${e}-ir`,
  IS: `${e}-is`,
  IT: `${e}-it`,
  JE: `${e}-je`,
  JM: `${e}-jm`,
  JO: `${e}-jo`,
  JP: `${e}-jp`,
  KE: `${e}-ke`,
  KG: `${e}-kg`,
  KH: `${e}-kh`,
  KI: `${e}-ki`,
  KM: `${e}-km`,
  KN: `${e}-kn`,
  KP: `${e}-kp`,
  KR: `${e}-kr`,
  KW: `${e}-kw`,
  KY: `${e}-ky`,
  KZ: `${e}-kz`,
  LA: `${e}-la`,
  LB: `${e}-lb`,
  LC: `${e}-lc`,
  LI: `${e}-li`,
  LK: `${e}-lk`,
  LR: `${e}-lr`,
  LS: `${e}-ls`,
  LT: `${e}-lt`,
  LU: `${e}-lu`,
  LV: `${e}-lv`,
  LY: `${e}-ly`,
  MA: `${e}-ma`,
  MC: `${e}-mc`,
  MD: `${e}-md`,
  ME: `${e}-me`,
  MF: `${e}-mf`,
  MG: `${e}-mg`,
  MH: `${e}-mh`,
  MK: `${e}-mk`,
  ML: `${e}-ml`,
  MM: `${e}-mm`,
  MN: `${e}-mn`,
  MO: `${e}-mo`,
  MP: `${e}-mp`,
  MQ: `${e}-mq`,
  MR: `${e}-mr`,
  MS: `${e}-ms`,
  MT: `${e}-mt`,
  MU: `${e}-mu`,
  MV: `${e}-mv`,
  MW: `${e}-mw`,
  MX: `${e}-mx`,
  MY: `${e}-my`,
  MZ: `${e}-mz`,
  NA: `${e}-na`,
  NC: `${e}-nc`,
  NE: `${e}-ne`,
  NF: `${e}-nf`,
  NG: `${e}-ng`,
  NI: `${e}-ni`,
  NL: `${e}-nl`,
  NO: `${e}-no`,
  NP: `${e}-np`,
  NR: `${e}-nr`,
  NU: `${e}-nu`,
  NZ: `${e}-nz`,
  OM: `${e}-om`,
  PA: `${e}-pa`,
  PE: `${e}-pe`,
  PF: `${e}-pf`,
  PG: `${e}-pg`,
  PH: `${e}-ph`,
  PK: `${e}-pk`,
  PL: `${e}-pl`,
  PM: `${e}-pm`,
  PN: `${e}-pn`,
  PR: `${e}-pr`,
  PS: `${e}-ps`,
  PT: `${e}-pt`,
  PW: `${e}-pw`,
  PY: `${e}-py`,
  QA: `${e}-qa`,
  RE: `${e}-re`,
  RO: `${e}-ro`,
  RS: `${e}-rs`,
  RU: `${e}-ru`,
  RW: `${e}-rw`,
  SA: `${e}-sa`,
  SB: `${e}-sb`,
  SC: `${e}-sc`,
  SD: `${e}-sd`,
  SE: `${e}-se`,
  SG: `${e}-sg`,
  SH: `${e}-sh`,
  SI: `${e}-si`,
  SJ: `${e}-sj`,
  SK: `${e}-sk`,
  SL: `${e}-sl`,
  SM: `${e}-sm`,
  SN: `${e}-sn`,
  SO: `${e}-so`,
  SR: `${e}-sr`,
  SS: `${e}-ss`,
  ST: `${e}-st`,
  SV: `${e}-sv`,
  SX: `${e}-sx`,
  SY: `${e}-sy`,
  SZ: `${e}-sz`,
  TC: `${e}-tc`,
  TD: `${e}-td`,
  TG: `${e}-tg`,
  TH: `${e}-th`,
  TJ: `${e}-tj`,
  TK: `${e}-tk`,
  TL: `${e}-tl`,
  TM: `${e}-tm`,
  TN: `${e}-tn`,
  TO: `${e}-to`,
  TR: `${e}-tr`,
  TT: `${e}-tt`,
  TV: `${e}-tv`,
  TW: `${e}-tw`,
  TZ: `${e}-tz`,
  UA: `${e}-ua`,
  UG: `${e}-ug`,
  US: `${e}-us`,
  UY: `${e}-uy`,
  UZ: `${e}-uz`,
  VA: `${e}-va`,
  VC: `${e}-vc`,
  VE: `${e}-ve`,
  VG: `${e}-vg`,
  VI: `${e}-vi`,
  VN: `${e}-vn`,
  VU: `${e}-vu`,
  WF: `${e}-wf`,
  WS: `${e}-ws`,
  YE: `${e}-ye`,
  YT: `${e}-yt`,
  ZA: `${e}-za`,
  ZM: `${e}-zm`,
  ZW: `${e}-zw`
});
let S = m;
function I(n) {
  return n === window;
}
function $(n) {
  if (I(n))
    return document.body;
  if (typeof n == "string")
    try {
      return document.querySelector(n) ?? void 0;
    } catch {
      return;
    }
  return n;
}
function q(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n);
}
let k = q(1e5, 9e5);
function rt(n, t) {
  const s = $(n);
  return s ? (z(s.id) || s.setAttribute("id", `id-${k++}`), t ? `#${s.id}${t}`.trim() : s.id) : `id-${k++}`;
}
function E(n) {
  return I(n) ? n : $(n);
}
function J(n) {
  var t;
  return !!((t = $(n)) != null && t.closest("html"));
}
class nt {
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
  constructor(t, s = ["click"], i, r, a) {
    /**
     * Element.<br>
     * Элемент.
     * @protected
     */
    o(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     * @protected
     */
    o(this, "elementControl");
    o(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.<br>
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     * @protected
     */
    o(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.<br>
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     * @protected
     */
    o(this, "listenerRecent", (t) => {
      var s, i;
      J(this.elementControl) ? ((s = this.listener) == null || s.call(this.element, t, this.detail), v(this.options) && ((i = this.options) != null && i.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.<br>
     * Состояния события.
     * @protected
     */
    o(this, "activity", !1);
    o(this, "activityItems", []);
    this.listener = i, this.options = r, this.detail = a, this.element = E(t), this.elementControl = $(t), this.type = f(s);
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
    const s = E(t);
    return this.elementControlEdit || (this.elementControl = $(t)), this.element = s, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element /<br>элемент
   */
  setElementControl(t) {
    return this.elementControl = $(t), this.elementControlEdit = !M(this.elementControl), this.elementControlEdit || (this.elementControl = $(this.element)), this;
  }
  /**
   * Changes the type of the handled event.<br>
   * Изменяет тип обрабатываемого события.
   * @param type type /<br>тип
   */
  setType(t) {
    return this.type = f(t), this.reset(), this;
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
      (s) => {
        var i;
        return (i = this.element) == null ? void 0 : i.dispatchEvent(new CustomEvent(s, { detail: t }));
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
      type: s,
      listener: i,
      observer: r
    }) => {
      r ? r.disconnect() : i ? t == null || t.removeEventListener(s, i) : t == null || t.removeEventListener(s, this.listenerRecent);
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
        (s) => this.listenerRecent(s == null ? void 0 : s[0])
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
      const s = (i) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(i), t = !1;
        }));
      };
      return this.element.addEventListener("scroll", s, this.options), this.element.addEventListener("resize", s, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: s
        },
        {
          element: this.element,
          type: "resize",
          listener: s
        }
      ), !0;
    }
    return !1;
  }
}
export {
  it as C,
  W as D,
  nt as E,
  e as G,
  rt as a,
  E as b,
  J as c,
  w as d,
  I as e,
  L as f,
  $ as g,
  Z as h,
  H as i,
  U as j,
  K as k,
  d as l,
  b as m,
  S as n,
  Y as o,
  st as p,
  V as q,
  q as r,
  x as s,
  P as t,
  et as u
};
