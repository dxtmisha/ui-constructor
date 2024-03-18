import { h as u, defineComponent as p, computed as r, openBlock as h, createBlock as d, resolveDynamicComponent as m, unref as g } from "vue";
import { C, p as b } from "./props-DTzsiaKN.js";
import { C2Image as S } from "./C2Image.js";
import { C2Progress as f } from "./C2Progress.js";
import { C2FieldMessage as w } from "./C2FieldMessage.js";
class k extends C {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, o) {
    super(
      e,
      t,
      o
    );
  }
  /**
   * Rendering of the checkbox element.<br>
   * Рендеринг элемента checkbox.
   */
  renderSwitch() {
    const e = this.setup();
    return u("span", {
      class: e.classes.value.track
    }, [this.renderChecked()]);
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initSetup() {
    return {
      ...super.initSetup(),
      renderChecked: () => this.renderSwitch()
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      body: this.getSubClass("body"),
      item: this.getSubClass("item"),
      itemIcon: this.getSubClass("item__icon"),
      loading: this.getSubClass("loading"),
      info: this.getSubClass("info"),
      infoLabel: this.getSubClass("info__label"),
      track: this.getSubClass("track")
    };
  }
}
const B = {
  ...b,
  // :prop [!] System label / Системная метка
  required: Boolean,
  right: Boolean,
  focus: Boolean,
  disabled: Boolean
}, _ = {
  ...B,
  // :prop [!] System label / Системная метка
  required: Boolean,
  right: Boolean,
  focus: Boolean,
  disabled: Boolean
}, x = /* @__PURE__ */ p({
  name: "C2Switch",
  __name: "C2Switch",
  props: { ..._ },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(i, { expose: e, emit: t }) {
    const o = t, s = i, c = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "c2-switch": !0,
        "c2-switch--required": s.required,
        "c2-switch--right": s.right,
        "c2-switch--focus": s.focus,
        "c2-switch--disabled": s.disabled
        // :classes-values [!] System label / Системная метка
      }
    })), a = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), n = new k(
      "c2.switch",
      s,
      {
        emits: o,
        components: {
          icon: S,
          progress: f,
          message: w
        },
        classes: c,
        styles: a
      }
    ), l = n.render();
    return e(n.expose()), (y, q) => (h(), d(m(g(l))));
  }
}), L = x;
export {
  L as C2Switch
};
