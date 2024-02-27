import { h as l, defineComponent as m, computed as s, openBlock as d, createBlock as g, resolveDynamicComponent as S, unref as b } from "vue";
import { D as f } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { b as h, c as x } from "./useEnabled-D0wpeOWT.js";
class y extends f {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, t, n) {
    super(
      e,
      t,
      n
    ), this.init();
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
      // TODO: List of parameters for setup
      // TODO: список параметры для setup
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    };
  }
  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var e;
    return l("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (e = this.classes) == null ? void 0 : e.value.main
    });
  }
}
const i = {
  type: "text",
  autocomplete: "off"
}, v = {
  ...h,
  ...x,
  // Values
  name: String,
  value: String,
  modelValue: String,
  detail: Object,
  // Input
  type: {
    type: String,
    default: i.type
  },
  inputmode: String,
  spellcheck: Boolean,
  required: Boolean,
  pattern: String,
  match: [String, Object],
  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],
  minlength: [String, Number],
  maxlength: [String, Number],
  autofocus: Boolean,
  autocomplete: {
    type: String,
    default: i.autocomplete
  },
  input: Object,
  // Messages & Validation
  placeholder: String,
  helperMessage: String,
  validationMessage: String,
  validationCode: [String, Object],
  // On
  on: Object,
  "onUpdate:value": Function,
  "onUpdate:modelValue": Function
}, I = {
  ...v
}, B = {
  ...I
}, k = /* @__PURE__ */ m({
  name: "M3Input",
  __name: "M3Input",
  props: { ...B },
  emits: ["input", "update:value", "update:modelValue", "change"],
  setup(o, { expose: e, emit: t }) {
    const n = t, a = o, p = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "m3-input": !0
        // :classes-values [!] System label / Системная метка
      }
    })), u = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new y(
      "m3.input",
      a,
      {
        emits: n,
        classes: p,
        styles: u
      }
    ), c = r.render();
    return e(r.expose()), (O, _) => (d(), g(S(b(c))));
  }
}), N = k;
export {
  N as M3Input
};
