const express = require('express');
const Tasks = require('../models/task');
const router = new express.Router();

router.post('/order', async (req, res) => { 
    const task = new Tasks (req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router