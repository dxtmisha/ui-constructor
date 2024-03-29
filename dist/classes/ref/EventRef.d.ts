import { EventItem } from '../EventItem';
import { type ElementOrString, type ElementOrWindow, type EventListenerDetail, type EventOptions } from '../../types/basic';
import { type RefOrNormal } from '../../types/ref';
/**
 * Class for working with events (Ref).<br>
 * Класс для работа с события (Ref).
 */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any>> extends EventItem<E, O, D> {
    /**
     * Classes Constructor
     * @param elementSelector element /<br>элемент
     * @param elementSelectorControl control element /<br>элемент управления
     * @param type type /<br>тип
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs /<br>объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param options object that specifies characteristics /<br>объект options
     * @param detail an event-dependent value associated with the event /<br>зависимое от события
     * значение, связанное с событием
     */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E>>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}
