import { type ConstrClass } from '../../types/constructor';
import { type SkeletonClassesList } from '../Skeleton/Skeleton';
import { type UseLabelSetup, type UseLabelSlots } from '../uses/ref/useLabel';
import { type UseIconComponent, type UseIconSetup } from '../Icon/useIconRef';
import { type UseProgressComponent, type UseProgressSetup } from '../Progress/useProgressRef';
import { type UseEnabledSetup } from '../uses/ref/useEnabled';
import { type UseEventClickEmits, type UseEventClickSetup } from '../uses/ref/useEventClick';
/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ButtonComponents = UseIconComponent & UseProgressComponent & {
    ripple?: object;
};
/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ButtonEmits = UseEventClickEmits;
/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ButtonSetup = UseLabelSetup & UseIconSetup & UseProgressSetup & UseEnabledSetup & UseEventClickSetup & {
    classesSkeleton: SkeletonClassesList;
};
/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ButtonExpose = {};
/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ButtonSlots = UseLabelSlots;
/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ButtonClasses = {
    main: ConstrClass;
    label: string;
    paddingSpacer: string;
    icon: string;
    trailing: string;
    loading: string;
};
