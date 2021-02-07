const knex = require('../database')

class UserRepository {
  async login(data) {
    const { username, password } = data
    const user = await knex.select('user').where({ username, password }).first().select()

    if (!user) {
      throw new Error('Fail to login')
    }

    return { user }
  }
}

module.exports = UserRepository
