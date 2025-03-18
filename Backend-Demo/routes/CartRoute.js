const express = require('express')
const cart = require('../models/cart')

const router = express.Router()

router.get('/', async (req, res)=>{
    const data = await cart.find()
    res.send(data)
})

router.get('/:id', async (req, res)=>{
    const data = await cart.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req, res)=>{
    const data = await cart.create(req.body)
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await cart.findByIdAndDelete(req.params.id)
    res.send(data)
})

router.patch('/:id', async (req, res)=>{
    const data = await cart.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

module.exports = router