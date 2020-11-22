const express = require('express')
const cors = require('cors')
const app = express()
const dbName= "players"
const port = 8000

require('./config/mongoose.config')(dbName)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./routes/player.route')(app)

app.listen(port, () =>  {
    console.log(`Listening on port ${port} for REQuests to RESpond to`);
})