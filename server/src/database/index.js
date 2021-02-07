const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'locadora',
	}
})

module.exports = knex