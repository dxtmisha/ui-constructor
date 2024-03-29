import { type ApiResponse } from '../Api';
import { type MutationComponent, type MutationComponentCache, type MutationComponentCallback, type MutationComponentProps, type MutationProject, type MutationProjectItem } from '../../types/mutation';
/**
 * Class for working with global variables.<br>
 * Класс для работы с глобальными переменными.
 */
export declare class MutationGlobal {
    static readonly functions: Record<string, any>;
    static readonly classes: Record<string, any>;
    static readonly components: Record<string, any>;
    protected static readonly compItems: MutationComponent;
    protected static readonly compCaching: MutationComponentCache;
    /**
     * Checks if a function is in the list by its name.<br>
     * Проверяет, есть ли функция в списке по ее имени.
     * @param name function name /<br>название функции
     */
    static isFunction(name: string): boolean;
    /**
     * Checks if a class is in the list by its name.<br>
     * Проверяет, есть ли класс в списке по его имени.
     * @param name class name /<br>название класса
     */
    static isClass(name: string): boolean;
    /**
     * Checks if a class is in the list by its name.<br>
     * Проверяет, есть ли компонент в списке по его имени.
     * @param name component name /<br>название компонента
     */
    static isComponent(name: string): boolean;
    /**
     * Returns a list of connected components.<br>
     * Возвращает список подключенных компонентов.
     */
    static getComponentList(): Record<string, any>;
    /**
     * Returns a list of global projects.<br>
     * Возвращает список глобальных проектов.
     */
    static getComponentGlobal(): MutationProject;
    /**
     * Returns the global project by its name.<br>
     * Возвращает глобальный проект по его названию.
     * @param name component identifier /<br>идентификатор компонента
     */
    static getComponentGlobalItem(name: string): MutationProjectItem | undefined;
    /**
     * Returns connected Vue components by their name.<br>
     * Возвращает подключенные компоненты Vue по их имени.
     * @param name component identifier /<br>идентификатор компонента
     */
    static getComponentVue(name: string): any | undefined;
    /**
     * Returns an instance of the element.<br>
     * Возвращает экземпляр элемента.
     * @param name component identifier /<br>идентификатор компонента
     */
    static getComponentItem(name: string): any | undefined;
    /**
     * Adds a new function.<br>
     * Добавляет новую функцию.
     * @param name function name /<br>название функции
     * @param item new function /<br>новая функция
     */
    static addFunction(name: string, item: any): void;
    /**
     * Adds a new class.<br>
     * Добавляет новый класс.
     * @param name class name /<br>название класса
     * @param item new class /<br>новый класс
     */
    static addClass(name: string, item: any): void;
    /**
     * Adds a new component.<br>
     * Добавляет новый компонент.
     * @param name component name /<br>название компонента
     * @param component new component /<br>новый компонент
     */
    static addComponent(name: string, component: any): void;
    /**
     * Adding a new function to a list.<br>
     * Добавление новой функции в список.
     * @param functions list of functions to be added /<br>список добавляемой функции
     */
    static addFunctionList(functions: Record<string, any>): void;
    /**
     * Adding a new class to a list.<br>
     * Добавление нового класса в список.
     * @param classes list of classes to be added /<br>список добавляемого класса
     */
    static addClassList(classes: Record<string, any>): void;
    /**
     * Adding a new component to a list.<br>
     * Добавление нового компонента в список.
     * @param components list of components to be added /<br>список добавляемого компонента
     */
    static addComponentList(components: Record<string, any>): void;
    /**
     * Adding global data.<br>
     * Добавление глобальных данных.
     * @param data data for global data /<br>данные для глобальных данных
     */
    static addGlobal(data: Record<string, any>): void;
    /**
     * Adding cached requests.<br>
     * Добавление кешированных запросов.
     * @param response data for caching /<br>данные для кеширования
     */
    static addResponse(response: ApiResponse | ApiResponse[]): void;
    /**
     * Adds texts in sync mode.<br>
     * Добавляет тексты в режиме синхронизации.
     * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
     */
    static addTranslate(data: Record<string, string>): void;
    /**
     * Registers a component to track parameter changes.<br>
     * Регистрирует компонент для слежения за изменением параметра.
     * @param name component identifier /<br>идентификатор компонента
     * @param item element instance /<br>экземпляр элемента
     * @param callback function called upon change /<br>вызываемая функция при изменении
     */
    static registrationComponent(name: string, item: any, callback: MutationComponentCallback): MutationComponentProps | undefined;
    /**
     * Calls data update.<br>
     * Вызывает обновление данных.
     * @param name component identifier /<br>идентификатор компонента
     * @param props component property /<br>свойство компонента
     */
    static comp(name: string, props: MutationComponentProps): void;
    /**
     * Removal of the component from the list.<br>
     * Удаление компонента из списка.
     * @param name component identifier /<br>идентификатор компонента
     */
    static removeComponent(name: string): void;
}
