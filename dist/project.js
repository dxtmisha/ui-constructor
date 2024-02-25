#!/usr/bin/env ts-node
var P = Object.defineProperty;
var f = (o, t, e) => t in o ? P(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var m = (o, t, e) => (f(o, typeof t != "symbol" ? t + "" : t, e), e);
import { program as d } from "commander";
import { i as j, t as D } from "./transformation-DBtDP1gm.js";
import { t as u } from "./toArray-rswbj5Xf.js";
import { t as y } from "./toKebabCase-ARz5evzf.js";
const r = {}, h = class h {
  /**
   * The fs.existsSync() method is used to synchronously check if a file already
   * exists in the given path or not. It returns a boolean value which indicates
   * the presence of a file.<br>
   * Метод fs.existsSync() используется для синхронной проверки наличия файла в
   * указанном пути. Он возвращает логическое значение, которое указывает на
   * наличие файла.
   * @param path it holds the path of the file that has to be checked /<br>
   * это содержит путь к файлу, который необходимо проверить
   */
  static is(t) {
    return r.existsSync(this.joinPath(t));
  }
  /**
   * Checks whether it is a directory.<br>
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  static isDir(t) {
    var e;
    return this.is(t) ? ((e = r.statSync(this.joinPath(t))) == null ? void 0 : e.isDirectory()) ?? !1 : !this.joinPath(t).match(/\.\w+$/);
  }
  /**
   * Determines whether the package is connected as a module.<br>
   * Определяет, является ли пакет подключенным как модуль.
   */
  static isModule() {
    return this.module;
  }
  /**
   * The path.joinPath() method joins all given path segments together using the
   * platform-specific separator as a delimiter, then normalizes the resulting path.<br>
   * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
   * специфического для платформы разделителя в качестве разделителя,
   * а затем нормализует полученный путь.
   * @param path a sequence of path segments /<br>последовательность сегментов пути
   */
  static joinPath(t) {
    return r.join(...u(t));
  }
  /**
   * Getting the path to the file by its name and the path to the directory.<br>
   * Получение пути к файлу по его названию и пути к директории.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static joinPathByName(t, e, i = "json") {
    return this.joinPath([...u(t), this.getFileName(e, i)]);
  }
  /**
   * Returns the root path.<br>
   * Возвращает корневой путь.
   */
  static getRoot() {
    return this.root;
  }
  /**
   * Returns the file name.<br>
   * Возвращает имя файла.
   * @param name element name /<br>название элемента
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static getFileName(t, e = "json") {
    return j(e) ? `${y(t)}.${e}` : t;
  }
  /**
   * Returns the path to the directory, removing the file name from the path.<br>
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file /<br>путь к файлу
   */
  static getPathDir(t) {
    return this.isDir(t) ? this.joinPath(t) : r.dirname(this.joinPath(t));
  }
  /**
   * Returns the path to the file.<br>
   * Возвращает путь к файлу.
   * @param path path to the file /<br>путь к файлу
   * @param name element name /<br>название элемента
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static getPathFile(t, e, i = "json") {
    return [...u(t), this.getFileName(e, i)];
  }
  /**
   * The method splits the path into an array of components.<br>
   * Метод разбивает путь на массив компонентов.
   * @param path path to the directory /<br>путь к директории
   */
  static splitForDir(t) {
    var i;
    const e = this.isDir(t) ? t : (i = this.parse(t)) == null ? void 0 : i.dir;
    return this.joinPath(e || "").split(r.sep);
  }
  /**
   * Method returns an object whose properties represent significant elements of the path.<br>
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename /<br>имя файла
   */
  static parse(t) {
    return r.parse(this.joinPath(t));
  }
  /**
   * Returns the directory separator symbol.<br>
   * Возвращает символ разделителя директории.
   */
  static sep() {
    return r.sep;
  }
  /**
   * Getting information about the file.<br>
   * Получение информации о файле.
   * @param path path to the file /<br>путь к файлу
   */
  static stat(t) {
    if (this.is(t))
      return { ...r.statSync(this.joinPath(t)) };
  }
  /**
   * Reads the contents of the directory.<br>
   * Читает содержимое директории.
   * @param path path to the directory /<br>путь к директории
   */
  static readDir(t) {
    return this.is(t) ? r.readdirSync(this.joinPath(t)) : [];
  }
  /**
   * Reads the contents of the directory recursively.<br>
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory /<br>путь к директории
   * @param fullPath recursive directory /<br>рекурсивная директория
   */
  static readDirRecursive(t, e = []) {
    const i = this.readDir(t), a = [];
    return i.forEach((n) => {
      const c = [...t, n];
      this.isDir(c) ? a.push(...this.readDirRecursive(
        c,
        [...e, n]
      )) : a.push(this.joinPath([...e, n]));
    }), a;
  }
  /**
   * Returns the contents of the path.<br>
   * Возвращает содержимое пути.
   * @param path filename /<br>имя файла
   */
  static readFile(t) {
    if (this.is(t))
      return D(
        r.readFileSync(this.joinPath(t)).toString()
      );
  }
  /**
   * Returns the content of the file, without converting the value.<br>
   * Возвращает содержимое файла, без преобразования значения.
   * @param path filename /<br>имя файла
   */
  static readFileOnly(t) {
    if (this.is(t))
      return r.readFileSync(this.joinPath(t)).toString();
  }
  /**
   * Synchronously creates a directory.<br>
   * Синхронно создает директорию.
   * @param path path to the directory /<br>путь к директории
   */
  static createDir(t) {
    const e = [this.root];
    this.splitForDir(this.removeRootInPath(t)).forEach((i) => {
      e.push(i), this.is(e) || r.mkdirSync(this.joinPath(e));
    });
  }
  /**
   * Writing data to a file.<br>
   * Запись данных в файл.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param value values for storage /<br>значения для хранения
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static write(t, e, i, a = "json") {
    this.writeByPath(
      this.joinPathByName(t, e, a),
      i
    );
  }
  /**
   * Writes to the selected path.<br>
   * Записывает по выбранному пути.
   * @param path path to the file /<br>путь к файлу
   * @param value values for storage /<br>значения для хранения
   */
  static writeByPath(t, e) {
    this.createDir(t), r.writeFileSync(
      this.joinPath(t),
      typeof e == "object" ? JSON.stringify(e) : e
    );
  }
  /**
   * Directory deletion.<br>
   * Удаление директории.
   * @param path path to the directory /<br>путь к директории
   */
  static removeDir(t) {
    this.isDir(t) && r.rmSync(this.joinPath(t), {
      recursive: !0,
      force: !0
    });
  }
  /**
   * File deletion.<br>
   * Удаление файла.
   * @param path path to the file /<br>путь к файлу
   */
  static removeFile(t) {
    this.is(t) && r.unlinkSync(this.joinPath(t));
  }
  static rename(t, e) {
    r.renameSync(
      this.joinPath(t),
      this.joinPath(e)
    );
  }
  /**
   * Removing root from the path.<br>
   * Удаление root из пути.
   * @param path path to the directory /<br>путь к директории
   */
  static removeRootInPath(t) {
    return this.joinPath(t).replace(`${this.root}${r.sep}`, "").replace(`${this.root}`, "");
  }
};
m(h, "root"), m(h, "module"), h.module = !!__dirname.match("node_modules"), h.root = h.module ? __dirname.replace(/node_modules.*?$/, "") : h.joinPath([__dirname, "..", "..", ".."]);
let s = h;
const l = {
  vue: "UI_CORE_VUE",
  "vue-router": "UI_CORE_VUE_ROUTER",
  vuex: "UI_CORE_VUEX",
  ui: "UI_CORE_UI"
};
class R {
  /**
   * Constructor
   * @param dirs path to the file /<br>путь к файлу
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.dirs = t;
  }
  make() {
    return s.readDirRecursive(this.dirs).forEach((e) => {
      const i = [...this.dirs, e], a = s.readFile(i);
      a && a.match(this.getRegMatch()) && s.writeByPath(
        i,
        a.replace(
          this.getRegReplace(),
          (n, c, g) => `const{${c.replace(/([^ ]+) as ([^, ]+)/ig, "$1: $2")}}=${this.getModule(g)}`
        )
      );
    }), this;
  }
  /**
   * Returns the module code by its code.<br>
   * Возвращает код модуля по его коду.
   * @param name module name /<br>название модуля
   */
  getModule(t) {
    const e = t.trim();
    return e in l ? `window.${l[e]}` : e;
  }
  /**
   * Returns a list of links for export.<br>
   * Возвращает список ссылок для экспорта.
   */
  getRegList() {
    return Object.keys(l).join("|");
  }
  /**
   * Returns a regular expression to check if the data exists.<br>
   * Возвращает регулярное выражение для проверки наличия данных.
   */
  getRegMatch() {
    return new RegExp(`from ?"(${this.getRegList()})"`);
  }
  /**
   * Returns a regular expression to change the data.<br>
   * Возвращает регулярное выражение для изменения данных.
   */
  getRegReplace() {
    return new RegExp(`import ?{ ?([^}]+) ?} ?from ?"(${this.getRegList()})"`, "ig");
  }
}
const _ = [__dirname, "..", "packages"], v = [".."], E = "temp";
class p {
  /**
   * Constructor
   * @param template template name /<br>название шаблона
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    m(this, "paths");
    this.template = t, this.paths = this.initTemplatePaths();
  }
  /**
   * Initialization of files for the project.<br>
   * Инициализация файлов для проекта.
   */
  make() {
    console.log("__dirname", __dirname), this.paths.length > 0 && (this.paths.forEach((t) => {
      const e = this.read(t);
      if (e) {
        const i = this.getProjectPath(t);
        s.is(i) || s.writeByPath(i, e);
      }
    }), this.makeUpdateLink(), this.removeTempDir());
  }
  makeBuild() {
    if (this.getTemplateDir() === "vue") {
      const t = [".", "production", "dist"], e = [".", ".."];
      new R(t).make(), this.copyBuild(t, e);
    }
  }
  /**
   * Returns the name of the template directory.<br>
   * Возвращает название шаблонной директории.
   */
  getTemplateDir() {
    return this.template;
  }
  /**
   * Returns the path to the template file.<br>
   * Возвращает путь к файлу шаблона.
   */
  getTemplatePath() {
    return [..._, `project-${this.getTemplateDir()}`];
  }
  /**
   * Returns the path to the project.<br>
   * Возвращает путь к проекту.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  getProjectPath(t) {
    const e = [
      ...v,
      ...Array.isArray(t) ? t : [t]
    ], i = e.length - 1;
    return e[i].match("gitignore.txt") && (e[i] = e[i].replace("gitignore.txt", ".gitignore")), e;
  }
  /**
   * Returns the project name.<br>
   * Возвращает название проекта.
   */
  getProjectName() {
    const t = s.splitForDir(__dirname), e = [];
    let i = !1;
    for (; t.length > 0 && (i ? e.unshift(t.pop()) : s.is([s.sep(), ...t, "index.php"]) ? (i = !0, e.unshift(t.pop())) : t.pop(), !s.is([s.sep(), ...t, "ui", "index.html"])); )
      ;
    return `/${e.join("/")}/`;
  }
  /**
   * Reads the file from the template.<br>
   * Читает файл из шаблона.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  read(t) {
    return s.readFileOnly([
      ...this.getTemplatePath(),
      ...Array.isArray(t) ? t : [t]
    ]);
  }
  /**
   * Reads the selected files in the project.<br>
   * Читает выбранные файлы в проекте.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  // private readProject (path: PropertiesFilePath): string | undefined {
  //   return PropertiesFile.readFile(this.getProjectPath(path))
  // }
  /**
   * Copying the collected data.<br>
   * Копирование собранных данных.
   * @param dist link to the compiled script /<br>ссылка на собранный скрипт
   * @param build link to the relocation site /<br>ссылка на место перемещения
   */
  copyBuild(t, e) {
    s.readDir(t).forEach((a) => {
      const n = [...e, a], c = [...t, a];
      s.isDir(n) ? s.removeDir(n) : s.removeFile(n), s.rename(
        c,
        n
      );
    });
  }
  /**
   * Updating the version of dependent files.<br>
   * Обновление версии зависимых файлов.
   */
  /*
    private makeUpdatePackage (): void {
      const pathProject = ['package.json']
      const packageUi = PropertiesFile.readFile<Record<string, any>>(['node_modules', 'ui', 'package.json'])
      const packageProject = PropertiesFile.readFile<Record<string, any>>(pathProject)
  
      if (
        packageUi &&
        packageProject
      ) {
        [
          'dependencies',
          'devDependencies'
        ].forEach(group => {
          if (
            group in packageUi &&
            group in packageProject
          ) {
            forEach(packageProject[group], (_, key) => {
              if (key in packageUi[group]) {
                packageProject[group][key] = packageUi[group][key]
              }
            })
          }
        })
  
        PropertiesFile.writeByPath(pathProject, packageProject)
      }
    }
     */
  /**
   * Updating the script links.<br>
   * Обновление ссылок на скрипт.
   */
  makeUpdateLink() {
    const t = this.getProjectName(), e = this.getProjectPath(["index.php"]), i = s.readFile(e);
    i && s.writeByPath(
      e,
      i.replace(/componentName = '[^']+'/, `componentName = '${t}'`)
    );
    const a = this.getProjectPath(["vue", "vite.config.ts"]), n = s.readFile(a);
    n && s.writeByPath(
      a,
      n.replace(/BASE_URL = '[^']+'/, `BASE_URL = '${t}'`)
    );
  }
  /**
   * We get a list of links to files.<br>
   * Получаем список ссылок на файлы.
   */
  initTemplatePaths() {
    return s.readDirRecursive(this.getTemplatePath());
  }
  /**
   * Deleting temporary files, if they exist.<br>
   * Удаление временных файлов, если они есть.
   */
  removeTempDir() {
    const t = this.getProjectPath([E]);
    return s.is(t) && s.removeDir(t), this;
  }
}
d.command("project").argument("[template]").description(`Initializes the file for working with Vue\r
Инициализирует файл для работы с Vue`).action((o = "vue") => {
  new p(o).make();
});
d.command("build").argument("[template]").description(`Transfer the compiled files to another location\r
Перенести скомпилированные файлы в другое место`).action((o = "vue") => {
  new p(o).makeBuild();
});
d.parse(process.argv);
