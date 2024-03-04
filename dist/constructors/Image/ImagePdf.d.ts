/**
 * Class for working with PDF files.<br>
 * Класс для работы с PDF-файлами.
 */
export declare class ImagePdf {
    /**
     * Checks if the file is an image.<br>
     * Проверяет, является ли файл PDF.
     * @param file verified file /<br>проверяемый файл
     */
    static isPdf(file: string | File): boolean;
    /**
     * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.<br>
     * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
     * @param file the Blob or File from which to read /<br>Blob или File которые следует прочитать
     */
    static get(file: string | File): Promise<string>;
}
