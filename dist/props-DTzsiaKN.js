var x = Object.defineProperty;
var y = (i, e, t) => e in i ? x(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var a = (i, e, t) => (y(i, typeof e != "symbol" ? e + "" : e, t), t);
import { shallowRef as u, watchEffect as d, computed as I, h } from "vue";
import { S as C } from "./Skeleton-u-yv2rzv.js";
import { g as B, c as M } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { i as f } from "./isArray-QlWcxgml.js";
import { i as p } from "./isFilled-ClO-1E4U.js";
import { a as v } from "./toArray-J4lAhJG7.js";
import { g as S } from "./getBind-CgHMfjrB.js";
import { u as k } from "./useInputCheck-DS0d910p.js";
import { d as E, c as V, e as w } from "./useEnabled-BTR3ciPG.js";
import { a as O } from "./props-CY0MFBQ3.js";
import { p as g } from "./FieldMessageDesign-BdZzFt32.js";
class R {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param type object for working with input type /<br>объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions /<br>
   * объект для работы с проверкой по регулярным выражениям
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n) {
    this.props = e, this.element = t, this.type = s, this.pattern = n;
  }
  /**
   * Returns the input element.<br>
   * Возвращает элемент ввода.
   */
  get() {
    const e = this.element.value;
    if (e)
      return "input" in e ? e.input : e;
  }
  /**
   * Returns the name of the input element.<br>
   * Возвращает название элемента ввода.
   */
  getName() {
    var e;
    return ((e = this.get()) == null ? void 0 : e.name) ?? "";
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var e, t, s, n, r, o, c, l, m, b;
    return {
      name: (e = this.props) == null ? void 0 : e.name,
      type: (t = this.type) == null ? void 0 : t.get(),
      required: (s = this.props) == null ? void 0 : s.required,
      pattern: (n = this.pattern) == null ? void 0 : n.get(),
      step: (r = this.props) == null ? void 0 : r.step,
      min: (o = this.props) == null ? void 0 : o.min,
      max: (c = this.props) == null ? void 0 : c.max,
      minlength: (l = this.props) == null ? void 0 : l.minlength,
      maxlength: (m = this.props) == null ? void 0 : m.maxlength,
      ...((b = this.props) == null ? void 0 : b.input) ?? {}
    };
  }
  /**
   * Search for an element by its name inside a group or by selector.<br>
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName(e) {
    var n;
    if (e instanceof Element)
      return e;
    const t = (n = this.get()) == null ? void 0 : n.form;
    if (t) {
      const r = t.querySelector(`[name="${e}"]`);
      if (r)
        return r;
    }
    const s = document.querySelector(e);
    if (s)
      return s;
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    var t;
    const e = this.element.value;
    return e && "clear" in e && ((t = e.clear) == null || t.call(e)), this;
  }
}
class q extends R {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    super(e, t);
  }
  /**
   * Returns data for verification.<br>
   * Возвращает данные для проверки.
   */
  getPattern() {
    var e, t, s;
    return {
      name: (e = this.props) == null ? void 0 : e.name,
      type: "checkbox",
      required: (t = this.props) == null ? void 0 : t.required,
      ...((s = this.props) == null ? void 0 : s.input) ?? {}
    };
  }
}
class D {
  constructor() {
    a(this, "change", !1);
  }
  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  get() {
    return this.change;
  }
  /**
   * Changes values.<br>
   * Изменяет значения.
   * @param change values for change /<br>значения для изменения
   */
  set(e) {
    return this.change = e, this;
  }
  /**
   * Transitions to editing state.<br>
   * Переходит в состояние редактирования.
   */
  toChange() {
    return this.set(!0);
  }
  /**
   * Restores the original value.<br>
   * Восстанавливает первоначальное значение.
   */
  reset() {
    return this.set(!1);
  }
}
class F {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n) {
    a(this, "value");
    a(this, "valueIs", !1);
    this.props = e, this.element = t, this.change = s, this.callback = n, this.value = this.getOriginal();
  }
  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  is() {
    var e;
    return this.valueIs || this.getBoolean() || !!((e = this.props) != null && e.placeholder);
  }
  /**
   * Returns the current value.<br>
   * Возвращает текущее значение.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the current value, converted to a string.<br>
   * Возвращает текущее значение, преобразованное в строку.
   */
  getString() {
    var t;
    const e = this.get();
    return f(e) ? e.join(", ") : v(e) ? JSON.stringify(e) : e === !0 ? "1" : e === !1 ? "0" : p(e) ? ((t = e == null ? void 0 : e.toString) == null ? void 0 : t.call(e)) ?? "" : "";
  }
  /**
   * Returns the current value, converted to a number.<br>
   * Возвращает текущее значение, преобразованное в номер.
   */
  getNumber() {
    return this.getBoolean() ? parseFloat(this.getString()) : 0;
  }
  /**
   * Returns the current value of type boolean.<br>
   * Возвращает текущее значение типа boolean.
   */
  getBoolean() {
    return p(this.get());
  }
  /**
   * Returns the original value.<br>
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    var e, t;
    return ((e = this.props) == null ? void 0 : e.value) || ((t = this.props) == null ? void 0 : t.modelValue);
  }
  /**
   * Returns the length of the entered value.<br>
   * Возвращает длину введенного значения.
   */
  getLength() {
    const e = this.get();
    return f(e) ? e.length : v(e) ? Object.keys(e).length : this.getString().length ?? 0;
  }
  /**
   * Changes the value.<br>
   * Изменяет значение.
   * @param value changeable value /<br>изменяемое значение
   */
  set(e) {
    return this.value !== e && (this.value = e, this.change.set(!0), this.callback()), this;
  }
  setByEvent(e) {
    switch (typeof e) {
      case "object":
        e && ("value" in e ? this.set(e.value) : "target" in e && this.setByTarget(e.target), "valueIs" in e && (this.valueIs = e.valueIs));
        break;
      default:
        this.set(e);
        break;
    }
    return this;
  }
  /**
   * Changes the values by the selected element.<br>
   * Изменяет значения по выбранному элементу.
   * @param target selected elements /<br>выбранные элементы
   */
  setByTarget(e) {
    const t = this.isCheckbox(e) ? e.checked : e.value;
    return this.set(t);
  }
  /**
   * Changes the value by the checked property.<br>
   * Изменяет значение по свойству checked.
   * @param event event value /<br>значение события
   */
  setByChecked(e) {
    const t = e.target;
    return this.set(t.checked);
  }
  /**
   * Changes the value for radio type.<br>
   * Изменяет значение для типа radio.
   * @param event event object /<br>объект события
   */
  setByRadio(e) {
    const t = e.target, s = t.checked ? t.value : "";
    return this.set(s);
  }
  /**
   * Changes the values to the original ones.<br>
   * Изменяет значения на оригинальные.
   */
  update() {
    return this.set(this.getOriginal());
  }
  /**
   * Clear all values to the original ones.<br>
   * Очисти все значения до оригинальных.
   */
  clear() {
    return this.set(""), this.element.clear(), this.valueIs = !1, this;
  }
  /**
   * Is the selected type a checkbox.<br>
   * Является ли выбранный тип чекбокс.
   * @param target selected elements /<br>выбранные элементы
   */
  isCheckbox(e) {
    return e.type === "checkbox";
  }
}
class P {
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t) {
    this.props = e, this.value = t;
  }
  /**
   * Returns data for the icon.<br>
   * Возвращает данные для иконки.
   */
  get() {
    var t;
    const e = this.getIcon();
    return S(
      ((t = this.props) == null ? void 0 : t.icon) ?? e,
      {
        value: e
      }
    );
  }
  /**
   * Returns the name of the icon.<br>
   * Возвращает название иконки.
   */
  getIcon() {
    var e, t, s;
    if (this.value.getBoolean())
      return (e = this.props) != null && e.indeterminate ? (t = this.props) == null ? void 0 : t.iconIndeterminate : (s = this.props) == null ? void 0 : s.iconCheckbox;
  }
}
class L {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.props = e;
  }
  /**
   * Returning error text.<br>
   * Возвращают текст ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  get(e) {
    var s;
    const t = (s = this.props) == null ? void 0 : s.validationCode;
    if (t && !e.valid) {
      if (typeof t == "string")
        return t;
      {
        const n = this.getIndex(e);
        if (n && n in t)
          return t[n];
      }
    }
  }
  /**
   * Returns error index.<br>
   * Возвращает индекс ошибки.
   * @param state object for obtaining error information /<br>объект для получения информации об ошибке
   */
  getIndex(e) {
    for (const t in e)
      if (t !== "valid" && e[t])
        return t;
  }
}
class j {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n, r, o, c) {
    a(this, "item");
    a(this, "validation");
    a(this, "cache");
    a(this, "cacheValue");
    this.props = e, this.element = t, this.change = s, this.value = n, this.code = r, this.match = o, this.callback = c, this.item = k(this.element.getPattern());
  }
  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isError() {
    var e;
    return !((e = this.get()) != null && e.status);
  }
  /**
   * Checks whether the element has any constraints and whether it meets them.<br>
   * Проверяет, имеет ли элемент какие-либо ограничения и удовлетворяет ли он им.
   */
  checkValidity() {
    var t;
    const e = !this.isError();
    return (t = this.callback) == null || t.call(this), e;
  }
  /**
   * Returns error data.<br>
   * Возвращает данные об ошибке.
   */
  get() {
    var e;
    return (this.cacheValue !== this.value.get() || this.cache === void 0) && (this.cacheValue = this.value.get(), this.cache = this.checkGlobal() ?? this.checkItem() ?? ((e = this.match) == null ? void 0 : e.check())), !this.change.get() || !this.cache ? {
      value: void 0
    } : this.cache;
  }
  /**
   * Returns error string.<br>
   * Возвращает строку об ошибке.
   */
  getMessage() {
    var e;
    return ((e = this.get()) == null ? void 0 : e.validationMessage) ?? "";
  }
  /**
   * Changes the validity data.<br>
   * Изменяет данные о валидности.
   * @param validation values for validity /<br>значения для валидности
   */
  set(e) {
    return "status" in e && "validationMessage" in e && "value" in e ? this.validation = {
      status: e.status,
      required: e == null ? void 0 : e.required,
      input: e == null ? void 0 : e.input,
      validationMessage: e.validationMessage,
      validity: e == null ? void 0 : e.validity,
      pattern: e == null ? void 0 : e.pattern,
      value: e.value
    } : this.validation = void 0, this;
  }
  /**
   * Updating data for input.<br>
   * Обновление данных для input.
   */
  update() {
    return this.item = k(this.element.getPattern()), this;
  }
  /**
   * Check for global data.<br>
   * Проверка для глобальных данных.
   */
  checkGlobal() {
    var e;
    return (e = this.props) != null && e.validationMessage ? {
      status: !1,
      validationMessage: this.props.validationMessage,
      value: this.value.get()
    } : this.validation ?? void 0;
  }
  /**
   * Check for selected data.<br>
   * Проверка для выбранных данных.
   */
  checkItem() {
    const e = this.item.check(this.value.get());
    if (!(e != null && e.status))
      return e;
  }
}
class A {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param validation object for working with validity /<br>объект для работы с валидностью
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s, n, r) {
    this.props = e, this.change = t, this.value = s, this.validation = n, this.callbackEmit = r;
  }
  /**
   * Call of data change event.<br>
   * Вызов события изменения данных.
   * @param event event object /<br>объект события
   */
  onInput(e) {
    this.isEnabled() && (this.validation.set(e), this.value.setByEvent(e), this.on(e));
  }
  /**
   * Triggering the change event after losing focus.<br>
   * Вызов события изменения после потери фокуса.
   * @param event event object /<br>объект события
   */
  onChange(e) {
    this.isEnabled() && this.on(e, "change");
  }
  /**
   * Triggering the event for select change.<br>
   * Вызов события для изменения селект.
   * @param event event object /<br>объект события
   */
  onSelect(e) {
    this.isEnabled() && (this.value.setByEvent(e), this.on(e).onChange(e));
  }
  /**
   * Triggering the event for changes in the checkbox.<br>
   * Вызов события для изменения в checkbox.
   * @param event event object /<br>объект события
   */
  onChecked(e) {
    this.isEnabled() && (this.value.setByChecked(e), this.on(e).onChange(e));
  }
  /**
   * Triggering the event for changes in the radio.<br>
   * Вызов события для изменения в radio.
   * @param event event object /<br>объект события
   */
  onRadio(e) {
    this.isEnabled() && (this.value.setByRadio(e), this.on(e).onChange(e));
  }
  /**
   * Triggering the event to delete all values.<br>
   * Вызов события для удаления всех значений.
   * @param event event object /<br>объект события
   */
  onClear(e) {
    this.isEnabled() && (this.value.clear(), this.on(e).onChange(e));
  }
  /**
   * Triggering the event.<br>
   * Вызов события.
   * @param event event object /<br>объект события
   * @param type event type /<br>тип события
   */
  on(e, t = "input") {
    if (this.callbackEmit(t, e, {
      ...this.getValidation(t),
      ...this.getData()
    }), t === "input") {
      const s = this.value.get();
      this.callbackEmit("update:value", s, { value: s }), this.callbackEmit("update:modelValue", s, { value: s });
    }
    return this;
  }
  /**
   * Checks whether additional data needs to be generated for the current event.<br>
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type /<br>тип события
   */
  isValue(e) {
    return !!(e && ["input", "change"].indexOf(e) >= 0);
  }
  /**
   * Checks if it is possible to change the value.<br>
   * Проверяет, возможно ли изменение значения.
   */
  isEnabled() {
    var e;
    return ((e = this.props) == null ? void 0 : e.disabled) !== !0;
  }
  /**
   * Returns input data.<br>
   * Возвращает данные об вводе.
   */
  getData() {
    return {
      value: this.value.get(),
      detail: this.props.detail
    };
  }
  /**
   * Returns validity data.<br>
   * Возвращает данные валидности.
   * @param type event type /<br>тип события
   */
  getValidation(e) {
    return this.isValue(e) ? this.validation.get() : {};
  }
}
class H {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callback callback function /<br>функция обратного вызова
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  constructor(e, t, s, n) {
    a(this, "element");
    a(this, "change");
    a(this, "value");
    a(this, "icon");
    a(this, "code");
    a(this, "validation");
    a(this, "event");
    this.element = new q(
      e,
      t
    ), this.change = new D(), this.value = new F(
      e,
      this.element,
      this.change,
      s
    ), this.icon = new P(
      e,
      this.value
    ), this.code = new L(e), this.validation = new j(
      e,
      this.element,
      this.change,
      this.value,
      this.code,
      void 0,
      s
    ), this.event = new A(
      e,
      this.change,
      this.value,
      this.validation,
      n
    );
  }
  /**
   * Value update.<br>
   * Обновление значения.
   */
  update() {
    return this.value.update(), this;
  }
}
class N {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element input element /<br>элемент ввода
   * @param callbackEmit the function is called when an event is triggered /<br>функция вызывается, когда срабатывает событие
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e, t, s) {
    a(this, "checkbox");
    a(this, "value", u(!1));
    a(this, "iconBind", u({}));
    a(this, "checkValidity");
    a(this, "validationMessage", u(""));
    a(this, "onInput", (e) => {
      switch (e.target.type) {
        case "checkbox":
          this.checkbox.event.onChecked(e);
          break;
        case "radio":
          this.checkbox.event.onRadio(e);
          break;
      }
    });
    this.checkbox = new H(
      e,
      t,
      () => {
        this.update();
      },
      s
    ), this.checkValidity = () => this.checkbox.validation.checkValidity(), d(() => this.checkbox.value.update()), d(() => this.checkbox.validation.update()), d(() => this.update());
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    return this.value.value = this.checkbox.value.getBoolean(), this.iconBind.value = this.checkbox.icon.get(), this.validationMessage.value = this.checkbox.validation.getMessage(), this;
  }
}
const _ = {
  disabled: g.disabled,
  helperMessage: g.helperMessage,
  validationMessage: g.validationMessage
}, T = function(i, e, t) {
  const s = I(() => ({
    disabled: i == null ? void 0 : i.disabled,
    counter: i == null ? void 0 : i.counter,
    maxlength: i == null ? void 0 : i.maxlength,
    helperMessage: i == null ? void 0 : i.helperMessage,
    validationMessage: p(i == null ? void 0 : i.validationMessage) ? i.validationMessage : B(t)
  }));
  return {
    messageBind: s,
    renderFieldMessage() {
      const n = [];
      return e && e.renderAdd(
        n,
        "message",
        s.value
      ), n;
    }
  };
};
class te extends M {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, s, n) {
    super(
      t,
      s,
      n
    );
    a(this, "checkbox");
    a(this, "classesSkeleton");
    a(this, "type", "checkbox");
    this.checkbox = new N(
      s,
      this.element,
      (r, o, c) => {
        var l;
        (l = this.emits) == null || l.call(
          this,
          r,
          o,
          c
        );
      }
    ), this.classesSkeleton = C.getClassesListByDesign(this.name[0]), this.init();
  }
  /**
   * Rendering of the main input.<br>
   * Рендеринг главного input.
   */
  renderInput() {
    var s;
    const t = this.setup();
    return h("input", {
      class: t.classes.value.input,
      name: this.props.name,
      type: this.type,
      checked: t.value.value,
      readonly: this.props.readonly,
      disabled: t.isDisabled.value,
      value: ((s = this.props) == null ? void 0 : s.valueVariant) ?? "1",
      on: this.props.on,
      onInput: t.onInput
    });
  }
  /**
   * Rendering of the hidden input.<br>
   * Рендеринг скрытого input.
   */
  renderInputHidden() {
    return h("input", {
      name: this.props.name,
      type: "hidden",
      value: "0"
    });
  }
  /**
   * Rendering of the main body.<br>
   * Рендеринг главного body.
   */
  renderBody() {
    const t = this.setup(), s = [t.renderChecked()];
    return t.isLabel.value && s.push(t.renderInfo()), h("span", {
      class: t.classes.value.body
    }, s);
  }
  /**
   * Rendering of the checkbox element.<br>
   * Рендеринг элемента checkbox.
   */
  renderChecked() {
    const t = this.setup(), s = [
      t.renderProgress(),
      h("span", {
        class: [
          t.classes.value.itemIcon,
          t.classesSkeleton.classBackgroundVariant
        ]
      }, [
        this.components.renderOne(
          "icon",
          t.iconBind.value
        )
      ])
    ];
    return this.components.renderAdd(
      s,
      "ripple",
      {
        disabled: t.isDisabled.value
      }
    ), h("span", {
      class: t.classes.value.item
    }, s);
  }
  /**
   * Rendering of the informational text element.<br>
   * Рендеринг элемента информационного текста.
   */
  renderInfo() {
    const t = this.setup(), s = [
      ...t.renderLabel(),
      ...t.renderFieldMessage()
    ];
    return h("span", {
      class: t.classes.value.info
    }, s);
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
      value: this.checkbox.value,
      iconBind: this.checkbox.iconBind,
      checkValidity: this.checkbox.checkValidity,
      validationMessage: this.checkbox.validationMessage,
      renderInput: () => this.renderInput(),
      renderInputHidden: () => this.renderInputHidden(),
      renderBody: () => this.renderBody(),
      renderChecked: () => this.renderChecked(),
      renderInfo: () => this.renderInfo(),
      onInput: this.checkbox.onInput,
      ...E(
        this.props,
        this.slots,
        [
          this.getSubClass(["info", "label"]),
          this.classesSkeleton.classText
        ]
      ),
      ...V(this.props),
      ...w(
        this.props,
        this.components,
        this.getSubClass("loading"),
        {
          circular: !0,
          inverse: !0,
          dense: !0
        }
      ),
      ...T(
        this.props,
        this.components,
        this.checkbox.validationMessage
      ),
      classesSkeleton: this.classesSkeleton
    };
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    const t = this.setup();
    return {
      value: t.value,
      checkValidity: t.checkValidity,
      validationMessage: t.validationMessage
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
      infoLabel: this.getSubClass("info__label")
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
    const t = this.setup(), s = [
      t.renderInputHidden(),
      t.renderInput(),
      t.renderBody()
    ];
    return h("label", {
      ...this.getAttrs(),
      ref: this.element,
      class: t.classes.value.main
    }, s);
  }
}
const se = {}, ie = {
  ...O,
  ..._,
  // Values
  value: Boolean,
  modelValue: Boolean,
  icon: [String, Object],
  indeterminate: Boolean,
  // Styles
  iconCheckbox: String,
  iconIndeterminate: String,
  // :prop [!] System label / Системная метка
  required: Boolean,
  right: Boolean,
  focus: Boolean,
  disabled: Boolean
};
export {
  te as C,
  se as d,
  ie as p
};
