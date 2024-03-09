import { Ref } from 'vue';
import { type ApiFetch, ApiMethodItem } from '../../classes/Api.ts';
/**
 * Returns data for working with requests.<br>
 * Возвращает данные для работы с запросами.
 * @param path path to request /<br>путь к запрос
 * @param options data for the request /<br>данные для запроса
 */
export declare function useApiRef(path: string, options?: ApiMethodItem | ApiFetch): {
    data: import("vue").ShallowRef<any>;
    request: Ref<ApiFetch>;
    update: (options?: ApiFetch) => void;
};
