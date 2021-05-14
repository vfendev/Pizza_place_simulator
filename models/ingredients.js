const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        trim: true,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        default: 0
    }

})

const Ingredients = mongoose.model('ingredients', ingredientsSchema)
module.exports = Ingredients