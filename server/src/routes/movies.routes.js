const { Router } = require('express')
const MoviesRepository = require('../repositories/MoviesRepository')
const DeleteMovieService = require('../services/DeleteMovieService')
const UpdateMovieService = require('../services/UpdateMovieService')

const moviesRouter = Router()

const moviesRepository = new MoviesRepository()

moviesRouter.get('/', async (request, response) => {
  try {
    const movies = await moviesRepository.all()
    return response.json({ movies })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const movie = await moviesRepository.getById(id)

    return response.json({ movie })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.post('/', async (request, response) => {
  try {
    const { title, synopsis, duration } = request.body
    const movie = await moviesRepository.create({ title, synopsis, duration })

    return response.json({ movie })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const { title, synopsis, duration } = request.body
    const updateMovieService = new UpdateMovieService()
    const movie = await updateMovieService.execute({ id, title, synopsis, duration })

    return response.json({ movie })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

moviesRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deleteMovieService = new DeleteMovieService()
    await deleteMovieService.execute(id)

    return response.status(201).json()
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

module.exports = moviesRouter
