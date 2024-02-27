import { PropertiesFile } from '../properties/PropertiesFile'

/**
 * A class for adding a link to styles in style files.<br>
 * Класс для добавления ссылки на стили в файлы со стилями.
 */
export class LibraryBuild {
  private readonly paths = PropertiesFile.readDir(['dist'])

  make () {
    const reg = /import([^;]+);/g

    this.paths.forEach(path => {
      if (path.match(/\.css$/)) {
        // const name = PropertiesFile.parse(path)?.name
        const pathJs = this.getPath(path)
        const read = PropertiesFile.readFile<string>(pathJs)

        if (read) {
          const imports = read.match(reg)
          const file = [
            imports?.join('') ?? '',
            this.getStyle(path),
            read.replace(reg, '')
          ]

          PropertiesFile.writeByPath(pathJs, file.join(''))
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
        'if(typeof document !== undefined){',
        'let s=document.createElement(\'style\');',
        `s.appendChild(document.createTextNode('${file}'));`,
        'document.head.appendChild(s);',
        '}',
        '})()'
      )
    }

    return data.join('')
  }
}
