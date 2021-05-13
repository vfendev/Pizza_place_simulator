const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/order', async (req, res) => { 
    const task = new Tasks({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router