const express = require('express')
const product = require('../models/product')

const router = express.Router()

router.get('/', async (req, res)=>{
    const data = await product.find()
    res.send(data)
})

router.get('/:id', async (req, res)=>{
    const data = await product.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req, res)=>{
    const data = await product.create(req.body)
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await product.findByIdAndDelete(req.params.id)
    res.send(data)
})

router.patch('/:id', async (req, res)=>{
    const data = await product.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

module.exports = router