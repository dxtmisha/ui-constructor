import { GeoRef } from 'ui/classes/ref/GeoRef'

/**
 * We get the settings object for language selection.<br>
 * Получаем объект настроек для выбора языка.
 * @param title name for the button /<br>название для кнопки
 * @param items list of languages /<br>список языков
 */
export const useLanguage = (
  title: string = 'Language',
  items: string[] = [
    'en-US',
    'en-GB',
    'ru-RU',
    'ko-KR',
    'vn-VN'
  ]
) => ({
  defaultValue: GeoRef.getStandard(),
  toolbar: {
    title,
    icon: 'globe',
    items,
    dynamicTitle: true
  }
})
