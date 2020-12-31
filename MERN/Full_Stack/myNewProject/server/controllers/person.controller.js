const Person = require('../models/person.model')


module.exports = {
    index: function(req,res){
        res.json({
            message:"Hello World"
        })
    },
    createPerson: function(req, res) {c
        console.log("Create method used")
        const { firstName, lastName} = req.body;
        Person.create({
            firstName,
            lastName
        })
        then(person => res.json(person))
        .catch(err => res.json(err))
    },
    getAllPeople(req,res) {
        console.log("Getting all people")
        Person.find()
            .then(person => res.json(person))
            .catch(err => res.json(err))
    },
    getPerson(req,res) {
        console.log("Getting one person")
        Person.findById(req.params.id)
        .then(person => res.json(person))
        .catch(err => res.json(err))
    },
    deletePerson(req,res){
        console.log("Deleting one person")
        Person.findByIdAndDelete(req.params.id)
            .then(person => res.json(person))
            .catch(err => res.status(400).json(err))
    },
    updatePerson(req, res){
        console.log("Updating person data")
        Person.findByIdAndUpdate(req.params.id, req.body, {
            runValidators:true,
            new:true,
        })
        .then(person => res.json(person))
        .catch(err => res.json(err))
    }
}

// module.exports.index = ((req, res) => {
//     res.json({
//         message: "Hello World"
//     })
// })

// module.exports.createPerson = (req, res) => {
//     const { firstName, lastName } = req.body;
//     Person.create({
//         firstName,
//         lastName
//     })
//     .then(person => res.json(person))
//     .catch(err => res.json(err))
// }

// module.exports.getAllPeople = (req,res) => {
//     Person.find({})
//         .then(person => res.json(person))
//         .catch(err => res.json(err))
// }

// module.exports.getPerson = (req, res) => {
//     Person.findOne({_id:request.params.id})
//         .then(person => res.json(person))
//         .catch(err => res.json(err))
// }

// mooudle