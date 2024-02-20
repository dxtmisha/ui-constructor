import { executeFunction } from './executeFunction'
import { forEach } from './forEach'
import { getExp } from './getExp'

import { type FunctionReturn } from '../types/basic'

/**
 * Replacing the value from replaces in value.<br>
 * Замена значения из replaces в value.
 * @param value template string /<br>строка шаблона
 * @param replaces object with data for replacement /<br>объект с данными для замены
 */
export function replaceTemplate (value: string, replaces: Record<string, string | FunctionReturn<string>>): string {
  let data = value

  forEach(replaces, (replacement, pattern) => {
    data = data.replace(getExp(`[${pattern}]`), executeFunction(replacement))
  })

  return data
}
