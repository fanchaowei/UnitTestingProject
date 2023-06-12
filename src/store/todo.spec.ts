import { expect, test, describe, beforeEach } from 'vitest'
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
