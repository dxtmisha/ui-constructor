export const SEPARATOR = '/'

export const SYMBOL_SEPARATOR = process.env.TOKEN_SEPARATOR ?? SEPARATOR
export const SYMBOL_AVAILABLE = `[\\w-&?{}()., ${SYMBOL_SEPARATOR}]+`

export const NAME_CONSTRUCTOR = 'd'
export const DIR_CONSTRUCTOR = 'constructors'
export const DIR_ICONS = ['tokens', 'icons']
export const DIR_ICONS_WEB = 'icons'
export const FILE_PROPERTY = 'properties.json'

export const FILE_ICONS = 'icons'
export const EXTENSION_STYLE_FILE = 'scss'
