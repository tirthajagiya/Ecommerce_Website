const express = require('express')
const wishlist = require('../models/wishlist')

const router = express.Router()

router.get('/', async (req, res)=>{
    const data = await wishlist.find()
    res.send(data)
})

router.get('/:id', async (req, res)=>{
    const data = await wishlist.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req, res)=>{
    const data = await wishlist.create(req.body)
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await wishlist.findByIdAndDelete(req.params.id)
    res.send(data)
})

router.patch('/:id', async (req, res)=>{
    const data = await wishlist.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

module.exports = router