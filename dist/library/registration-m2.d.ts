import { type App } from 'vue';
import { type ConstrRegistration } from '../types/constructor';
import '../m2/styles/main.scss';
import './types.d.ts';
export declare const registrationUiM2: (app: App, options?: ConstrRegistration) => Promise<App>;
