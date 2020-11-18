const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required."],
        minLength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required."],
        default: 0,
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least {MINLENGTH}"],
    }
})

const Products = mongoose.model("Products", ProductSchema)

module.exports = Products