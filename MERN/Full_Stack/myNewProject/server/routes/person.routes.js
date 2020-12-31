const PersonController = require('../controllers/person.controller');
// const PersonController = require('../controllers/person.controller');

module.exports = function(app) {
    app.get('/api', PersonController.index);
    app.get("/api/people", PersonController.getAllPeople);
    app.post('/api/people', PersonController.createPerson);
    app.get("/api/people/:id", PersonController.getPerson);
    app.delete("/api/people/:id", PersonController.deletePerson)
    app.put('/api/people/:id', PersonController.updatePerson)
}