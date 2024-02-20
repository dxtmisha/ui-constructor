/**
 * Checks if the value is between integers.<br>
 * Проверяет, лежит ли значение между целыми числами.
 * @param value input value /<br>входное значение
 * @param between value for rounding /<br>значение для округления
 */
export function isIntegerBetween (value: number, between: number): boolean {
  const floor = Math.floor(between)
  return value >= floor && value < floor + 1
}
