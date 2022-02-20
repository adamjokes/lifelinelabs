const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config');

//Middleware for body parsing
app.use(bodyParser.json());

//Import routes
const personRoute = require('./routes/PersonRoute');
const petRoute = require('./routes/PetRoute')

//Middleware usage for routes
app.use('/person', personRoute)
app.use('/pet', petRoute)

//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser:true},
()=>console.log('connected to db!'))

//Middleware to listen to port 3000
app.listen(3000, () => console.log('Server Started...'));

//SSVbwrTltZxXhFHi
