import { beforeAll, afterAll, afterEach } from 'vitest'
import { server } from './src/mock/server'
beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
