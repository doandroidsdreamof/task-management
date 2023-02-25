const express = require('express');
const router = express.Router();

const {createBoard} = require('../controllers/board')
const {authMachine } = require('../middleware/authControl')


router.post('/v1/kanban/users/board',authMachine, createBoard);


module.exports = router;
