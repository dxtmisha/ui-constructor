class t {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s, e = "is-skeleton") {
    this.props = s, this.className = e;
  }
  /**
   * Checks if the loading mode is enabled.<br>
   * Проверяет, включен ли режим загрузки.
   */
  isActive() {
    return !!this.props.active;
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов для текуший элемента.
   */
  getClasses() {
    return t.getClassesList(this.className);
  }
  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  static getClassesList(s) {
    return {
      classText: `${s}__text`,
      classBackground: `${s}__background`,
      classBorder: `${s}__border`
    };
  }
}
const r = "skeleton-status";
export {
  t as S,
  r as a
};
