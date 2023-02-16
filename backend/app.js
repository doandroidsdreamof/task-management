const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const registerRouter = require('./routes/autRouter');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;

connectDB();

const app = express();

//middleware

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(registerRouter);











app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});



