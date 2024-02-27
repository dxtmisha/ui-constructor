import { PropertiesFile } from '../properties/PropertiesFile'
import { LibraryItems } from './LibraryItems.ts'

/**
 * A class for adding a link to styles in style files.<br>
 * Класс для добавления ссылки на стили в файлы со стилями.
 */
export class LibraryBuild {
  private readonly paths = PropertiesFile.readDir(['dist'])

  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: LibraryItems
  ) {
  }

  make () {
    const reg = /import([^;]+);/g
    const regComponent = new RegExp(`^NONE-(${this.items.getDesigns().join('|')})`, 'i')

    this.paths.forEach(path => {
      if (path.match(/\.css$/)) {
        const pathJs = this.getPath(path)
        const read = PropertiesFile.readFile<string>(pathJs)

        if (read) {
          if (path.match(regComponent)) {
            const imports = read.match(reg)
            const file = [
              imports?.join('') ?? '',
              this.getStyle(path),
              read.replace(reg, '')
            ]

            PropertiesFile.writeByPath(pathJs, file.join(''))
          } else {
            const name = PropertiesFile.parse(path)?.name
            PropertiesFile.writeByPath(pathJs, `import './${name}.css';\r\n${read}`)
          }
        }
      }
    })
  }

  private getPath (path: string): string[] {
    const comp = path.replace(/\.css$/, '')

    for (const name of this.paths) {
      if (name.match(new RegExp(`^${comp}\\.vue.*?\\.js`))) {
        return ['dist', name]
      }
    }

    return ['dist', path.replace(/\.css$/, '.js')]
  }

  private getStyle (path: string): string {
    const read = PropertiesFile.readFile<string>(['dist', path])
    const data = []

    if (read) {
      const file = read
        .replace(/(?<!\\)'/g, '\\\'')
        .replace(/\r\n/, ';')
        .trim()

      data.push(
        '(function(){',
        'try {',
        'if(typeof document !== undefined && document && \'createElement\' in document){',
        'let s=document.createElement(\'style\');',
        `s.appendChild(document.createTextNode('${file}'));`,
        'document.head.appendChild(s);',
        '}',
        '}catch (_){}',
        '})()'
      )
    }

    return data.join('')
  }
}
