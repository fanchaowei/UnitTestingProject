import { vi, it, describe, expect, afterEach } from 'vitest'
import { importMetaEnvFunc, processEnvFunc } from '.'

describe('env', () => {
  afterEach(() => {
    // 还原环境变量
    vi.unstubAllEnvs()
  })

  it('process.env', () => {
    // process.env.NODE_ENV = 'test'
    // 设置环境变量
    vi.stubEnv('NODE_ENV', 'test')
    const r = processEnvFunc()
    expect(r).toBe('test')
  })

  it('import.meta.env', () => {
    vi.stubEnv('VITE_NODE_ENV', 'test1')
    const r = importMetaEnvFunc()
    expect(r).toBe('test1')
  })
})
