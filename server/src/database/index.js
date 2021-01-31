require('dotenv').config()

require('knex')({
	client: 'mysql',
	connection: {
		host: process.env.DBHOST,
		user: process.env.DBUSER,
		password: process.env.DBPASSWORD,
		database: process.env.DBDATABASE,
	}
})