const express = require("express");
const ejs = require('express-ejs-layouts');
const mongoose = require('mongoose');

// init express
const app = express();

// inti mongodb
const db = 'mongodb://localhost:27017/shape';
mongoose.connect(db,({useNewUrlParser:true,useUnifiedTopology: true}))
.then(()=>console.log('db is connected'))
.catch(err => console.log(err));

// routes
const index = require('./routes/index')

// inti ejs
app.use(ejs);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/',index);


// port
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server running on http://localhost:${PORT}`));
