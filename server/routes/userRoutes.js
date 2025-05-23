const express = require("express");
const {loginUser, signupUser} = require('../controllers/userController');

const router = express.Router();

// login route
router.post('/login',loginUser);

// sign up route
router.post('/signUp',signupUser);

module.exports = router