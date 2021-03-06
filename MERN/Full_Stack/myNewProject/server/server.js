const express = require('express')
const dbName = "pe"
const cors = require('cors')
require('./config/mongoose.config')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const port = 8000

require('./routes/person.routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))