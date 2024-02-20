/**
 * Returns the pressed key.<br>
 * Возвращает нажатую клавишу.
 * @param event event object /<br>объект события
 */
export function getKey (event: KeyboardEvent): string {
  return event?.key ?? event?.code ?? event?.keyCode?.toString()
}
