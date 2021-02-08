const { Router } = require('express')
const AuthenticateUserService = require('../services/AuthenticateUserService')
const moviesRouter = require('./movies.routes')
const userRouter = require('./user.routes')

const router = Router()

router.get("/", (request, response) => {
  return response.json({ message: "API is Working" })
})

router.use('/users', userRouter)

router.use('/movies', moviesRouter)

module.exports = router