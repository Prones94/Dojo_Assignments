const port = 8000
const dbName = "belt-prep"
const cors = require("cors")
const express = require("express")

require("./config/mongoose.config")(dbName)

const app = express()

app.use(express.json())
app.use(cors())

require("./routes/post.routes")(app)

app.listen(port,() => console.log(`Listening on port ${port} for REQuests to RESpond to.`))