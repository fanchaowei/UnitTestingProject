import { it, describe, expect } from 'vitest'
import { UserData } from './UserData'
import { UserService } from './UserService'

describe('state', () => {
  it('first', () => {
    const database = new UserData()
    const userService = new UserService(database)
    const user = userService.createUser('测试')
    expect(userService.getUser(user.id)).toEqual(user)
  })
})
