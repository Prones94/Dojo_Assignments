const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        }
    },
    {timestamps: true}
)

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;