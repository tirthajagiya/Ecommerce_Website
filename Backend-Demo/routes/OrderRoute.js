const express = require('express')
const order = require('../models/order')

const router = express.Router()

router.get('/', async (req, res)=>{
    const data = await order.find()
    res.send(data)
})

router.get('/:id', async (req, res)=>{
    const data = await order.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req, res)=>{
    const data = await order.create(req.body)
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await order.findByIdAndDelete(req.params.id)
    res.send(data)
})

router.patch('/:id', async (req, res)=>{
    const data = await order.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

module.exports = router