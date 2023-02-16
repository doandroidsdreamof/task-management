const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const registerRouter = require('./routes/autRouter');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const bcrypt = require('bcryptjs');
const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

connectDB();

const app = express();

var corsOptions = {
  origin: process.env.ORIGIN,
};

app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(registerRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
