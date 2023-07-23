// 群居测试
import { describe, it, expect, vi } from 'vitest'
import { OrderProcessor } from './orderProcessor'
import { sendEmail } from './emailServer'
import { updateStock } from './inventoryServer'

vi.mock('./emailServer.ts', () => {
  return {
    sendEmail: vi.fn(),
  }
})

describe('orderProcessor', () => {
  it('fitst', () => {
    updateStock({ name: 'haha', count: 2 })
    const order = new OrderProcessor()
    order.processOrder({ name: 'haha', count: 2 })
    expect(sendEmail).toBeCalled()
  })
})
