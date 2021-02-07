const { Router } = require('express')
const MoviesRepository = require('../repositories/MoviesRepositories')

const moviesRouter = Router()

const moviesRepositories = new MoviesRepository()

moviesRouter.get('/', async (request, response) => {
  try {
    const movies = await moviesRepositories.all()
    return response.json({ movies })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const movies = await moviesRepositories.getById(id)

    return response.json({ movies })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.post('/', async (request, response) => {
  try {
    const { title, synopsis, duration } = request.body
    const movie = await moviesRepositories.create({ title, synopsis, duration })

    return response.json({ movie })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.put('/:id', (request, response) => {
  response.json({ message: 'Movies updating is working' })
})

moviesRouter.delete('/:id', (request, response) => {
  response.json({ message: 'Movies deleting is working' })
})

module.exports = moviesRouter