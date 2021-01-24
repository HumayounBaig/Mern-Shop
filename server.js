const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 
const app = express();

//Bodyparser Middleware

app.use(bodyParser.json());

//DB config

const db = require('./config/keys').mongoURI;

//db connection

mongoose.connect(db, {  useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
    console.log('mongo connection success..');
})
.catch(err => console.log(err));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));