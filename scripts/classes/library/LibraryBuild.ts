import { PropertiesFile } from '../properties/PropertiesFile.ts'

/**
 * A class for adding a link to styles in style files.<br>
 * Класс для добавления ссылки на стили в файлы со стилями.
 */
export class LibraryBuild {
  make () {
    const paths = PropertiesFile.readDir(['dist'])

    paths.forEach(path => {
      if (path.match(/\.css$/)) {
        const name = PropertiesFile.parse(path)?.name
        const pathJs = ['dist', path.replace(/\.css$/, '.js')]
        const read = PropertiesFile.readFile(pathJs)

        if (read) {
          PropertiesFile.writeByPath(pathJs, `import './${name}.css';\r\n${read}`)
        }
      }
    })
  }
}
