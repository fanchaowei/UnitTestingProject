import { readAndProcessFile, IFileReader } from './readAndProcessFile'
import { readFileSync } from 'fs'

class FileReader implements IFileReader {
  public read(filePath: string) {
    return readFileSync(filePath, { encoding: 'utf-8' })
  }
}
const fileReader = new FileReader()
const content = readAndProcessFile('', fileReader)
