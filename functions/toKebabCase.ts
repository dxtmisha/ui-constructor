/**
 * Convert a string to kebab case (lower).<br>
 * Преобразование строки в kebab case (lower).
 * @param value input value /<br>входное значение
 */
export function toKebabCase (value: string): string {
  return value
    .toString()
    .trim()
    .replace(/[^\w- ]+/g, '')
    .replace(/ +/g, '-')
    .replace(/(?<=[A-Z])([A-Z])/g, char => `${char.toLowerCase()}`)
    .replace(/^[A-Z]/, char => char.toLowerCase())
    .replace(/(?<=[\w ])[A-Z]/g, char => `-${char.toLowerCase()}`)
    .replace(/[A-Z]/g, char => char.toLowerCase())
}
