const asyncHandler = require('express-async-handler');
const User = require('../models/newUser');
const bcrypt = require('bcryptjs');

const createUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  const userExist = await User.findOne({ userName: userName });
  const emailExist = await User.findOne({ email: email });
  const salt = 20;

  if (userExist) {
    return res.status(400).json({ message: 'User already exists' });
  }
  else if (emailExist) {
    return res.status(400).json({ message: 'Email address already exists' });
  }
  else if (!userName || !email || !password) {
    return res.status(400).json({ msg: 'Information is missing' });
  }
  else {
    res.status(200).json({ msg: 'Register is successful' });
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
  }
});

module.exports = {
  createUser,
};
