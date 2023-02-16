const express = require('express');
const router = express.Router();

const  {createUser} = require('../controllers/register');

router.post('/v1/kanban/register', createUser);

module.exports = router;
