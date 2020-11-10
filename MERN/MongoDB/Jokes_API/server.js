const express = require("express")
const app = express()
const mongoose = require('mongoose')
const port = 8000
const dbName = "jokes"

require('./server/config/mongoose.config')(dbName)

app.use (express.json(), express.urlencoded({ extended: true }));

const AllJokesRoutes = require('./server/routes/user.routes')
AllJokesRoutes(app)

// Check if server is running
app.get("/", (req, res) => {
    res.send('This is working from my server')
})
app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to`))
