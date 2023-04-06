const { timeStamp } = require('console');
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        branch: {
            type: String,
            default: null,
            required: true
        }
    }, { timestamps: true }
);

const user = mongoose.model('User', userSchema)
module.exports = user