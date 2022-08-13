const express = require('express');
const cors = require('cors');
const apiRouter = require('./apis');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', apiRouter)

app.use('/', (_,res) => {
    res.send({message: 'this is working'})
})

module.exports = app;