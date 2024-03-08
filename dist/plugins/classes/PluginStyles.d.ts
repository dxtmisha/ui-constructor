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
    init(): string;
    protected is(): boolean;
    protected importDesign(code: string): string;
    protected initColors(code: string): string;
    protected initVars(code: string): string;
    protected initProperties(code: string): string;
}
