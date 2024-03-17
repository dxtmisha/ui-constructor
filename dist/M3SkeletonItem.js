var S = Object.defineProperty;
var g = (o, e, t) => e in o ? S(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => (g(o, typeof e != "symbol" ? e + "" : e, t), t);
import { inject as f, computed as l, h as d, defineComponent as B, openBlock as I, createBlock as x, resolveDynamicComponent as V, unref as v } from "vue";
import { c as L } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { i as _ } from "./isArray-QlWcxgml.js";
import { i as y } from "./isNumber-B0xyO2hM.js";
import { r as h } from "./random-Bem8L1UP.js";
import { s as T } from "./strFill-CYHpRbDF.js";
import { t as b } from "./toNumber-eA5ODeva.js";
import { S as j } from "./Skeleton-u-yv2rzv.js";
import { S as A } from "./typesBasic-Ds2oAucF.js";
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
    const n = h(e, t), s = [];
    for (let r = 0; r < n; r++)
      s.push(T("#", h(2, 8)));
    return s.join(" ");
  }
  /**
   * Generates text for output.<br>
   * Генерирует текст для вывода.
   */
  initLabel() {
    const e = this.props.length;
    return _(e) ? this.getRandom(
      (e == null ? void 0 : e[0]) ?? 2,
      (e == null ? void 0 : e[1]) ?? 6
    ) : y(e) ? this.getRandom(
      b(e),
      b(e)
    ) : String(this.props.length) ?? "";
  }
}
const C = {
  skeleton: [Boolean]
}, M = function(o, e = "d") {
  const t = `${e}-skeleton`, n = f(
    A,
    void 0
  ), s = l(() => !!(n && n.value || o != null && o.skeleton)), r = j.getClassesList(t);
  return {
    isSkeleton: s,
    classSkeleton: l(() => ({
      [`${t}--active`]: s.value
    })),
    classesSkeleton: r,
    setup: {
      isSkeleton: s,
      classesSkeleton: r
    }
  };
};
class N {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param name design names /<br>названия дизайна
   */
  constructor(e, t = "d") {
    i(this, "item");
    i(this, "skeleton");
    i(this, "label");
    i(this, "isSkeleton");
    i(this, "classesSkeleton");
    this.item = new R(e), this.skeleton = M(e, t), this.label = l(() => this.skeleton.isSkeleton.value && this.item.getLabel() || "&nbsp;"), this.isSkeleton = this.skeleton.isSkeleton, this.classesSkeleton = this.skeleton.classesSkeleton;
  }
}
class O extends L {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, n, s) {
    super(
      t,
      n,
      s
    );
    i(this, "item");
    this.item = new N(n, this.name[0]), this.init();
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
      classesSkeleton: this.item.classesSkeleton,
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
    const t = this.item.classesSkeleton;
    return {
      main: {
        [t.classText]: this.props.text,
        [t.classBackground]: this.props.background,
        [t.classBackgroundVariant]: this.props.backgroundVariant,
        [t.classBorder]: this.props.border,
        [t.classBorderVariant]: this.props.borderVariant
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
    var a, m, u, k, p;
    const t = this.setup(), n = [], s = typeof this.props.tag == "object", r = this.props.tag ?? "div", c = {
      ...this.getAttrs(),
      ...this.props.props ?? {},
      ref: this.element,
      class: (a = t.classes) == null ? void 0 : a.value.main
    };
    return (m = this.slots) != null && m.default && n.push((k = (u = this.slots).default) == null ? void 0 : k.call(u, {})), s || (p = this.slots) != null && p.default ? d(r, c, s ? () => n : n) : d(r, {
      ...c,
      innerHTML: t.label.value
    });
  }
}
const E = {
  ...C,
  tag: [String, Object],
  props: Object,
  label: String,
  length: [String, Number, Array],
  // :prop [!] System label / Системная метка
  text: Boolean,
  background: Boolean,
  backgroundVariant: Boolean,
  border: Boolean,
  borderVariant: Boolean
}, w = {
  ...E,
  // :prop [!] System label / Системная метка
  text: Boolean,
  background: Boolean,
  backgroundVariant: Boolean,
  border: Boolean,
  borderVariant: Boolean
}, D = /* @__PURE__ */ B({
  name: "M3SkeletonItem",
  __name: "M3SkeletonItem",
  props: { ...w },
  setup(o, { expose: e, emit: t }) {
    const n = t, s = o, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-skeletonItem": !0,
        "m3-skeletonItem--text": s.text,
        "m3-skeletonItem--background": s.background,
        "m3-skeletonItem--backgroundVariant": s.backgroundVariant,
        "m3-skeletonItem--border": s.border,
        "m3-skeletonItem--borderVariant": s.borderVariant
        // :classes-values [!] System label / Системная метка
      }
    })), c = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new O(
      "m3.skeletonItem",
      s,
      {
        emits: n,
        classes: r,
        styles: c
      }
    ), m = a.render();
    return e(a.expose()), (u, k) => (I(), x(V(v(m))));
  }
}), Q = D;
export {
  Q as M3SkeletonItem
};
