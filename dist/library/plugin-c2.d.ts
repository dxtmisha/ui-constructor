import { type App } from 'vue';
import { type ConstrRegistration } from '../types/constructor';
import '../c2/styles/main.scss';
import './types.d.ts';
export declare const registrationUiC2: (app: App, options?: ConstrRegistration) => Promise<App>;
