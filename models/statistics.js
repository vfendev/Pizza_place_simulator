const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
    topFiveIngridients: {
        type: Array,
        ref: 'Ingredients'
    }, 
    totalMoneyEarned: {
        type: Number,
        ref: 'Ingredients'
    }
})

const Statistics = mongoose.model('Statistics', statisticsSchema)
module.exports = Statistics