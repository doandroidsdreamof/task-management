const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT;

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email: email });
  if (!email || !password) {
    res.status(401).json({ success: false, msg: 'Params missing' });
  } else {
    if (!checkUser) {
      res.status(404).json({ success: false, msg: 'User is not exist' });
    } else {
      if (!bcrypt.compareSync(password, checkUser.password)) {
        res.status(401).json({ success: false, msg: 'Password is wrong' });
      } else {
        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, jwtSecret);
        res.status(200).json({ success: true, msg: 'Login is successful', token: token, userID: checkUser._id });
      }
    }
  }
});

module.exports = {
  loginUser,
};
