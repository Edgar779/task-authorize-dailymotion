require('dotenv').config();

var express = require('express');
var app = express();
const mongoose = require('mongoose');
const hbs = require('hbs');
const User = require('./model/User');
var session = require("express-session"),
  bodyParser = require("body-parser");
const route = require('./route/user');
const cookieParser = require('cookie-parser');
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({ secret: "cats" }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(route);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(process.env['PORT'] || 3000, () => {
  console.log('norm');
});
