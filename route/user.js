const express = require('express');
const app = express();

const UserController = require('../controller/UserController');
const dailymotion = require('../config/dailymotion');
const passport = require('passport');
var DailymotionStrategy = require('passport-dailymotion').Strategy;

app.use(passport.initialize());
app.use(passport.session());
passport.use(new DailymotionStrategy({
    clientID: dailymotion.clientID,
    clientSecret: dailymotion.clientSecret,
    callbackURL: "http://127.0.0.1:3000/auth/dailymotion/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser(function (profile, cb) {
    cb(null, profile);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

app.get('/', UserController.register);
app.get('/home', UserController.home);
app.get('/auth/dailymotion',
    passport.authenticate('dailymotion', { scope: ['manage_videos', 'read', 'write', 'delete', 'userinfo',] }));

app.get('/auth/dailymotion/callback',
    passport.authenticate('dailymotion', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/home');
    });
app.get('/login', (req, res) => {
    res.end('failed');
});


module.exports = app;
