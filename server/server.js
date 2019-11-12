const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bem-vindo à locadora')
})

app.get('/filme', (req, res) => {
  res.send('Lista de filmes')
})

app.get('/filme/:id', (req, res) => {
  res.send(`Dados do filmes ${req.params['id']}`)
})

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server running on port ${port}`))