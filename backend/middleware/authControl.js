const asyncHandler = require('express-async-handler');
const user = require('../models/userModel');
const jwt = require('jsonwebtoken');

const authMachine = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  debugger;
  if (authorization) {
    next();
  } else {
    return res.status(401).json({ success: false, msg: 'Unauthorized user' });
  }
});

module.exports = {
  authMachine,
};
