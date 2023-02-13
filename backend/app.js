import express from 'express';
import * as dotenv from 'dotenv';
import { connectDB } from './config/db.js';


dotenv.config();
const server = express();
const port = process.env.PORT || 3000;

//middleware
server.use(express.json());


server.listen(port, () => {
  console.log(
    `server listen on http://localhost:9000/${port}`
  );
  connectDB();
});


server.get('/', (req,res) =>{
    res.status(200).json({test: "ok"})
})