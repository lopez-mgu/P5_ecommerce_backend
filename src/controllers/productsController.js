const productModel = require('../models/productModel')

const getProducts = async () => {
    return productModel.find({});
}

const getSingleProduct = async (_id) => {
    return productModel.findOne({_id});
}

const createProduct = async (body) =>{
    const newProduct = new productModel(body)
    newProduct.save()
    return newProduct
}

const updateProduct = async (_id, updateObject) =>{
    return productModel.findOneAndUpdate({_id}, updateObject, {
        upsert: false,
        new: true
    }) 
}

const deleteProduct = async (_id) =>{
    return productModel.findOneAndDelete({_id})
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct
}