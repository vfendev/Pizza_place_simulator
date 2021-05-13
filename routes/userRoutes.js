const express = require('express');
const multer = require('multer');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');

// Admin login system

// Admin register 
router.post('/register', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(401).send()
    }       
 })

//  Admin login
 router.post('/user/login', async (req, res) => {
     try {
         const user = await User.findByCredentials(req.body.email, req.body.password)
         const token = await user.generateAuthToken()
         res.status(200).send({ user, token })
     } catch (e) {
         res.status(400).send()
     }
 })

// Admin logout session
router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router