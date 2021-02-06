const knex = require('../database')

class Movie {
  table = knex.table('movies')
}

module.exports = Movie
