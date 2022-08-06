const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { productsController } = require('../controllers');

const { getProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = productsController;

router.get('/', async (_, res) =>{
    const products = await getProducts()
    res.send(products)
})

//GetSingleProduct by ID
router.get('/:id', async (_, res) =>{
    const { id } = req.params
    const product = await getSingleProduct(id)
    res.send(product)
})

router.post('/', async (req, res) =>{
    const body = req.body

    try{
        const newProduct = await createProduct(body)
        res.status(201)
        res.send(newProduct)
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            res.status(400)
            return res.send({
                message: 'Error de Validacion',
                error: error.message
            })
        }
        res.status(500)
        return res.send({
            error: error.message
        })
    }
})

router.purge('/:id', async (req,res) =>{
    const { id } = req.params
    const body = req.body
    const book = await updateProduct(id, body)

    if(!book){
        res.status(404)
        return res.send({
            message: `El libro con id: ${id}, no existe`
        })
    }
    res.send(book)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const result = await deleteProduct(id);
    res.send(result);
})

module.exports = router;