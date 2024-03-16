import { type InputCheckItem } from './useInputCheck';
import { InputElement } from './InputElement';
import { InputChange } from './InputChange';
import { InputValue } from './InputValue';
import { InputMatch } from './InputMatch';
import { InputCode } from './InputCode';
import { type InputValidationItem } from './typesBasic';
import { type InputBasicProps } from './props';
/**
 * Class for working with validity.<br>
 * Класс для работы с валидностью.
 */
export declare class InputValidation<V = any> {
    protected readonly props: InputBasicProps<V>;
    protected readonly element: InputElement;
    protected readonly change: InputChange;
    protected readonly value: InputValue;
    protected readonly code: InputCode;
    protected readonly match?: InputMatch | undefined;
    protected readonly callback?: (() => void) | undefined;
    protected item: InputCheckItem<V>;
    protected validation?: InputValidationItem<V>;
    protected cache?: InputValidationItem<V>;
    protected cacheValue?: any;
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
    constructor(props: InputBasicProps<V>, element: InputElement, change: InputChange, value: InputValue, code: InputCode, match?: InputMatch | undefined, callback?: (() => void) | undefined);
    /**
     * Checks if there is an error.<br>
     * Проверяет, есть ли ошибка.
     */
    isError(): boolean;
    /**
     * Checks whether the element has any constraints and whether it meets them.<br>
     * Проверяет, имеет ли элемент какие-либо ограничения и удовлетворяет ли он им.
     */
    checkValidity(): boolean;
    /**
     * Returns error data.<br>
     * Возвращает данные об ошибке.
     */
    get(): InputValidationItem<V>;
    /**
     * Returns error string.<br>
     * Возвращает строку об ошибке.
     */
    getMessage(): string;
    /**
     * Changes the validity data.<br>
     * Изменяет данные о валидности.
     * @param validation values for validity /<br>значения для валидности
     */
    set(validation: Record<string, any> | InputValidationItem<V>): this;
    /**
     * Updating data for input.<br>
     * Обновление данных для input.
     */
    update(): this;
    /**
     * Check for global data.<br>
     * Проверка для глобальных данных.
     */
    protected checkGlobal(): InputValidationItem<V> | undefined;
    /**
     * Check for selected data.<br>
     * Проверка для выбранных данных.
     */
    protected checkItem(): InputValidationItem<V> | undefined;
}
