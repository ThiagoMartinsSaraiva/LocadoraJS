const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const filmes = [
  { nome: 'Avatar', avaliacao: '7', duracao: 170 },
  { nome: 'Joker', avaliacao: '10', duracao: 210 },
  { nome: 'Wolverine', avaliacao: '10', duracao: 180 },
  { nome: 'Dance', avaliacao: '3', duracao: 120 }
]

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Bem-vindo à locadora')
})

app.get('/filme', (req, res) => {
  res.render('filmes', { filmes })
})

app.get('/filme/:id', (req, res) => {
  res.send(`Dados do filme ${req.params['id']}`)
})

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server running on port ${port}`))