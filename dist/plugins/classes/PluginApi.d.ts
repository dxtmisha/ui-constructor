/**
 * Class for connecting test translations.<br>
 * Класс для подключения тестовых переводов.
 */
export declare class PluginApi {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly mode: string;
    protected readonly path?: string | undefined;
    protected readonly url?: string | undefined;
    protected className: string;
    protected methodAdd: string;
    protected methodUrl: string;
    /**
     * Constructor
     * @param id file identification /<br>идентификация файла
     * @param code file content /<br>содержимое файла
     * @param mode code execution mode /<br>режим выполнения кода
     * @param path link to the file with data /<br>ссылка к файлу с данными
     * @param url link to the site for the request /<br>ссылка на сайт для запроса
     */
    constructor(id: string, code: string, mode: string, path?: string | undefined, url?: string | undefined);
    /**
     * Initialization of data transformation.<br>
     * Инициализация преобразования данных.
     */
    init(): string;
    /**
     * Checks if the conditions are suitable for working with this file.<br>
     * Проверяет, подходят ли условия для работы с этим файлом.
     */
    protected is(): boolean;
    /**
     * Checks if there is a file with data for developers.<br>
     * Проверяет, есть ли файл с данными для разработчиков.
     */
    protected isPath(): boolean;
    /**
     * Returns the path for connecting files.<br>
     * Возвращает путь для подключения файлов.
     * @param path path to the file /<br>путь к файлу
     */
    getUrl(path: string): string;
    /**
     * Connecting files for work.<br>
     * Подключение файлов для работы.
     * @param code file content /<br>содержимое файла
     */
    protected importApi(code: string): string;
}
