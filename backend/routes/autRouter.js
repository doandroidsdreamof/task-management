const express = require('express');
const router = express.Router();

const  {createUser} = require('../controllers/register');
const  {loginUser} = require('../controllers/login');

router.post('/v1/kanban/user/register', createUser);
router.post('/v1/kanban/user/login', loginUser)


module.exports = router;
