const UserModel = require('../models/newUser');

const createUser = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ error: 'email already exist' });
      } else {
        const model = UserModel.create(req.body);
        return res.send('register is successful').json(model);
      }
    })
    .catch((err) => console.log(err));
};

module.exports = createUser;
