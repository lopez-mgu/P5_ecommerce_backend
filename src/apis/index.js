const express = require('express');
const router = express.Router();
const usersRouter = require('./user');
const authRouter = require('./auth');
const productsRouter = require('./products');

router.use('/products', productsRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;