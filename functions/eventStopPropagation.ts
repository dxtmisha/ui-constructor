/**
 * Stop listening to events in depth.<br>
 * Остановить прослушивания события в глубину.
 * @param event event instance /<br>экземпляр события
 */
export function eventStopPropagation (event: Event): void {
  event.preventDefault()
  event.stopPropagation()
}
