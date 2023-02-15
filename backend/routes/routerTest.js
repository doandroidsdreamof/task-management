const express = require('express');
const controllerTest = require('../controllers/test');

const router = express.Router();

router.get('/', controllerTest);

module.exports = router;
