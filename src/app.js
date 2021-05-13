const express = require('express');
require('../db/database');
require('dotenv').config();
const userRouter = require('../routes/userRoutes')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(userRouter)
app.set('Content-Type', 'application/json')


app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})