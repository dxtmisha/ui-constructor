import { isString } from '../../functions/isString'

import { ImageFile } from './ImageFile'

const IMAGE_PDF_TOOL = '#toolbar=0&scrollbar=1'

/**
 * Class for working with PDF files.<br>
 * Класс для работы с PDF-файлами.
 */
export class ImagePdf {
  /**
   * Checks if the file is an image.<br>
   * Проверяет, является ли файл PDF.
   * @param file verified file /<br>проверяемый файл
   */
  static isPdf (file: string | File): boolean {
    if (isString(file)) {
      return Boolean(file.match(/\.pdf$/i))
    }

    return Boolean(file.type.match(/\/pdf$/i))
  }

  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.<br>
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read /<br>Blob или File которые следует прочитать
   */
  static async get (file: string | File): Promise<string> {
    if (isString(file)) {
      return `${file}${IMAGE_PDF_TOOL}`
    }

    if (this.isPdf(file)) {
      return `${(await ImageFile.getFileReader(file))}${IMAGE_PDF_TOOL}`
    }

    return ''
  }
}
