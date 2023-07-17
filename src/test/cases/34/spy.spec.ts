import { test, vi } from 'vitest'
import { User } from './spy'

test('spy', () => {
  vi.spyOn(User, 'getName').mockImplementation(() => 'mock haha')

  console.log(User.getName)
})
