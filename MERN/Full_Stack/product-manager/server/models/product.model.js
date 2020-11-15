const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // {PATH} will be replaced with field "title"
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [0, "{PATH} must be greater than {MIN}"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [5, "{PATH} must be at least{MINLENGTH} characters"]
    }
}, {timestamps: true}
);

/*
    Tells mongoose what we want our model to be called
    It will take the string and pluralize it for the collection name. The Schema will enforce the structure on this model when we try to create or update it.
*/
const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;