const Product = require('../models/productModel')

const shortid = require('shortid')
const slugify = require('slugify')
const Category = require('../models/categoryModel')


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

exports.getProductsBySlug = (req, res) => {
    
    const { slug } = req.params;
    Category.findOne({ slug:slug })
    .select('_id')
    .exec((error, category) => {
        if(error){
            return res.status(400).json({error})
        }

        if(category){
            Product.find({ category: category._id })
            .exec((error,products)=>{{

                if(error){
                    return res.status(400).json({error})
                }

                if(products.length > 0){
                    res.status(200).json({
                        products,
                        productsByPrice: {
                            under1000: products.filter(product=>product.price<=1000),
                            under1500: products.filter(product=>product.price<=1500),
                        }
                    })
                }

                
            }})

        }
        
        
    })
   
}

exports.getAllProducts = (req, res) => {



    Product.find({}).exec((error,products) => {
        if(error){
            return res.status(400).json({error})
        }
        if(products){
            
            res.status(200).json({products})
        }else{
            res.status(400).json({message: "something went wrong"})
        }
    })
    
    
   
}

exports.getProduct = (req, res) => {
    
    Product.findOne({_id: req.params.id}).exec((error,product) => {
        if(error){
            return res.status(400).json({error})
        }
        if(product){
            res.status(200).json({product})
        }else{
            res.status(400).json({message: "something went wrong"})
        }
    })
}

exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.body._id}).exec((error)=>{
        if(error){
            res.status(400).json({error})
        }
        res.status(200).json({message:"success"})
    })
}