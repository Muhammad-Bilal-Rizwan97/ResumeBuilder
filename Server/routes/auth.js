const express = require('express')
const router = express.Router()

const {register,login} = require('../controllers/auth') 

const {userRegisterValidator} = require('../validator/index')
const {auth} = require('../middleware/Utility')

//routes
router.post('/register',userRegisterValidator,register);
router.post('/login',login);


module.exports = router;