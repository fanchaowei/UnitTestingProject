import { describe, expect, it } from 'vitest'
import { readAndProcessFile } from '../readAndProcessFile'

describe('依赖注入', () => {
  it('first', () => {
    // 模拟一个 fileReader
    class StubFileReader {
      read(filePath: string) {
        return '测试'
      }
    }
    const fileReader = new StubFileReader()
    expect(readAndProcessFile('', fileReader)).toBe('测试 -> 额外内容')
  })
})
