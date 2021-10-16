const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category_id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Product', ProductSchema, 'products')