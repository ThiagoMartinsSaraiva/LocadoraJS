const UserRepository = require("../repositories/UserRepository")
const { compare } = require('bcryptjs')

class AuthenticateUserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute({ username, password }) {
    const [user] = await this.userRepository.getByUsername(username)

    if (!user) {
      throw new Error("Usuário ou senha incorretos")
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error("Usuário ou senha incorretos")
    }

    return { user }
  }
}

module.exports = AuthenticateUserService
