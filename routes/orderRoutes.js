const express = require('express');
const Tasks = require('../models/task');
const router = new express.Router();

// Place an order
router.post('/order', async (req, res) => { 
    const order = new Tasks(req.body)
    try {
        await order.save()
        res.status(201).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

// List all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Tasks.find()
        res.send(orders)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router