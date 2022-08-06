const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcryptjs');

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
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

UserSchema.pre('save', function(next){
    console.log('--------------')
    console.log(this.email, this.password)
    console.log('--------------')
    const hasdhedPassword = bcrypt.hashSync(this.password, 12)
    console.log('---despues------')
    console.log(this.email, this.password)
    console.log('--------------')
    this.password = hasdhedPassword;
    next()

})

const userModel = model('users', UserSchema);

module.exports = userModel;