const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const database = require('./database')

app.use(cors())
// app.use(bodyParser.json())

app.get('/filme', (req, res) => {
  res.json(database.getAllFilmes())
})

// app.get('/filme/:id', (req, res) => {
//   console.log(req.params['id'])
//   res.json(database.getFilme(req.params["id"]))
// })

app.get('/filme/criar', (req , res) =>{
  console.log('GET /filme')
  return res.json(req.body)
  // return res.json('filme')
})

app.listen(port, () => console.log(`Server running on port ${port}`))