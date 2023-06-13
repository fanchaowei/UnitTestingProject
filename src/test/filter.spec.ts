import { it, describe } from 'vitest'

// only, 只执行这个测试
it.only('filter only', () => {})
describe.only('only', () => {})

// skip, 跳过这个测试
it.skip('filter skip', () => {})
describe.skip('skip', () => {})

// todo, 相当于注释, 实际使用的场合，我们可以先一一用 todo 列举我们要创建的测试，当实现完就去掉 todo
it.todo('filter todo', () => {})
describe.todo('filter todo', () => {})
