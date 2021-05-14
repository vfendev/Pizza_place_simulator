const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
    topFiveIngredients: {
        type: String,
        ref: 'ingredients'
    }, 
    totalMoneyEarned: {
        type: Number,
        ref: 'ingredients'
    }
})

const Statistics = mongoose.model('Statistics', statisticsSchema)
module.exports = Statistics