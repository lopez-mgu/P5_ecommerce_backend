const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    img_url: String,
    img_cart: String,
    price: Number,
    description: String
},{
    versionKey: false,
    timestamps:true
})

const productModel = model('products', productSchema);

module.exports = productModel;
