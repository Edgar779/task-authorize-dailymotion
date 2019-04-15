const mongoose = require('mongoose');
mongoose.connect('mongodb://Edgar778:lenta123456789@ds121299.mlab.com:21299/lot2', { useNewUrlParser: true });

var UserSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("User", UserSchema);
