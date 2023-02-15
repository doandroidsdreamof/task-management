const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();


// Your URI
const URI = process.env.MONGODB_URI;
console.log("🚀 ~ file: db.js:8 ~ URI", URI)

 async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log('db connection ok');
  } catch (err) {
    console.log(
      '🚀 ~ file: db.js:12 ~ connectDB ~ err',
      err
    );
  }
}

module.exports = connectDB