// import fs from 'fs'
// export function readAndProcessFile(filePath: string): string {
//   const fileContent: string = fs.readFileSync(filePath, 'utf-8')
//   return fileContent + ' -> 额外内容'
// }

export interface IFileReader {
  read(filePath: string): string
}

// 将上面的代码改为依赖注入的方式
// 我们将 fs 封装起来，fileReader 就是我们传入的 fs 的封装
// 这样这个函数就不强依赖于 fs 了，而是依赖于我们传入的 fileReader
export function readAndProcessFile(
  filePath: string,
  fileReader: IFileReader
): string {
  const fileContent: string = fileReader.read(filePath)
  return fileContent + ' -> 额外内容'
}

// class 的构造器版本
export class ReadAndProcessFile {
  private _fileReader: IFileReader
  constructor(fileReader: IFileReader) {
    this._fileReader = fileReader
  }

  public read(filePath: string) {
    const fileContent: string = this._fileReader.read(filePath)
    return fileContent + ' -> 额外内容'
  }
}

// class 的属性版本
export class ReadAndProcessFile2 implements IFileReader {
  private _fileReader: any
  constructor() {}
  public read(filePath: string) {
    const fileContent: string = this._fileReader.read(filePath)
    return fileContent + ' -> 额外内容'
  }

  set fileReader(fileReader: IFileReader) {
    this._fileReader = fileReader
  }
}

// class 的方法版本
export class ReadAndProcessFile3 implements IFileReader {
  private _fileReader: any
  constructor() {}
  public read(filePath: string) {
    const fileContent: string = this._fileReader.read(filePath)
    return fileContent + ' -> 额外内容'
  }

  setFileReader(fileReader: IFileReader) {
    this._fileReader = fileReader
  }
}
