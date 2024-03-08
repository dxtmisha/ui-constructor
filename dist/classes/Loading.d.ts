import { EventItem } from './EventItem';
import { type ElementOrString, type EventListenerDetail } from '../types/basic';
type LoadingDetail = {
    loading: boolean;
};
/**
 * Class for working with global loading.<br>
 * Класс для работы с глобальной загрузкой.
 */
export declare class Loading {
    protected static value: number;
    protected static event: EventItem<Window, CustomEvent>;
    /**
     * Check if the loader is active now.<br>
     * Проверить, активен ли сейчас загрузчик.
     */
    static is(): boolean;
    /**
     * Shows the loader.<br>
     * Показывает загрузчик.
     */
    static show(): void;
    /**
     * Hides the loader.<br>
     * Скрывает загрузчик.
     */
    static hide(): void;
    /**
     * Event registration to listen for data changes.<br>
     * Регистрация события для прослушивания изменений данных.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs /<br>объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element /<br>элемент
     */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Calls the event listener.<br>
     * Вызывает слушателя событий.
     */
    protected static dispatch(): void;
}
export {};
