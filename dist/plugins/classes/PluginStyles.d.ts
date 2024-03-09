/**
 * Class for transforming into non-standard style properties.<br>
 * Класс для преобразования в нестандартные свойства стилей.
 */
export declare class PluginStyles {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly design: string;
    /**
     * Constructor
     * @param id file identification /<br>идентификация файла
     * @param code file content /<br>содержимое файла
     * @param design design names /<br>названия дизайна
     */
    constructor(id: string, code: string, design?: string);
    /**
     * Initialization of the transformation of all style properties.<br>
     * Инициализация преобразования всех свойств стилей.
     */
    init(): string;
    /**
     * Checks whether this file needs to be transformed.<br>
     * Проверяет, нужно ли преобразовывать этот файл.
     */
    protected is(): boolean;
    /**
     * Connects a list of tokens to work with values.<br>
     * Подключает список токенов для работы со значениями.
     * @param code file content /<br>содержимое файла
     */
    protected importDesign(code: string): string;
    /**
     * Removes default values from colors.<br>
     * Удаляет значения по умолчанию у цветов.
     * @param code file content /<br>содержимое файла
     */
    protected initColors(code: string): string;
    /**
     * Transforms property values under the correct name.<br>
     * Преобразовывает значения свойств под правильным именем.
     * @param code file content /<br>содержимое файла
     */
    protected initVars(code: string): string;
    /**
     * Transformation of all properties into non-standard ones used through mixins.<br>
     * Преобразование всех свойств в нестандартные, используемые через миксины.
     * @param code file content /<br>содержимое файла
     */
    protected initProperties(code: string): string;
}
