const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

mongoose.connect(url, {}, () => {
    console.log('---------------------')
    console.log('DataBase Connected')
    console.log('---------------------')
})

module.exports = mongoose;