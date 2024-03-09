import { PluginApi } from './PluginApi'

/**
 * Class for connecting test translations.<br>
 * Класс для подключения тестовых переводов.
 */
export class PluginTranslate extends PluginApi {
  protected className: string = 'Translate'
  protected methodAdd: string = 'addSync'
}
