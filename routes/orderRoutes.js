const express = require('express');
const mongoose = require('mongoose');
const Orders = require('../models/orders');
const Ingredients = require('../models/ingredients');
const auth = require('../middleware/auth');
const router = new express.Router();

// Place an order
router.post('/order', async (req, res) => { 
    const ingredientsList = await Ingredients.find();
    var ingredientsMap = ingredientsList.reduce(function(acc, cur) {
        acc[cur.name] = cur;
        return acc;
      }, {});
  
    const existingOrderNumber = await Orders.countDocuments({status: 'In_progres'})
    try {
        if (existingOrderNumber < 15) {
                 let time = req.body.size * 1000
                 let price = req.body.size * 200
                 req.body.ingredients.forEach(ingredient => {
                    time += ingredientsMap[ingredient].time
                    price += ingredientsMap[ingredient].price  
                 })
                 const order =  new Orders({ 
                    ...req.body,
                    price,
                    time
                    })
                 const savedOrder = await order.save()
                 const p = await Ingredients.updateMany(
                    // find record with name 
                    { name: {$in: req.body.ingredients }},
                    // increment it's property called "qty" by 1
                    {  $inc: {qty: 1} }
                );
                 res.status(202).send({
                    time,
                    price,
                    id: savedOrder.id,
                    orderNumber: existingOrderNumber + 1
                })
        } else {
            res.status(500).send('Queue is full, order later!')
        }
    } catch (e) {
        res.status(500).send(e)
        console.log(e)
    }          
   
})

// List of all orders  
router.get('/orders', auth, async (req, res) => {
    try {
        const orders = await Orders.find()
        res.status(200).send(orders)
    } catch (e) {
        res.status(500).send()
    }
})

// Recent orders
router.get('/recent_orders', async (req, res) => {
    try {
        const orders = await Orders.find({},{
            ingredients: 1 ,
            size: 1
        }).sort({_id: -1}).limit(5)
        res.status(200).send(orders)
    } catch (e) {
        res.status(500).send()
    }
})

// Checking unique orders by id
router.get('/orders/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const order = await Orders.findById({_id},{
            status: 1
        })
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

router.post('/finished_order/:id', async (req, res) => {
    try {
        const finishOrder = await Orders.updateOne({_id: req.params.id}, {status: 'Finished'})
        res.send('OK')
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router