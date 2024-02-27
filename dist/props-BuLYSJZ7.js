var b = Object.defineProperty;
var g = (i, t, e) => t in i ? b(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var m = (i, t, e) => (g(i, typeof t != "symbol" ? t + "" : t, e), e);
import { shallowRef as p, resolveComponent as I, computed as v, h as c, Teleport as C } from "vue";
import { f as E } from "./forEach-B1ZDH1yu.js";
import { D as N, i as S } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { b as w, c as M, a as y } from "./MutationDataItem-B-G3m4Oh.js";
class G {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element instance of the element itself /<br>экземпляр самого элемента
   */
  constructor(t, e) {
    m(this, "mainElement", document.body);
    m(this, "componentName", "div");
    m(this, "componentItem", p());
    m(this, "binds", p({}));
    m(this, "slots", p({}));
    var n;
    this.props = t, t.item && (this.mainElement = t.item.getElement(), this.componentName = t.item.getComponentName(), t.item.registration(e, () => this.update()), this.initComponentItem().then((s) => {
      this.componentItem.value = s;
    })), (n = t.item) == null || n.setStatus(w.end), this.update();
  }
  /**
   * Data update.<br>
   * Обновление данных.
   */
  update() {
    var e, n;
    const t = (e = this.props.item) == null ? void 0 : e.getSlots();
    return this.binds.value = { ...((n = this.props.item) == null ? void 0 : n.getProps()) ?? {} }, this.slots.value = t ? { ...t } : void 0, this;
  }
  /**
   * Returns a global object.<br>
   * Возвращает глобальный объект.
   */
  getComponentGlobalItem() {
    var t;
    return (t = M.getComponentGlobalItem(this.componentName)) == null ? void 0 : t.item;
  }
  /**
   * Initializes data for the component.<br>
   * Инициализирует данные для компонента.
   */
  async initComponentItem() {
    return new Promise((t) => {
      var n;
      const e = this.getComponentGlobalItem();
      if (e)
        t(e);
      else if ((n = this.props.item) != null && n.isLink()) {
        let s = 24;
        const r = setInterval(() => {
          if (s-- > 0) {
            const l = this.getComponentGlobalItem();
            l && (clearInterval(r), t(l));
          } else
            clearInterval(r), t(I(this.componentName));
        }, 64);
      } else
        t(I(this.componentName));
    });
  }
}
class O extends N {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(e, n, s) {
    super(
      e,
      n,
      s
    );
    m(this, "mutation");
    this.mutation = new G(n, this.element), this.init();
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
      mainElement: this.mutation.mainElement,
      componentName: this.mutation.componentName,
      componentItem: this.mutation.componentItem,
      binds: this.mutation.binds,
      slots: this.mutation.slots,
      renderSlots: v(() => this.renderSlots())
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
    return {
      main: {}
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
    var n;
    const e = this.setup();
    if (e.componentItem.value)
      return c(C, {
        ref: this.element,
        class: (n = this.classes) == null ? void 0 : n.value.main,
        to: e.mainElement
      }, [
        c(
          e.componentItem.value,
          e.binds.value,
          e.renderSlots.value
        )
      ]);
  }
  /**
   * Rendering data for the slot.<br>
   * Рендеринг данных для слота.
   */
  renderSlots() {
    const e = this.setup(), n = {}, s = e.slots.value;
    return s && E(s, (r, l) => {
      const a = [];
      let h = !1;
      r.forEach((o) => {
        typeof o == "string" ? a.push(o) : a.push(c(
          o.tag,
          { ...o.attributes }
        ));
      }), n[l] = (o) => {
        var d, f;
        if (!h && o) {
          const u = a == null ? void 0 : a[0];
          u && "UI" in window && S(u) && ((d = u.props) != null && d["data-ui"]) && (window.UI.comp(
            (f = u.props) == null ? void 0 : f.id,
            o
          ), h = !0);
        }
        return a;
      };
    }), n;
  }
}
const P = {
  item: y
};
export {
  O as M,
  P as p
};
