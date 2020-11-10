const jokeController = require ("../controllers/joke.controllers");

module.exports = app => {
    app.get("/api/jokes", jokeController.getAll); // Route for all jokes
    app.get("/api/jokes/:id", jokeController.getOneJoke) // Route for single joke
    app.get("/api/jokes/random", jokeController.randomJoke) // random joke route
    app.post("/api/jokes/new", jokeController.createJoke) // Create new joke
    app.put("/api/jokes/update/:id", jokeController.updateJoke) // Update Joke route
    app.delete("api/jokes/delete/:id", jokeController.deleteJoke) // Delete single joke
}