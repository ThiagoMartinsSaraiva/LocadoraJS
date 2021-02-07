const knex = require("../database")
class MoviesRepository {
	constructor() {
		this.table = 'movies'
	}

	async create({ title, synopsis, duration }){
		const movie = {
			title,
			synopsis,
			duration
		}

		const createdMovie = await knex.table(this.table).insert(movie)
		const [id] = createdMovie

		movie.id = id

		return movie
  }

	async getById(id) {
		return await knex.table(this.table).where({ id })
  }

	async all() {
		return await knex.table(this.table).select()
  }

	async update(id, data) {
		try {
			if (data.id) delete data.id
			if (id > 0) {
				let filme = await this.obterFilmePorId(id)
				if (filme) {
					return await knex('filme').where({id}).update(data)
				}
			}
		} catch(err) {
			throw new Error(err.sqlMessage)
		}
  }

	async delete(id) {
		try {
			return await knex('filme').where({id}).delete()
		} catch(err) {
			throw new Error(err.sqlMessage)
		}
	}
}

module.exports = MoviesRepository