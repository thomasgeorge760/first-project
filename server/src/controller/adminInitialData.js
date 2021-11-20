
const Category = require('../models/categoryModel')
const Product = require('../models/productModel')


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
            parentId:cate.parentId,
            children:createCategoryList(categories,cate._id)
        })
    }

    return categoryList

}


exports.initialData = async (req,res) => {
    const categories = await Category.find({}).exec();

    const products = await Product.find({})
        .select('_id name price quantity description productImage slug category')
        .populate({path: 'category', select: '_id name'})
        .exec();

    res.status(200).json({
        categories: createCategoryList(categories),
        products
    })
}