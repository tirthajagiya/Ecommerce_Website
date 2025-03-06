const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoute = require('./routes/UserRoute')
const bodyParser = require('body-parser')

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected To DB");

    const app = express()

    // app.use(cors())

    app.use(bodyParser.json())

    app.use('/user',userRoute)

    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT)
    })
})