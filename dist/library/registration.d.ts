import { type App } from 'vue';
import { type ConstrRegistration } from '../types/constructor';
import './style.scss';
import './types.d.ts';
export declare const registrationUi: (app: App, options?: ConstrRegistration) => Promise<App>;
