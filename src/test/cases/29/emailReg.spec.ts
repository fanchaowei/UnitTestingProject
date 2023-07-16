import { describe, it, expect } from 'vitest'
import { emailValidator } from './emailReg'

describe('emailReg', () => {
  // 数组方式
  it.each([
    ['example@example.com', true],
    ['john.doe123@gmail.com', true],
    ['test_user@my-domain.co.uk', true],
    ['user1234@hotmail.com', true],
    ['info@example', false],
    ['info.example.com', false],
  ])(`%s should be %s`, (email, expected) => {
    // %s 是占位符，会被 email 和 expected 替换
    expect(emailValidator(email)).toBe(expected)
  })

  // 对象方式
  it.each([{ email: 'example@example.com', expected: true }])(
    `$email should be $expected`,
    ({ email, expected }) => {
      // %s 是占位符，会被 email 和 expected 替换
      expect(emailValidator(email)).toBe(expected)
    }
  )

  // 模版字符串方式
  it.each`
    email                    | expected
    ${'example@example.com'} | ${true}
  `(`$email should be $expected`, ({ email, expected }) => {
    // %s 是占位符，会被 email 和 expected 替换
    expect(emailValidator(email)).toBe(expected)
  })
})
