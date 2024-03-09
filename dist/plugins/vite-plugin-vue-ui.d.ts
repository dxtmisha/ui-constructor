import * as vite from 'vite';
type UiPluginsOptions = {
    importComponents?: boolean;
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
