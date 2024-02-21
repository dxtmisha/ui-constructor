/**
 * We get the settings object for the theme.<br>
 * Получаем объект настроек для темы.
 * @param title name for the button /<br>название для кнопки
 */
export const useTheme = (title: string = 'Theme') => ({
  defaultValue: 'light',
  toolbar: {
    title,
    icon: 'paintbrush',
    items: ['light', 'dark'],
    dynamicTitle: true
  }
})
