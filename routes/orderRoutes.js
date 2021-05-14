const express = require('express');
const mongoose = require('mongoose');
const Orders = require('../models/orders');
const Ingredients = require('../models/ingredients');
const router = new express.Router();


// Place an order
router.post('/order', async (req, res) => { 
    if (await Ingredients.findById(req.body.ingredient)) {
        const order = new Orders({ 
        ...req.body,
        ingredient: req.body.ingredient
        })
        await order.save()
        res.status(202).send(order)
    } else {
            res.status(500).send()
        }   
    // try {
    //     const order = new Orders({ 
    //         ...req.body,
    //         ingredient: req.body.ingredient
    //     })
    //     await order.save()
    //     res.status(202).send(order)
    // } catch (e) {
    //     res.status(500).send(e)
    // }  
 
})

// List all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Orders.find()
        res.send(orders)
    } catch (e) {
        res.status(500).send()
    }
})

// Checking unique orders by id
router.get('/orders/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const order = await Orders.findById(_id)
        res.send(order)
    } catch (e) {
        res.status(500).send()
    }
})

// Cancel order
router.delete('/cancel_order/:id', async (req, res) => {
    
    try {
        const deleteOrder = await Orders.findOneAndDelete({_id: req.params.id})
        res.send(deleteOrder)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router