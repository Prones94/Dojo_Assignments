const mongoose = require('mongoose')

module.exports = dbName => {
    mongoose.connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log(`Successfully connected to ${dbName}`);
    })
    .catch(err => {
        console.log(`Mongoose connection to ${dbName} failed`, err);
    })
}