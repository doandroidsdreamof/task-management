const express = require('express');
const sayHi = require('../controllers/sayHi');


const router = express.Router()

router.get('/test',sayHi)


module.exports = router