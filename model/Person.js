const mongoose = require('mongoose');
mongoose.connect('mongodb://Edgar778:lenta123456789@ds121299.mlab.com:21299/lot2', { useNewUrlParser: true });

const personSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }]
  });
  
  const Person = mongoose.model('Person', personSchema);

module.exports =  mongoose.model('Story', storySchema);;
module.exports = Person;