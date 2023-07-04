import { describe, it, expect, vi, afterEach } from 'vitest'
import { User } from './setTimeout'

describe('setTimeout', () => {
  afterEach(() => {
    vi.useRealTimers()
  })
  it('first', () => {
    // 将时间固定，这样就能得到固定的输出用于测试
    vi.useFakeTimers()
    const user = new User('1')
    const callback = vi.fn()
    user.fetchData(callback, 100)

    // 使时间快进 100 毫秒
    // vi.advanceTimersByTime(100)
    // 跳转到下一个定时器的回调
    // vi.advanceTimersToNextTimer()
    // 使所有定时器回调立即执行
    vi.runAllTimers()

    expect(callback).toBeCalledWith('Data for user with id: 1')
  })
})
