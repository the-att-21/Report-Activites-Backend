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

        class_name: {
            type: String,
            default: 'null'
        },

        activity_name: {
            type: String,
            required: true
        },

        mode_of_attendance: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        start_date: {
            type: Date,
            // required: true
        },

        end_date: {
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

        participants_count: {
            type: Number,
            required: true
        },

        outcomes: {
            type: String,
            required: true
        },

        file: {
            type: String,
            // required: true
        }
    }, { timestamps: true }
);

const form = mongoose.model('Form', formSchema)
module.exports = form