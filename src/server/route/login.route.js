const express = require('express');
const app = express();
const route = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/server');
const authenticationService = require('../common/authentication');

let User = require('../model/user');
let Resource = require('../model/resource');
let Role = require('../model/role');



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
        const token = jwt.sign(user.username, config.secret);
        console.log("token :    "+ token);
        //find resources

        res.json({
          success: true,
          token: token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
          }
        });

      }else{
        return res.json({success: false, msg: "Log In Fail."});
      }
    });

  });

});


route.route('/getMenuItem').post(authenticationService.authenticate() ,(req, res, next) => {

  User.getUserByUsername(req.user, (err, user) => {


    if(err || !user){
      throw err;
    }


    Role.getRolesByIdArray(user.roles).then(roles => {
      return Resource.getMenuResourcesByRoles(roles);
    }).then(rsrc => {
      res.json({
        success: true,
        resource: rsrc

      });
    }).catch(err => {
      console.log("ERROR : " + err)
      return   res.stat(403).send("Error find resource.");
    });


  });

});



module.exports = route;
