import { beforeEach, beforeAll, afterEach, afterAll, it } from 'vitest'

// setup: beforeEach, beforeAll
// teardown: afterEach, afterAll
// beforeEach 和 afterEach 会在每个 test/it 测试执行的时候执行一次
// 而 beforeAll 和 afterAll 只会执行一次
// 它们的执行顺序是： beforeAll beforeEach test/it afterEach afterAll

beforeAll(() => {
  console.log('this is beforeAll')
  return () => {
    // 这也是 afterAll，外部的 afterAll 会先执行
    console.log('this is afterAll')
  }
})
beforeEach(() => {
  console.log('this is beforeEach')
  return () => {
    // 这也是 afterEach, 外部的 afterEach 会先执行
    console.log('this is afterEach')
  }
})
afterEach(() => {
  console.log('this is afterEach')
})
afterAll(() => {
  console.log('this is afterAll')
})
it('it', () => {
  console.log('this is it')
})
