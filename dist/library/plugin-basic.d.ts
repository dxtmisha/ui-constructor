import { type App } from 'vue';
import { type ConstrRegistration } from '../types/constructor';
import './style-basic.scss';
import './types.d.ts';
export declare const uiPlugin: {
    install: (app: App) => App<any>;
};
export declare const registrationUiBasic: (app: App, options?: ConstrRegistration) => Promise<App>;
