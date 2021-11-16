const Product = require('../models/productModel')

const shortid = require('shortid')
const slugify = require('slugify')


exports.createProduct = (req,res)=>{

    // res.status(200).json({file: req.files, body: req.body})

    const {
        name,price,quantity,description,category
    } = req.body;

    let productImage = []

    if(req.files.length > 0){
        productImage = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name : name,
        slug : slugify(name),
        price : price,
        quantity : quantity,
        description : description,
        productImage : productImage,
        category : category,
        createdBy : req.admin._id
       
    })

    product.save((error, product) => {
        if(error) return res.status(400).json({error})
        if(product){
            res.status(201).json({product})
        }
    })


}