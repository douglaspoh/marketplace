const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
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
        type: Date,
        default: Date.now
    },
    cartlist: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Customer', CustomerSchema, 'customers');