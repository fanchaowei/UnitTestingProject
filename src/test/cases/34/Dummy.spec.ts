/// <reference path="./Dummy.d.ts" />

import { it, describe } from 'vitest'
import { sendMessage } from './Dummy'

describe('Dummy', () => {
  it('Dummy', () => {
    const message: Message = {
      subject: 'Hello',
      body: 'World',
    }

    // 创建一个 dummy 哑元对象
    const dummyRecipient: Recipient = {} as Recipient
    // 因为这个函数需要两个参数，但是我只测试第一个参数
    sendMessage(message, dummyRecipient)
  })
})
