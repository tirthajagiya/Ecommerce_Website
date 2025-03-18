const express = require('express')
const shop = require('../models/shop')

const router = express.Router()

router.get('/', async (req, res)=>{
    const data = await shop.find()
    res.send(data)
})

router.get('/:id', async (req, res)=>{
    const data = await shop.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req, res)=>{
    const data = await shop.create(req.body)
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await shop.findByIdAndDelete(req.params.id)
    res.send(data)
})

router.patch('/:id', async (req, res)=>{
    const data = await shop.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

module.exports = router