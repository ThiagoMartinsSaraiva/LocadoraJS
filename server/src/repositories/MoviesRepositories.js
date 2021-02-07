const knex = require("../database")
class MoviesRepository {
	constructor() {
		this.table = 'movies'
	}

	async all() {
		return await knex.table(this.table).select()
  }

	async getById(id) {
		return await knex.table(this.table).where({ id })
  }

	async create({ title, synopsis, duration }){
		const movie = {
			title,
			synopsis,
			duration,
		}

		const createdMovie = await knex.table(this.table).insert(movie)
		const [id] = createdMovie

		movie.id = id

		return movie
  }

	async update({ id, title, synopsis, duration }) {
		const movie = {
			id,
			title,
			synopsis,
			duration,
		}

		await knex.table(this.table).where({ id }).update(movie)

		return movie
  }

	async delete(id) {
		return await knex(this.table).where({ id }).del()
	}
}

module.exports = MoviesRepository