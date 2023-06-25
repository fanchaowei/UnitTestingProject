import { vi, it, describe, expect, afterEach } from 'vitest'
import { globalFunc } from '.'

vi.mock('./index', async (importOriginal) => {
  const original = await importOriginal()
  const getInnerHeight = () => 200
  const globalFunc = () => {
    return getInnerHeight() + 1
  }
  return {
    ...(original as any),
    getInnerHeight,
    globalFunc,
  }
})

describe('global', () => {
  it.skip('global', () => {
    // 设置全局变量
    vi.stubGlobal('innerHeight', 100)
    const r = globalFunc()
    expect(r).toBe(101)
    // 清除全局变量
    vi.unstubAllGlobals()
  })

  it('mock', () => {
    const r = globalFunc()
    expect(r).toBe(201)
  })
})
