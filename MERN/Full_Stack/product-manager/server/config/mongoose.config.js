const mongoose = require("mongoose")

module.exports = dbName => {
    mongoose
        .connect(`mongodb://localhost/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log(`Connected successfully to ${dbName}`))
        .catch(err => console.log(err))
}