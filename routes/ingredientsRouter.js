const express = require('express');
const Ingredients = require('../models/ingredients');
const router = new express.Router();

// List all ingredients
router.get('/ingredients', async (req, res) => {
    try {
        const ingredients = await Ingredients.find()
        res.send(ingredients)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router