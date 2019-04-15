// const ValidationError = require('../exception/ValidationError');
// const Unauthorized = require('../exception/Unauthorized');

exports.register = function (req, res) {
    res.render('register');
}
exports.home = function (req, res) {
    res.render('home', { user: req.user });
}