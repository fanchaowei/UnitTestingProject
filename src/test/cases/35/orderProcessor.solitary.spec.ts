// 独居测试
import { describe, it, expect, vi } from 'vitest'
import { OrderProcessor } from './orderProcessor'
import { sendEmail } from './emailServer'

describe('orderProcessor', () => {
  vi.mock('./emailServer.ts', () => {
    return {
      sendEmail: vi.fn(),
    }
  })

  vi.mock('./inventoryServer.ts', () => {
    return {
      checkStock: () => {
        return true
      },
    }
  })

  it('should process order', () => {
    const order = new OrderProcessor()
    order.processOrder({ name: 'heihei', count: 1 })
    expect(sendEmail).toBeCalled()
  })
})
