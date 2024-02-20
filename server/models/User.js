const mongoose = require('mongoose');

const Post = require('./Post');

const userSchema =  new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String, 
    required: true,
    trim: true
  },
  posts: [Post.schema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;