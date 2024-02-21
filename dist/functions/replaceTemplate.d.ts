import { type FunctionReturn } from '../types/basic';
/**
 * Replacing the value from replaces in value.<br>
 * Замена значения из replaces в value.
 * @param value template string /<br>строка шаблона
 * @param replaces object with data for replacement /<br>объект с данными для замены
 */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;
