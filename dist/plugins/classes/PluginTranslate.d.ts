/**
 * Класс для подключения тестовых переводы
 */
export declare class PluginTranslate {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly mode: string;
    protected readonly path?: string | undefined;
    protected readonly api?: string | undefined;
    /**
     * Constructor
     * @param id file identification /<br>идентификация файла
     * @param code file content /<br>содержимое файла
     * @param mode code execution mode /<br>режим выполнения кода
     * @param path link to the file with data /<br>ссылка к файлу с данными
     * @param api link to the site for the request /<br>ссылка на сайт для запроса
     */
    constructor(id: string, code: string, mode: string, path?: string | undefined, api?: string | undefined);
    init(): string;
    protected is(): boolean;
    protected isPath(): boolean;
    getUrl(path: string): string;
    protected importText(code: string): string;
}
