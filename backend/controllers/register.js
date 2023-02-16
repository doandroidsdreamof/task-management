const User = require('../models/newUser');

const createUser = async (req, res) => {
  try {
    const userExist = await User.find({ userName: req.body.userName });
    if (userExist.length > 0) {
      return res.status(400).send({ message: 'User already exists' });
    } else {
      const user = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
    }
    res.status(200).json({ msg: 'Register is successful' });
  } catch (err) {
    console.log('🚀 ~ file: register.js:14 ~ createUser ~ err', err);
    res.status(400).send('Information is missing');
  }
};

module.exports = {
  createUser,
};
