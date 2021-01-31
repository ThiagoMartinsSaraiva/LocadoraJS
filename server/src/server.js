const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/index.routes')

const port = process.env.PORT || 3001
require('./database')

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(port, () => console.log(`Server running on port ${port}`))