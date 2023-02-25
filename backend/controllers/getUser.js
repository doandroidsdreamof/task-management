const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const mongoose = require('mongoose');


const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({user: req.user});
});

module.exports = {
  getUser,
};
