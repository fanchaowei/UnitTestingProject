import { User, IUserData } from './UserData'

export class UserService {
  private _database: IUserData
  constructor(database: IUserData) {
    this._database = database
  }

  createUser(name: string) {
    const id = Number((Math.random() * 1000).toFixed(0))
    const user: User = {
      id,
      name,
    }
    this._database.addUser(user)
    return user
  }

  getUser(id: number) {
    return this._database.getUser(id)
  }
}
