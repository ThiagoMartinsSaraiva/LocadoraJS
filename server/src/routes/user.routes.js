const { Router } = require('express')
const UserRepository = require('../repositories/UserRepository')
const AuthenticateUserService = require('../services/AuthenticateUserService')

const userRouter = Router()

const userRepository = new UserRepository()

userRouter.post('/', async (request, response) => {
  try {
    const { username, password } = request.body
    const user = await userRepository.create({ username, password })

    return response.json({ user })
  } catch(err) {
    response.status(400).json({ error: err.message })
  }
})

userRouter.post('/login', async (request, response) => {
  try {
    const { username, password } = request.body
    const authenticateUserService = new AuthenticateUserService()
    const { user } = await authenticateUserService.execute({ username, password })
    
    return response.json({ user })
  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

module.exports = userRouter