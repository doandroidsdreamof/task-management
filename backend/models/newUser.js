const mongoose = require('mongoose')

const userModel = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
}, {collection: "users"});

module.exports = mongoose.model('User', userModel);
