const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema =  mongoose.Schema;

// user model
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// creating static function using monggose model.. we could write the same code in controller function but just want to demonstrate that other than having the inbuilt functions find() create() we can create a custom function for our model as well.

// static function for signing up users
 userSchema.statics.signup = async function(email,password){
    if(! (email && password )){
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Not a valid email address")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password must contain atleast one uppercase letter, one lowercase letter, one number, one special character with minimum length of 8 characters")
    }

    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email already in use.")
    }

    const random = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,random);

    const user = await this.create({email,password:hash});

    return user
 }

module.exports = mongoose.model('User', userSchema);