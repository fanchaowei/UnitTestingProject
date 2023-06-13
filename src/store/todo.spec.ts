import { expect, test, describe, beforeEach, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from './todo'

describe('todo store', () => {
  beforeEach(() => {
    // pinia 提供的测试用
    setActivePinia(createPinia())
  })

  test('adds a todo', () => {
    // 准备数据
    const todoStore = useTodoStore()
    // 调用方法
    todoStore.addTodo('heihei')
    // 断言验证
    expect(todoStore.todos[0].title).toBe('heihei')
  })
})

it('expect', () => {
  // 相当于 ===
  expect(1).toBe(1)

  const obj1 = {
    name: '111',
  }
  const obj2 = {
    name: '111',
  }
  // 用于对象的比对
  expect(obj1).toEqual(obj2)
  // 判断是否等于真值
  expect(true).toBeTruthy()
  // 判断是否等于假值
  expect(false).toBeFalsy()

  // 判断数组或字符内是否存在某个元素
  const arr1 = [obj1, obj2]
  expect(arr1).toContain(obj1)
  expect(`<div>1234</div>`).toContain('1234')

  const fun1 = () => {
    throw new Error('报错')
  }
  // 判断是否报错, toThrow 内部还可以填写去验证报错的信息是否正确
  expect(() => {
    fun1()
  }).toThrow()
})
