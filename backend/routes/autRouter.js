const express = require('express');
const router = express.Router();

const  {createUser} = require('../controllers/register');

router.post('/register', createUser);

module.exports = router;
