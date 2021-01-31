const { Router } = require('express')
const moviesRouter = require('./movies.routes')

const routes = Router()

routes.post('/login', (request, response) => {
  response.json({ message: 'logado com sucesso!' })
})

routes.use('/movies', moviesRouter)

module.exports = routes