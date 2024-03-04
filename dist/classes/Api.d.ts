export declare enum ApiMethodItem {
    get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE"
}
export type ApiMethod = string & ApiMethodItem;
export type ApiFetch = {
    path?: string;
    pathFull?: string;
    method?: ApiMethod;
    request?: FormData | Record<string, any> | string;
    auth?: boolean;
    headers?: Record<string, string>;
    type?: string;
    init?: RequestInit;
};
export type ApiResponse = {
    path: string;
    method: ApiMethod;
    request?: ApiFetch['request'];
    response: any | ((request?: ApiFetch['request']) => any);
    disable?: boolean;
};
/**
 * Class for working with requests.<br>
 * Класс для работы с запросами.
 */
export declare class Api {
    protected static url: string;
    protected static response: ApiResponse[];
    /**
     * Is the server local.<br>
     * Является ли сервер локальный.
     */
    static isLocalhost(): boolean;
    /**
     * Getting the header for the request.<br>
     * Получение заголовка для запроса.
     * @param value list of headers /<br>список заголовков
     * @param type type of request /<br>тип запроса
     */
    static getHeaders(value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Getting the full path to the request script.<br>
     * Получение полного пути к скрипту запроса.
     * @param path path to the script /<br>путь к скрипту
     */
    static getUrl(path: string): string;
    /**
     * Getting data for the body.<br>
     * Получение данных для тела.
     * @param request this request /<br>данный запрос
     * @param method method for request /<br>метод запрос
     */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /**
     * Getting data for the body of the get method.<br>
     * Получение данных для тела метода get.
     * @param request this request /<br>данный запрос
     * @param path path to request /<br>путь к запрос
     * @param method method for request /<br>метод запрос
     */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /**
     * Change the base path to the script.<br>
     * Изменить базовый путь к скрипту.
     * @param url path to the script /<br>путь к скрипту
     */
    static setUrl(url: string): Api;
    /**
     * To execute a request.<br>
     * Выполнить запрос.
     * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
     */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Sends a get method request.<br>
     * Отправляет запрос метода get.
     * @param request list of parameters /<br>список параметров
     */
    static get<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a post method request.<br>
     * Отправляет запрос метода post.
     * @param request list of parameters /<br>список параметров
     */
    static post<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a put method request.<br>
     * Отправляет запрос метода put.
     * @param request list of parameters /<br>список параметров
     */
    static put<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a delete method request.<br>
     * Отправляет запрос метода delete.
     * @param request list of parameters /<br>список параметров
     */
    static delete<T>(request: ApiFetch): Promise<T>;
    static addResponse(response: ApiResponse | ApiResponse[]): Api;
    protected static getResponse(path: string | undefined, method: ApiMethod, request?: ApiFetch['request']): ApiResponse | undefined;
    /**
     * To execute a request.<br>
     * Выполнить запрос.
     * @param path path to request /<br>путь к запрос
     * @param method method for request /<br>метод запрос
     * @param request body of the request /<br>тело запроса
     * @param auth enable authorization verification /<br>включить проверку на авторизацию
     * @param headers list of headers /<br>список заголовков
     * @param type type of request /<br>тип запроса
     * @param init additional parameters /<br>дополнительных параметров
     */
    protected static fetch<T>({ path, pathFull, method, request, headers, type, init }: ApiFetch): Promise<T>;
}
