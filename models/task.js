const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    ingredients: {
        type: String,
        trim: true,
        required: true
    },
    size: {
        type: Number,
        trim: true,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    }, 
     address: {
        type: String,
        trim: true,
        required: true
     },
     phoneNumber: {
        type: Number,
        required: true
     }
}, {
    timestamps: true
})

const Tasks = mongoose.model('Pizza orders', taskSchema)
module.exports = Tasks