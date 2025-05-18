const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create json web tokens
const createToken = (_id) => {
    // sign(payload, secret, options)
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:'1h'});
}

// Login 
const loginUser = (req,res) => {
   res.json({message:"Login user route"});
}

// Sign UP 
const signupUser = async (req,res) =>{
    const {email,password} = req.body;

    try{
        const user = await User.signup(email,password);

        const token = createToken(user._id);
        
        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}