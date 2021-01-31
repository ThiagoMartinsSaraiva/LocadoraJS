const { Router } = require('express')

const moviesRouter = Router()

moviesRouter.get('/', (request, response) => {
  response.json({ message: 'Movies is working' })
})

moviesRouter.get('/:id', (request, response) => {
  const { id } = request.params
  response.json({ message: `movie ${id} is working` })
})

moviesRouter.post('/', (request, response) => {
  response.json({ message: 'Movies insert is working' })
})

moviesRouter.put('/:id', (request, response) => {
  response.json({ message: 'Movies updating is working' })
})

moviesRouter.delete('/:id', (request, response) => {
  response.json({ message: 'Movies deleting is working' })
})

module.exports = moviesRouter