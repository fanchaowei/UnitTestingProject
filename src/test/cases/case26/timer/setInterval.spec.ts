import { describe, it, expect, vi, afterEach } from 'vitest'
import { sayHi } from './setInterval'

describe('setInterval', () => {
  it('first', () => {
    vi.useFakeTimers()
    vi.spyOn(console, 'log')
    sayHi()
    vi.advanceTimersToNextTimer()
    vi.useRealTimers()
    expect(console.log).toBeCalledWith('hi')
  })
})
