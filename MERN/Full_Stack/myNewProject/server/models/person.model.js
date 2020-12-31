const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PersonSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
}, {timestamps: true});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person