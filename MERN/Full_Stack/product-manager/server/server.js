const port = 8000
const dbName = "product-manager"
const cors = require('cors')
const express = require("express")

// Requiring a file will execute the code in that file, and if the file has an export, that will be exported
require('./config/mongoose.config')(dbName)

const app = express()
require("./routes/product.routes")(app)

// WITHOUT THIS req.body will be undefined (form data/body submission)
app.use(express.json())
app.use(cors())

require("./routes/product.routes")(app)

app.listen(port, () => console.log(`Listening on port ${port} `))