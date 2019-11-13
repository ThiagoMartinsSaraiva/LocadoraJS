const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const database = require('./database')

app.use(cors())
app.use(bodyParser.json())

app.get('/filme', (req, res) => {
  res.send(database.getAllFilmes)
})

app.get('/filme/:id', (req, res) => {
  res.send(database.getFilme(req.params.id))
})

app.post('/filme', (req , res) =>{
  console.log(req.body)
  // const filme = database.saveFilme({
  //   nome : req.body.nome,
  //   avaliacao : req.body.avaliacao,
  //   duracao : req.body.duracao
  // })
  console.log('POST /filme')
  return res.json('filme')
})

app.listen(port, () => console.log(`Server running on port ${port}`))