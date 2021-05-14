const express = require('express');
const mongoose = require('mongoose');
const Orders = require('../models/orders');
const Ingredients = require('../models/ingredients');
const router = new express.Router();


// router.get statistics 
router.get('/statistics/ingredients', async (req, res) => {
    try {
        const ingredients = await Ingredients.find({},{
            name: 1 ,
            qty: 1
        }).sort({qty: -1}).limit(5)
        res.status(200).send(ingredients)
    } catch (e) {
        res.status(500).send()
    }
})

// router.get statistics 
router.get('/statistics/total', async (req, res) => {
    try {
        // ingredients.find sum function mongodb
        const orders = await Orders.find({},{
            name: 1 ,
            qty: 1
        }).sort({qty: -1}).limit(5)
        res.status(200).send(orders)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router