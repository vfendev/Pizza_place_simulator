const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: true,
        ref: 'ingredients'
    },
    size: {
        type: String,
        trim: true,
        required: true,
        default: "Small"
    },
    time: {
        type: Number,
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
     }
}, {
    timestamps: true
})

const Orders = mongoose.model('Orders', taskSchema)
module.exports = Orders