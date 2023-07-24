import { it } from 'vitest'
import { Window } from 'happy-dom'

it('brower-env', () => {
  const window = new Window()
  // globalThis 是 nodejs 下的全局变量
  // 将 window 赋值给 globalThis.window，这样在测试用例中就可以使用 window 对象了
  globalThis.window = window
})
