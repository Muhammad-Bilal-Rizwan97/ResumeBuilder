const express = require('express')
const router = express.Router()

const {signup} = require('../controllers/auth') 

const {userSignupValidator} = require('../validator/index')
const {auth} = require('../middleware/Utility')

//routes
router.post('/signup',userSignupValidator,signup);


module.exports = router;