import { toKebabCase } from '../functions/toKebabCase'
import { useEnv } from '../composables/useEnv'

export const CLASS_NAME = 'd-mutation'
export const KEY_NAME = toKebabCase(useEnv('DESIGNS_MAIN', 'design'))
export const KEY_UI = toKebabCase(useEnv('DESIGNS_GLOBAL', 'ui'))
export const KEY_INIT = 'init'
export const KEY_END = 'end'
export const KEY_GLOBAL_PROJECT = '__UI_PROJECT'
