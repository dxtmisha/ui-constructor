import { type App } from 'vue';
import { type ConstrRegistration } from '../types/constructor';
import '../m3/styles/main.scss';
import './types.d.ts';
export declare const registrationUiM3: (app: App, options?: ConstrRegistration) => Promise<App>;
