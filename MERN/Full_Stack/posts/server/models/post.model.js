const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
        },
        description: {
            type: String,
        },
        primaryCategory: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
        },
        secondaryCategory: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
        },
        imgUrl: {
            type: String,
            required: [true, "{PATH} is required"],
        },
        likeCount: {
            type: Number,
            default:  0,
        }
    },
    {timestamps:true}
)

const Post = mongoose.model("Post", PostSchema)

module.exports = Post