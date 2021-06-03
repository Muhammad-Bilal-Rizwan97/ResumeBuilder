const express = require('express')
const router = express.Router()

const {create,read,deleteR} = require('../controllers/resume') 


//routes
router.post('/create',create);



module.exports = router;