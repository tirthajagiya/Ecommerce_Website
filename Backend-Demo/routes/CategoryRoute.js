const express = require('express')
const category = require('../models/category')

const router = express.Router()

router.get('/', async (req, res)=>{
    const data = await category.find()
    res.send(data)
})

router.get('/:id', async (req, res)=>{
    const data = await category.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req, res)=>{
    const data = await category.create(req.body)
    res.send(data)
})

router.delete('/:id', async (req, res)=>{
    const data = await category.findByIdAndDelete(req.params.id)
    res.send(data)
})

router.patch('/:id', async (req, res)=>{
    const data = await category.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

module.exports = router