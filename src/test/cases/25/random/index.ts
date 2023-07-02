// 返回一个随机字符串
export function generateRandomString(length: number): string {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export function checkFriday(): string {
  const today = new Date()
  if (today.getDay() === 5) {
    return '开心'
  } else {
    return '不开心'
  }
}
