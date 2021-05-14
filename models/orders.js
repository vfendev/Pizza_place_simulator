const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    ingredients: {
        type: Array,
        trim: true,
        required: true
    },
    size: {
        type: Number,
        trim: true,
        required: true,
        default: 1
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
        type: String,
        required: true
     },
     status: {
         type: String,
         default: 'In_progres'
     },
     price: {
         type: Number
     },
     time: {
         type: Number
     }
}, {
    timestamps: true
})

const Orders = mongoose.model('Orders', taskSchema)
module.exports = Orders