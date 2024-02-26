import { PropertiesFile } from '../properties/PropertiesFile'

/**
 * A class for adding a link to styles in style files.<br>
 * Класс для добавления ссылки на стили в файлы со стилями.
 */
export class LibraryBuild {
  private readonly paths = PropertiesFile.readDir(['dist'])

  make () {
    this.paths.forEach(path => {
      if (path.match(/\.css$/)) {
        const name = PropertiesFile.parse(path)?.name
        const pathJs = this.getPath(path)
        const read = PropertiesFile.readFile(pathJs)

        if (read) {
          PropertiesFile.writeByPath(pathJs, `import './${name}.css';\r\n${read}`)
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
}
