const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT;

const createUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  const userExist = await User.findOne({ userName: userName });
  const emailExist = await User.findOne({ email: email });
  const salt = 10;

  if (userExist) {
    return res.status(401).json({ msg: 'User already exists' });
  } else if (emailExist) {
    return res.status(401).json({ msg: 'Email address already exists' });
  } else if (!userName || !email || !password) {
    return res.status(401).json({ msg: 'Information is missing' });
  } else {
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    if (user) {
      const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret);
      return res.status(200).json({ msg: 'Register is successful', token: token, userID: user._id });
    }
  }
});

module.exports = {
  createUser,
};
