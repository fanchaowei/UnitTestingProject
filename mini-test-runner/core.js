// mini-test 的 api

const only = []
const tests = []
const beforeAlls = []
const beforeEachs = []
const afterAlls = []
const afterEachs = []

export function test(name, callback) {
  tests.push({ name, callback })
}

test.only = (name, callback) => {
  only.push({ name, callback })
}

export const it = test

export function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
      } else {
        throw new Error(`fail. actual:${actual}, expected:${expected}`)
      }
    },
  }
}

export function describe(name, callback) {
  callback()
}

export function beforeAll(callback) {
  beforeAlls.push(callback)
}
export function beforeEach(callback) {
  beforeEachs.push(callback)
}
export function afterAll(callback) {
  afterAlls.push(callback)
}
export function afterEach(callback) {
  afterEachs.push(callback)
}

export function run() {
  beforeAlls.forEach((callback) => callback())
  const suit = only.length ? only : tests

  for (const test of suit) {
    beforeEachs.forEach((callback) => callback())
    try {
      test.callback()
      console.log(`OK: ${test.name}`)
    } catch (e) {
      console.log(`FAIL: ${test.name}`)
      console.log(e)
    }
    afterEachs.forEach((callback) => callback())
  }
  afterAlls.forEach((callback) => callback())
}
