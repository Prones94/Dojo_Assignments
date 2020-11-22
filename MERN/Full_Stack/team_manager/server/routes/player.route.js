const PlayerController = require('../controllers/player.controller')
const Player = require('../models/player.model')

module.exports = app => {
    app.get('/api/players', PlayerController.getAll)
    app.get('/api/players/:id', PlayerController.getOne)
    app.post('/api/players/create', PlayerController.create)
    app.put('/api/players/:id', PlayerController.update)
    app.delete('/api/players/:id', PlayerController.delete)
}