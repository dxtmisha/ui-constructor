var m = Object.defineProperty;
var u = (s, t, a) => t in s ? m(s, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[t] = a;
var r = (s, t, a) => (u(s, typeof t != "symbol" ? t + "" : t, a), a);
import { f as o } from "./toArray-J4lAhJG7.js";
import { G as c } from "./Geo-DALuw2l2.js";
import { G as M } from "./GeoIntl-CUd2jzS4.js";
const $ = "@flag", e = class e {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = c.getLocation()) {
    this.code = t;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(t = this.code) {
    var n;
    const a = c.find(t);
    if (a) {
      const g = this.getCountry(a);
      return {
        language: this.getLanguage(a),
        country: g,
        standard: a.standard,
        icon: (n = e.flags) == null ? void 0 : n[a.country],
        label: g,
        value: a.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code) {
    var a;
    return (a = this.get(t)) == null ? void 0 : a.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return o(this.getCodes(t), (a) => this.get(a));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return o(this.getList(t), (a) => {
      const n = new e(a.language).get(a.standard);
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
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new M(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(t) {
    return t ?? Object.keys(e.flags);
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
r(e, "flags", {
  AD: `${$}-ad`,
  AE: `${$}-ae`,
  AF: `${$}-af`,
  AG: `${$}-ag`,
  AI: `${$}-ai`,
  AL: `${$}-al`,
  AM: `${$}-am`,
  AN: `${$}-an`,
  AO: `${$}-ao`,
  AQ: `${$}-aq`,
  AR: `${$}-ar`,
  AS: `${$}-as`,
  AT: `${$}-at`,
  AU: `${$}-au`,
  AW: `${$}-aw`,
  AX: `${$}-ax`,
  AZ: `${$}-az`,
  BA: `${$}-ba`,
  BB: `${$}-bb`,
  BD: `${$}-bd`,
  BE: `${$}-be`,
  BF: `${$}-bf`,
  BG: `${$}-bg`,
  BH: `${$}-bh`,
  BI: `${$}-bi`,
  BJ: `${$}-bj`,
  BL: `${$}-bl`,
  BM: `${$}-bm`,
  BN: `${$}-bn`,
  BO: `${$}-bo`,
  BQ: `${$}-bq`,
  BR: `${$}-br`,
  BS: `${$}-bs`,
  BT: `${$}-bt`,
  BV: `${$}-bv`,
  BW: `${$}-bw`,
  BY: `${$}-by`,
  BZ: `${$}-bz`,
  CA: `${$}-ca`,
  CC: `${$}-cc`,
  CD: `${$}-cd`,
  CF: `${$}-cf`,
  CG: `${$}-cg`,
  CH: `${$}-ch`,
  CI: `${$}-ci`,
  CK: `${$}-ck`,
  CL: `${$}-cl`,
  CM: `${$}-cm`,
  CN: `${$}-cn`,
  CO: `${$}-co`,
  CR: `${$}-cr`,
  CU: `${$}-cu`,
  CV: `${$}-cv`,
  CW: `${$}-cw`,
  CX: `${$}-cx`,
  CY: `${$}-cy`,
  CZ: `${$}-cz`,
  DE: `${$}-de`,
  DJ: `${$}-dj`,
  DK: `${$}-dk`,
  DM: `${$}-dm`,
  DO: `${$}-do`,
  DZ: `${$}-dz`,
  EC: `${$}-ec`,
  EE: `${$}-ee`,
  EG: `${$}-eg`,
  EH: `${$}-eh`,
  ER: `${$}-er`,
  ES: `${$}-es`,
  ET: `${$}-et`,
  FI: `${$}-fi`,
  FJ: `${$}-fj`,
  FK: `${$}-fk`,
  FM: `${$}-fm`,
  FO: `${$}-fo`,
  FR: `${$}-fr`,
  GA: `${$}-ga`,
  GB: `${$}-gb`,
  GD: `${$}-gd`,
  GE: `${$}-ge`,
  GF: `${$}-gf`,
  GG: `${$}-gg`,
  GH: `${$}-gh`,
  GI: `${$}-gi`,
  GL: `${$}-gl`,
  GM: `${$}-gm`,
  GN: `${$}-gn`,
  GP: `${$}-gp`,
  GQ: `${$}-gq`,
  GR: `${$}-gr`,
  GT: `${$}-gt`,
  GU: `${$}-gu`,
  GW: `${$}-gw`,
  GY: `${$}-gy`,
  HK: `${$}-hk`,
  HM: `${$}-hm`,
  HN: `${$}-hn`,
  HR: `${$}-hr`,
  HT: `${$}-ht`,
  HU: `${$}-hu`,
  ID: `${$}-id`,
  IE: `${$}-ie`,
  IL: `${$}-il`,
  IM: `${$}-im`,
  IN: `${$}-in`,
  IO: `${$}-io`,
  IQ: `${$}-iq`,
  IR: `${$}-ir`,
  IS: `${$}-is`,
  IT: `${$}-it`,
  JE: `${$}-je`,
  JM: `${$}-jm`,
  JO: `${$}-jo`,
  JP: `${$}-jp`,
  KE: `${$}-ke`,
  KG: `${$}-kg`,
  KH: `${$}-kh`,
  KI: `${$}-ki`,
  KM: `${$}-km`,
  KN: `${$}-kn`,
  KP: `${$}-kp`,
  KR: `${$}-kr`,
  KW: `${$}-kw`,
  KY: `${$}-ky`,
  KZ: `${$}-kz`,
  LA: `${$}-la`,
  LB: `${$}-lb`,
  LC: `${$}-lc`,
  LI: `${$}-li`,
  LK: `${$}-lk`,
  LR: `${$}-lr`,
  LS: `${$}-ls`,
  LT: `${$}-lt`,
  LU: `${$}-lu`,
  LV: `${$}-lv`,
  LY: `${$}-ly`,
  MA: `${$}-ma`,
  MC: `${$}-mc`,
  MD: `${$}-md`,
  ME: `${$}-me`,
  MF: `${$}-mf`,
  MG: `${$}-mg`,
  MH: `${$}-mh`,
  MK: `${$}-mk`,
  ML: `${$}-ml`,
  MM: `${$}-mm`,
  MN: `${$}-mn`,
  MO: `${$}-mo`,
  MP: `${$}-mp`,
  MQ: `${$}-mq`,
  MR: `${$}-mr`,
  MS: `${$}-ms`,
  MT: `${$}-mt`,
  MU: `${$}-mu`,
  MV: `${$}-mv`,
  MW: `${$}-mw`,
  MX: `${$}-mx`,
  MY: `${$}-my`,
  MZ: `${$}-mz`,
  NA: `${$}-na`,
  NC: `${$}-nc`,
  NE: `${$}-ne`,
  NF: `${$}-nf`,
  NG: `${$}-ng`,
  NI: `${$}-ni`,
  NL: `${$}-nl`,
  NO: `${$}-no`,
  NP: `${$}-np`,
  NR: `${$}-nr`,
  NU: `${$}-nu`,
  NZ: `${$}-nz`,
  OM: `${$}-om`,
  PA: `${$}-pa`,
  PE: `${$}-pe`,
  PF: `${$}-pf`,
  PG: `${$}-pg`,
  PH: `${$}-ph`,
  PK: `${$}-pk`,
  PL: `${$}-pl`,
  PM: `${$}-pm`,
  PN: `${$}-pn`,
  PR: `${$}-pr`,
  PS: `${$}-ps`,
  PT: `${$}-pt`,
  PW: `${$}-pw`,
  PY: `${$}-py`,
  QA: `${$}-qa`,
  RE: `${$}-re`,
  RO: `${$}-ro`,
  RS: `${$}-rs`,
  RU: `${$}-ru`,
  RW: `${$}-rw`,
  SA: `${$}-sa`,
  SB: `${$}-sb`,
  SC: `${$}-sc`,
  SD: `${$}-sd`,
  SE: `${$}-se`,
  SG: `${$}-sg`,
  SH: `${$}-sh`,
  SI: `${$}-si`,
  SJ: `${$}-sj`,
  SK: `${$}-sk`,
  SL: `${$}-sl`,
  SM: `${$}-sm`,
  SN: `${$}-sn`,
  SO: `${$}-so`,
  SR: `${$}-sr`,
  SS: `${$}-ss`,
  ST: `${$}-st`,
  SV: `${$}-sv`,
  SX: `${$}-sx`,
  SY: `${$}-sy`,
  SZ: `${$}-sz`,
  TC: `${$}-tc`,
  TD: `${$}-td`,
  TG: `${$}-tg`,
  TH: `${$}-th`,
  TJ: `${$}-tj`,
  TK: `${$}-tk`,
  TL: `${$}-tl`,
  TM: `${$}-tm`,
  TN: `${$}-tn`,
  TO: `${$}-to`,
  TR: `${$}-tr`,
  TT: `${$}-tt`,
  TV: `${$}-tv`,
  TW: `${$}-tw`,
  TZ: `${$}-tz`,
  UA: `${$}-ua`,
  UG: `${$}-ug`,
  US: `${$}-us`,
  UY: `${$}-uy`,
  UZ: `${$}-uz`,
  VA: `${$}-va`,
  VC: `${$}-vc`,
  VE: `${$}-ve`,
  VG: `${$}-vg`,
  VI: `${$}-vi`,
  VN: `${$}-vn`,
  VU: `${$}-vu`,
  WF: `${$}-wf`,
  WS: `${$}-ws`,
  YE: `${$}-ye`,
  YT: `${$}-yt`,
  ZA: `${$}-za`,
  ZM: `${$}-zm`,
  ZW: `${$}-zw`
});
let i = e;
export {
  $ as G,
  i as a
};
