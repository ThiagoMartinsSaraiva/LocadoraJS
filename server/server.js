const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const database = require('./database')

app.use(cors())
app.use(bodyParser.json())

app.get('/filme', (req, res) => {
  res.json(database.obterTodosFilmes())
})

app.get('/filme/:id', (req, res) => {
  res.json(database.obterFilmePorId(req.params["id"]))
})

app.post('/filme', (req, res) => {
  database.adicionarFilme(req.body)
})

app.put('/filme/:id', (req, res) => {
  database.atualizarFilme(req.body)
})

app.delete('/filme/:id', (req, res) => {
  database.excluirFilme(id)
})

app.listen(port, () => console.log(`Server running on port ${port}`))