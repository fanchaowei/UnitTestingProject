import { expect, test, describe, beforeEach, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from './todo'
import axios from 'axios'
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from '../server'

describe('todo store', () => {
  vi.mock('axios')

  beforeEach(() => {
    // pinia 提供的测试用
    setActivePinia(createPinia())
  })

  test('adds a todo', async () => {
    // 准备数据
    const todoStore = useTodoStore()

    // 模拟 axios 的 post 方法
    vi.mocked(axios.post).mockImplementation(
      async (path: string, { title }: any) => {
        return Promise.resolve({
          data: {
            data: {
              todo: {
                id: 1,
                title: title,
              },
            },
            state: true,
          },
        })
      }
    )

    // 调用方法
    await todoStore.addTodo('heihei')
    // 断言验证
    expect(todoStore.todos[0].title).toBe('heihei')
  })

  it('remove a todo', async () => {
    const todoStore = useTodoStore()
    // mockImplementationOnce 只会 mock 一次
    vi.mocked(axios.post).mockImplementationOnce(
      async (path: string, { title }: any) => {
        return Promise.resolve({
          data: {
            data: {
              todo: {
                id: 1,
                title: title,
              },
            },
            state: true,
          },
        })
      }
    )

    // 调用方法
    await todoStore.addTodo('heihei')

    vi.mocked(axios.post).mockImplementationOnce(
      async (path: string, { id }: any) => {
        return Promise.resolve({
          data: {
            data: {
              id,
            },
            state: true,
          },
        })
      }
    )

    await todoStore.removeTodo(1)
    expect(todoStore.todos.length).toBe(0)
  })
})
