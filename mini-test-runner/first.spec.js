import {
  test,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from './core.js'

beforeAll(() => {
  console.log('this is beforeAll')
})
beforeEach(() => {
  console.log('this is beforeEach')
})
afterAll(() => {
  console.log('this is afterAll')
})
afterEach(() => {
  console.log('this is afterEach')
})

test('first', () => {
  expect(2).toBe(2)
})

// test('error', () => {
//   expect(1).toBe(2)
// })

// test.only('only', () => {
//   console.log('this is only')
// })

// run()
