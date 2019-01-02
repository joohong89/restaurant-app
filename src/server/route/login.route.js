const express = require('express');
const app = express();
const route = express.Router();

let User = require('../model/user');

route.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

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
        const token = jwt.sign(user, config.secret, {expiresIn: 604800});

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
