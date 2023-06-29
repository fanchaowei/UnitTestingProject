export type User = {
  id: number
  name: string
}

export interface IUserData {
  addUser(user: User): void
  getUser(id: number): User | undefined
}

export class UserData implements IUserData {
  private users: User[] = []

  addUser(user: User): void {
    this.users.push(user)
  }
  getUser(id: number): User | undefined {
    const user = this.users.find((item) => item.id === id)
    return user
  }
}
