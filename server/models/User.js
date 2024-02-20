const mongoose = require('mongoose');

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
});

const User = mongoose.model('User', userSchema);

module.exports = User;