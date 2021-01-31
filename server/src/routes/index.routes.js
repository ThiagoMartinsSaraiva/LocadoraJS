const { Router } = require('express')
const moviesRouter = require('./movies.routes')

const router = Router()

router.get("/", (request, response) => {
  response.json({ message: "API is Working" })
})

router.post('/login', (request, response) => {
  response.json({ message: 'logado com sucesso!' })
})

router.use('/movies', moviesRouter)

module.exports = router