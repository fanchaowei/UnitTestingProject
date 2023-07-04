export function fetchUserData() {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}

export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, time)
  })
}

export class View {
  count = 1
  render() {
    Promise.resolve()
      .then(() => {
        this.count = 2
      })
      .then(() => {
        this.count = 3
      })
  }
}
