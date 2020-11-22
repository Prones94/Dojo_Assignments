const Player = require('../models/player.model')

module.exports = {
    getAll(req, res) {
        console.log('Getting all players');
        Player.find()
            .then(players => {
                res.json(players)
            })
            .catch(err => {
                res.json(err)
            })
    },
    getOne(req,res){
        console.log(`Getting one player: ${req.params.id}`);
        Player.findById(req.params.id)
            .then(player => {
                res.json(player)
            })
            .catch(err => {
                res.json(err)
            })
    },
    create(req,res){
        console.log('Creating new player');
        Player.create(req.body)
            .then(player => {
                res.json(player)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    update(req, res) {
        console.log(`Updating one player: ${req.params.id}`);
        Player.findByIdAndUpdate(req.params.id, req.body, {
            runValidators:true,
            new:true
        })
        .then(player => {
            res.json(player)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    },
    delete(req, res){
        console.log(`Deleting one player: ${req.params.id}`);
        Player.findByIdAndDelete(req.params.id)
            .then(player => {
                res.json(player)
            })
            .catch(err => {
                res.json(err)
            })
    }
}