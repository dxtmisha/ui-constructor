/**
 * Generate a random integer.<br>
 * Генерирует случайное число.
 * @param min the lowest value to return /<br>наименьшее значение
 * @param max the highest value to return /<br>наибольшее значение
 */
export function random (min: number, max: number): number {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}
