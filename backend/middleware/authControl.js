const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT;

const authMachine = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization) {
    token = authorization.split(' ')[1];
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    // Get user from the token
    req.user = await User.findById(decoded.id).select('-password');

    next();
  } else {
    return res.status(401).json({ success: false, msg: 'Unauthorized user' });
  }
});

module.exports = {
  authMachine,
};
