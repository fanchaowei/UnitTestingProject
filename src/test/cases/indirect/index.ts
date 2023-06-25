import { userAge } from './utils'
import { getInnerHeight } from './utils'

export function doubleUserAge() {
  return userAge() * 2
}

export function processEnvFunc() {
  return process.env.NODE_ENV
}
export function importMetaEnvFunc() {
  return import.meta.env.VITE_NODE_ENV
}

export function globalFunc() {
  return getInnerHeight() + 1
}

export function getInnerHeight() {
  return innerHeight
}
