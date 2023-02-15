const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const testRouter = require('./routes/routerTest');
const helloWorld = require('./routes/router2')
const registerRouter = require('./routes/autRouter')

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(testRouter);
app.use(registerRouter);


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
  connectDB();
});

