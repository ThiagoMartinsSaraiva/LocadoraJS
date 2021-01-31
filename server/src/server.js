const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/index.routes')

const port = process.env.PORT || 3000
// const database = require('./database')

app.use(cors())
app.use(express.json())

app.use(routes)

app.get("/", (request, response) => {
  response.json({ message: "it's working!" })
})

app.listen(port, () => console.log(`Server running on port ${port}`))