const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const registerRouter = require('./routes/autRouter');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(bodyParser.json())

const corsOptions = {
  origin: process.env.ORIGIN,
};

app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(registerRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
