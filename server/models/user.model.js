const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(  {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },


  //FIXME: 
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;