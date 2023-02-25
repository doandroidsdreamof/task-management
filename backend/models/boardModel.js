const mongoose = require('mongoose')



const boardSchema = new mongoose.Schema({
    boardName: {
        type: String,
        unique: true,
        required: true,
        timestamps: true
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
  },{collection: 'boards'})



  module.exports = mongoose.model('Board', boardSchema);
