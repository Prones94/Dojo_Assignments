const port = 8000
const dbName = "product-manager"
const cors = require('cors')
const express = require("express")

// Requiring a file will execute the code in that file, and if the file has an export, that will be exported
require('./server/config/mongoose.config')(dbName)

const app = express()
require("./server/routes/product.routes")(app)

// WITHOUT THIS req.body will be undefined (form data/body submission)
app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Listening on port ${port} `))