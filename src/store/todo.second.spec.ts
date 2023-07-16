import { expect, test, describe, beforeEach, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from './todo'
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from '../server'

describe('改写 mock 的函数', () => {
  vi.mock('../server/index.ts')

  beforeEach(() => {
    // pinia 提供的测试用
    setActivePinia(createPinia())
  })

  test('adds a todo', async () => {
    // 准备数据
    const todoStore = useTodoStore()

    // 模拟 axios 的 post 方法
    vi.mocked(fetchAddTodo).mockImplementation(async ({ title }: any) => {
      return Promise.resolve({
        data: {
          todo: {
            id: 1,
            title: title,
          },
        },
        state: true,
      })
    })

    // 调用方法
    await todoStore.addTodo('heihei')
    // 断言验证
    expect(todoStore.todos[0].title).toBe('heihei')
  })
})
