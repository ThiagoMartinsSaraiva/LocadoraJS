const { hash } = require('bcryptjs');
const knex = require('../database')

class UserRepository {
  constructor() {
    this.table = 'users'
  }

  async getByUsername(username) {
    return await knex.table(this.table).where({ username })
  }

  async create({ username, password }){
    const hashedPassword = await hash(password, 8);

		const user = {
			username,
      password: hashedPassword,
		}

		const createdUser = await knex.table(this.table).insert(user)
		const [id] = createdUser

		user.id = id

		return user
  }
}

module.exports = UserRepository
