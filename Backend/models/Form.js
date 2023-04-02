const mongoose = require('mongoose')
const formSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        position: {
            type: String,
            default: 'null'
        },

        department: {
            type: String,
            required: true
        },

        year: {
            type: String,
            default: 'null'
        },

        activity_name: {
            type: String,
            required: true
        },

        mode: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        s_date: {
            type: Date,
            // required: true
        },

        e_date: {
            type: Date,
            // required: true
        },

        location: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        count: {
            type: Number,
            required: true
        },

        outcome: {
            type: String,
            required: true
        },

        file: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

const form = mongoose.model('Form', formSchema)
module.exports = form