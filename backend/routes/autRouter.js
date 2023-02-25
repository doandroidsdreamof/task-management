const express = require('express');
const router = express.Router();

const  {createUser} = require('../controllers/register');
const  {loginUser} = require('../controllers/login');
const  {getUser} = require('../controllers/getUser');
const  {authMachine} = require('../middleware/authControl');



router.post('/v1/kanban/users/register', createUser);
router.post('/v1/kanban/users/login', loginUser)
router.get('/v1/kanban/users/profiles', authMachine,getUser)

module.exports = router;
