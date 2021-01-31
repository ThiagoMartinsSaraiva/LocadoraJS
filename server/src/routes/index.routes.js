const { Router } = require('express')
const moviesRouter = require('./movies.routes')

const routes = Router()

routes.use('/movies', moviesRouter)

module.exports = routes