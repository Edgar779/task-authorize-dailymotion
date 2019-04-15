require('dotenv').config();

var express = require('express');
var app = express();
const mongoose = require('mongoose');
const hbs = require('hbs');
const User = require('./model/User');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://Edgar778:lenta123456789@ds121299.mlab.com:21299/lot2', { useNewUrlParser: true });

// var UserSchema = new mongoose.Schema({
//     type: mongoose.Schema.Types.ObjectId,
//     name: String,
//     post: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Post"
//     }
// });

// module.exports = mongoose.model("Us", UserSchema);
var session = require("express-session"),
  bodyParser = require("body-parser");
const route = require('./route/user');
const cookieParser = require('cookie-parser');
app.set('view engine', 'hbs');
// app.use(__dirname + "view");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static("public"));
app.use(session({ secret: "cats" }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// const passport = require('passport');
// var DailymotionStrategy = require('passport-dailymotion').Strategy;
// let Story = require('./model/Person');
// let Person = require('./model/Person').Person;




app.use(route);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new DailymotionStrategy({
//   clientID: '6108f94af4ebd6f22428',
//   clientSecret: '0d01ce956d963a1c3246ecb100383ef5b6b00747',
//   callbackURL: "http://127.0.0.1:3000/auth/dailymotion/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   console.log(profile.id + 'aaaaaaaaaaaaaaaaaaaaaaaaaa')
//  return done(null, profile); 
// }
// ));

// passport.serializeUser(function(profile, cb) {
//   cb(null, profile);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });
// app.post('/gettoken', (req,res)=>{

// });
// app.get('/',(req,res)=>{
// res.render('home');
// })
// app.get('/youtube', (req,res)=>{
// res.render('youtube', {user: req.user});
// });
// app.get('/auth/dailymotion',
//   passport.authenticate('dailymotion', { scope: ['manage_videos', 'read', 'write', 'delete', 'userinfo', ]}));

// app.get('/auth/dailymotion/callback',
//   passport.authenticate('dailymotion', { failureRedirect: '/login' }),
//   function(req, res) {
//   console.log(req.user);
//     // Successful authentication, redirect home.
//     res.redirect('/youtube');
//   });
//   app.get('/login', (req,res)=>{
//     res.end('fail');

//   });

app.listen(process.env['PORT'] || 3000, () => {
  console.log('norm');
});
