import { expect, test, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from './todo'
import { server } from '../mock/server'
import { rest } from 'msw'

describe('改写 mock 的函数', () => {
  beforeEach(() => {
    // pinia 提供的测试用
    setActivePinia(createPinia())
  })

  test('adds a todo', async () => {
    // 准备数据
    const todoStore = useTodoStore()

    server.use(
      // 注意，请求路径一定要写全
      rest.post('http://localhost/api/addTodo', async (req, res, ctx) => {
        const { title } = await req.json()
        return res(
          ctx.json({
            data: {
              todo: {
                id: 1,
                title: title,
              },
            },
            state: true,
          })
        )
      })
    )

    // 调用方法
    await todoStore.addTodo('heihei')
    // 断言验证
    expect(todoStore.todos[0].title).toBe('heihei')
  })
})
