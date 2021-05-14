const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
    topFiveIngridients: {
        type: String,
        ref: 'Ingredients'
    }, 
    totalMoneyEarned: {
        type: Number,
        ref: 'Ingredients'
    }
})

const Statistics = mongoose.model('Statistics', statisticsSchema)
module.exports = Statistics