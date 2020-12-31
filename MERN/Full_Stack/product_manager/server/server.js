const port = 8000
const dbName = "products"
const cors = require("cors")
const express = require("express")

require("./config/mongoose.config")(dbName)

const app = express()

app.use(express.json())
app.use(cors())

require("./routes/product.routes")(app)

app.listen(port, () => console.log(`Listening on port ${port} for REQuests and RESponses`))