const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

UserSchema.plugin(uniqueValidator, { message: 'Email already exist' });

UserSchema.pre('save', function(next){
    console.log('---before------')
    console.log(this.email, this.password)
    console.log('--------------')
    const hasdhedPassword = bcrypt.hashSync(this.password, 12)
    console.log('---after------')
    console.log(this.email, this.password)
    console.log('--------------')
    this.password = hasdhedPassword;
    next()

})

const userModel = model('users', UserSchema);

module.exports = userModel;