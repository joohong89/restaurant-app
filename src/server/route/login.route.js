const express = require('express');
const app = express();
const route = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/server');
const authenticationService = require('../common/authentication');

let User = require('../model/user');

route.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username);
  console.log(password);

  User.getUserByUsername(username, (err, user) => {
    if(err){
      throw err;
    }

    if(!user){
      return res.json({success: false, msg: "Log In Fail."});
    }

    User.comparePassword(password, user.password, (err, result) => {
      if(err){
        throw err;
      }

      if(result){
        //expire in 1 week
        const token = jwt.sign(user.username, config.secret);

        res.json({
          success: true,
          token: token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }else{
        return res.json({success: false, msg: "Log In Fail."});
      }
    });

  });

});

module.exports = route;
