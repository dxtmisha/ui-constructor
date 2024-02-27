import { PropertiesFile } from '../properties/PropertiesFile'

/**
 * A class for removing Cyrillic from the compiled file.<br>
 * Класс для удаления кириллицы из скомпилированного файла.
 */
export class DesignProjectTranslate {
  /**
   * Constructor
   * @param dirs path to the file /<br>путь к файлу
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly dirs: string[]
  ) {
  }

  make () {
    const items = PropertiesFile.readDirRecursive(this.dirs)

    items.forEach(item => {
      const path = [...this.dirs, item]
      const read = PropertiesFile.readFile<string>(path)

      if (
        read &&
        read.match('__TRANSLATE_START__')
      ) {
        const keys = read.match(/(?<=__TRANSLATE_START__[\s\S]+)(.*)(?=[\s\S]+__TRANSLATE_END__)/ig)

        PropertiesFile.writeByPath(
          path,
          read.replace(
            /(?<=__TRANSLATE_START__[\s\S]+)([а-я]+)(?=[\s\S]+__TRANSLATE_END__)/ig,
            '-'
          )
        )

        if (keys) {
          this.makeJson(keys)
        }
      }
    })
  }

  private makeJson (
    list: string[]
  ): void {
    const data = list[0]
      .match(/(?<=[,$])[^:]+(?=:)/g)
    const keys: string[] = []

    if (data) {
      data.forEach(item => {
        keys.push(
          item
            .trim()
            .replace(/^['"[]+/, '')
            .replace(/['"\]]+$/, '')
            .trim()
        )
      })

      PropertiesFile.writeByPath(['.', '..', 'translate.json'], keys)
    }
  }
}
