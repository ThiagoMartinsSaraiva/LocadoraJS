require('dotenv').config()

const knex = require('knex')({
	client: 'mysql',
	connection:{
		host: process.env.DBHOST,
		user: process.env.DBUSER,
		password: process.env.DBPASSWORD,
		database: process.env.DBNAME
	}
})

module.exports = {
	async adicionarFilme(filme){
		try {
			return await knex('filme').insert(filme)
		} catch (err) {
			throw new Error(err.sqlMessage)
		}
	},
	async obterFilmePorId(id) {
		try {
			return await knex('filme').where({id}).first().select()
		} catch(err) {
			throw new Error(err.sqlMessage)
		}
	},
	async obterTodosFilmes() {
		try {
			return await knex('filme').select()
		} catch(err) {
			throw new Error(err.sqlMessage)
		}
	},
	async atualizarFilme(id, data) {
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
	},
	async excluirFilme(id) {
		try {
			return await knex('filme').where({id}).delete()
		} catch(err) {
			throw new Error(err.sqlMessage)
		}
	}
}