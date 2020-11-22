const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlayerSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must have at least {MINLENGTH} characters"]
        },
        position: {
            type: String
        },
        gameOne: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        },
        gameTwo: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        },
        gameThree: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        }
    }, { timestamps: true}
);

const Player = mongoose.model("Player", PlayerSchema)

module.exports = Player