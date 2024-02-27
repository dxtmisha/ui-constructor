var L = Object.defineProperty;
var M = (c, e, a) => e in c ? L(c, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : c[e] = a;
var g = (c, e, a) => (M(c, typeof e != "symbol" ? e + "" : e, a), a);
import { f as b } from "./forEach-B1ZDH1yu.js";
import { G as m } from "./Api-Lp9yGt89.js";
import { i as C } from "./DataStorage-DLhLvnDX.js";
import { t as d } from "./toNumber-BeBr0lVX.js";
class I {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    g(this, "cache");
    g(this, "comparisons", []);
    this.callback = e;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(e) {
    return this.isUpdate(e) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(e) {
    return this.isUpdate(e) && await this.setCacheAsync(), this.cache;
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
  isUpdate(e) {
    return this.cache === void 0 || this.comparisons.length !== e.length || this.comparisons.findIndex((a, n) => a !== e[n]) >= 0 ? (this.comparisons = [...e], !0) : !1;
  }
}
function h(c) {
  if (c instanceof Date)
    return c;
  if (C(c))
    return /* @__PURE__ */ new Date();
  if (typeof c == "number")
    return new Date(c);
  let e = c, a = "";
  c.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, ($, r, i) => (e = r, a = i, $));
  const n = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${n}${a}`);
}
class T {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = m.getLocation()) {
    g(this, "geo");
    this.geo = m.find(e);
    const a = this.getLocation();
    if (a in f)
      return f[a];
    f[a] = this;
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
  display(e, a) {
    let n = { type: "language" }, $;
    a && (typeof a == "string" ? n.type = a : n = {
      ...n,
      ...a
    });
    try {
      e ? $ = new Intl.DisplayNames(this.getLocation(), n).of(e) : n.type === "language" ? $ = new Intl.DisplayNames(this.getLocation(), n).of(this.geo.language) : n.type === "region" && ($ = new Intl.DisplayNames(this.getLocation(), n).of(this.geo.country));
    } catch {
    }
    return $ ?? e ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(e, a) {
    const n = {
      type: "language",
      style: a
    };
    return this.display(e, n);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(e, a) {
    const n = {
      type: "region",
      style: a
    };
    return this.display(e, n);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(e, a) {
    var n, $;
    return (($ = (n = this.numberObject(a)) == null ? void 0 : n.format) == null ? void 0 : $.call(n, d(e))) || e.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var e, a, n, $, r;
    return ((r = ($ = (n = (a = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : a.call(e, 1.2)) == null ? void 0 : n.find) == null ? void 0 : $.call(n, (i) => i.type === "decimal")) == null ? void 0 : r.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(e, a, n = !1) {
    const $ = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof a == "string" ? { currency: a } : a || {}
    }, r = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...i) => ($.currency = i[2].toUpperCase(), i[1]));
    if (n) {
      const i = this.numberObject($);
      return i ? i.formatToParts(d(e)).filter((s) => ["literal", "currency"].indexOf(s.type) === -1).join("") : e.toString();
    } else
      return this.number(r, $);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(e, a) {
    const n = {
      style: "unit",
      ...typeof a == "string" ? { unit: a } : a || {}
    }, $ = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...r) => (n.unit = r[2].toLowerCase(), r[1]));
    return this.number($, n);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(e, a) {
    return this.number(e, {
      style: "percent",
      ...a || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(e, a) {
    return this.percent(d(e) / 100, a);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(e, a, n, $) {
    const r = h(e), i = typeof n == "string", s = this.dateOptions(a, i ? n : "short");
    return $ && (s.hour12 = !1), i || Object.assign(s, n), r.toLocaleString(this.getLocation(), s);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(e, a, n) {
    const $ = h(e), r = n || /* @__PURE__ */ new Date(), i = {
      numeric: "auto",
      ...typeof a == "string" ? { style: a } : a || {}
    };
    let s = "second", o = ($.getTime() - r.getTime()) / 1e3;
    Math.abs(o) >= 60 && (s = "minute", o /= 60, Math.abs(o) >= 60 && (s = "hour", o /= 60, Math.abs(o) >= 24 && (s = "day", o /= 24, Math.abs(o) >= 30 && (s = "month", o /= 30, Math.abs(o) >= 12 && (s = "year", o /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), i).format(Math.round(o), s);
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
  relativeLimit(e, a, n, $, r, i, s) {
    const o = h(e), u = n || /* @__PURE__ */ new Date(), y = new Date(u), p = new Date(u);
    return y.setDate(u.getDate() - a), p.setDate(u.getDate() + a), o >= y && o <= p ? this.relative(
      o,
      $,
      u
    ) : this.date(
      o,
      i,
      r,
      s
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(e, a) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: a || "long" }).format(h(e));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(e) {
    const a = [{
      label: "",
      value: void 0
    }];
    try {
      const n = /* @__PURE__ */ new Date(), $ = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
      for (let r = 0; r < 12; r++)
        n.setMonth(r), a.push({
          label: $.format(n).replace(/^./, (i) => i.toUpperCase()),
          value: r + 1
        });
    } catch {
    }
    return a;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(e, a) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: a || "long" }).format(h(e));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(e) {
    const a = [{
      label: "",
      value: void 0
    }];
    try {
      const n = /* @__PURE__ */ new Date(), $ = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), r = n.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      n.setDate(n.getDate() - r);
      for (let i = 0; i < 7; i++)
        a.push({
          label: $.format(n).replace(/^./, (s) => s.toUpperCase()),
          value: n.getDay()
        }), n.setDate(n.getDate() + 1);
    } catch {
    }
    return a;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(e) {
    return this.date(e, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(e, a = (n, $) => [n, $]) {
    const n = new Intl.Collator(this.getLocation());
    return e.sort(($, r) => n.compare(...a($, r)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(e) {
    try {
      return new Intl.NumberFormat(this.getLocation(), e);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(e, a = "short") {
    const n = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(e) !== -1 && (n.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(e) !== -1 && (n.month = a), ["full", "datetime", "date", void 0, "day"].indexOf(e) !== -1 && (n.day = "2-digit"), e !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(e) !== -1 && (n.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(e) !== -1 && (n.minute = "2-digit"), ["full", "time", "second"].indexOf(e) !== -1 && (n.second = "2-digit")), n;
  }
}
const f = {}, t = "@flag", l = class l {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e = m.getLocation()) {
    this.code = e;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(e = this.code) {
    var n;
    const a = m.find(e);
    if (a) {
      const $ = this.getCountry(a);
      return {
        language: this.getLanguage(a),
        country: $,
        standard: a.standard,
        icon: (n = l.flags) == null ? void 0 : n[a.country],
        label: $,
        value: a.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(e = this.code) {
    var a;
    return (a = this.get(e)) == null ? void 0 : a.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(e) {
    return b(this.getCodes(e), (a) => this.get(a));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(e) {
    return b(this.getList(e), (a) => {
      const n = new l(a.language).get(a.standard);
      return {
        ...a,
        nationalLanguage: n == null ? void 0 : n.language,
        nationalCountry: n == null ? void 0 : n.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(e) {
    return this.code = e, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new T(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(e) {
    return e ?? Object.keys(l.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(e) {
    return this.getLocation().languageName(e.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(e) {
    return this.getLocation().countryName(e.country);
  }
};
g(l, "flags", {
  AD: `${t}-ad`,
  AE: `${t}-ae`,
  AF: `${t}-af`,
  AG: `${t}-ag`,
  AI: `${t}-ai`,
  AL: `${t}-al`,
  AM: `${t}-am`,
  AN: `${t}-an`,
  AO: `${t}-ao`,
  AQ: `${t}-aq`,
  AR: `${t}-ar`,
  AS: `${t}-as`,
  AT: `${t}-at`,
  AU: `${t}-au`,
  AW: `${t}-aw`,
  AX: `${t}-ax`,
  AZ: `${t}-az`,
  BA: `${t}-ba`,
  BB: `${t}-bb`,
  BD: `${t}-bd`,
  BE: `${t}-be`,
  BF: `${t}-bf`,
  BG: `${t}-bg`,
  BH: `${t}-bh`,
  BI: `${t}-bi`,
  BJ: `${t}-bj`,
  BL: `${t}-bl`,
  BM: `${t}-bm`,
  BN: `${t}-bn`,
  BO: `${t}-bo`,
  BQ: `${t}-bq`,
  BR: `${t}-br`,
  BS: `${t}-bs`,
  BT: `${t}-bt`,
  BV: `${t}-bv`,
  BW: `${t}-bw`,
  BY: `${t}-by`,
  BZ: `${t}-bz`,
  CA: `${t}-ca`,
  CC: `${t}-cc`,
  CD: `${t}-cd`,
  CF: `${t}-cf`,
  CG: `${t}-cg`,
  CH: `${t}-ch`,
  CI: `${t}-ci`,
  CK: `${t}-ck`,
  CL: `${t}-cl`,
  CM: `${t}-cm`,
  CN: `${t}-cn`,
  CO: `${t}-co`,
  CR: `${t}-cr`,
  CU: `${t}-cu`,
  CV: `${t}-cv`,
  CW: `${t}-cw`,
  CX: `${t}-cx`,
  CY: `${t}-cy`,
  CZ: `${t}-cz`,
  DE: `${t}-de`,
  DJ: `${t}-dj`,
  DK: `${t}-dk`,
  DM: `${t}-dm`,
  DO: `${t}-do`,
  DZ: `${t}-dz`,
  EC: `${t}-ec`,
  EE: `${t}-ee`,
  EG: `${t}-eg`,
  EH: `${t}-eh`,
  ER: `${t}-er`,
  ES: `${t}-es`,
  ET: `${t}-et`,
  FI: `${t}-fi`,
  FJ: `${t}-fj`,
  FK: `${t}-fk`,
  FM: `${t}-fm`,
  FO: `${t}-fo`,
  FR: `${t}-fr`,
  GA: `${t}-ga`,
  GB: `${t}-gb`,
  GD: `${t}-gd`,
  GE: `${t}-ge`,
  GF: `${t}-gf`,
  GG: `${t}-gg`,
  GH: `${t}-gh`,
  GI: `${t}-gi`,
  GL: `${t}-gl`,
  GM: `${t}-gm`,
  GN: `${t}-gn`,
  GP: `${t}-gp`,
  GQ: `${t}-gq`,
  GR: `${t}-gr`,
  GT: `${t}-gt`,
  GU: `${t}-gu`,
  GW: `${t}-gw`,
  GY: `${t}-gy`,
  HK: `${t}-hk`,
  HM: `${t}-hm`,
  HN: `${t}-hn`,
  HR: `${t}-hr`,
  HT: `${t}-ht`,
  HU: `${t}-hu`,
  ID: `${t}-id`,
  IE: `${t}-ie`,
  IL: `${t}-il`,
  IM: `${t}-im`,
  IN: `${t}-in`,
  IO: `${t}-io`,
  IQ: `${t}-iq`,
  IR: `${t}-ir`,
  IS: `${t}-is`,
  IT: `${t}-it`,
  JE: `${t}-je`,
  JM: `${t}-jm`,
  JO: `${t}-jo`,
  JP: `${t}-jp`,
  KE: `${t}-ke`,
  KG: `${t}-kg`,
  KH: `${t}-kh`,
  KI: `${t}-ki`,
  KM: `${t}-km`,
  KN: `${t}-kn`,
  KP: `${t}-kp`,
  KR: `${t}-kr`,
  KW: `${t}-kw`,
  KY: `${t}-ky`,
  KZ: `${t}-kz`,
  LA: `${t}-la`,
  LB: `${t}-lb`,
  LC: `${t}-lc`,
  LI: `${t}-li`,
  LK: `${t}-lk`,
  LR: `${t}-lr`,
  LS: `${t}-ls`,
  LT: `${t}-lt`,
  LU: `${t}-lu`,
  LV: `${t}-lv`,
  LY: `${t}-ly`,
  MA: `${t}-ma`,
  MC: `${t}-mc`,
  MD: `${t}-md`,
  ME: `${t}-me`,
  MF: `${t}-mf`,
  MG: `${t}-mg`,
  MH: `${t}-mh`,
  MK: `${t}-mk`,
  ML: `${t}-ml`,
  MM: `${t}-mm`,
  MN: `${t}-mn`,
  MO: `${t}-mo`,
  MP: `${t}-mp`,
  MQ: `${t}-mq`,
  MR: `${t}-mr`,
  MS: `${t}-ms`,
  MT: `${t}-mt`,
  MU: `${t}-mu`,
  MV: `${t}-mv`,
  MW: `${t}-mw`,
  MX: `${t}-mx`,
  MY: `${t}-my`,
  MZ: `${t}-mz`,
  NA: `${t}-na`,
  NC: `${t}-nc`,
  NE: `${t}-ne`,
  NF: `${t}-nf`,
  NG: `${t}-ng`,
  NI: `${t}-ni`,
  NL: `${t}-nl`,
  NO: `${t}-no`,
  NP: `${t}-np`,
  NR: `${t}-nr`,
  NU: `${t}-nu`,
  NZ: `${t}-nz`,
  OM: `${t}-om`,
  PA: `${t}-pa`,
  PE: `${t}-pe`,
  PF: `${t}-pf`,
  PG: `${t}-pg`,
  PH: `${t}-ph`,
  PK: `${t}-pk`,
  PL: `${t}-pl`,
  PM: `${t}-pm`,
  PN: `${t}-pn`,
  PR: `${t}-pr`,
  PS: `${t}-ps`,
  PT: `${t}-pt`,
  PW: `${t}-pw`,
  PY: `${t}-py`,
  QA: `${t}-qa`,
  RE: `${t}-re`,
  RO: `${t}-ro`,
  RS: `${t}-rs`,
  RU: `${t}-ru`,
  RW: `${t}-rw`,
  SA: `${t}-sa`,
  SB: `${t}-sb`,
  SC: `${t}-sc`,
  SD: `${t}-sd`,
  SE: `${t}-se`,
  SG: `${t}-sg`,
  SH: `${t}-sh`,
  SI: `${t}-si`,
  SJ: `${t}-sj`,
  SK: `${t}-sk`,
  SL: `${t}-sl`,
  SM: `${t}-sm`,
  SN: `${t}-sn`,
  SO: `${t}-so`,
  SR: `${t}-sr`,
  SS: `${t}-ss`,
  ST: `${t}-st`,
  SV: `${t}-sv`,
  SX: `${t}-sx`,
  SY: `${t}-sy`,
  SZ: `${t}-sz`,
  TC: `${t}-tc`,
  TD: `${t}-td`,
  TG: `${t}-tg`,
  TH: `${t}-th`,
  TJ: `${t}-tj`,
  TK: `${t}-tk`,
  TL: `${t}-tl`,
  TM: `${t}-tm`,
  TN: `${t}-tn`,
  TO: `${t}-to`,
  TR: `${t}-tr`,
  TT: `${t}-tt`,
  TV: `${t}-tv`,
  TW: `${t}-tw`,
  TZ: `${t}-tz`,
  UA: `${t}-ua`,
  UG: `${t}-ug`,
  US: `${t}-us`,
  UY: `${t}-uy`,
  UZ: `${t}-uz`,
  VA: `${t}-va`,
  VC: `${t}-vc`,
  VE: `${t}-ve`,
  VG: `${t}-vg`,
  VI: `${t}-vi`,
  VN: `${t}-vn`,
  VU: `${t}-vu`,
  WF: `${t}-wf`,
  WS: `${t}-ws`,
  YE: `${t}-ye`,
  YT: `${t}-yt`,
  ZA: `${t}-za`,
  ZM: `${t}-zm`,
  ZW: `${t}-zw`
});
let D = l;
export {
  I as C,
  t as G,
  T as a,
  D as b,
  h as t
};
