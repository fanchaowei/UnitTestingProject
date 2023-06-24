import { vi, it, describe, expect } from 'vitest'
import { doubleUserAge } from './index'
import { userAge } from './utils'

// vi.mock api，学名存根（stub），用于替换掉真实的逻辑实现
// 需要两个参数，第一个参数是模块（文件）的路径，第二个参数是模块的内容
// 依靠这个我们就可以模拟文件输出的内容了

// 全局写法
// vi.mock('./utils.ts', () => {
//   // 这里 return 的，相当于文件  export 出去的内容
//   return {
//     userAge: () => 20,
//   }
// })

// 局部写法，首先先 vi.mock() 但不传入第二个参数
// vi.mock('./utils.ts')

describe('间接数据', () => {
  // it('mock', () => {
  //   // 在局部模拟 userAge 方法
  //   vi.mocked(userAge).mockReturnValue(21)

  //   // 我们模拟了 userAge 方法，所以这里的 userAge 方法返回的是 20
  //   expect(userAge()).toBe(20)
  //   expect(doubleUserAge()).toBe(40)
  // })

  it('doMock', async () => {
    // doMock() 声明之后，不像 mock() 与 mocked() 一样直接生效，需要配合 import() 导入才能生效
    vi.doMock('./utils.ts', () => {
      return {
        userAge: () => 20,
      }
    })
    const { doubleUserAge } = await import('./index')

    const r = doubleUserAge()
    expect(r).toBe(40)
  })
})
