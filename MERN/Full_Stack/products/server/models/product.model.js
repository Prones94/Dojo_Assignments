const mongoose = require("mongoose")

const ProductManagerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "{PATH} is required"],
        },
        price: {
            type:String,
            required: [true, "{PATH} is required"],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [5, "{PATH} must be at least {MINLENGTH} characters"]
        }
    },
    {timestamps: true}
)

const ProductManager = mongoose.model("ProductManager", ProductManagerSchema)

module.exports = ProductManager