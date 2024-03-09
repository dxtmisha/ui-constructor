import * as vite from 'vite';
import '../library/types.d.ts';
type UiPluginsOptions = {
    importComponents?: boolean;
    icon?: boolean;
    flag?: boolean;
    style?: string | false;
    api?: string;
    apiUrl?: string;
    translate?: string;
    translateUrl?: string;
};
/**
 * Plugin for working with the design system.<br>
 * Плагин для работы с системой дизайна.
 */
export default function uiVitePlugin(options?: UiPluginsOptions): vite.Plugin;
export {};
