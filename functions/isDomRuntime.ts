/**
 * Checks if the runtime environment is a browser.<br>
 * Проверяет, является ли среда выполнения браузером.
 */
export function isDomRuntime (): boolean {
  return typeof window !== 'undefined'
}
