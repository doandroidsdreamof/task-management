const asyncHandler = require('express-async-handler');
const User = require('../models/newUser');
const bcrypt = require('bcryptjs');

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if(!email || password){
    res.sendStatus(401).json({success: false, error: "params missing"})
  }





});

module.exports = {
    loginUser,
};
