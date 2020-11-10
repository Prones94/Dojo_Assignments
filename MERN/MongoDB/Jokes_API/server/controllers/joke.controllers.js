const Joke = require("../models/joke.model")


module.exports  = {
    // Find all Jokes
    getAll(req,res){
        Joke.find()
            .then((jokes) => res.jsnon(jokes))
            .catch(err => `Error: ${res.json(err)}`)
    },
    // Get singular joke
    getOneJoke(req,res){
        Joke.findOne(req.params.id)
            .then(joke => {
                res.json(joke)
            })
            .catch(err => `Error: ${res.json(err)}`)
    },
    // Create a new joke
    createJoke(req, res){
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => `Error: ${res.json(err)}`)
    },
    // Generate random joke
    randomJoke(req,res){
        Joke.aggregate([{$sample: {size: 1}}])
            .then(randomJoke => {
                res.json(randomJoke)
            })
            .catch(err => `Error: ${res.json(err)}`)
    },
     // Update Joke
     updateJoke(req, res){
         Joke.findById(re.params.id, req.body, {
             runValidators: true,
             new: true,
         })
         .then(joke => res.json(joke))
         .catch(err => `Error: ${res.json(err)}`)
     },
     // Delete Joke
     deleteJoke(req, res){
         Joke.findByIdAndRemove(req.params.id)
            .then(res => res.json(joke))
            .catch(err => `Error: ${res.json(err)}`)
     }
}