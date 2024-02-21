import { type Ref } from 'vue';
import { type RefOrNormal } from '../../types/ref';
/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.<br>
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;
