const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    email: {
        type: Mixed,
        required: true
    },
    username: {
        type: Mixed,
        required: true
    },
    password: {
        type: Mixed,
        required: true       
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    postal_code: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    created_at: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema);