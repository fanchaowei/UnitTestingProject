import { describe, expect, it } from 'vitest'
import {
  ReadAndProcessFile,
  IFileReader,
  ReadAndProcessFile2,
  ReadAndProcessFile3,
} from '../readAndProcessFile'

describe('依赖注入', () => {
  it('构造函数', () => {
    class StubFileReader implements IFileReader {
      read(filePath: string) {
        return '测试'
      }
    }

    const content = new ReadAndProcessFile(new StubFileReader()).read('')
    expect(content).toBe('测试 -> 额外内容')
  })

  it('属性', () => {
    class StubFileReader implements IFileReader {
      read(filePath: string) {
        return '测试'
      }
    }

    const reader = new ReadAndProcessFile2()
    // set 赋值
    reader.fileReader = new StubFileReader()
    const content = reader.read('')
    expect(content).toBe('测试 -> 额外内容')
  })

  it('方法', () => {
    class StubFileReader implements IFileReader {
      read(filePath: string) {
        return '测试'
      }
    }

    const reader = new ReadAndProcessFile3()
    // set 赋值
    reader.setFileReader(new StubFileReader())
    const content = reader.read('')
    expect(content).toBe('测试 -> 额外内容')
  })
})
