const Product = require('../models/productModel')

const shortid = require('shortid')


exports.createProduct = (req,res)=>{
    
    res.status(200).json({message:'hello'})
}