const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const Role = require('./role');

let UserSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    roles: [],
  },{collection: 'User'}
);

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function (user, callback) {
  const query = {username: user};

  User.findOne(query, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, result) => {
    if(err){
      throw err;
    }
    callback(null, result)
  })
};
