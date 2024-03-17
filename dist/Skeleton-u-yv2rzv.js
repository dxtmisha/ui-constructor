class t {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(s, r = "is-skeleton") {
    this.props = s, this.className = r;
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
   * @param className class name /<br>название класса
   */
  static getClassesList(s) {
    return {
      classText: `${s}__text`,
      classBackground: `${s}__background`,
      classBackgroundVariant: `${s}__backgroundVariant`,
      classBorder: `${s}__border`,
      classBorderVariant: `${s}__borderVariant`
    };
  }
  /**
   * Returns a list of available classes by design name.<br>
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name /<br>названия дизайна
   */
  static getClassesListByDesign(s) {
    return this.getClassesList(`${s}-skeleton`);
  }
}
export {
  t as S
};
