import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();


// Your URI
const URI = process.env.MONGODB_URI;

export async function connectDB() {
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