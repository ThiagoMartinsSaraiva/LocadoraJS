const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const database = require('./database')

app.use(cors())
app.use(bodyParser.json())

app.get('/filme', (req, res) => {
  database.obterTodosFilmes()
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

app.get('/filme/:id', (req, res) => {
  database.obterFilmePorId(req.params["id"])
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

app.post('/filme', (req, res) => {
  database.adicionarFilme(req.body)
  res.json(req.body)
})

app.put('/filme/:id', (req, res) => {
  database.atualizarFilme(req.params["id"], req.body)
  res.json(req.body)
})

app.delete('/filme/:id', (req, res) => {
  database.excluirFilme(req.params["id"])
  res.json('excluído com sucesso')
})

app.listen(port, () => console.log(`Server running on port ${port}`))