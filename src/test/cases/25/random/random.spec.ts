import { describe, it, expect, vi } from 'vitest'
import { generateRandomString, checkFriday } from '.'

describe('random', () => {
  it('first', () => {
    // 将随机数固定，这样就能得到固定的输出用于测试
    vi.spyOn(Math, 'random').mockImplementation(() => 0.1)
    const str = generateRandomString(2)
    expect(str).toBe('GG')
  })

  it('date time is friday', () => {
    // 将时间固定，这样就能得到固定的输出用于测试
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2023, 3, 21))
    expect(checkFriday()).toBe('开心')
    // 恢复真实时间
    vi.useRealTimers()
  })

  it('date time is not friday', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2023, 3, 22))
    expect(checkFriday()).toBe('不开心')
    vi.useRealTimers()
  })
})
