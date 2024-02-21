import { useLanguage } from '../use/useLanguage.ts'
import { useTheme } from '../use/useTheme.ts'

export const globalTypes = {
  language: useLanguage('Language', [
    'bg-BG',
    'fr-FR',
    'il-IL',
    'hu-HU',
    'ko-KR',
    'ru-RU',
    'us-US'
  ]),
  theme: useTheme()
}
