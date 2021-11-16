const Category = require('../models/categoryModel')
const slugify = require('slugify');



function createCategoryList(categories,parentId = null){
    const categoryList = []
    let category;
    

    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined);
    }else{
        category = categories.filter(cat => cat.parentId == parentId)
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name:cate.name,
            slug:cate.slug,
            children:createCategoryList(categories,cate._id)
        })
    }

    return categoryList

}



exports.createCategory = (req,res)=>{


   

    const categoryObject = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

     if(req.file){
        categoryObject.categoryImage = process.env.API + '/public/' + req.file.filename
        
    }

    if(req.body.parentId){
        categoryObject.parentId = req.body.parentId;0
    }

    const category = new Category(categoryObject);
    category.save((error,category) => {
        if(error) return res.status(400).json({error})
        if(category){
            return res.status(201).json({category})
        }
    })

}

exports.getCategories = (req,res) => {
    Category.find({}).exec((error,categories) => {
        if(error) return res.status(400).json({error});
        if(categories){

            const categoryList = createCategoryList(categories)

            res.status(200).json({categoryList});
        }
    })
}