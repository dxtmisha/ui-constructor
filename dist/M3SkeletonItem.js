var S = Object.defineProperty;
var f = (n, e, t) => e in n ? S(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => (f(n, typeof e != "symbol" ? e + "" : e, t), t);
import { inject as g, computed as a, h, defineComponent as I, openBlock as L, createBlock as x, resolveDynamicComponent as B, unref as _ } from "vue";
import { c as v } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { i as y } from "./isArray-QlWcxgml.js";
import { i as T } from "./isNumber-B0xyO2hM.js";
import { r as b } from "./random-Bem8L1UP.js";
import { s as j } from "./strFill-CYHpRbDF.js";
import { t as d } from "./toNumber-eA5ODeva.js";
import { a as A, S as N } from "./typesBasic-gH1C25pW.js";
class R {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.props = e;
  }
  /**
   * Returns the text.<br>
   * Возвращает текст.
   */
  getLabel() {
    return this.props.label ? this.props.label : this.initLabel();
  }
  /**
   * Generates text.<br>
   * Генерирует текст.
   * @param min minimum word /<br>минимальное слово
   * @param max maximum word /<br>максимальное слово
   */
  getRandom(e, t) {
    const s = b(e, t), o = [];
    for (let r = 0; r < s; r++)
      o.push(j("#", b(2, 8)));
    return o.join(" ");
  }
  /**
   * Generates text for output.<br>
   * Генерирует текст для вывода.
   */
  initLabel() {
    const e = this.props.length;
    return y(e) ? this.getRandom(
      (e == null ? void 0 : e[0]) ?? 2,
      (e == null ? void 0 : e[1]) ?? 6
    ) : T(e) ? this.getRandom(
      d(e),
      d(e)
    ) : String(this.props.length) ?? "";
  }
}
const C = {
  skeleton: [Boolean]
}, M = function(n, e = "d", t = "is-skeleton") {
  const s = g(A), o = a(() => !!(s && s.value || n != null && n.skeleton));
  return {
    isSkeleton: o,
    classSkeleton: a(() => ({
      [`${t}--skeleton`]: o.value
    })),
    classesList: N.getClassesList(`${e}-skeleton`)
  };
};
class O {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param name design names /<br>названия дизайна
   * @param className class name /<br>название класса
   */
  constructor(e, t = "d", s = "is-skeleton") {
    i(this, "item");
    i(this, "skeleton");
    i(this, "label");
    i(this, "isSkeleton");
    i(this, "classesList");
    this.item = new R(e), this.skeleton = M(e, t, s), this.label = a(() => this.skeleton.isSkeleton.value && this.item.getLabel() || "&nbsp;"), this.isSkeleton = this.skeleton.isSkeleton, this.classesList = this.skeleton.classesList;
  }
}
class E extends v {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, s, o) {
    super(
      t,
      s,
      o
    );
    i(this, "item");
    this.item = new O(s, this.name[0], this.getName()), this.init();
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
      isSkeleton: this.item.isSkeleton,
      label: this.item.label
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
    const t = this.item.classesList;
    return {
      main: {
        [t.classText]: this.props.text,
        [t.classBackground]: this.props.background,
        [t.classBorder]: this.props.border
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
    var l, m, u, p, k;
    const t = this.setup(), s = [], o = typeof this.props.tag == "object", r = this.props.tag ?? "div", c = {
      ...this.getAttrs(),
      ...this.props.props ?? {},
      ref: this.element,
      class: (l = t.classes) == null ? void 0 : l.value.main
    };
    return (m = this.slots) != null && m.default && s.push((p = (u = this.slots).default) == null ? void 0 : p.call(u, {})), o || (k = this.slots) != null && k.default ? h(r, c, o ? () => s : s) : h(r, {
      ...c,
      innerHTML: t.label.value
    });
  }
}
const w = {
  ...C,
  tag: [String, Object],
  props: Object,
  label: String,
  length: [String, Number, Array],
  // :prop [!] System label / Системная метка
  text: Boolean,
  background: Boolean,
  border: Boolean
}, D = {
  ...w,
  // :prop [!] System label / Системная метка
  text: Boolean,
  background: Boolean,
  border: Boolean
}, $ = /* @__PURE__ */ I({
  name: "M3SkeletonItem",
  __name: "M3SkeletonItem",
  props: { ...D },
  setup(n, { expose: e, emit: t }) {
    const s = t, o = n, r = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-skeletonItem": !0,
        "m3-skeletonItem--text": o.text,
        "m3-skeletonItem--background": o.background,
        "m3-skeletonItem--border": o.border
        // :classes-values [!] System label / Системная метка
      }
    })), c = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new E(
      "m3.skeletonItem",
      o,
      {
        emits: s,
        classes: r,
        styles: c
      }
    ), m = l.render();
    return e(l.expose()), (u, p) => (L(), x(B(_(m))));
  }
}), Q = $;
export {
  Q as M3SkeletonItem
};
