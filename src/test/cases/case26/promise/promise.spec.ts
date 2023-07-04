import { describe, it, expect, vi, afterEach } from 'vitest'
import { delay, fetchUserData, View } from '.'
import flushPromises from 'flush-promises'

describe('promise', () => {
  it.skip('normal', async () => {
    const res = await fetchUserData()
    expect(res).toBe(1)
  })

  it('promise + setTimeout', async () => {
    vi.useFakeTimers()
    const res = delay(1000)
    vi.advanceTimersToNextTimer()
    expect(res).resolves.toBe('ok')
  })

  it('promise 的 then 多层嵌套', async () => {
    const view = new View()
    await view.render()
    // await flushPromises()
    // await setTimeout(() => {})  // flush-promises 本质上就是执行了一个 setTimeout
    expect(view.count).toBe(3)
  })
})
