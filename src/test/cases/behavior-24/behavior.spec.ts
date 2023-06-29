import { it, describe, expect, vi } from 'vitest'
import { UserData } from './UserData'
import { UserService } from './UserService'

describe('behavior', () => {
  it('first', () => {
    const database = new UserData()
    const userService = new UserService(database)
    // mock database.addUser 方法
    vi.spyOn(database, 'addUser')
    // UserData.prototype.addUser = vi.fn()
    console.log(database.addUser)

    userService.createUser('测试')
    // 是否被调用
    expect(database.addUser).toBeCalled()
  })
})
