const express = require('express')
const router = express.Router()
const Product = require('../models/products')


router.get('/' , async (req, res) => {
    try {
        const allProducts = await Product.find({})
        res.json(allProducts)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post('/' , async (req, res) => {
    try {
        const newProduct = await Student.create(req.body)
        console.log(req.body)
        res.json(newProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get('/:id' , async (req, res) =>{
    try {
       const oneProduct = await Student.findById(req.params.id)
       res.json(oneProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const updatedProduct = await Student.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        console.log(req.params.id);
        const deletedProduct = await Student.findByIdAndDelete(req.params.id);
        res.json(deletedProduct)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})

module.exports = router;

