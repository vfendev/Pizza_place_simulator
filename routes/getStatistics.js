const express = require('express');
const Statistics = require('../models/statistics');
const router = new express.Router();

// Statistics , total money earned and top five selling ingredients
router.get('/statistics', async (req, res) => {
    try {
        const statistics = await Statistics.find()
        res.send(statistics)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router